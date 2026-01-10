# jest-config

This repository contains **my personal Jest configuration**, extracted from how I actually write and run tests in my projects.

It reflects my preferences around **TypeScript**, **Node.js**, and test ergonomics, shaped by real-world usage rather than generic defaults.

This is **not a one-size-fits-all setup**. It exists so I can reuse the same testing behavior across projects and avoid rethinking the same decisions every time.

---

## What this config represents

- TypeScript-first Jest setup (`ts-jest`)
- Node.js test environment
- Explicit environment loading via `dotenv`
- Modern coverage defaults (`v8`, `lcov`)
- Minimal magic, explicit behavior

The goal is to keep tests predictable, boring, and close to how the code actually runs in Node.

---

## Design choices

Some intentional decisions behind this config:

- Jest config written in **TypeScript**
- ESM-compatible setup using `import.meta.url`
- Environment variables loaded **before tests run**
- Coverage enabled by default
- No browser or DOM abstractions

This mirrors how I normally structure and reason about backend or Node-based projects.

---

## Scope

This config is shaped around:

- Node.js projects
- TypeScript codebases
- Jest + ts-jest
- Personal workflows and conventions

If your setup or preferences differ, this config probably shouldn’t be used as-is.

---

## Notes

This configuration will evolve as my testing habits evolve.

It is intentionally opinionated and intentionally minimal.

If it’s useful to someone else, great — but that’s not the primary goal.

---

## License

MIT
