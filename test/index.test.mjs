/**
 * Copyright 2026 klodr
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, expect, it } from "vitest";
import plugin from "../src/index.js";

describe("plugin entry point", () => {
  it("exposes meta with name and version", () => {
    expect(plugin.meta).toBeDefined();
    expect(typeof plugin.meta.name).toBe("string");
    expect(typeof plugin.meta.version).toBe("string");
    expect(plugin.meta.name).toBe("eslint-plugin-security-mcp");
  });

  it("exposes the no-encoded-prompt-injection rule with a working RuleModule shape", () => {
    const rule = plugin.rules["no-encoded-prompt-injection"];
    expect(rule).toBeDefined();
    expect(rule.meta).toBeDefined();
    expect(typeof rule.create).toBe("function");
    expect(rule.meta.type).toBe("problem");
  });

  it("exposes a recommended flat-config preset that enables the rule", () => {
    const recommended = plugin.configs.recommended;
    expect(recommended).toBeDefined();
    expect(recommended.plugins["security-mcp"]).toBe(plugin);
    expect(recommended.rules["security-mcp/no-encoded-prompt-injection"]).toBe("error");
  });
});
