// import { defineAgent } from "eve";

// export default defineAgent({
//   model: "deepseek/deepseek-v4-flash",
// });

import {createOpenAI} from "@ai-sdk/openai";
import { defineAgent } from "eve";

const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export default defineAgent({
  model: openrouter("nvidia/llama-nemotron-rerank-vl-1b-v2:free")
})