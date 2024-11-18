chcp 65001 > NUL
cd Gatsby_site
@echo off
title AUTO-SET-UP

echo %cd%|npm依存関係をインストールします。
npm install
title AUTO-SET-UP|npm install...
echo npm依存関係をインストールしました。
echo npmセキュリティチェックを実行します。
npm audit fix
title AUTO-SET-UP|npm audit fix...
echo npmセキュリティチェックを実行しました。

cd Gatsby_site
echo %cd%|npm依存関係をインストールします。
npm install
title AUTO-SET-UP|npm install...
echo npm依存関係をインストールしました。
echo npmセキュリティチェックを実行します。
npm audit fix
title AUTO-SET-UP|npm audit fix...
echo npmセキュリティチェックを実行しました。
echo buildを実行します。
npm run build
title AUTO-SET-UP|npm run build...
echo buildを実行しました。

echo 完了しました。
pause