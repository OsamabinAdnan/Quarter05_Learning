# Purpose

Evaluate and optimize visual designs for maximum impact, brand consistency, accessibility, and platform-specific performance — with specialized guidance for Canva-based workflows and LinkedIn carousel formats.

---

# Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `design_type` | enum | Yes | One of: `social_media_graphic`, `linkedin_carousel`, `presentation_slide`, `banner`, `infographic`, `brand_asset` |
| `brand_guidelines` | object | No | Brand colors (hex codes), fonts, logo usage rules, tone |
| `current_design` | string | No | Description or URL of existing design to evaluate |
| `target_platform` | enum | No | One of: `linkedin`, `instagram`, `twitter`, `facebook`, `multi_platform` (default: `linkedin`) |
| `content_theme` | string | No | The topic or message the design must communicate |
| `audience` | string | No | Who will see this design |
| `canva_usage` | boolean | No | Whether the design will be created in Canva (default: true) |
| `accessibility_priority` | enum | No | One of: `standard`, `high`, `wcag_aa`, `wcag_aaa` (default: `standard`) |

---

# Instructions

## 1. Brand Guideline Verification

Run these checks against provided brand guidelines:

### Color Compliance
- Verify all colors used match approved brand palette
- Check primary/secondary color ratio (recommend 60-30-10 rule)
- Validate color combinations for sufficient contrast
- Flag any off-brand or unapproved color usage

### Typography Compliance
- Verify fonts match brand-approved typefaces
- Check font weight usage (limit to 2–3 weights per design)
- Validate heading/body hierarchy is clear
- Ensure fallback fonts are specified for web-based assets

### Logo & Identity
- Confirm logo placement follows brand rules (clear space, minimum size)
- Verify logo color version is appropriate for background
- Check that brand marks are not distorted or recolored

### Voice & Tone Alignment
- Assess whether design mood matches brand personality
- Flag visual elements that contradict brand positioning

## 2. Typography Review Process

Evaluate typography using this checklist:

- **Font Pairing:** Maximum 2 font families. One for headings, one for body.
- **Hierarchy:** At least 3 levels of visual hierarchy (size, weight, color)
- **Readability:** Body text minimum 16px equivalent. Line height 1.4–1.6× font size.
- **Contrast:** Text-to-background contrast ratio minimum 4.5:1 (WCAG AA)
- **Alignment:** Consistent alignment throughout (left, center, or justified — not mixed)
- **White Space:** Adequate padding around text blocks (minimum 1em)
- **Length:** Line length 45–75 characters for body text readability

## 3. Color Harmony Review

Apply color theory principles:

- **Harmony Type:** Identify color scheme (complementary, analogous, triadic, split-complementary)
- **Emotional Fit:** Verify colors support the intended emotional message
- **Accessibility:** Run contrast checks on all text/background combinations
- **Color Blindness:** Simulate appearance for deuteranopia, protanopia, tritanopia
- **Platform Context:** Account for platform UI colors (LinkedIn blue, etc.) that may interact with design

## 4. Layout Review

Evaluate structural design elements:

- **Grid System:** Is a consistent grid or alignment system used?
- **Balance:** Visual weight distributed intentionally (symmetrical or asymmetrical)
- **Proximity:** Related elements grouped together. Unrelated elements separated.
- **Consistency:** Repeating elements (margins, padding, spacing) are uniform
- **Focal Point:** One clear primary focal point per design frame
- **Breathing Room:** Adequate margins and padding (never edge-to-edge content)

## 5. Visual Hierarchy Review

Assess information prioritization:

1. **Primary Element:** What does the eye see first? Is that intentional?
2. **Reading Flow:** Does the design guide the eye in the correct order?
3. **Size Hierarchy:** Larger elements = more important information
4. **Color Weight:** High-contrast or saturated colors draw attention first
5. **Position:** Top-left to bottom-right reading pattern (for LTR languages)
6. **Isolation:** Elements with more surrounding space appear more important

## 6. Canva-Specific Optimization

Provide recommendations tailored to Canva's capabilities:

