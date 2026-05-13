# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.1](https://github.com/klodr/eslint-plugin-security-mcp/compare/v0.2.0...v0.2.1) (2026-05-13)


### Fixed

* **ci:** add top-level permissions: contents: read to auto-merge ([#39](https://github.com/klodr/eslint-plugin-security-mcp/issues/39)) ([dd4636d](https://github.com/klodr/eslint-plugin-security-mcp/commit/dd4636d8429fed0618c11af894638cd2be0fb030))
* **ci:** align auto-merge filter on klodr-release-please[bot] ([#22](https://github.com/klodr/eslint-plugin-security-mcp/issues/22)) ([97d0b19](https://github.com/klodr/eslint-plugin-security-mcp/commit/97d0b193ef903743927d2875f650b1c6a25e130e))
* **ci:** drop paths filter on actions-pinned ([#20](https://github.com/klodr/eslint-plugin-security-mcp/issues/20)) ([9811b42](https://github.com/klodr/eslint-plugin-security-mcp/commit/9811b427ae884301aefa16bc4ccfdc378c29b548))
* **ci:** repin reusable auto-merge to a reachable SHA ([#24](https://github.com/klodr/eslint-plugin-security-mcp/issues/24)) ([f8a77e1](https://github.com/klodr/eslint-plugin-security-mcp/commit/f8a77e10d340cc4255d6393a8ad98a545b35c09e))
* **lint:** drain CR findings + valid globs syntax ([#17](https://github.com/klodr/eslint-plugin-security-mcp/issues/17)) ([cff85f1](https://github.com/klodr/eslint-plugin-security-mcp/commit/cff85f1d12e2ff78ef83983552567288199354c8))
* **pinact:** dot-prefix config + recursive action globs ([#19](https://github.com/klodr/eslint-plugin-security-mcp/issues/19)) ([6cc71e3](https://github.com/klodr/eslint-plugin-security-mcp/commit/6cc71e3294cfe79b524044000cafb4f9fd258a81))
* **pre-commit:** call ./node_modules/.bin/lint-staged directly ([#32](https://github.com/klodr/eslint-plugin-security-mcp/issues/32)) ([a352dbd](https://github.com/klodr/eslint-plugin-security-mcp/commit/a352dbdc0c18171052dc14b755613ad7f9918aac))
* **rule:** catch short, embedded, and pseudo-SRI base64 payloads ([#38](https://github.com/klodr/eslint-plugin-security-mcp/issues/38)) ([711dccf](https://github.com/klodr/eslint-plugin-security-mcp/commit/711dccf5a9074fb497865aa9e8492e62a4e75cd5))
* **setup:** drop husky || true fallback from prepare script ([#27](https://github.com/klodr/eslint-plugin-security-mcp/issues/27)) ([b1f5669](https://github.com/klodr/eslint-plugin-security-mcp/commit/b1f56699e65397d6d97b1a359ad630a5ae5b5d15))


### Changed

* add leak-detect caller workflow ([#33](https://github.com/klodr/eslint-plugin-security-mcp/issues/33)) ([ab55943](https://github.com/klodr/eslint-plugin-security-mcp/commit/ab5594379f375a90853c69dcdc289474ac0e325f))
* add pinact config + actions-pinned CI gate ([#15](https://github.com/klodr/eslint-plugin-security-mcp/issues/15)) ([5b437f7](https://github.com/klodr/eslint-plugin-security-mcp/commit/5b437f7daa43394428b81a312f01412650cbad94))
* add prettier + eslint-config-prettier ([#26](https://github.com/klodr/eslint-plugin-security-mcp/issues/26)) ([3179f64](https://github.com/klodr/eslint-plugin-security-mcp/commit/3179f64fed84ba4e1c66f9bedf8ad95d3e95bce6))
* add Verify published release workflow ([#37](https://github.com/klodr/eslint-plugin-security-mcp/issues/37)) ([f51a5ef](https://github.com/klodr/eslint-plugin-security-mcp/commit/f51a5ef54c85410c7d064166b1ce6f3a48683794))
* add yamllint+markdownlint+commitlint pack ([#14](https://github.com/klodr/eslint-plugin-security-mcp/issues/14)) ([6495664](https://github.com/klodr/eslint-plugin-security-mcp/commit/6495664f823cffcd839cff5017b71630cfd60579))
* bump actions/checkout from 4.2.2 to 6.0.2 ([#21](https://github.com/klodr/eslint-plugin-security-mcp/issues/21)) ([0800aca](https://github.com/klodr/eslint-plugin-security-mcp/commit/0800aca277f9c3b6ec67cec4a0cd901ba94a1ac4))
* fix four workflow errors (pinact, gitleaks, auto-merge, coderabbit) ([#35](https://github.com/klodr/eslint-plugin-security-mcp/issues/35)) ([fab136b](https://github.com/klodr/eslint-plugin-security-mcp/commit/fab136b039435e66ea6dbd6670640fa55da085f8))
* **husky:** adopt shared pre-push template ([#16](https://github.com/klodr/eslint-plugin-security-mcp/issues/16)) ([7588781](https://github.com/klodr/eslint-plugin-security-mcp/commit/758878116202254a55409be7759113f85f3024cd))
* **lint-staged:** add JSON / JSONC / JSON5 glob ([#29](https://github.com/klodr/eslint-plugin-security-mcp/issues/29)) ([5f081f0](https://github.com/klodr/eslint-plugin-security-mcp/commit/5f081f0bb6a8ce2c4cd1f895ba235d531cbabd4c))
* **lint:** reactivate 6 markdownlint rules previously disabled ([#36](https://github.com/klodr/eslint-plugin-security-mcp/issues/36)) ([ffcaefc](https://github.com/klodr/eslint-plugin-security-mcp/commit/ffcaefccdc9dcdbe517c22cc67543f57de539333))
* migrate ci.yml to reusable-node-ci (pilot) ([#25](https://github.com/klodr/eslint-plugin-security-mcp/issues/25)) ([0dd1fdf](https://github.com/klodr/eslint-plugin-security-mcp/commit/0dd1fdf6d4968ea448ab7d592ff24bf088da04be))
* **node:** add packageManager + .nvmrc + .npmrc engine-strict ([#30](https://github.com/klodr/eslint-plugin-security-mcp/issues/30)) ([3332509](https://github.com/klodr/eslint-plugin-security-mcp/commit/333250932b14401d923f9d9d36b187e4a48d972e))
* **pre-commit:** warn on missing system tooling (yamllint) ([#28](https://github.com/klodr/eslint-plugin-security-mcp/issues/28)) ([88e66b9](https://github.com/klodr/eslint-plugin-security-mcp/commit/88e66b9ccf3ae626908a4d1d624969c3dc72faf6))
* **pre-push:** sync with canonical template (SC2034 + drop npm audit) ([#31](https://github.com/klodr/eslint-plugin-security-mcp/issues/31)) ([fe82d3a](https://github.com/klodr/eslint-plugin-security-mcp/commit/fe82d3a88240dfc48ca0c7589ff0f46c1b9c9f19))

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
