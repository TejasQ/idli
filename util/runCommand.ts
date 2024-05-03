import { Ora } from "ora";

type Options = {
  spinner: Ora;
  command: string;
};

export async function runCommand({ command, spinner }: Options) {
  spinner.stop();
  const { exec } = await import("child_process");
  const childProcess = exec(command, (error, stdout, stderr) => {
    if (error) {
      spinner.fail(`Failed to run command: ${error.message}`);
      return;
    }
    spinner.succeed(`Command ran successfully.`);
  });
  childProcess.stdout?.pipe(process.stdout);
  childProcess.stderr?.pipe(process.stderr);
}
