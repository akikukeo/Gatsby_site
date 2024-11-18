# UTF-8コードページを設定
$OutputEncoding = New-Object -typename System.Text.UTF8Encoding

# タイトル設定
$host.UI.RawUI.WindowTitle = "AUTO-SET-UP"

# 現在のディレクトリの確認とnpm依存関係のインストール
Write-Output "$(Get-Location) | npm依存関係をインストールします。"
npm install
$host.UI.RawUI.WindowTitle = "AUTO-SET-UP | npm install..."
Write-Output "npm依存関係をインストールしました。"

# npmセキュリティチェックを実行
Write-Output "npmセキュリティチェックを実行します。"
npm audit fix
$host.UI.RawUI.WindowTitle = "AUTO-SET-UP | npm audit fix..."
Write-Output "npmセキュリティチェックを実行しました。"

# Gatsby_siteディレクトリに移動してnpm依存関係をインストール
Set-Location -Path "Gatsby_site"
Write-Output "$(Get-Location) | npm依存関係をインストールします。"
npm install
$host.UI.RawUI.WindowTitle = "AUTO-SET-UP | npm install..."
Write-Output "npm依存関係をインストールしました。"

# npmセキュリティチェックを実行
Write-Output "npmセキュリティチェックを実行します。"
npm audit fix
$host.UI.RawUI.WindowTitle = "AUTO-SET-UP | npm audit fix..."
Write-Output "npmセキュリティチェックを実行しました。"

# buildの実行
Write-Output "buildを実行します。"
npm run build
$host.UI.RawUI.WindowTitle = "AUTO-SET-UP | npm run build..."
Write-Output "buildを実行しました。"

# 完了メッセージ
Write-Output "完了しました。"
Pause
