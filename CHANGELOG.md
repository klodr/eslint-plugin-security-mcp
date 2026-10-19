# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0](https://github.com/klodr/eslint-plugin-security-mcp/compare/v0.2.0...v0.3.0) (2026-10-19)


### ⚠ BREAKING CHANGES

* Node 22 is no longer supported; Node >= 24.18.1 is required.

### Added

* require node 24.18.1 and test on node 24 and 26 ([#114](https://github.com/klodr/eslint-plugin-security-mcp/issues/114)) ([2ef3eba](https://github.com/klodr/eslint-plugin-security-mcp/commit/2ef3eba3d5448101973210c0f093762244222506))


### Fixed

* **ci:** add top-level permissions: contents: read to auto-merge ([#39](https://github.com/klodr/eslint-plugin-security-mcp/issues/39)) ([e5eaeed](https://github.com/klodr/eslint-plugin-security-mcp/commit/e5eaeed3ec937f956f2638d7c3942c76b716c19e))
* **ci:** align auto-merge filter on klodr-release-please[bot] ([#22](https://github.com/klodr/eslint-plugin-security-mcp/issues/22)) ([97d0b19](https://github.com/klodr/eslint-plugin-security-mcp/commit/97d0b193ef903743927d2875f650b1c6a25e130e))
* **ci:** drop paths filter on actions-pinned ([#20](https://github.com/klodr/eslint-plugin-security-mcp/issues/20)) ([9811b42](https://github.com/klodr/eslint-plugin-security-mcp/commit/9811b427ae884301aefa16bc4ccfdc378c29b548))
* **ci:** repin reusable auto-merge to a reachable SHA ([#24](https://github.com/klodr/eslint-plugin-security-mcp/issues/24)) ([f8a77e1](https://github.com/klodr/eslint-plugin-security-mcp/commit/f8a77e10d340cc4255d6393a8ad98a545b35c09e))
* **deps:** clear all open Dependabot security alerts ([#84](https://github.com/klodr/eslint-plugin-security-mcp/issues/84)) ([cba5c83](https://github.com/klodr/eslint-plugin-security-mcp/commit/cba5c83b3c1ea6454c3eddedacecd459f81548a8))
* **deps:** clear every OSV finding blocking the required scan ([#110](https://github.com/klodr/eslint-plugin-security-mcp/issues/110)) ([a8497ac](https://github.com/klodr/eslint-plugin-security-mcp/commit/a8497acb6a69e6c6c217956614d5ebb7d41384da))
* **deps:** débloquer OSV-Scanner en dépinnant les overrides vulnérables ([#94](https://github.com/klodr/eslint-plugin-security-mcp/issues/94)) ([4c19ae1](https://github.com/klodr/eslint-plugin-security-mcp/commit/4c19ae1869948cf5e40d7c466a363df7619457fd))
* **lint:** drain CR findings + valid globs syntax ([#17](https://github.com/klodr/eslint-plugin-security-mcp/issues/17)) ([cff85f1](https://github.com/klodr/eslint-plugin-security-mcp/commit/cff85f1d12e2ff78ef83983552567288199354c8))
* **pinact:** dot-prefix config + recursive action globs ([#19](https://github.com/klodr/eslint-plugin-security-mcp/issues/19)) ([6cc71e3](https://github.com/klodr/eslint-plugin-security-mcp/commit/6cc71e3294cfe79b524044000cafb4f9fd258a81))
* **pre-commit:** call ./node_modules/.bin/lint-staged directly ([#32](https://github.com/klodr/eslint-plugin-security-mcp/issues/32)) ([7877397](https://github.com/klodr/eslint-plugin-security-mcp/commit/78773976fde605f3f8d2ff98f0a691a011334c88))
* **rule:** catch short, embedded, and pseudo-SRI base64 payloads ([#38](https://github.com/klodr/eslint-plugin-security-mcp/issues/38)) ([044f04b](https://github.com/klodr/eslint-plugin-security-mcp/commit/044f04b151fdabdf051b83802aa3728320aff5dd))
* **setup:** drop husky || true fallback from prepare script ([#27](https://github.com/klodr/eslint-plugin-security-mcp/issues/27)) ([8d64deb](https://github.com/klodr/eslint-plugin-security-mcp/commit/8d64deb5873319b00499c3b16e88ccebc152145a))


### Changed

* add leak-detect caller workflow ([#33](https://github.com/klodr/eslint-plugin-security-mcp/issues/33)) ([655c6c2](https://github.com/klodr/eslint-plugin-security-mcp/commit/655c6c21cf44e6ab1b792b0ed535d7020ab994d8))
* add pinact config + actions-pinned CI gate ([#15](https://github.com/klodr/eslint-plugin-security-mcp/issues/15)) ([5b437f7](https://github.com/klodr/eslint-plugin-security-mcp/commit/5b437f7daa43394428b81a312f01412650cbad94))
* add prettier + eslint-config-prettier ([#26](https://github.com/klodr/eslint-plugin-security-mcp/issues/26)) ([3179f64](https://github.com/klodr/eslint-plugin-security-mcp/commit/3179f64fed84ba4e1c66f9bedf8ad95d3e95bce6))
* add Verify published release workflow ([#37](https://github.com/klodr/eslint-plugin-security-mcp/issues/37)) ([e736ff0](https://github.com/klodr/eslint-plugin-security-mcp/commit/e736ff0ba9d7f224dc74fa08d9951652a9a6af4c))
* add yamllint+markdownlint+commitlint pack ([#14](https://github.com/klodr/eslint-plugin-security-mcp/issues/14)) ([6495664](https://github.com/klodr/eslint-plugin-security-mcp/commit/6495664f823cffcd839cff5017b71630cfd60579))
* auto-approve dependabot minor and patch updates ([#100](https://github.com/klodr/eslint-plugin-security-mcp/issues/100)) ([e66acd5](https://github.com/klodr/eslint-plugin-security-mcp/commit/e66acd5349e9b45ea5ad6d72100b271780c3dbcb))
* bump actions/attest from 4.1.0 to 4.1.1 ([#68](https://github.com/klodr/eslint-plugin-security-mcp/issues/68)) ([e10ba8d](https://github.com/klodr/eslint-plugin-security-mcp/commit/e10ba8dc749a89e864826fe1b04f5b72a71a5187))
* bump actions/attest-build-provenance from 4.1.0 to 4.1.1 ([#70](https://github.com/klodr/eslint-plugin-security-mcp/issues/70)) ([eb1d153](https://github.com/klodr/eslint-plugin-security-mcp/commit/eb1d153f8a7c1e2045fdb69c6a1b7dcd3bc78858))
* bump actions/checkout from 4.2.2 to 6.0.2 ([#21](https://github.com/klodr/eslint-plugin-security-mcp/issues/21)) ([0800aca](https://github.com/klodr/eslint-plugin-security-mcp/commit/0800aca277f9c3b6ec67cec4a0cd901ba94a1ac4))
* bump actions/checkout from 6.0.2 to 7.0.0 ([#62](https://github.com/klodr/eslint-plugin-security-mcp/issues/62)) ([bfa0b46](https://github.com/klodr/eslint-plugin-security-mcp/commit/bfa0b46699d30f270a89a69e59615d710f51c06c))
* bump actions/create-github-app-token from 3.1.1 to 3.2.0 ([#48](https://github.com/klodr/eslint-plugin-security-mcp/issues/48)) ([8c5e1e4](https://github.com/klodr/eslint-plugin-security-mcp/commit/8c5e1e4a7d938f38205e6ee260a0a75cb4867d09))
* bump github/codeql-action from 4.35.4 to 4.35.5 ([#49](https://github.com/klodr/eslint-plugin-security-mcp/issues/49)) ([ce3a2d8](https://github.com/klodr/eslint-plugin-security-mcp/commit/ce3a2d8bb770f303cc23032bdea44293090500fb))
* bump github/codeql-action/analyze from 4.35.5 to 4.36.3 ([#64](https://github.com/klodr/eslint-plugin-security-mcp/issues/64)) ([dc5f3c9](https://github.com/klodr/eslint-plugin-security-mcp/commit/dc5f3c9cd3fcd400d0c28952275bd332fbc8978f))
* bump github/codeql-action/upload-sarif from 4.35.5 to 4.36.3 ([#69](https://github.com/klodr/eslint-plugin-security-mcp/issues/69)) ([128544a](https://github.com/klodr/eslint-plugin-security-mcp/commit/128544a49b787e7165363e9c8659df8321d60ee1))
* bump gitleaks/gitleaks-action from 2.3.9 to 3.0.0 ([#55](https://github.com/klodr/eslint-plugin-security-mcp/issues/55)) ([cefb1e1](https://github.com/klodr/eslint-plugin-security-mcp/commit/cefb1e18a8d465874e7b07cf78ff72d17f74398d))
* bump pinned node 22.x to 22.23.1 ([#67](https://github.com/klodr/eslint-plugin-security-mcp/issues/67)) ([d8e4c36](https://github.com/klodr/eslint-plugin-security-mcp/commit/d8e4c36a3bc2ad00a7bcbe3b23bbffe8547c234d))
* bump reusable SHAs to current klodr/.github main (orphan fix) ([#46](https://github.com/klodr/eslint-plugin-security-mcp/issues/46)) ([77b0607](https://github.com/klodr/eslint-plugin-security-mcp/commit/77b0607ada567095b34022288f47dd105118e53e))
* bump suzuki-shunsuke/pinact-action from 2.0.0 to 3.0.0 ([#54](https://github.com/klodr/eslint-plugin-security-mcp/issues/54)) ([963bbb8](https://github.com/klodr/eslint-plugin-security-mcp/commit/963bbb8cf4178f464819c0eae81762c777cc9e6b))
* bump the github-actions group across 1 directory with 10 updates ([#102](https://github.com/klodr/eslint-plugin-security-mcp/issues/102)) ([44b12a7](https://github.com/klodr/eslint-plugin-security-mcp/commit/44b12a773be18bd492a5221c1f7ab9ab09892c37))
* bump the github-actions group across 1 directory with 7 updates ([#113](https://github.com/klodr/eslint-plugin-security-mcp/issues/113)) ([8377804](https://github.com/klodr/eslint-plugin-security-mcp/commit/8377804569c7dcc6cd10a2b75d442d56481b256c))
* **ci,deps:** codecov-action v7 pin + clear OSV vulnerabilities ([#65](https://github.com/klodr/eslint-plugin-security-mcp/issues/65)) ([1f0252c](https://github.com/klodr/eslint-plugin-security-mcp/commit/1f0252c07aef72cc3f071ef3efa0693cadbcc945))
* **ci:** reduce release-please trigger to 1 workflow_run ([#43](https://github.com/klodr/eslint-plugin-security-mcp/issues/43)) ([3eb2548](https://github.com/klodr/eslint-plugin-security-mcp/commit/3eb2548dbea12bddc586530d8dcb6cda7c9d50fb))
* **deps-dev:** bump the dev-dependencies group across 1 directory with 7 updates ([#66](https://github.com/klodr/eslint-plugin-security-mcp/issues/66)) ([c369150](https://github.com/klodr/eslint-plugin-security-mcp/commit/c369150060720c5b80b230843dd0872c6d6ead43))
* **deps-dev:** bump the dev-dependencies group with 2 updates ([#71](https://github.com/klodr/eslint-plugin-security-mcp/issues/71)) ([f8aa4ee](https://github.com/klodr/eslint-plugin-security-mcp/commit/f8aa4eea74c37310575e68be02ee09c248178af6))
* **deps-dev:** bump vitest and @vitest/coverage-v8 to 5.0.3 together ([#112](https://github.com/klodr/eslint-plugin-security-mcp/issues/112)) ([41749d9](https://github.com/klodr/eslint-plugin-security-mcp/commit/41749d9cf8b771c64cdd0ba95d58993fd0c5517c))
* fix four workflow errors ([#35](https://github.com/klodr/eslint-plugin-security-mcp/issues/35)) ([6a12c1a](https://github.com/klodr/eslint-plugin-security-mcp/commit/6a12c1a53519c6dc9bba1a06cd3913e01c20aada))
* **husky:** adopt shared pre-push template ([#16](https://github.com/klodr/eslint-plugin-security-mcp/issues/16)) ([7588781](https://github.com/klodr/eslint-plugin-security-mcp/commit/758878116202254a55409be7759113f85f3024cd))
* **leak-detect:** bump reusable to skip bot-authored PRs ([#51](https://github.com/klodr/eslint-plugin-security-mcp/issues/51)) ([cc3342e](https://github.com/klodr/eslint-plugin-security-mcp/commit/cc3342e76506ec157b25954289071f0cc30cd376))
* **leak-detect:** bump to inline-JWT reusable + drop client-id ([#47](https://github.com/klodr/eslint-plugin-security-mcp/issues/47)) ([27cac4e](https://github.com/klodr/eslint-plugin-security-mcp/commit/27cac4ea93f2337925236d72ebfb5e345a37c8c1))
* **lint-staged:** add JSON / JSONC / JSON5 glob ([#29](https://github.com/klodr/eslint-plugin-security-mcp/issues/29)) ([00785ab](https://github.com/klodr/eslint-plugin-security-mcp/commit/00785abdc7371ec5880dc459baee9db5e0598884))
* **lint:** adopt eslint-plugin-unicorn (recommended) ([#41](https://github.com/klodr/eslint-plugin-security-mcp/issues/41)) ([23de9cd](https://github.com/klodr/eslint-plugin-security-mcp/commit/23de9cd9d5bd0532fea7a1da050e5fb5905af912))
* **lint:** reactivate 6 markdownlint rules previously disabled ([#36](https://github.com/klodr/eslint-plugin-security-mcp/issues/36)) ([7c694dc](https://github.com/klodr/eslint-plugin-security-mcp/commit/7c694dc7ab6e5d6225292f6ffdc73f46b93efb90))
* migrate ci.yml to reusable-node-ci (pilot) ([#25](https://github.com/klodr/eslint-plugin-security-mcp/issues/25)) ([0dd1fdf](https://github.com/klodr/eslint-plugin-security-mcp/commit/0dd1fdf6d4968ea448ab7d592ff24bf088da04be))
* **node:** add packageManager + .nvmrc + .npmrc engine-strict ([#30](https://github.com/klodr/eslint-plugin-security-mcp/issues/30)) ([8d0fe06](https://github.com/klodr/eslint-plugin-security-mcp/commit/8d0fe06dc336212b275a69777bb152e108d25c65))
* **pre-commit:** warn on missing system tooling (yamllint) ([#28](https://github.com/klodr/eslint-plugin-security-mcp/issues/28)) ([7d9151e](https://github.com/klodr/eslint-plugin-security-mcp/commit/7d9151e6236484379537c2d97d2be0d92a99e436))
* **pre-push:** sync with canonical template ([#31](https://github.com/klodr/eslint-plugin-security-mcp/issues/31)) ([3edf01e](https://github.com/klodr/eslint-plugin-security-mcp/commit/3edf01e751bb6e7ade18ec599387973d50f027a1))

## [0.2.0](https://github.com/klodr/eslint-plugin-security-mcp/compare/v0.1.0...v0.2.0) (2026-05-10)

### Added

* initial commit ([504eb2f](https://github.com/klodr/eslint-plugin-security-mcp/commit/504eb2fb371e3dd794e8f94ef6a22e4e721f09b8))

### Changed

* add auto-merge caller for release-please PRs ([#12](https://github.com/klodr/eslint-plugin-security-mcp/issues/12)) ([985934b](https://github.com/klodr/eslint-plugin-security-mcp/commit/985934b108feedf0971fdd09379c0b58c3ef1eea))
* add release-please workflow for automated releases ([#5](https://github.com/klodr/eslint-plugin-security-mcp/issues/5)) ([6681126](https://github.com/klodr/eslint-plugin-security-mcp/commit/66811268fa8ab8e1cecd9736e0bef6f1e5fdedb8))
* apply klodr hardening baseline (workflows, rulesets, configs) ([#1](https://github.com/klodr/eslint-plugin-security-mcp/issues/1)) ([b3a55ed](https://github.com/klodr/eslint-plugin-security-mcp/commit/b3a55edbc08d44da14d9d0f6630482b93476d632))
* bump github/codeql-action from 4.35.3 to 4.35.4 ([#2](https://github.com/klodr/eslint-plugin-security-mcp/issues/2)) ([1f93dce](https://github.com/klodr/eslint-plugin-security-mcp/commit/1f93dce3b44e253085ae4d184a050ff724cf50b0))
* **dependabot:** use chore(deps) prefix for Conventional Commits ([#6](https://github.com/klodr/eslint-plugin-security-mcp/issues/6)) ([3b6bfc4](https://github.com/klodr/eslint-plugin-security-mcp/commit/3b6bfc4face5eb7b4009e2ccc018e55d3db6bf66))
* **deps-dev:** bump eslint and lint-staged majors ([#3](https://github.com/klodr/eslint-plugin-security-mcp/issues/3)) ([1fe6352](https://github.com/klodr/eslint-plugin-security-mcp/commit/1fe635245fcaa4f3a24fc45f8bb11a8317f9bf03))
* **deps:** bump actions/github-script SHA ([#8](https://github.com/klodr/eslint-plugin-security-mcp/issues/8)) ([01bc443](https://github.com/klodr/eslint-plugin-security-mcp/commit/01bc443c96e104e21695c076f4fce4cd6daef562))
* drop node 20, bump engines, add codecov via composites ([#4](https://github.com/klodr/eslint-plugin-security-mcp/issues/4)) ([28fd5a9](https://github.com/klodr/eslint-plugin-security-mcp/commit/28fd5a93a2b5c781889caea5d3848376ba28be4f))
* extract rule helpers + doc fix ESLint 10.3.0+ ([#10](https://github.com/klodr/eslint-plugin-security-mcp/issues/10)) ([6ead0f3](https://github.com/klodr/eslint-plugin-security-mcp/commit/6ead0f31a03a26346154a604ceabb2a908b7db2e))
* rename package to eslint-plugin-security-mcp ([#7](https://github.com/klodr/eslint-plugin-security-mcp/issues/7)) ([f125467](https://github.com/klodr/eslint-plugin-security-mcp/commit/f125467631b519a6eff322b4dd3e3fb77254353f))

## [Unreleased]

### Added

* Initial `no-encoded-prompt-injection` rule detecting base64-encoded
  text and invisible Unicode characters in string literals and template
  segments.
* Recommended flat-config preset under `plugin.configs.recommended`.
* `no-encoded-prompt-injection` now scans for base64 payloads embedded
  in surrounding prose (e.g. `"Use this tool: <payload> please."`),
  not only literals that are themselves entirely base64-shaped.

### Changed

* Raised the Node.js floor (`engines.node`) from `>=22.22.2` to
  `>=22.23.1`, the latest patch on the Node 22 "Jod" Maintenance LTS
  line. Consumers on older 22.x patches will see engine warnings (or
  failures with `engine-strict`) until they update.

### Fixed

* `no-encoded-prompt-injection` now flags short base64 payloads that
  decode to known injection keywords. The smallest catch is a 10-byte
  plaintext encoded as 14 base64 alphabet chars + 2 `=` padding (16
  total chars, e.g. `aWdub3JlIGFsbA==` → "ignore all"). Previously
  the candidate-shape gate required ≥24 alphabet chars and missed
  every short attack phrase.
* `no-encoded-prompt-injection` now validates SRI digest shape
  strictly before exempting it. The previous prefix-only check
  (`^sha(256|384|512)-`) let an attacker bypass detection by writing
  `sha256-<arbitrary-base64>`; the new check requires the body to
  match the exact length and padding shape of a legitimate digest.

## [0.1.0] - 2026-05-10

Initial release.
