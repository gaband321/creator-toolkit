import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { generateDemo } from "@/lib/demo-templates";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { topic, niche, platform } = body as { topic: string; niche: string; platform: string };

    if (!topic || !niche || !platform) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    // Demo mode: no API key configured
    if (!apiKey || apiKey === "your_api_key_here") {
      const result = generateDemo(topic, platform);
      return NextResponse.json({ ...result, demo: true });
    }

    // AI mode: real generation via Claude
    const client = new Anthropic({ apiKey });

    const platformContextMap: Record<string, string> = {
      YouTube: "YouTube long-form (8-20 min). Hook must establish credibility and promise value in the first sentence.",
      TikTok: "TikTok (15-60 sec). Extremely competitive — first 2 seconds are everything. Hook must be immediate and visceral.",
      Shorts: "YouTube Shorts (under 60 sec). Hook + payoff in one tight package. Direct and punchy.",
    };
    const platformContext = platformContextMap[platform] || platform;

    const prompt = `You are a viral content strategist specializing in ${niche} content for ${platform}.

Generate exactly 20 viral hooks, 20 video titles, and 20 thumbnail text ideas for:
- Topic: ${topic}
- Niche: ${niche}
- Platform: ${platformContext}

Hook guidelines (first line spoken/shown — must stop the scroll in 2 seconds):
- Personal failure or discovery story
- Counterintuitive or surprising claim
- Specific number + concrete promise
- Question that creates a curiosity gap
- Statement that challenges a common belief
- Story that starts mid-action

Title guidelines: Click-worthy, specific, delivers on the promise. Use numbers, strong adjectives, clear benefit.

Thumbnail text guidelines: 2-5 words max. Emotionally charged. Would YOU stop scrolling?

Return ONLY valid JSON, no markdown:
{
  "hooks": ["hook 1", "hook 2", ...20 total],
  "titles": ["title 1", ...20 total],
  "thumbnailTexts": ["text 1", ...20 total]
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
      else throw new Error("Invalid JSON response from AI");
    }

    if (!result.hooks || !result.titles || !result.thumbnailTexts) {
      throw new Error("Incomplete AI response");
    }

    return NextResponse.json({ ...result, demo: false });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Generation failed. Please try again." }, { status: 500 });
  }
}
