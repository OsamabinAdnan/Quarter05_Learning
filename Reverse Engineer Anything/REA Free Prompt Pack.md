# Reverse Engineer Anything: The Free Prompt Pack

**Every prompt from the video, the agent swarm setup, and 28 ways to use it.** By Miles Deutscher

> **How to use this file:** drag it into Claude Code (or Codex, Cursor, or any AI agent that can run terminal commands) and type **"Set this up."** Your agent installs REA, checks it works, sets up the agent swarm if you want it, and walks you through the 5 prompts. It asks before it changes anything. This won't work in the ChatGPT or Claude web chat, because nothing can be installed there.

**For the AI agent reading this file:** if the user dropped this file in and asked you to set it up, do the following in order, and show every change and wait for approval before applying it.
1. Read **Ground rules** below and follow them for everything you do with REA.
2. Install REA by following **Step 0 · Install REA**, Option B. The prompt in that section is addressed to you.
3. Run the **Health check** from the same section and report back in one paragraph.
4. Ask whether they want the agent swarm. If yes and you are Claude Code, follow the **Swarm setup prompt**, including the note under it about `git init`, and tell them to restart Claude Code afterwards.
5. Hand over: tell the user in a few lines what is installed, then ask what they want to reverse engineer first. Start with **1 · LOOK**, filling in the [BRACKETS] from their answer, and run the 5 prompts in order, one at a time.

- 📖 **Full breakdown on X:** https://x.com/milesdeutscher/status/2112924796866699336
- 🔧 **The repo (free, open source):** https://github.com/morluto/rea
- 🎮 **Real case studies:** https://rea.tools/showcase/

---

## How it works

**Point at an app → Observe its behaviour → Write a spec → Rebuild it your way**

REA (Reverse Engineer Anything) gives your AI agent the tools to look inside software: apps, websites, games and devices. It runs locally on your machine and plugs into Claude Code, Codex, Gemini CLI, Cursor and other agents.

Your agent studies **how a feature behaves**, writes that down as a spec, and builds **your own version** from the spec. It never copies the original's code.

---

## Ground rules (read these first)

1. **Study behaviour, never copy code.** Rebuild what a feature *does*, never their code, text, logos or assets.
2. **Your data, your devices.** Only analyse software you own or are allowed to examine. For websites, stick to public pages.
3. **Check the terms of service and your local law.** Many apps forbid reverse engineering in their terms, and the rules differ by country. If you plan to sell what you build, talk to a lawyer.

> Claude will refuse to help you get around a licence, paywall or DRM, and it should. It will still rebuild the feature you actually use.

---

## Step 0 · Install REA (about 5 minutes)

You need **Node.js 22.19+** and an AI agent (Claude Code recommended).

**Option A, in your terminal:**
```
npx rea-agents setup
```
Pick your agent, review the changes, approve them, then restart your agent.

**Option B, let your agent do it. Paste this:**
```
Install REA (Reverse Engineer Anything) and connect it as an MCP server.

Check that Node.js version 22.19 or newer is installed.

Run:
npx rea-agents@latest setup
(or the equivalent for my agent if you know a better command).

Show me the full setup plan and any configuration changes before you apply them.
After I approve, finish the setup and register REA as an MCP server named rea.
Verify the installation (run npx -y rea-agents@latest doctor or list the available
REA tools) and confirm the tools are callable.

Do not install anything else or make unrelated changes. Only set up REA.
```

**Health check:**
```
Run a health check on REA. Confirm every tool is callable, then tell me in one
paragraph what REA can analyse on this computer.
```

---

## The 5 prompts

Run them in order, one at a time. Replace anything in **[BRACKETS]**.

### 1 · LOOK: figure out what you're dealing with
```
I want to understand how [FEATURE] works in [APP].
It's located at [FILE PATH or URL].

First, tell me what kind of app this is and which REA tool fits best.
Don't start deep analysis yet.

Then give me a short overview: what it's built with, and where you'd
look first to find [FEATURE].
```

### 2 · X-RAY: break down exactly how it works
```
Investigate how [FEATURE] works in [APP] using REA.

Explain it to me in plain English, as if I'm not a developer:
- What happens step by step when a user uses this feature
- What data it uses, and where that data comes from
- How the main pieces connect to each other

Show me the evidence for each conclusion. Clearly separate what you
confirmed, what you're inferring, and what's still unknown.
```

