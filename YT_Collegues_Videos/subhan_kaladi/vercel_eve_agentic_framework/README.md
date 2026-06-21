# Vercel Eve Agentic Framework - Projects

> Exploring [Eve](https://vercel.com/eve) — Vercel's agentic framework for building AI agents.

This repository contains two experimental projects built using the Eve framework, showcasing different approaches to building AI-powered agents with modern web technologies.

## 📁 Projects

### 1. [`my-agent`](./my-agent) — Backend Agent

A standalone Eve agent backend with model configuration and basic chat capabilities. This is a minimal setup for running an AI agent without a frontend UI.

**Key Features:**
- Backend-only agent accessible via Eve CLI/TUI
- Uses DeepSeek v4 Flash model (`deepseek/deepseek-v4-flash`)
- Simple agent instructions and channel configuration
- Local development support

**Tech Stack:**
- Eve ^0.12.0
- AI SDK (Vercel) 7.0.0-beta.178
- TypeScript (ES2022)
- Node.js 24.x

### 2. [`my-agent-ui`](./my-agent-ui) — Frontend UI + Agent

A Next.js-based frontend with an integrated Eve agent, providing a rich chat interface with modern UI components and streaming responses.

**Key Features:**
- Full-stack Next.js app with Eve agent integration
- Rich chat UI with message branching support
- AI Elements (conversation, reasoning, tools, code blocks)
- Shadcn/ui + Radix UI + Tailwind CSS
- Streamdown for Markdown, code, math, and diagram rendering
- OpenRouter integration with Nvidia Nemotron model

**Tech Stack:**
- Next.js 16.2.6
- React 19.2.6
- Eve ^0.12.0
- Tailwind CSS 4.3.0
- Radix UI 1.4.3
- Motion (Framer) 12.40.0

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 24.x** or higher
- **npm** package manager
- **API Keys:**
  - `AI_GATEWAY_API_KEY` — Vercel AI Gateway credentials
  - `OPENROUTER_API_KEY` — OpenRouter API key (for my-agent-ui)

### Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd vercel_eve_agentic_framework
```

#### 2. Setup my-agent (Backend)

```bash
cd my-agent
npm install
```

Create a `.env.local` file:
```env
AI_GATEWAY_API_KEY=your_api_key_here
```

#### 3. Setup my-agent-ui (Frontend)

```bash
cd ../my-agent-ui
npm install
```

Create a `.env.local` file:
```env
AI_GATEWAY_API_KEY=your_api_key_here
OPENROUTER_API_KEY=your_openrouter_key_here
```

---

## 🛠️ Development

### Running my-agent (Backend)

```bash
cd my-agent
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run typecheck  # Run TypeScript type checking
```

### Running my-agent-ui (Frontend)

```bash
cd my-agent-ui
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build for production
npm run start      # Start production server
npm run typecheck  # Run TypeScript type checking
```

---

## 🏗️ Architecture

### Two-Part Architecture

```
┌─────────────────────┐     ┌─────────────────────┐
│      my-agent       │     │    my-agent-ui       │
│   (Backend Agent)   │ ←→  │  (Next.js Frontend)  │
│                     │     │                      │
│  • DeepSeek Model   │     │  • React UI          │
│  • Eve CLI/TUI      │     │  • Chat Interface    │
│  • Channel Config   │     │  • AI Elements       │
└─────────────────────┘     └─────────────────────┘
```

### Model Providers

| Project | Model | Provider |
|---------|-------|----------|
| my-agent | `deepseek/deepseek-v4-flash` | DeepSeek |
| my-agent-ui | `nvidia/llama-nemotron-rerank-vl-1b-v2:free` | OpenRouter |

### Channel Configuration

Both projects use identical Eve channel setup:
- **localDev()** — Development on localhost
- **vercelOidc()** — Production Vercel OIDC authentication
- **placeholderAuth()** — Browser request placeholder (to be replaced with Auth.js/Clerk)

---

## 🧩 Components

### AI Elements (`my-agent-ui/components/ai-elements/`)

| Component | Purpose |
|-----------|---------|
| `conversation.tsx` | Stick-to-bottom conversation wrapper |
| `message.tsx` | Message rendering with branch support |
| `reasoning.tsx` | Chain-of-thought reasoning display |
| `tool.tsx` | Tool execution visualization |
| `code-block.tsx` | Code syntax highlighting |
| `chain-of-thought.tsx` | Step-by-step reasoning |
| `prompt-input.tsx` | User input component |
| `shimmer.tsx` | Loading state component |

### UI Components (`my-agent-ui/components/ui/`)

Built on **shadcn/ui** with **Radix UI** primitives:
- Button, Input, Textarea, Select, Dialog
- Badge, Separator, Spinner, Tooltip
- Command menu, Dropdown menu, Hover card
- Button group, Input group, Collapsible

---

## 🔧 Example Tool

The `my-agent-ui` project includes an example tool (`agent/tools/get_weather.ts`):

```typescript
import { defineTool } from "eve/tool";
import { z } from "zod";

export const getWeather = defineTool({
  name: "get_weather",
  description: "Get weather information for a location",
  parameters: z.object({
    location: z.string().describe("City name or location"),
  }),
  execute: async ({ location }) => {
    // Tool implementation
    return { location, temperature: "72°F", condition: "Sunny" };
  },
});
```

---

## 📦 Key Dependencies

### my-agent
- `eve` ^0.12.0 — Agentic framework
- `ai` 7.0.0-beta.178 — Vercel AI SDK
- `@ai-sdk/openai` ^3.0.73 — OpenAI provider
- `@vercel/connect` 0.2.2 — Vercel connection
- `zod` 4.4.3 — Schema validation

### my-agent-ui
- `next` 16.2.6 — React framework
- `react` 19.2.6 — UI library
- `tailwindcss` 4.3.0 — CSS framework
- `radix-ui` 1.4.3 — UI primitives
- `streamdown` 2.5.0 — Markdown renderer
- `motion` 12.40.0 — Animation library
- `shiki` 4.1.0 — Code syntax highlighting

---

## ⚠️ Current Status

- **my-agent**: Backend agent installed and ready for development
- **my-agent-ui**: Frontend installed with example tool added, but model integration with third-party API key needs debugging

---

## 📚 Resources

- [Eve Framework Documentation](https://eve.ai)
- [Vercel AI SDK](https://sdk.vercel.ai)
- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

---

## 📝 License

This is an experimental/learning project exploring the Eve framework for building AI agents.

---

**Note:** These projects are in early development stages. The `my-agent-ui` project requires a valid OpenRouter API key to function properly.
