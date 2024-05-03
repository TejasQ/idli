import { password } from "@inquirer/prompts";
import { writeFile } from "fs/promises";
import { configFilePath } from "../globals";

export async function onboard() {
  console.log(`🥚 Welcome to Idli: your shell copilot. Let's get you set up.`);
  const openAiApiKey = await password({
    message: `To get started, please paste your OpenAI API key.
  `,
    mask: true,
    validate: (str) => Boolean(str),
  });
  await writeFile(configFilePath, JSON.stringify({ openAiApiKey }));
}
