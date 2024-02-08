#!/usr/bin/env bun

import { spawn } from "node:child_process";

let args = process.argv.slice(2);

let startupScript = require.resolve("../setup.cjs");

// async function startProxy(port: number) {
//   let { default: app } = await import("./proxy");

//   return app({ port });
// }

switch (args[0]) {
  case "run": {
    console.log(`Starting wafer dev...`);

    // await startProxy(42069);

    let val = spawn(args[1], args.slice(2), {
      cwd: process.cwd(),
      stdio: ["inherit", "inherit", "inherit"],
      env: {
        ...process.env,
        NODE_OPTIONS: `--require ${startupScript}`,
        GLOBAL_AGENT_HTTP_PROXY: `http://127.0.0.1:42069`,
        WAFER_DEV: "true",
      },
    });

    console.log({ val });

    break;
  }
  case "version": {
    console.log(`wafer - v${require("../package.json").version}`);
    break;
  }
  default:
    throw new Error("Ran wafer without a command");
}
