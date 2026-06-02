import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { topic, niche, platform } = body as { topic: string; niche: string; platform: string };

    if (!topic || !niche || !platform) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const platformContextMap: Record<string, string> = {
      YouTube: "YouTube (long-form videos, 8-20 minutes). Viewers are in discovery mode, searching or browsing. Hooks need to establish credibility and promise value quickly.",
      TikTok: "TikTok (15-60 second videos). Extremely competitive, users scroll fast. First 2 seconds are critical. Hooks must be shocking, relatable, or emotionally charged.",
      Shorts: "YouTube Shorts (under 60 seconds). Similar to TikTok but slightly more educational. Hook + quick payoff works best.",
    };
    const platformContext = platformContextMap[platform] || platform;

    const prompt = `You are an expert viral content strategist who has studied millions of viral videos on ${platform}.

Generate exactly 20 viral hooks, 20 video titles, and 20 thumbnail text ideas for:
- Topic: ${topic}
- Niche: ${niche}
- Platform: ${platformContext}

Hook guidelines: Hooks are the FIRST LINE spoken or shown in a video. They must stop the scroll in 2-3 seconds. Use these proven formulas:
- Shocking stat or fact
- Counterintuitive statement
- Personal failure or mistake story
- Bold controversial claim
- "I wish someone told me..."
- Specific number + promise
- Story that starts mid-action
- Question that creates curiosity gap

Title guidelines: Click-worthy but not clickbait. Must deliver on the promise. Use power words, numbers, urgency.

Thumbnail text guidelines: Max 3-6 words. Big, bold, emotional. What would stop YOU from scrolling?

Return ONLY valid JSON, no markdown, no explanation:
{
  "hooks": [
    "hook 1",
    "hook 2",
    ...20 total
  ],
  "titles": [
    "title 1",
    ...20 total
  ],
  "thumbnailTexts": [
    "text 1",
    ...20 total
  ]
}`;

    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.content[0].type === "text" ? response.content[0].text.trim() : "";

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      const match = text.match(/\{[\s\S]*\}/);
      if (match) result = JSON.parse(match[0]);
      else throw new Error("Invalid JSON response");
    }

    if (!result.hooks || !result.titles || !result.thumbnailTexts) {
      throw new Error("Incomplete response structure");
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Generation failed. Please try again." }, { status: 500 });
  }
}
