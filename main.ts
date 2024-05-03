#!/usr/bin/env node
import { rm } from "fs/promises";
import { program } from "commander";
import { ask } from "./commands/ask";
import { configFilePath } from "./globals";

program
  .name("idli")
  .description(
    "An Intelligent Decision Line Interface, or IDLI for short; basically your AI shell copilot."
  );

program
  .command("ask [prompt...]")
  .description("Ask IDLI a question or for help with a command.")
  .action(ask);

program
  .command("reset")
  .description("Reset your configuration and enter a new API key.")
  .action(async () => {
    try {
      await rm(configFilePath);
    } catch {}
    ask([]);
  });

program.parse();
