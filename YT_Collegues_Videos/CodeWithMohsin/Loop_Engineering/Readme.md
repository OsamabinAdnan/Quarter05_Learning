# Loop Engineering

> **Official Book:** [Loop Engineering Crash Course](https://agentfactory.panaversity.org/docs/loop-engineering-crash-course)

This crash course breaks down AI interaction into five interconnected engineering layers.

| Layer | Icon | Core Idea |
|-------|------|-----------|
| Prompt Engineering | 💬 | Crafting the words that guide AI |
| Context Engineering | 🧠 | Feeding the relevant/right information |
| Agent Engineering | 🤖 | Building AI that takes real actions |
| Harness Engineering | 🧩 | The tools and systems around AI |
| Loop Engineering | ♻️ | AI that plans, acts, and repeats |

---

## 💬 Prompt Engineering

> The art of talking to AI the right way.

- **Be Clear and Specific:** Tell the AI exactly what you want — no guessing.
- **Add Context:** Give background info so the AI understands the situation.
- **Give Examples and Rules:** Show the format, style, or constraints you want.
- **Iterate and Refine:** Test your prompt, tweak it, and make it better.

---

## 🧠 Context Engineering

> Feeding AI the right information, at the right time.

- **Feed the Right Data:** Give AI relevant documents, memory, or history.
- **Manage the Window:** Fit what matters, cut what doesn't.
- **Structure It Well:** Organize with clear sections and labels.
- **Keep It Fresh:** Update context as things change.

---

## 🤖 Agent Engineering

> Building AI that takes real actions, not just chats.

- **Give It Tools:** Let AI call functions, search, or run code.
- **Define Clear Goals:** Tell the agent what "done" looks like.
- **Add Guardrails:** Set limits on what it can and can't do.
- **Act & Reflect:** Agent takes action, checks results, adjusts.

---

## 🧩 Harness Engineering

> The tools and systems that hold AI together.

- **Connect the Systems:** Link AI to your apps, files, and databases.
- **Handle Errors Safely:** Catch failures before they cause damage.
- **Log Everything:** Track what the AI did and why.
- **Keep It Reliable:** Make sure it works the same way every time.

---

## ♻️ Loop Engineering

> AI that plans, acts, checks itself, and repeats — until it's done.

- **Plan the Steps:** Break the goal into a clear, repeatable sequence.
- **Execute & Observe:** Run one step, then check what actually happened.
- **Adapt the Loop:** Adjust the next step based on the result.
- **Know When to Stop:** Define a clear finish line, so it doesn't loop forever.

---

## Part 01: The Shift

When a loop replaces you as the operator, the value you provide shifts to the two ends that cannot be automated: **intent** and **accountability**. The loop automates the middle steps, but you are still paid for your judgment.

### 1. Intent and Accountability

- **Intent:** Clearly define what you want the agent to achieve.
- **Accountability:** Stand behind what the agent ships.
- The loop can automate execution, but human judgment remains essential.

### 2. Anatomy of a Loop

A loop has five active parts and one memory component:

1. **Heartbeat:** A schedule or event that triggers the loop.
2. **Worktree:** An isolated workspace that prevents collisions.
3. **Skill:** Written project knowledge that guides the work.
4. **Sub-agents:** A maker and a separate checker for independent verification.
5. **Connector:** MCP that enables actions in real tools.
6. **State / Memory:** The spine that remembers what happened yesterday.

### 3. Two Roads to the Same Loop

You can build loops with two main toolsets:

| Toolset | Approach |
|---------|----------|
| **Claude Code** | Built-in cloud routines run on Anthropic's servers, even while your laptop is closed. This approach uses account daily caps. |
| **OpenCode** | Provides the layer below the loop. You bring your own heartbeat—such as cron or GitHub Actions—for full control without vendor cloud reliance. |

### 4. Where We're Going: The Whole Loop

A complete loop can follow these six steps:

1. A **9 AM heartbeat** triggers the loop.
2. The loop reads the spine, such as `progress.md`.
3. It opens an isolated **worktree** for overnight failures.
4. It applies a **triage skill**.
5. A **maker-checker split** grades the proposed fix.
6. If the fix passes, it opens a **pull request** through a connector and updates the spine.

---

## Part 02: The Heartbeat

The **heartbeat** is the mechanism that turns a single run into a continuous loop. It ranges from loops you actively supervise to loops that run entirely without you.

### Heartbeat Types

| Type | How It Runs |
|------|-------------|
| **In-session** | Repeats while you watch and ends when you close the session. |
| **Run-until-done** | Continues until a specified, checked condition is true. |
| **Scheduled** | Runs on a clock, even when your laptop is off. |
| **Event-driven** | Reacts immediately when a specific event occurs. |

### 1. In-session Loops

In-session loops repeat on a timer while you watch and stop when you close the session. They are useful for monitoring deployments or long-running tests.

- **Claude Code:** Use `/loop 5m` to repeat a task every five minutes.
- **OpenCode:** Use a standard shell loop, such as `while true; do ...; done`.

### 2. Run-until-done Loops

Run-until-done loops continue until a specified, checked condition becomes true.

- Never let the agent that did the work decide whether the work is complete.
- Use a separate checker to verify the completion condition.
- Set a ceiling—such as maximum attempts, time, or spend—to avoid wasting resources on an impossible goal.

### 3. Unattended Schedules

Unattended schedules run on a clock, so your laptop can be off.

- **Claude Code:** Uses Cloud Routines.
- **OpenCode:** Can be connected to a machine's local cron or cloud-based GitHub Actions.

### 4. Event-driven Loops

Event-driven loops react as soon as an event occurs instead of checking a clock. For example, a loop can start when a pull request opens or an issue is filed.

- **Claude Code:** Uses webhooks and channels such as Telegram or Discord.
- **OpenCode:** Uses GitHub Actions triggers.

---

## Part 03: The Body

The **body** is what the loop executes on each heartbeat. It provides an isolated workspace, reusable project knowledge, real-world actions, independent verification, and repeatable orchestration.

### 1. Worktrees

Parallel agents can overwrite each other's code when they share the same working directory. Use isolated Git **worktrees** so each agent works independently without collisions.

### 2. Knowledge: Skills

Loops run cold, and models do not retain knowledge between runs. Instead of pasting project rules into every prompt:

- Store project knowledge and instructions in a `SKILL.md` file.
- Let the loop read the skill once per heartbeat.
- Save tokens and standardize the loop's working habits.

### 3. Action: Connectors

A loop that only reads code can only suggest fixes. **Connectors**, built on MCP, let it take action in real tools, such as:

- Opening pull requests.
- Updating Linear tickets.
- Posting messages to Slack.

### 4. Maker–Checker Sub-agents

The agent that writes the work must not be the agent that approves it.

- A strong **maker** explores the problem and implements the fix.
- A separate, strict, and often read-only **checker** runs tests and verifies the work.
- This separation creates independent validation before the loop accepts a result.

### 5. Codify the Body

Package the dynamic orchestration of one heartbeat into a rerunnable script.

- **Claude Code:** Use `/workflows` to coordinate the work.
- **OpenCode:** Use a shell script to fan out work.
- A workflow is only the body of one heartbeat; by itself, it forgets everything after it runs. Attach it to a **spine** to preserve state between beats.

---

## Part 04: The Spine

The **spine** is the persistent state of a loop. State must survive between runs; without a spine, a loop can repeat the same first step forever.

### 1. Persistent State

A minimal spine consists of two files:

- **`CLAUDE.md`:** A short file containing the loop's habits and rules.
- **`progress.md`:** A vital progress file that records:
  - What has been finished.
  - What is currently in progress.
  - What is blocked.

### 2. Minimum Safe Loop Checklist

Before allowing a loop to run completely unattended, verify all seven safety checks:

1. **Success condition:** Define what a successful outcome looks like.
2. **Ceiling limit:** Set a maximum number of attempts, time, or budget.
3. **Isolated worktree:** Prevent agents from colliding with each other's changes.
4. **Read-only checker:** Use an independent checker that cannot alter the work.
5. **State file:** Preserve progress and context between runs.
6. **Human gate for risky work:** Require human approval for consequential actions.
7. **Log or notification:** Make silent failures visible.

---

## Part 05: The Morning-Triage Loop

The same logical loop can be built in both tools. At **9:00 AM**, the loop reads `progress.md`, identifies up to five issues, and works through them safely while preserving the outcome in memory.

### 1. Morning-Triage Flow

1. A **9 AM trigger** starts the loop.
2. The loop reads `progress.md`.
3. It finds up to **five issues**.
4. Each issue is assigned to an isolated worktree.
5. The maker implements a draft fix.
6. A reviewer checks the draft.
7. The loop opens pull requests for safe fixes and flags risky fixes for human review.
8. It updates the memory for the next run.

### 2. The Files That Do the Work

Two core files drive the loop:

- **`SKILL.md`:** Lists the five triage steps and limits the loop to five pull requests per run.
- **`reviewer.md`:** Instructs the checker to run tests strictly and return a **PASS** or **FAIL** rating based on actual test results—not whether the change merely looks fine.

### 3. Wiring the Heartbeat

The practical difference between the two tools is the heartbeat trigger:

| Tool | Heartbeat Setup |
|------|-----------------|
| **Claude Code** | Configure a Cloud Routine at [claude.ai/code/routines](https://claude.ai/code/routines). |
| **OpenCode** | Configure a GitHub Actions cron schedule in a YAML workflow. |

### 4. What You Wake Up To

An example morning-triage run looks like this:

- **9:00 AM:** The loop finds a flaky authentication test and a type error.
- It drafts fixes for both issues, and the reviewer passes both fixes.
- The loop opens two pull requests.
- It flags a risky advisory involving a public behavior change for human review.
- **9:30 AM:** You wake up to two pre-reviewed pull requests and one flagged item—without having typed anything.

---

## Part 06: Staying the Engineer

Automation does not remove the engineer's responsibility. You still set the loop's limits, verify its output, and understand the code it changes.

### 1. Token Cost and Cadence

Token cost is the ultimate limiter for autonomous loops.

- A loop that runs **five times per day** can cost approximately **$20 per month**.
- The same loop running **every five minutes, around the clock** can scale to approximately **$1,800 per month**.
- **Cadence** is the main cost-control lever.
- Further control costs by using cheaper models for execution and setting ceilings on attempts, time, and spend.

### 2. The Two Traps

As loops improve, avoid two major traps:

1. **Checking is still your job:** Trust the loop to do the work, but verify it before it counts. “Done” is a claim, not a proof.
2. **Do not stop understanding the code:** The faster a loop ships, the wider the gap can become between the codebase and your understanding of it.

Stay involved as the engineer who designs and supervises the loop—not as a bystander who only presses “go.”

### 3. Trusting It Overnight

Before trusting an unattended loop overnight:

- Send output to visible channels, such as Slack or Discord.
- Write a status line for every run, including failures.
- Keep every run replayable.
- Fail loudly when the ceiling is reached, with a **needs human** note.
- Run the loop hourly while watching its behavior before leaving it unattended overnight.

### 4. Practice

Practice building five types of loops, progressing from easy to hard. Each exercise should apply the same foundations: a heartbeat, safe working parts, state, clear limits, and visible outcomes.

## One-Line Summary

> Stop prompting your agent turn by turn. Design the loop that prompts it for you—a heartbeat, four working parts, and a spine that remembers—and stay the engineer who reads what it ships.

For more detail read **[Loop Engineering](Loop%20Engineering.pdf)** Official Slides.