### 3 · BLUEPRINT: turn it into a spec
```
Based on your analysis, write a build spec for my own version of
[FEATURE].

Describe the BEHAVIOUR only:
- What the feature does, written as clear requirements
- The data it needs
- How it should handle edge cases and errors
- A list of test cases to prove it works

Don't include any of the original app's code, names or assets.
Someone who's never seen the original should be able to build it
from this document alone.

Save it as spec.md.
```

### 4 · BUILD: create your version
```
Read spec.md. Build this feature for my project at [PROJECT PATH],
using [TECH STACK, or "whatever fits my project best"].

Build it step by step and test each part as you go.
When you're done, run every test case in the spec and show me the
results.
```

### 5 · UPGRADE: make it better than the original
```
Now that you understand how [FEATURE] works in [APP], tell me:
- 3 things it does well that my version must keep
- 3 weaknesses, frustrations or missing pieces
- How we could make my version genuinely better

Then update spec.md with the improvements, and build the best one.
```

**Tip:** put step 5 on a `/loop` in Claude Code and it keeps improving on its own.

---

## The agent swarm: 4 agents, one product

Instead of one agent doing everything, you get a team:

**Scout** (investigates) → **Spec writer** (writes the blueprint) → **Builder** (builds, never sees the original) → **Tester** (compares and scores)

The wall between the spec writer and the builder is the whole idea. Your builder works from the spec alone, so you end up with *your own* version, not a copy.

### Swarm setup prompt (paste once per project)
```
Create four subagents in .claude/agents/ for reverse engineering with REA:

1. rea-scout: investigates ONE feature in a target app using REA.
   Tools: Read, Grep, Glob, Write, mcp__rea__*. Effort: high.
   Picks the right REA tool for the target type, starts with an overview,
   traces the feature from user action to result, and tags every finding
   as CONFIRMED, INFERRED or UNKNOWN with evidence. Saves its report to
   reports/[feature-name].md. Only analyses software I own or am
   authorised to examine. Public pages only for websites. Never signs up,
   submits forms or gets around bot protection.

2. rea-spec-writer: reads reports/ and writes spec.md.
   Tools: Read, Write.
   Behaviour only: requirements, data model, edge cases, error handling
   and test cases. Never includes code, internal names, file paths or
   assets from the original app.

3. rea-builder: builds from spec.md and nothing else.
   disallowedTools: mcp__rea. isolation: worktree.
   Builds step by step, tests as it goes, then runs every test case in
   spec.md and reports results.

4. rea-tester: compares the original app's behaviour with the rebuild.
   Tools: Read, Grep, Glob, Bash, Write, mcp__rea__*.
   Runs both through normal, edge and error inputs. Saves comparison.md
   with a match rate, every difference, and a severity for each
   (cosmetic, minor, major).

Keep each description short so you know when to delegate. Show me the
four files when done.
```
*Before you launch: the builder works in a git worktree, so run `git init` and make one commit in your project folder first. Then restart Claude Code so it picks up the new agents.*

### Swarm launch prompt
```
Reverse engineer [APP / WEBSITE] with my swarm.

Run rea-scouts in parallel, one per part:
1. [FEATURE 1, e.g. the core product flow]
2. [FEATURE 2, e.g. the homepage and how it sells]
3. [FEATURE 3, e.g. the signup funnel: stop at the form, never submit]
4. [FEATURE 4, e.g. the pricing page and what's gated]

Then rea-spec-writer writes spec.md for my own version called [NAME].
Then rea-builder builds it.
Then rea-tester compares mine against the original and writes comparison.md.

Show me a short summary at each stage.
```

---

## 28 ways to use it

Each one has a starter you can drop into **Prompt 1 (LOOK)**. Then run prompts 2 to 5 as normal.

### 🏠 Personal

