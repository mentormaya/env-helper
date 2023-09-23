#!/usr/bin/env node

import { Command } from "commander";

import * as packageJson from "../package.json";
import { genEnv } from "./gen-env";

import banner from "./banner";

const program = new Command();

// creating tool
program.name("helper").description(banner).version(packageJson.version);

// adding command
program
  .command("gen-env")
  .description("Generate Sample ENV(.env.sample) from .env file.")
  .option("-s, --silent", "runs without any interaction.", false)
  .option("-n, --name <name>", "Name of env file", ".env")
  .option(
    "-N, --sample <sample_name>",
    "Name for the sample env file",
    ".env.sample"
  )
  .option(
    "-v, --values <placeholder>",
    "Default Placeholder Value",
    "YOUR_FIELD_VALUE"
  )
  .option("-d, --dry-run", "Output to the console only", false)
  .action(genEnv);

program.parse();
