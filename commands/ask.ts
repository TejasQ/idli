import { input, select } from "@inquirer/prompts";
import Ora from "ora";
import { getCommand } from "../util/getCommand";
import { runCommand } from "../util/runCommand";
import { copyCommand } from "../util/copyCommand";
import { readFile } from "fs/promises";
import { onboard } from "../util/onboard";
import { Config } from "../types";
import { configFilePath } from "../globals";

export async function ask(prompt: string[]) {
  const spinner = Ora();
  let actualPrompt = prompt.join(" ");
  let config: Config = {};

  try {
    config = JSON.parse(await readFile(configFilePath, "utf-8"));
  } catch (e) {
    await onboard();
    return ask(prompt);
  }

  if (!actualPrompt) {
    spinner.stop();
    actualPrompt = await input({ message: "What would you like to do?" });
  }

  spinner.start("Thinking...");
  const command = await getCommand({ config, prompt: actualPrompt });
  spinner.succeed(`Got back command: 
  > ${command}
`);

  const nextStep = await select({
    message: "What would you like to do?",
    choices: [
      {
        value: "run",
        description: "Actually run the command.",
        name: "Run",
      },
      {
        value: "copy",
        description:
          "Copy this command to your clipboard for fine-tuning or safekeeping.",
        name: "Copy",
      },
      { value: "exit", description: "Just exit.", name: "Nothing" },
    ],
  });

  switch (nextStep) {
    case "run":
      await runCommand({ command, spinner });
      break;
    case "copy":
      await copyCommand({ command, spinner });
      break;
    default:
      process.exit(0);
  }
}
