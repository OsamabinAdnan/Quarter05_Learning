# Purpose

Orchestrate the complete content creation and design optimization workflow — combining LinkedIn post generation with visual design recommendations — to produce a complete, publish-ready content package from a single topic input.

---

# Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `topic` | string | Yes | The main subject or theme to create content around |
| `target_audience` | string | No | Specific professional audience segment (default: "general professionals") |
| `post_format` | enum | No | One of: `short`, `medium`, `long_form`, `thought_leadership`, `educational` (default: `medium`) |
| `tone` | enum | No | One of: `authoritative`, `conversational`, `inspirational`, `analytical`, `provocative` (default: `conversational`) |
| `brand_guidelines` | object | No | Brand colors (hex codes), fonts, logo usage rules, tone |
| `design_type` | enum | No | One of: `social_media_graphic`, `linkedin_carousel`, `presentation_slide`, `infographic` (default: `social_media_graphic`) |
| `personal_story` | string | No | A real experience or anecdote to weave into the content |
| `key_insight` | string | No | A specific data point, experience, or perspective to anchor the content |
| `cta_goal` | enum | No | One of: `engagement`, `followers`, `website_traffic`, `lead_generation`, `brand_awareness` (default: `engagement`) |
| `canva_usage` | boolean | No | Whether designs will be created in Canva (default: true) |

---

# Instructions

## Workflow Sequence

This master skill orchestrates two sub-skills in a defined sequence with validation gates between each phase.

### Phase 1: Content Generation

**Invoke: `linkedin_post_skill.md`**

Pass the following inputs to the LinkedIn Post skill:
- `topic` → from master input
- `target_audience` → from master input
- `post_format` → from master input
- `tone` → from master input
- `personal_story` → from master input
- `key_insight` → from master input
- `cta_goal` → from master input

Collect outputs:
- `linkedin_post`
- `hashtags`
- `hook_type_used`
- `storytelling_framework`

**Validation Gate 1:**
Before proceeding, verify:
- [ ] Post is under 3,000 characters
- [ ] Post contains a clear hook in the first 3 lines
- [ ] Post contains a CTA
- [ ] Post includes 3–5 hashtags
- [ ] Post avoids AI-cliché phrases
- [ ] Post uses proper line breaks for readability
- [ ] Tone matches input specification

If any check fails → regenerate post with specific correction instructions before proceeding.

### Phase 2: Visual Concept Development

Using the generated LinkedIn post as context, develop a visual concept:

1. **Extract Visual Themes:** Identify 2–3 visual metaphors or concepts from the post content
2. **Determine Design Format:** Select optimal format based on `design_type` input and post content:
   - Single graphic: Best for short/medium posts with one key message
   - Carousel: Best for educational/long-form posts with multiple points
   - Infographic: Best for data-heavy or process-oriented content
3. **Define Visual Narrative:** Map how the visual complements (not duplicates) the text

### Phase 3: Design Optimization

**Invoke: `design_optimization_skill.md`**

Pass the following inputs to the Design Optimization skill:
- `design_type` → from master input or Phase 2 determination
- `brand_guidelines` → from master input
- `content_theme` → derived from `topic` + generated post themes
- `target_platform` → `linkedin` (default)
- `audience` → from `target_audience` input
- `canva_usage` → from master input

Collect outputs:
- `design_recommendations`
- `improvement_checklist`
- `canva_guidance`
- `color_palette`
- `typography_spec`
- `design_score`

**Validation Gate 2:**
Before proceeding, verify:
- [ ] Design recommendations align with post tone and message
- [ ] Color palette supports the emotional intent of the content
- [ ] Typography choices are available in Canva
- [ ] All accessibility checks pass (minimum WCAG AA)
- [ ] Design format matches the content structure (carousel for listicles, graphic for single points)
- [ ] Brand guidelines are respected (if provided)

If any check fails → regenerate design recommendations with correction context.

### Phase 4: Consistency & Integration Check

Perform cross-skill validation:

1. **Message Consistency:** Verify the visual concept reinforces (not contradicts) the post message
2. **Tone Alignment:** Confirm design mood matches post tone (e.g., analytical post ≠ playful design)
3. **Audience Alignment:** Ensure both text and design appeal to the same target audience
4. **Brand Consistency:** Verify both post voice and design visuals align with brand guidelines
5. **CTA Alignment:** Confirm visual CTA (if any) supports the text CTA
6. **Platform Optimization:** Verify both post format and design specs are optimized for LinkedIn

### Phase 5: Publishing Recommendations

Generate final publishing guidance:

1. **Optimal Posting Time:** Recommend day/time based on target audience
2. **Asset Order:** Specify what to upload and in what order
3. **Alt Text:** Provide accessibility text for all visual assets
4. **Engagement Plan:** Suggest first-comment strategy and response tactics
5. **Repurposing Ideas:** Identify 2–3 ways to repurpose this content package

---

## Quality Check Framework

Apply these quality checks to the final combined deliverable:

