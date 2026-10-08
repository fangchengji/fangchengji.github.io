#!/usr/bin/env bash
# 发布到 GitHub Pages: bash ~/felix-site/publish.sh "改动说明"
set -euo pipefail
export PATH="$HOME/.local/bin:$PATH"
cd "$(dirname "$0")"
MSG="${1:-site update}"
git add -A
if git diff --cached --quiet; then
  echo "没有改动需要提交"
else
  git commit -m "$MSG"
fi
git push -u origin main
echo "已推送。约 30 秒后生效: https://fangchengji.github.io/"
