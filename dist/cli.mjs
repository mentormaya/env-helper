#!/usr/bin/env node
import{a as n,b as o}from"./chunk-6NYTGX4U.mjs";import{a as r}from"./chunk-FXVTZ7A5.mjs";import{c as a}from"./chunk-M2DB74WI.mjs";import"./chunk-VZATVPYO.mjs";import{Command as m}from"commander";var e=new m;e.name("helper").description(o).version(n);e.command("gen-env").description("Generate Sample ENV(.env.sample) from .env file.").option("-s, --silent","runs without any interaction.",!1).option("-n, --name <name>","Name of env file",".env").option("-N, --sample <sample_name>","Name for the sample env file",".env.sample").option("-v, --values <placeholder>","Default Placeholder Value",a[0]).option("-d, --dry-run","Output to the console only",!1).action(r);e.parse();
