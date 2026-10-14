#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "$0")" && pwd)"
npm --prefix "$repo_root/client" run build
rm -rf "$repo_root/frontend" "$repo_root/static"
cp -R "$repo_root/client/dist" "$repo_root/frontend"
