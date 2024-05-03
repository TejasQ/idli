import { Ora } from "ora";

type Options = {
  spinner: Ora;
  command: string;
};

export async function copyCommand({ command, spinner }: Options) {
  // @ts-ignore
  const clipboard = await import("node-clipboardy");
  clipboard.default.writeSync(command);
  spinner.succeed("Command copied to clipboard.");
}
