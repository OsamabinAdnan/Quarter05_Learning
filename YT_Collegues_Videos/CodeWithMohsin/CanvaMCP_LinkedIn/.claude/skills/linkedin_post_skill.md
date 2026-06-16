# Purpose

Create high-engagement, professional LinkedIn posts that drive meaningful interaction, build credibility, and position the author as a thought leader in their field.

---

# Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `topic` | string | Yes | The main subject or theme of the post |
| `target_audience` | string | No | Specific professional audience segment (default: "general professionals") |
| `post_format` | enum | No | One of: `short`, `medium`, `long_form`, `thought_leadership`, `educational` (default: `medium`) |
| `tone` | enum | No | One of: `authoritative`, `conversational`, `inspirational`, `analytical`, `provocative` (default: `conversational`) |
| `key_insight` | string | No | A specific data point, experience, or perspective to anchor the post |
| `personal_story` | string | No | A real experience or anecdote to weave into the post |
| `cta_goal` | enum | No | One of: `engagement`, `followers`, `website_traffic`, `lead_generation`, `brand_awareness` (default: `engagement`) |

---

# Instructions

## 1. Audience Analysis

Before writing, define the reader:

- Identify their role, pain points, and aspirations
- Determine what they scroll past vs. stop for
- Match language complexity to audience sophistication
- Consider what they already know vs. what will surprise them

## 2. Hook Generation

Select from these proven hook frameworks:

### Contrarian Hook
Open with a statement that challenges conventional wisdom.

**Template:** `"Everyone says [common belief]. Here's why they're wrong."`

### Story Hook
Open mid-action to create immediate curiosity.

**Template:** `"[Specific moment in time]. That's when everything changed."`

### Statistic Hook
Lead with a surprising, credible number.

**Template:** `"[Shocking stat]. Let that sink in."`

### Question Hook
Pose a question the reader can't help but answer mentally.

**Template:** `"What if [provocative scenario relevant to audience]?"`

### List Hook
Promise a specific, numbered set of insights.

**Template:** `"[Number] things I wish I knew before [relevant experience]."

### Vulnerability Hook
Share a personal failure or lesson learned.

**Template:** `"I failed at [specific thing]. Here's what it taught me."`

**Selection Rule:** Match hook to `tone` input. Contrarian and Provocative tones pair well with Contrarian hooks. Inspirational tones pair with Story and Vulnerability hooks. Analytical tones pair with Statistic and List hooks.

## 3. Storytelling Structure

Apply one of these frameworks based on post format:

### PAS Framework (Problem → Agitate → Solution)
Best for: `short`, `medium` posts

1. **Problem:** State a clear, relatable challenge
2. **Agitate:** Amplify the pain or consequence
3. **Solution:** Present your insight as the resolution

### STAR Framework (Situation → Task → Action → Result)
Best for: `long_form`, `thought_leadership` posts

1. **Situation:** Set the scene with context
2. **Task:** Define the challenge or goal
3. **Action:** Describe what was done
4. **Result:** Share the outcome with specifics

### AIDA Framework (Attention → Interest → Desire → Action)
Best for: `educational`, `medium` posts

1. **Attention:** Hook the reader immediately
2. **Interest:** Build curiosity with details
3. **Desire:** Show why this matters to them
4. **Action:** Tell them exactly what to do next

### Hero's Journey (Condensed)
Best for: `thought_leadership`, `long_form` posts

1. **Status Quo:** Where things were
2. **Inciting Incident:** What disrupted the norm
3. **Struggle:** The challenge faced
4. **Transformation:** What changed
5. **Lesson:** The universal takeaway

## 4. Body Content Development

- Write in short paragraphs (1–3 sentences max)
- Use line breaks between every idea for mobile readability
- Include specific examples, not abstract advice
- Replace generic statements with concrete details
- Add white space liberally — walls of text kill engagement
- Use bullet points or numbered lists for scannable insights
- Include 1–2 relevant personal details to build authenticity

## 5. Credibility Building

Weave in credibility signals naturally:

- Specific results with numbers ("grew from 0 to 50K users in 8 months")
- Named tools, frameworks, or methodologies
- Lessons from recognizable experiences
- Quotes from respected sources (sparingly)
- Time-based authority ("After 12 years in...")

## 6. CTA Generation

Select from these CTA frameworks:

### Engagement CTA
`"What's your experience with [topic]? Drop your thoughts below."`

### Reflection CTA
`"If you've faced this, what would you do differently?"`

### Connection CTA
`"Follow me for more insights on [topic area]."`

### Action CTA
`"Try this today: [specific actionable step]. Then tell me how it went."`

### Conversation CTA
`"Agree or disagree? I'd love to hear your perspective."`

**Selection Rule:** Match CTA to `cta_goal` input. Use Engagement CTA for `engagement`, Connection CTA for `followers`, Action CTA for `website_traffic` or `lead_generation`.

## 7. Hashtag Strategy

### Selection Methodology

1. Include 3–5 hashtags (LinkedIn's optimal range)
2. Mix broad and niche tags:
   - 1–2 broad hashtags (500K+ followers): #Leadership, #Innovation
   - 1–2 mid-range hashtags (50K–500K followers): #AIinBusiness, #ProductStrategy
   - 1 niche hashtag (under 50K): #AgentArchitecture
3. Place hashtags at the end of the post, not inline
4. Research current trending hashtags in the topic area
5. Avoid overused or spam-associated hashtags (#MondayMotivation, #Success)

## 8. Post Formatting Guidelines

- Maximum line length: 60 characters for mobile
- Use line breaks after every 1–2 sentences
- Use ALL CAPS sparingly for emphasis (1–2 words max)
- Use Unicode characters for visual breaks: →, •, —, ✓
- Start new paragraphs with strong opening words
- Keep the first 3 lines visible before "See more" — make them count
- Avoid excessive emojis (max 2–3, used purposefully)

## 9. Readability Optimization

- Target Flesch Reading Ease: 60–70 (conversational professional)
- Avoid jargon unless audience expects it
- Use active voice over passive voice
- Keep sentences under 20 words where possible
- Read the post aloud — if it sounds like a robot wrote it, rewrite it
- Replace "utilize" with "use", "leverage" with "apply" (unless audience expects business jargon)

---

# Outputs

| Output | Format | Description |
|--------|--------|-------------|
| `linkedin_post` | string | The complete, ready-to-publish LinkedIn post |
| `hook_type_used` | string | The hook framework applied |
| `storytelling_framework` | string | The narrative structure used |
| `hashtags` | array | List of 3–5 recommended hashtags |
| `posting_tips` | array | 2–3 contextual tips for maximizing this post's reach |
| `follow_up_ideas` | array | 2–3 related post ideas to build a content series |

---

# Examples

## Example 1: Short Post (Contrarian Hook)

**Inputs:**
- topic: "Remote work productivity"
- post_format: short
- tone: provocative

**Output:**

```
Remote work doesn't kill productivity.

