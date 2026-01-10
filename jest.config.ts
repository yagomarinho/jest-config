/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Config } from "jest";

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text-summary", "lcov"],
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts?(x)"],
  testEnvironment: "node",
  setupFiles: [`${__dirname}/jest.setup.js`],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
