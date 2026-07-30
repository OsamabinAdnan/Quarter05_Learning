# Class 09 — Model Context Protocol (MCP) Architecture and OpenAI Agents SDK Integration

## [05_capabilities_and_transport](https://github.com/panaversity/learn-agentic-ai/tree/main/03_ai_protocols/01_mcp/05_capabilities_and_transport) (Cont.)

### [06_roots](https://github.com/panaversity/learn-agentic-ai/tree/main/03_ai_protocols/01_mcp/05_capabilities_and_transport/06_roots)

---

## 1. Macro-Economic Context: Agentic AI as a National Accelerator

The session convened on August 13, 2025, represents a decisive moment for Pakistan's 78th Independence anniversary. At Panaversity, we view Agentic AI not merely as a technological shift, but as a "jump-start technique" essential for national development and technical sovereignty. For a nation to become economically robust and *Ummah-centric*, it must pivot away from the constraints of traditional industrial cycles. Agentic AI allows us to leapfrog traditional economic hurdles by providing the infrastructure for a technically sovereign *Agentic Cloud*.

### Strategic Economic Comparison

To understand the urgency, we must evaluate IT against traditional sectors through a lens of scalability and capital efficiency:

| Economic Sector | Growth Constraint | Marginal Cost & Economic Impact |
|---|---|---|
| **Agriculture & Manufacturing** | Limited by physical land, resource availability, and slow industrial cycle times. | High marginal costs; susceptible to global commodity volatility. |
| **Import-Based Economy** | Creates a continuous drain on foreign exchange reserves. | Leads to national debt and long-term economic instability. |
| **Agentic AI & IT** | Scalability is virtually infinite, limited only by human capital and compute. | **Near-zero marginal cost** once the infrastructure is built. High-speed participation in the global digital economy. |

**Vision Statement:** Panaversity's mission is to secure Pakistan's economic future through the *Agentic Cloud* series. This leap requires the adoption of the Model Context Protocol (MCP) as the gold standard for interoperability, ensuring our national AI infrastructure is not siloed but globally competitive and standardized.

---

## 2. MCP Technical Foundations & Protocol Schema

The Model Context Protocol (MCP) is the architectural necessity required to solve the fragmentation of the AI ecosystem. It provides a standardized communication layer, allowing disparate AI agents to interface with diverse servers without custom, brittle integrations.

### Communication Layer (JSON-RPC)

MCP utilizes **JSON-RPC** as its foundational communication protocol. A critical technical nuance is the usage of the **JSON response flag**. When `json_response=True`, the agent calls a server via HTTP and expects a final, structured output rather than a stream. This is vital for operations where the agent requires a definitive data packet to complete its reasoning cycle before proceeding.

### Transport Mode Comparison

The choice of transport dictates the functional capabilities of the agent-server relationship:

| Transport Mode | Characteristics | Architect's Analysis |
|---|---|---|
| **Standard I/O** | Communication via standard input/output streams. | Ideal for local development and CLI-based tools. |
| **Stateful HTTP** | Maintains a persistent, continuous session. | Essential for advanced features. Supports pings, real-time notifications, and progress updates. |
| **Stateless HTTP** | Independent requests without a persistent state. | Highly scalable but **structurally limited**. Because there is no persistent session, the server cannot "push" data; therefore, pings, notifications, and progress updates fail. |

### The Connection Handshake

The MCP handshake is a three-step initialization workflow designed to ensure protocol versioning and capability negotiation:

1. **Initialize Request** — The client proposes capabilities and protocol versions.
2. **Initialize Response** — The server acknowledges and confirms supported features.
3. **Initialize Notification** — A final confirmation that the connection is active.

**Architect's Note:** During or immediately following this handshake, the `listRoots` callback is triggered to establish environment boundaries. Furthermore, the protocol uses *Pings* to validate connection integrity before the agent commits to high-cost computational operations.

### MCP Schema

