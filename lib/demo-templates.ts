// Template-based generation used when no API key is configured.
// Produces realistic hook/title/thumbnail ideas from proven content formulas.

function simpleHash(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) ^ str.charCodeAt(i);
  }
  return Math.abs(h);
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function fill(template: string, topic: string): string {
  const t = topic.trim();
  const lower = t.charAt(0).toLowerCase() + t.slice(1);
  return template.replace(/\{TOPIC\}/g, t).replace(/\{topic\}/g, lower);
}

const HOOK_TEMPLATES = [
  'I spent 100 hours on {topic} and here\'s what I actually learned',
  'Nobody is talking about this {topic} strategy — and it\'s completely broken',
  'I went from a total beginner to crushing {topic} in 30 days. Here\'s how.',
  'Stop doing {topic} like this. Seriously.',
  'The {topic} mistake I see every new player make (and how to fix it)',
  'I tested every {topic} method so you don\'t have to — here\'s the winner',
  'This one {topic} change made everything click for me',
  'I\'ve been doing {topic} wrong for years. I just found out.',
  'Here\'s the honest truth about {topic} that most creators won\'t say',
  'I ranked every {topic} approach from worst to best. The results shocked me.',
  'Why {topic} is actually way harder than everyone makes it look',
  '{topic} just completely changed — and most people haven\'t noticed yet',
  'I copied exactly how pros do {topic}. Here\'s what happened.',
  'The real reason most people fail at {topic} (it\'s not what you think)',
  'I asked 10 top creators about {topic}. Every single one said the same thing.',
  'Before you try {topic}, watch this. I wish someone told me this first.',
  'This is what {topic} actually looks like after 6 months of practice',
  'I spent a week testing the worst {topic} advice on YouTube. Here\'s the results.',
  'The {topic} guide that nobody else is making right now',
  'My {topic} experiment completely failed — and that\'s why you need to watch this',
  'Here\'s why {topic} feels impossible when you first start',
  'I tried {topic} with zero prior experience. Here\'s my honest review.',
  'The {topic} tier list you actually need (no paid sponsorships, just the truth)',
  'This {topic} is a scam. Here\'s what works instead.',
  'Day 1 vs. Day 100 of {topic} — the difference is insane',
  'I broke down {topic} frame by frame. This is what the pros actually do.',
  'Nobody told me about this {topic} shortcut. I found it by accident.',
  'The {topic} meta just shifted completely and most people missed it',
];

const TITLE_TEMPLATES = [
  '{TOPIC}: The Honest Guide Nobody Else Is Making',
  'I Tried {TOPIC} For 30 Days — Here\'s What Actually Happened',
  'Why {TOPIC} Is Harder Than Everyone Says (And How To Fix It)',
  '{TOPIC} — What Beginners Are Getting Wrong',
  'The {TOPIC} Mistake That Cost Me Weeks Of Progress',
  'I Tested Every {TOPIC} Strategy — Here\'s The Only One That Works',
  'Ranking Every {TOPIC} Method From Worst To Best',
  '{TOPIC} Tier List — Brutally Honest Edition [2026]',
  'How I Finally Figured Out {TOPIC} (Step-By-Step)',
  '{TOPIC} Is Broken Right Now — Here\'s Why',
  'Pros vs. Beginners: {TOPIC} Edition',
  'The {TOPIC} Guide I Wish Existed When I Started',
  'I Spent 100 Hours On {TOPIC} So You Don\'t Have To',
  '{TOPIC}: Everything You Think You Know Is Wrong',
  'The Truth About {TOPIC} (No Sponsorships, No BS)',
  'I Copied How The Best Creators Do {TOPIC} — Big Mistake',
  'Stop Doing {TOPIC} Like This. Do This Instead.',
  '{TOPIC} — Is It Worth It In 2026?',
  'The {TOPIC} Meta Changed And Nobody Is Talking About It',
  'From Zero To Confident: My {TOPIC} Journey',
  'I Wasted 3 Months On {TOPIC} Before Learning This',
  '{TOPIC} Guide For Beginners That Actually Works',
  'Every {TOPIC} Tip I Know (After Years Of Experience)',
  'Why I Almost Quit {TOPIC} (And What Changed)',
  'The {TOPIC} Secret The Algorithm Doesn\'t Want You To Know',
  '{TOPIC} In 2026: What\'s Changed, What Hasn\'t',
  'Deconstructing {TOPIC}: What The Pros Don\'t Show You',
  'I Tested The Most Common {TOPIC} Advice. Most Of It Is Wrong.',
];

const THUMBNAIL_TEMPLATES = [
  'FINALLY WORKS',
  'THEY LIED',
  'GAME CHANGER',
  'IT\'S BROKEN',
  'THE TRUTH',
  'STOP THIS NOW',
  'I WAS WRONG',
  'NEW META',
  'ACTUALLY WORKS',
  'WILD RESULTS',
  'SECRET TRICK',
  'MUST WATCH',
  'NO ONE KNEW',
  'EASY WIN',
  'HUGE MISTAKE',
  'COMPLETELY BROKEN',
  'REAL ANSWER',
  '100% WORKS',
  'INSTANT FIX',
  'WATCH THIS FIRST',
  'CHANGED EVERYTHING',
  'BANNED STRAT',
  'FREE WINS',
  'INSANE RESULTS',
  'ONLY METHOD',
  'DONT DO THIS',
  'IT CLICKED',
  'NIGHT AND DAY',
];

export function generateDemo(topic: string, platform: string): {
  hooks: string[];
  titles: string[];
  thumbnailTexts: string[];
} {
  const seed = simpleHash(`${topic}${platform}`);

  const hooks = seededShuffle(HOOK_TEMPLATES, seed)
    .slice(0, 20)
    .map((t) => fill(t, topic));

  const titles = seededShuffle(TITLE_TEMPLATES, seed + 1)
    .slice(0, 20)
    .map((t) => fill(t, topic));

  const thumbnailTexts = seededShuffle(THUMBNAIL_TEMPLATES, seed + 2).slice(0, 20);

  return { hooks, titles, thumbnailTexts };
}
