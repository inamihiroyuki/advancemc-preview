# デザイナー送付メモ

## 開くファイル

- `index.html`
  - トップページのHTMLです。
  - ブラウザで直接開いて表示確認できます。

## 周辺アセット

- `assets/site.css`
  - トップページ用のCSSです。
- `assets/site.js`
  - メインビジュアルのスライドショーと、パートナー導線の開閉処理です。
- `assets/advance-mc-logo.svg`
  - ヘッダー・フッターで使用しているロゴです。
- `assets/*.jpg`, `assets/*.png`
  - メインビジュアル、メーカー画像、スタッフ画像、カスタム画像、パートナー画像です。
- `assets/custom-loop-1.jpg` 〜 `assets/custom-loop-6.jpg`
  - `#parts` 内の自動ループサムネイルで使用している外部取得写真です。
  - 取得元は Wikimedia Commons のカフェレーサー/カスタム系写真です。
- `assets/custom-fb-1.jpg` 〜 `assets/custom-fb-6.jpg`
  - `#parts` 内の自動ループサムネイルの先頭で使用している写真です。
  - 指定されたFacebook写真URLから取得しています。

## 注意点

- 以下の詳細ページは、現時点では同梱していません。
  - `kunimi-commerce-sunstar.html`
  - `lubird-engine-oil.html`
  - `dunlop-motorcycle-tire.html`
  - `ogk-kabuto.html`
  - `ek-chain.html`
- 上記リンクは、トップページ内の導線イメージとして残しています。
- スタッフ画像の `alt` に「仮顔写真」と入っているため、正式写真に差し替える場合は文言も調整してください。