You can read detail about MCP schema from [mcp_schema_2025-06-18](https://github.com/panaversity/learn-agentic-ai/tree/main/03_ai_protocols/01_mcp/05_capabilities_and_transport/mcp_schema_2025-06-18)

---

## 3. Advanced MCP Primitives: Roots, Prompts, and Resources

MCP goes beyond basic tool-calling, providing a framework for *Context Engineering* and strict environment sandboxing.

### Roots & Local Path Resolution

Large Language Models (LLMs) frequently fail when editing files by generating absolute local paths (e.g., `/Users/admin/projects/...`) that are irrelevant to the server environment.

- **The Solution:** The *Roots* primitive defines strict directory boundaries (e.g., `/Code` or `/Downloads`).
- **The Mechanism:** Through the `listRoots` callback, the client constrains the LLM to a specific workspace.
- **Dependency Injection:** In **FastMCP**, the `Context` object acts as a *special dependency injection*, allowing the server to access session-specific data, such as the roots defined by the client, to resolve paths safely at runtime.

### Dynamic Prompts

MCP offloads *Context Engineering* to the server via `list_prompts` and `get_prompt`. This allows the server to return a complete list of `User` and `Assistant` messages. By passing dynamic arguments — such as a `username` parameter — developers can inject personalized system instructions at runtime, ensuring the agent adapts its persona and instructions based on the active session.

### Community Resources

While *Tools* and *Prompts* are mature, the *Resources* primitive is currently in the **Pull Request (PR) stage** for the OpenAI Agents SDK. While the protocol supports them for exposing data (like database schemas or documentation), native integration within the OpenAI SDK is currently lagging and requires custom implementation for the time being.

---

## 4. [OpenAI Agents SDK Integration](https://github.com/panaversity/learn-agentic-ai/tree/main/03_ai_protocols/01_mcp/06_openai_agents_sdk_integration) & Performance Optimization

### Module Overview: OpenAI Agents SDK + MCP Integration

This module covers connecting OpenAI Agents to external context via MCP's `streamable-http` transport, aligned with the **DACA design pattern** (Decoupling, Agility, Composability, Autonomy).

MCP is not a competing standard — it is a powerful **complement** that makes agentic frameworks more modular, testable, and extensible.

#### DACA-Aligned Architecture Benefits

- **Decoupling** — Agent logic is separated from tool implementation.
- **Interoperability** — Works across frameworks (OpenAI, LangChain, etc.).
- **Independent Scaling** — Tools and agents can scale independently.
- **Open Standards at the Edges** — Use open standards (MCP) to connect to managed services or closed frameworks at the boundaries.

#### Module Breakdown

| Module | Focus |
|---|---|
| `01_agent_mcp_http` | Connect agent to a single MCP server via streamable-http |
| `02_caching_tool_lists` | Optimize with tool list caching |
| `03_static_tool_filter` | Filter tools with allow/block lists |
| `04_dynamic_tool_filters` | Context-aware runtime filtering |
| `05_prompt_server` | Serve prompts/tools from a dedicated MCP server |
| `06_agent_with_multiple_mcp_servers` | Connect agent to multiple servers |
| `shared_mcp_server` | Reusable shared MCP server implementation |

**Key Learning Outcomes:** Decoupling, interoperability, scalability, extensibility, and DACA alignment. By the end, learners will understand how to extend OpenAI Agents via the Model Context Protocol with advanced filtering and caching, ready for production use.

---

### Integration Workflow

The OpenAI Agents SDK acts as a native MCP host/client, enabling developers to use **FastMCP** for server-side logic while maintaining a high-level agentic interface. Integration is achieved via the `MCP_Server_Streamable_HTTP` class, configured with `Streamable_HTTP_Params` (server URL and timeout settings). This allows the agent to treat the MCP server as a native extension of its own toolset.

### The Round-Trip Bottleneck

By default, an agent suffers from significant latency because it performs a *double-call* to `list_tools`: once **before** the query to identify available capabilities, and once **after** the query to refresh the state. This repetitive round-trip is the primary source of performance degradation in production environments.

### Caching Strategy

To mitigate this, developers must set `cache_tools_list = True`. This stores the tool definitions locally, effectively making the agent "blind" to any server-side changes until the cache is explicitly refreshed. In environments where toolsets change — such as adding a new tool to a running FastMCP server — the `invalidate_tools_cache` mechanism must be invoked to force the agent to re-sync with the server.

---

## 5. Static & Dynamic Tool Filtering Strategies

*Context Overload* is the enemy of reasoning. Exposing an LLM to hundreds of tools (e.g., a GitHub MCP server with 200+ endpoints) degrades performance and increases hallucination rates.

### Static Filtering

Using `create_static_tool_filter`, architects can explicitly **Allow** or **Block** specific tools by name. This reduces the LLM's cognitive load by ensuring it only perceives tools relevant to its specific domain (e.g., a *DevOps Agent* only seeing PR and commit tools).

### Dynamic Filtering Architecture

Dynamic filtering acts as a Python-based *Boolean Gatekeeper* at runtime. It uses the `ToolFilterContext`, which provides an **Extended Context** consisting of three components:

- **Active Agent** — The specific agent instance making the request.
- **Server Name** — The origin server of the tool.
- **Local Context** — The runtime data, including session tokens or user permissions.

This allows for sophisticated permissioning: for example, the filter can return `False` for a *Delete Database* tool if the `Local Context` does not provide a valid administrator token, or if the `Active Agent` is flagged as a *Guest*.

---

## 6. Panaversity Certification Roadmap & Practice Guide

Mastery of Agentic AI requires a transition from theoretical knowledge to production-grade implementation. The Panaversity roadmap is designed to validate this expertise.

### The Five-Course Certification Path

- **Python 1001** — Fundamentals of programming and n8n workflow automation.
- **Advanced Python 2001** — Mastery of Steps 12–17 and OpenAI Agent SDK Level 1.
- **MCP 210** — Building Effective Agents, based on the Anthropic Research Paper and the MCP Exam.
- **Agentic Web 220** — Agent-to-Agent (A2A) protocols and web-scale interoperability.
- **Scaleable Apps 3001/310** — Cloud Native architecture and Dapr integration.

### Implementation & Practice Workflow

1. **Step 1** — Validate all server-side logic and JSON-RPC responses via Postman or the basic MCP Inspector.
2. **Step 2** — Develop a custom client-side implementation to master the handshake and transport nuances.
3. **Step 3** — Perform final integration with the OpenAI Agent SDK to build an autonomous, production-ready agent.

---

**Final Closing:** Theoretical assumptions are the enemy of production. In the Agentic Cloud era, professional validation through exams is the only way to ensure your systems are stable, scalable, and secure. We do not build on assumptions; we build on validated learning.