Bad management does.

I've led remote teams for 6 years.
Here's what I've learned:

→ The best remote managers over-communicate
→ They trust output, not hours logged
→ They create async-first cultures

The teams that struggle remotely?
They were already broken in the office.

Remote work just exposed the cracks faster.

What's been your experience leading or working in remote teams?

#RemoteWork #Leadership #FutureOfWork
```

## Example 2: Long-Form Post (Story Hook)

**Inputs:**
- topic: "Learning from failure"
- post_format: long_form
- tone: inspirational
- personal_story: "Launched a product that failed after 2 years"

**Output:**

```
Two years. $340K. One failed product launch.

That was my tuition in entrepreneurship.

In 2021, I quit my job to build what I thought was the next big thing in professional development.

I had:
• A 47-page business plan
• A team of 5 talented engineers
• Confidence that bordered on arrogance

What I didn't have:
• Real customer interviews
• A validated pricing model
• A distribution strategy beyond "build it and they will come"

18 months in, our MRR was $2,400.
Our burn rate was $45,000/month.

The math didn't lie.

Here's what that failure taught me:

1. Talk to customers before writing code
   I built features nobody asked for.

2. Distribution beats product every time
   The best product doesn't win. The best-distributed product does.

3. Confidence without validation is expensive
   I mistook my conviction for market signal.

4. Small bets beat big gambles
   I should have tested with a landing page and $500 in ads before hiring anyone.

Today, I run a profitable business.
Not because I'm smarter.
Because I failed expensively enough to learn.

If you're building something right now:
Talk to 10 customers this week.
Before you write another line of code.

What's the most valuable lesson a failure has taught you?

#Entrepreneurship #StartupLessons #FounderJourney #BuildInPublic
```

## Example 3: Educational Post

**Inputs:**
- topic: "Email open rates"
- post_format: educational
- tone: analytical

**Output:**

```
Most people think email open rates depend on subject lines.

They're only 30% right.

After analyzing 2.4M emails across 180 campaigns, here's what actually drives opens:

→ List quality (40% impact)
   Your list is your #1 lever. A warm list of 500 beats a cold list of 50,000.

→ Send time consistency (25% impact)
   Train your audience when to expect you. Tuesday 9am every week builds habit.

→ Subject line relevance (20% impact)
   Not cleverness. Relevance. "Your Q3 report is ready" beats "You won't believe this."

→ Sender reputation (15% impact)
   Emails from "Sarah at Acme" outperform "noreply@acme.com" by 23%.

The takeaway:

Stop obsessing over subject line hacks.
Start investing in list quality and consistency.

Save this for your next campaign planning session. ✓

#EmailMarketing #MarketingStrategy #GrowthMarketing
```

---

# Constraints

- Do not fabricate statistics or data points. Use placeholder format `[INSERT STAT: description]` if a stat is needed but not provided.
- Do not include personal information not provided in inputs.
- Keep posts within LinkedIn's character limit (3,000 characters for standard posts).
- Avoid clickbait language that overpromises and underdelivers.
- Do not use AI-cliché phrases: "In today's fast-paced world", "Let's dive in", "Game-changer", "Unlock the power of".
- Do not use more than 3 emojis per post.
- Do not tag or mention real people unless explicitly provided in inputs.
- Maintain professional tone even when conversational — this is LinkedIn, not Twitter.
- Ensure all claims are supportable or clearly framed as opinion/experience.
- Hashtags must be real, active LinkedIn hashtags — do not invent new ones.
