// Type declarations for the few Node built-ins that build-time code uses (src/lib/github.ts).
// The project does not depend on @types/node; declare only what is used.
declare const process: { env: Record<string, string | undefined> };
declare module "node:fs" {
  export function readFileSync(path: string, encoding: "utf8"): string;
  export function writeFileSync(path: string, data: string): void;
  export function mkdirSync(path: string, options?: { recursive?: boolean }): void;
  export function existsSync(path: string): boolean;
}
