chcp 65001 > NUL
cd Gatsby_site
@echo off
echo deployを続けますか？ (y/n)
set /p answer=入力してください: 

if /i "%answer%"=="y" (
    echo deployを開始します。
    pause
    npm run deploy
    echo deployを完了しました。
) else if /i "%answer%"=="n" (
    echo 操作をキャンセルしました。
    pause
) else (
    echo 無効な入力です。y または n を入力してください。
)
exit