### Template Selection
- Recommend starting template category based on `design_type`
- Suggest custom dimensions for target platform:
  - LinkedIn post: 1200 × 1200px or 1080 × 1350px
  - LinkedIn carousel: 1080 × 1350px per slide (5–10 slides)
  - LinkedIn article header: 1200 × 644px
  - Instagram square: 1080 × 1080px
  - Instagram story: 1080 × 1920px

### Canva Feature Utilization
- Recommend Brand Kit setup for consistent assets
- Suggest relevant Canva elements (frames, grids, lines) for structure
- Recommend animation features for carousel engagement
- Identify premium vs. free Canva elements needed
- Suggest Canva's "Resize" feature for multi-platform adaptation

### Export Settings
- PNG for graphics with text (crisper rendering)
- JPG for photo-heavy designs (smaller file size)
- PDF for carousels uploaded to LinkedIn
- Recommend quality settings per platform

## 7. LinkedIn Carousel Optimization

Specialized guidance for carousel format:

- **Slide Count:** 5–10 slides optimal for engagement
- **Slide 1:** Strong visual hook — bold statement or question
- **Slide 2–8:** One key point per slide. Large text. Minimal words.
- **Final Slide:** Clear CTA + author branding
- **Text Size:** Minimum 24pt equivalent for mobile readability
- **Consistency:** Same color scheme, fonts, and layout grid across all slides
- **Progress Indicator:** Consider slide numbers or progress bar
- **File Format:** Export as PDF for native LinkedIn carousel upload

## 8. Design Scoring Framework

Rate each dimension 1–5, then calculate overall score:

| Dimension | Weight | Score (1-5) | Weighted |
|-----------|--------|-------------|----------|
| Brand Consistency | 20% | — | — |
| Visual Hierarchy | 20% | — | — |
| Typography | 15% | — | — |
| Color Harmony | 15% | — | — |
| Layout & Composition | 15% | — | — |
| Accessibility | 10% | — | — |
| Platform Optimization | 5% | — | — |
| **TOTAL** | **100%** | — | **/5.0** |

**Scoring Interpretation:**
- 4.5–5.0: Excellent — publish-ready
- 3.5–4.4: Good — minor improvements recommended
- 2.5–3.4: Fair — significant improvements needed before publishing
- Below 2.5: Poor — redesign recommended

---

# Outputs

| Output | Format | Description |
|--------|--------|-------------|
| `design_audit` | object | Detailed evaluation with scores per dimension |
| `design_recommendations` | array | Prioritized list of specific improvements |
| `improvement_checklist` | array | Actionable checklist items with priority levels (critical/important/nice-to-have) |
| `optimization_report` | string | Comprehensive narrative report with before/after guidance |
| `canva_guidance` | object | Step-by-step Canva implementation instructions |
| `color_palette` | array | Recommended color palette with hex codes (if not provided) |
| `typography_spec` | object | Font recommendations with sizes, weights, and hierarchy |
| `design_score` | number | Overall score from the Design Scoring Framework |

---

# Examples

## Example 1: Design Audit for LinkedIn Carousel

**Inputs:**
- design_type: linkedin_carousel
- content_theme: "5 Steps to Better Email Marketing"
- brand_guidelines: { primary: "#2563EB", secondary: "#1E293B", font_heading: "Montserrat", font_body: "Open Sans" }

**Output:**

```
DESIGN AUDIT REPORT
===================

Overall Score: 3.8 / 5.0 (Good)

DIMENSION SCORES:
- Brand Consistency: 4/5 — Colors align well. Logo placement needs more clear space.
- Visual Hierarchy: 4/5 — Strong heading hierarchy. Slide 3 body text competes with heading.
- Typography: 3/5 — Font pairing is solid. Line height too tight on body text (currently 1.2, recommend 1.5).
- Color Harmony: 4/5 — Analogous scheme works. Consider adding a warm accent for CTAs.
- Layout & Composition: 3/5 — Inconsistent margins between slides 2 and 4. Standardize to 60px.
- Accessibility: 4/5 — Text contrast passes AA. Alt text recommendations needed for icons.
- Platform Optimization: 4/5 — Dimensions correct at 1080×1350. Export as PDF for carousel upload.

RECOMMENDATIONS (Priority Order):
1. [CRITICAL] Increase body text line height from 1.2 to 1.5 across all slides
2. [IMPORTANT] Standardize internal margins to 60px on all slides
3. [IMPORTANT] Add warm accent color (#F59E0B) for CTA elements on final slide
4. [NICE-TO-HAVE] Add slide progress indicator (e.g., "3/8") in bottom corner
5. [NICE-TO-HAVE] Increase logo clear space from 20px to 40px

CANVA IMPLEMENTATION:
- Start with "LinkedIn Carousel" template (1080×1350)
- Upload brand fonts to Brand Kit (Montserrat + Open Sans)
- Set brand colors in Brand Kit: #2563EB, #1E293B, #F59E0B
- Use Canva's "Grids" element for consistent layout
- Export as PDF Standard for LinkedIn upload
```

