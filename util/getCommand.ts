import os from "os";
import { Config } from "../types";

type Options = {
  config: Config;
  prompt: string;
};

export async function getCommand({ config, prompt }: Options) {
  return await fetch("https://tej.as/api/askIdli", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.openAiApiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4-turbo",
      prompt,
      os: {
        type: os.type(),
        platform: os.platform(),
        release: os.release(),
        arch: os.arch(),
      },
    }),
  }).then((r) => r.text());
}
