chcp 65001 > NUL
@echo off
title SETUP

echo 実行は自己責任でお願いします。

echo このファイルは自動で実行されます。

echo npm依存関係をインストールし、npmセキュリティチェックを実行します。

echo 各二回行われます。

echo その後、buildを実行します。

echo ディレクトリの移動は自動で行われます。ファイルの構成はいじらないでください。
pause

echo %cd%^|npm依存関係をインストールします。
npm install
title SETUP^|npm install...
echo npm依存関係をインストールしました。
echo npmセキュリティチェックを実行します。
npm audit fix
title SETUP^|npm audit fix...
echo npmセキュリティチェックを実行しました。

cd Gatsby_site
echo %cd%^|npm依存関係をインストールします。
npm install
title SETUP^|npm install...
echo npm依存関係をインストールしました。
echo npmセキュリティチェックを実行します。
npm audit fix
title SETUP^|npm audit fix...
echo npmセキュリティチェックを実行しました。
echo buildを実行します。
npm run build
title SETUP^|npm run build...
echo buildを実行しました。

echo 完了しました。
pause