## Example 2: Social Media Graphic Recommendations

**Inputs:**
- design_type: social_media_graphic
- target_platform: linkedin
- content_theme: "AI Agents in Business"
- accessibility_priority: wcag_aa

**Output:**

```
DESIGN RECOMMENDATIONS
======================

RECOMMENDED SPECIFICATIONS:

Dimensions: 1200 × 1200px (LinkedIn square post)
Format: PNG (contains text overlay)

COLOR PALETTE:
- Background: #0F172A (dark slate)
- Primary Text: #F8FAFC (near white) — Contrast ratio: 15.4:1 ✓
- Accent: #3B82F6 (vivid blue) — Use for highlights and icons
- Secondary: #94A3B8 (muted gray) — Use for supporting text

TYPOGRAPHY:
- Heading: Inter Bold, 48px, #F8FAFC
- Subheading: Inter Medium, 28px, #94A3B8
- Body: Inter Regular, 20px, #F8FAFC

LAYOUT:
- Center-aligned composition
- 80px margins on all sides
- Visual element (icon or illustration) in top third
- Headline in middle third
- Supporting text + branding in bottom third

ACCESSIBILITY CHECKS:
✓ All text passes WCAG AA contrast (minimum 4.5:1)
✓ Text remains legible at 50% zoom (mobile thumbnail)
✓ No information conveyed by color alone
✓ Alt text recommendation: "Infographic showing how AI agents automate business workflows"

CANVA SETUP:
- Create custom size: 1200 × 1200px
- Search elements: "AI robot illustration minimalist"
- Apply background: #0F172A
- Add text using Inter font family
- Group all elements before export
- Export: PNG, high quality
```

## Example 3: Improvement Checklist

**Inputs:**
- design_type: brand_asset
- current_design: "Company LinkedIn banner using stock photo with overlaid text"

**Output:**

```
IMPROVEMENT CHECKLIST
=====================

CRITICAL:
□ Replace low-resolution stock photo (currently pixelated at banner size)
□ Increase text contrast — current white text on light image area fails WCAG AA
□ Resize to LinkedIn banner dimensions: 1584 × 396px

IMPORTANT:
□ Add brand color overlay (20% opacity) to unify image with brand identity
□ Move logo from bottom-right to top-left (aligns with reading pattern)
□ Reduce text to single tagline — current 3-line text is unreadable on mobile

NICE-TO-HAVE:
□ Add subtle gradient from left (dark) to right (transparent) for text legibility
□ Create 2 alternate versions for A/B testing
□ Export additional sizes for Twitter header (1500 × 500px) and Facebook cover (820 × 312px)
```

---

# Constraints

- Do not recommend fonts, colors, or elements not available in Canva's free or standard library unless explicitly requested.
- Do not suggest designs that fail WCAG AA accessibility standards at minimum.
- All color contrast ratios must be calculated, not estimated.
- Do not recommend more than 2 font families per design system.
- Platform-specific dimensions must be current as of 2024 — flag if dimensions may have changed.
- Do not recommend animations or effects not supported by the target platform.
- Design scores must be justified with specific observations, not generic feedback.
- Prioritize recommendations by impact — critical issues that block publishing come first.
- Do not redesign from scratch when targeted improvements would suffice.
- Respect provided brand guidelines — flag violations but do not override brand decisions.
