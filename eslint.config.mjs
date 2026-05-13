/**
 * Copyright 2026 klodr
 * SPDX-License-Identifier: Apache-2.0
 */

import prettierConfig from "eslint-config-prettier";
import unicorn from "eslint-plugin-unicorn";
import mcpSecurity from "./src/index.js";

export default [
  {
    ignores: ["node_modules/", "coverage/", "dist/"],
  },
  // eslint-plugin-unicorn — flat/recommended baseline. Adoption follows
  // the 3-pass plan: this is pass 1 (recommended ON, opinionated rules
  // arbitrated below). Pass 2 collects the abbreviations actually used
  // across klodr/* and produces a domain `allowList`; pass 3 re-enables
  // `prevent-abbreviations` with that allowList.
  unicorn.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      // CommonJS is intentional in src/ (`"type": "commonjs"` in
      // package.json). The plugin entry-point is loaded by ESLint via
      // `require("eslint-plugin-security-mcp")` and re-exports a CJS
      // module. Switching to ESM would force a stand-alone build step
      // and break the dogfooding lint of `src/`.
      "unicorn/prefer-module": "off",
      // Pass 3: domain-tuned allowList for klodr/* (cross-repo probe).
      // The shape below allows the abbreviations that ARE idiomatic
      // in JS/TS + our MCP SDK conventions (Express `req`/`res`,
      // tool `args`, options bag `opts`, async catch `err`, etc.).
      // Everything not in this list still flags — non-idiomatic
      // shortenings like `padLen` / `alphaLen` were renamed inline
      // to `padLength` / `alphaLength` in the same pass.
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            args: false,
            arg: false,
            opts: false,
            msg: false,
            err: false,
            res: false,
            val: false,
            tmp: false,
            env: false,
            pkg: false,
            obj: false,
            params: false,
            ext: false,
          },
        },
      ],
      // `null` is intentional in the rule's helper module: the doc
      // contract on `tryDecodeBase64AsText` / `findInjectionKeyword`
      // is "returns string OR null on no-match". Returning `undefined`
      // would conflate "explicit absence" with "function returned
      // without a value" and is observable through the test suite's
      // `.toBeNull()` assertions. The rule is also off in unicorn's
      // own `unopinionated` preset for the same reason: third-party
      // APIs (React, Prisma, the AST itself) hand us `null` and we
      // pass it back through unchanged.
      "unicorn/no-null": "off",
    },
  },
  // Apply our own rule to ourselves (dogfooding) — excluded for test/
  // which intentionally contain encoded strings as fixtures.
  {
    files: ["src/**/*.js"],
    plugins: { "security-mcp": mcpSecurity },
    rules: {
      "security-mcp/no-encoded-prompt-injection": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        Buffer: "readonly",
        console: "readonly",
        process: "readonly",
        module: "writable",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
    },
  },
  // Must come last: disables ESLint rules that would conflict with Prettier.
  prettierConfig,
];