| Use case | What it means | Starter for Prompt 1 |
|---|---|---|
| **Recreate favourite features** | Notion, Obsidian, Slack… rebuilt your way | *"…how the graph view works in Obsidian…"* |
| **Escape vendor clouds** | Get your gadget's data into your own dashboard | *"…how my [smart device] app gets readings from the device, so I can show them in my own dashboard…"* |
| **Revive dead devices** | Keep hardware working after the company shuts down its servers | *"…what my [device] needs from the company's servers, so it can keep working after they shut down…"* |
| **Free your own data** | Export from apps that have no export button | *"…where [APP] stores my own data on this computer, and what format it's in…"* |
| **Preserve old games** | Port classic game logic, add things like co-op | *"…how the [mechanic] works in [old game I own]…"* |
| **Patch abandoned tools** | Fix the bug nobody else will | *"…what causes [bug] in [abandoned tool]…"* |
| **Build custom tools** | ShareX-style tools tailored to you | *"…how [APP]'s [screenshot/clipboard/shortcut] feature works…"* |
| **Add missing accessibility** | Shortcuts, bigger UI, screen-reader support | *"…how [APP]'s interface is built, and where keyboard shortcuts or larger text could be added…"* |
| **Audit your own phone** | See what your apps send out | *"…what network requests [APP] makes and what data they include…"* |
| **Crack open file formats** | Convert, edit and back up your own files | *"…how [APP]'s .[ext] file format is structured…"* |
| **Educational deep dives** | "Why does % work like that?" | *"…how [APP] calculates [thing I'm curious about]…"* |

### 💼 Business

| Use case | What it means | Starter for Prompt 1 |
|---|---|---|
| **Competitor feature analysis** | Behaviour spec first, then prototype | *"…how [competitor]'s [feature] behaves, using public pages only…"* |
| **Replace expensive software** | A niche QuickBooks of your own | *"…which features of [TOOL] my team actually uses, and how each one behaves…"* |
| **Modernise legacy systems** | Document before you rewrite | *"…what our legacy [system] does, end to end, before we rewrite it…"* |
| **Recover lost knowledge** | When the original developer is gone | *"…how our in-house [tool] works; there are no docs and the developer has left…"* |
| **Exit vendor lock-in** | Migrate years of data out | *"…how [VENDOR] stores our data, so we can migrate it out…"* |
| **Security and due diligence** | Trackers, data flows, hidden features | *"…what trackers, data collection and hidden features [APP] contains…"* |
| **Verify vendor claims** | "Is it really encrypted?" | *"…whether [APP] really encrypts [data] the way the vendor says…"* |
| **Triage suspicious files** | A defensive first pass | *"…what this suspicious file would do, without running it…"* ⚠️ |
| **Internal tooling** | Custom connectors and automations | *"…how [APP] talks to its backend, so we can build an internal connector…"* |
| **Trading and data dashboards** | Your own view on the feed | *"…how [platform]'s chart or data feed is structured in the app…"* |
| **Acquisition due diligence** | Know the systems before you buy | *"…what [target company's product] is built with and how its core features work…"* |
| **Firmware and devices** | Integrations and add-on products | *"…how [device]'s firmware handles [feature], so we can build an integration…"* |
| **Docs from the software** | Guides written from real behaviour | *"…how every screen in [our app] behaves, so we can write user guides…"* |

**Heads up:** malware and security analysis can trigger Claude's automatic cyber safeguards. Security teams can apply to Anthropic's Cyber Verification Program for adjusted access.

### ⚙️ Workflows

| Workflow | What it means |
|---|---|
| **Agent swarm** | Scout → Spec writer → Builder → Tester, each agent hands off to the next (prompts above) |
| **Clean-room split** | One agent writes the spec, a different agent builds from it without ever seeing the original |
| **Behaviour diff testing** | Prove the rebuild matches: same inputs into both, compare the outputs (the tester agent) |
| **Reusable specs and skills** | Save every spec.md in a library, or turn your best workflow into a Claude skill for next time |

---

## Troubleshooting

- **"API Error… appears to violate our Usage Policy":** Claude's automatic safety filter fired, sometimes by mistake on legitimate work. **Start a new session.** That session usually stays flagged, so don't argue with it. Keep prompts focused on behaviour, and avoid words like "crack", "bypass" or "unlock premium".
- **Native apps or games time out:** they need Hopper, Ghidra or IDA. Setup can install Hopper for you; pick **demo mode** in its first-run window.
- **Big apps time out:** point REA at the one file that matters (step 1 tells you which) instead of the whole app.
- **Private data on screen:** use a fresh account or a test workspace with made-up data, and tell your agent not to read your app data folders.

---

📖 **Want the full breakdown, with setup screenshots and the reasoning behind each step?**
**Read the X article →** https://x.com/milesdeutscher/status/2112924796866699336

Follow **@milesdeutscher** and **@aiedge_** for more.