| Check | Criteria | Pass/Fail |
|-------|----------|-----------|
| Completeness | All required outputs present | — |
| Coherence | Post and design tell the same story | — |
| Actionability | All recommendations are specific and executable | — |
| Consistency | Tone, brand, and message aligned across outputs | — |
| Platform Fit | Optimized for LinkedIn specifically | — |
| Accessibility | WCAG AA minimum met | — |

---

# Outputs

| Output | Format | Description |
|--------|--------|-------------|
| `linkedin_post` | string | The complete, ready-to-publish LinkedIn post |
| `hashtags` | array | List of 3–5 recommended hashtags |
| `visual_concept` | object | Description of recommended visual approach including theme, metaphor, and format |
| `canva_guidance` | object | Step-by-step Canva implementation instructions with dimensions, fonts, and elements |
| `design_checklist` | array | Prioritized checklist for design creation/optimization |
| `color_palette` | array | Recommended colors with hex codes |
| `typography_spec` | object | Font recommendations with hierarchy specifications |
| `design_score` | number | Overall design quality score (1–5) |
| `publishing_guide` | object | Complete publishing recommendations including timing, assets, and engagement strategy |
| `validation_report` | object | Results of all validation gates and quality checks |

---

# Examples

## Example: Complete Content Package

**Inputs:**
- topic: "How AI Agents Are Transforming Modern Businesses"
- post_format: medium
- tone: conversational
- design_type: linkedin_carousel
- target_audience: "business leaders and decision makers"
- cta_goal: engagement

---

### Output 1: LinkedIn Post

```
Most companies are using AI wrong.

They're automating tasks.
They should be automating decisions.

I've spent the last year studying how top companies deploy AI agents.
Here's what separates them from everyone else:

→ They don't replace people. They replace bottlenecks.
   The best AI agents handle the 80% of repetitive decisions
   that slow your team down.

→ They start small. Then scale fast.
   One agent. One workflow. One measurable result.
   Then expand.

→ They measure impact, not activity.
   Not "how many tasks did the AI complete?"
   But "how much faster did we close deals?"

The companies winning with AI right now
aren't the ones with the biggest budgets.

They're the ones asking the right question:

"What decision does my team make 100 times a day
that a well-trained agent could handle?"

Start there.

What's one repetitive decision in your business
that could be automated?

#AIAgents #BusinessTransformation #Automation #FutureOfWork #AIStrategy
```

**Post Metadata:**
- Hook Type: Contrarian Hook
- Storytelling Framework: PAS (Problem → Agitate → Solution)
- Character Count: 892
- Hashtags: #AIAgents #BusinessTransformation #Automation #FutureOfWork #AIStrategy

---

### Output 2: Visual Concept

```
VISUAL CONCEPT
==============

Format: LinkedIn Carousel (7 slides)
Visual Theme: "Decision Architecture" — showing the shift from manual to AI-augmented decision flows

Visual Metaphor: Flowchart/decision tree transforming from chaotic (manual) to streamlined (AI agent)

SLIDE BREAKDOWN:
1. HOOK SLIDE: "Most companies use AI wrong." — Bold white text on dark background (#0F172A)
2. PROBLEM: Chaotic decision flow diagram (many arrows, bottlenecks highlighted in red)
3. INSIGHT 1: "Don't replace people. Replace bottlenecks." + simple icon
4. INSIGHT 2: "Start small. Scale fast." + growth visualization
5. INSIGHT 3: "Measure impact, not activity." + metrics dashboard icon
6. KEY QUESTION: "What decision does your team make 100x/day?" — Large text, centered
7. CTA SLIDE: "Share your answer below" + author branding + social handle
```

---

### Output 3: Canva Design Guidance

```
CANVA IMPLEMENTATION GUIDE
===========================

SETUP:
1. Create new design: Custom size 1080 × 1350px
2. Create 7 pages (one per slide)

BRAND KIT:
- Background Color: #0F172A (all slides)
- Primary Text: #F8FAFC
- Accent Color: #3B82F6 (for highlights and icons)
- Warning/Problem Color: #EF4444 (for slide 2 bottlenecks)
- Heading Font: Inter Bold, 42px
- Body Font: Inter Regular, 24px

SLIDE-BY-SLIDE:

Slide 1 (Hook):
- Background: #0F172A
- Center text: "Most companies use AI wrong." in Inter Bold, 48px, #F8FAFC
- Add subtle blue gradient line below text (#3B82F6, 4px height)
- Add "→" symbol in #3B82F6 to encourage swiping

Slide 2 (Problem):
- Search Canva elements: "flowchart diagram messy"
- Use a pre-made diagram or build with Canva lines and shapes
- Color bottleneck points in #EF4444
- Caption: "This is how most teams make decisions"

Slides 3–5 (Insights):
- Consistent layout: Icon left (80×80px), text right
- Search Canva elements: "minimal line icon [concept]"
- Icon color: #3B82F6
- Text: One sentence max per slide, Inter Bold, 28px
- Add slide number in bottom-right (Inter Regular, 16px, #94A3B8)

Slide 6 (Key Question):
- Large centered text: Inter Bold, 36px, #F8FAFC
- Add subtle glow effect to text
- Background: #0F172A with radial gradient from #1E293B center

Slide 7 (CTA):
- "What repetitive decision could you automate?"
- Author name + handle at bottom
- Small logo/icon if applicable (top-right, 40×40px max)

EXPORT:
- File type: PDF Standard
- Quality: High
- Upload directly to LinkedIn as carousel
```

