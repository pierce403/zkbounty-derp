#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$repo_root"

changes="$(git status --porcelain=v1 --untracked-files=all -- frontend static)"
if [[ -n "$changes" ]]; then
  printf 'Generated frontend files differ from the commit:\n%s\n' "$changes" >&2
  exit 1
fi
