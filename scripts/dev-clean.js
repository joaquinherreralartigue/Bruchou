const { existsSync, rmSync } = require("node:fs");
const { spawn } = require("node:child_process");
const { join } = require("node:path");

const root = process.cwd();
const nextDir = join(root, ".next");

if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
}

const turboDir = join(root, ".turbo");
if (existsSync(turboDir)) {
  rmSync(turboDir, { recursive: true, force: true });
}

const child = spawn(
  process.platform === "win32" ? "node.exe" : "node",
  [join(root, "node_modules", "next", "dist", "bin", "next"), "dev", "--hostname", "127.0.0.1", "--port", process.env.PORT || "3000"],
  { stdio: "inherit", cwd: root, env: process.env },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
