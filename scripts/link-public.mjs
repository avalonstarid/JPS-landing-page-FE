import { existsSync } from 'node:fs';
import { cp, mkdir, rm, symlink } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, '.output', 'public');
const targetDir = path.join(rootDir, '.output', 'server', 'chunks', 'public');

if (!existsSync(publicDir)) {
  console.warn(`[link-public] Missing ${publicDir}; run "bun run build" first.`);
  process.exit(0);
}

await rm(targetDir, { recursive: true, force: true });
await mkdir(path.dirname(targetDir), { recursive: true });

try {
  await symlink(publicDir, targetDir, 'junction');
  console.log(`[link-public] Junction created: ${targetDir} -> ${publicDir}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.warn(`[link-public] Junction failed (${message}); copying instead.`);
  await cp(publicDir, targetDir, { recursive: true });
}
