#!/usr/bin/env bash
# Free deploy: pushes built dist/ to the gh-pages branch (no GitHub Actions).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

npm run build

ORIGIN="$(git remote get-url origin)"
cd dist
git init -q
git add -A
if git diff --staged --quiet; then
  echo "No changes to deploy."
  exit 0
fi
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin "$ORIGIN" 2>/dev/null || git remote set-url origin "$ORIGIN"
git push -f origin gh-pages
cd "$ROOT"
rm -rf dist/.git

echo "Live at https://dinndev2.github.io/rosana-portfolio/"