---

### Output 4: Design Optimization Checklist

```
DESIGN CHECKLIST
================

CRITICAL:
□ All text meets WCAG AA contrast ratio (minimum 4.5:1)
□ Carousel exported as PDF for native LinkedIn upload
□ Text legible at mobile thumbnail size (test at 25% zoom)
□ Consistent margins (60px) across all 7 slides

IMPORTANT:
□ Slide 1 hook text visible without swiping (test in feed preview)
□ Font sizes: No text below 24px equivalent
□ Accent color (#3B82F6) used consistently for emphasis only
□ Each insight slide has exactly one focal point

NICE-TO-HAVE:
□ Add subtle page transition (fade) if LinkedIn supports
□ Create alternate version with light background for A/B test
□ Resize final slide to 1200×628px for link preview if sharing URL
```

---

### Output 5: Publishing Guide

```
PUBLISHING RECOMMENDATIONS
===========================

TIMING:
- Best days for business decision-makers: Tuesday–Thursday
- Optimal time: 8:00–9:30 AM (audience's local timezone)
- Avoid: Monday mornings (inbox overload) and Friday afternoons

UPLOAD SEQUENCE:
1. Upload carousel PDF first (LinkedIn processes this)
2. Write post text in the composer
3. Preview on mobile before publishing
4. Add alt text to carousel: "7-slide guide on using AI agents to automate business decisions"

FIRST COMMENT STRATEGY:
Post a comment within 5 minutes:
"Here's a practical starting point: Map out the top 5 decisions your team repeats daily. Time each one. The longest repetitive decision is your first AI agent candidate."

ENGAGEMENT PLAN:
- Respond to every comment within 2 hours (first 24 hours critical)
- Ask follow-up questions to commenters to boost thread depth
- Share relevant examples from your experience in replies

REPURPOSING:
1. Extract carousel slides as individual image posts (1 per day for a week)
2. Convert insights into a Twitter/X thread
3. Expand into a LinkedIn Article with deeper analysis
4. Use as talking points for a short video or podcast episode
```

---

### Validation Report

```
VALIDATION REPORT
=================

PHASE 1 — Content Generation: ✓ PASSED
✓ Post under 3,000 characters (892 chars)
✓ Clear hook in first 3 lines
✓ CTA present ("What's one repetitive decision...")
✓ 5 hashtags included
✓ No AI-cliché phrases detected
✓ Proper line breaks throughout
✓ Tone matches "conversational" input

PHASE 2 — Visual Concept: ✓ PASSED
✓ Visual themes extracted from post content
✓ Design format (carousel) matches educational listicle structure
✓ Visual narrative complements text without duplicating

PHASE 3 — Design Optimization: ✓ PASSED
✓ Design recommendations align with conversational/analytical tone
✓ Color palette supports professional, modern positioning
✓ Typography (Inter) available in Canva
✓ All contrast ratios pass WCAG AA
✓ Carousel format matches multi-point content structure
✓ Brand-agnostic (no brand guidelines provided — template ready for customization)

PHASE 4 — Consistency Check: ✓ PASSED
✓ Message consistency: Visual reinforces "transform from chaos to clarity" theme
✓ Tone alignment: Clean, modern design matches conversational professional tone
✓ Audience alignment: Business-focused language and professional design aesthetic
✓ CTA alignment: Visual CTA ("Share your answer") supports text CTA (comment question)
✓ Platform optimization: Carousel PDF format + post text both optimized for LinkedIn

QUALITY CHECKS:
✓ Completeness: All required outputs present
✓ Coherence: Post and design tell the same story
✓ Actionability: All recommendations specific and executable
✓ Consistency: Tone, message, and audience aligned
✓ Platform Fit: LinkedIn-optimized
✓ Accessibility: WCAG AA minimum met

OVERALL STATUS: ALL VALIDATIONS PASSED ✓
```

---

# Constraints

- Do not skip validation gates — all checks must pass before proceeding to the next phase.
- Do not generate design recommendations without first generating and validating the LinkedIn post.
- The visual concept must be derived from the generated post content, not created independently.
- Do not produce generic or template responses — all outputs must be specifically tailored to the input topic.
- Canva guidance must only reference fonts, elements, and features available in Canva.
- Do not override user-provided brand guidelines — flag conflicts but respect brand decisions.
- Publishing recommendations must be LinkedIn-specific unless multi-platform is explicitly requested.
- All accessibility standards must meet WCAG AA at minimum.
- Do not fabricate statistics, data, or research — use placeholder format `[INSERT DATA: description]` if needed.
- The master skill must not modify the behavior of sub-skills — it orchestrates and validates, not rewrites.
