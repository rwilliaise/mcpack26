#!/usr/bin/env bash
set -euo pipefail

root="${1:-mods}"
find "$root" -type f -name "*.pw.toml" -print0 | while IFS= read -r -d '' file; do
  if grep -qE '^\s*side\s*=\s*"server"\s*$' "$file"; then
    sed -i -E 's/^\s*side\s*=\s*"server"\s*$/side = "both"/' "$file"
    printf 'updated %s\n' "$file"
  fi
done
