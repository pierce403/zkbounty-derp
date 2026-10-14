#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
fixture="$(mktemp -d)"
trap 'rm -rf "$fixture"' EXIT

git -C "$fixture" init -q
mkdir -p "$fixture/frontend/assets" "$fixture/scripts"
cp "$repo_root/scripts/check-generated-frontend.sh" "$fixture/scripts/"
printf '<!doctype html>\n' > "$fixture/frontend/index.html"
git -C "$fixture" add frontend/index.html scripts/check-generated-frontend.sh
git -C "$fixture" -c user.name='CI Fixture' -c user.email='ci@example.invalid' commit -qm baseline

(cd "$fixture" && ./scripts/check-generated-frontend.sh)

# A generated hashed asset omitted from the commit must fail the guard.
printf 'console.log("bundle");\n' > "$fixture/frontend/assets/index-newhash.js"
(cd "$fixture" && git diff --exit-code -- frontend static)
if (cd "$fixture" && ./scripts/check-generated-frontend.sh) >/dev/null 2>&1; then
  echo 'The frontend check missed an untracked generated asset' >&2
  exit 1
fi

git -C "$fixture" add frontend/assets/index-newhash.js
git -C "$fixture" -c user.name='CI Fixture' -c user.email='ci@example.invalid' commit -qm 'Include generated asset'
(cd "$fixture" && ./scripts/check-generated-frontend.sh)
printf 'Generated frontend regression check passed\n'
