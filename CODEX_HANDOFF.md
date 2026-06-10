# Codex Handoff - ADVANCE MC Preview

最終更新: 2026-06-10

## 基本方針

- 回答・説明・要約は日本語で行う。
- コード・コマンド・生ログを出す場合は、原文の直後に日本語要約を付ける。
- 重要ポイントは箇条書きでまとめ、最後に「次のアクション」を提示する。
- `advance-mc-designer-handoff.zip` は現在不要。ユーザーが再度求めるまで作成・更新しない。
- 作業後は必要に応じて GitHub Pages へ反映する。

## 公開先

- GitHub リポジトリ: `git@github.com:inamihiroyuki/advancemc-preview.git`
- GitHub Pages: `https://inamihiroyuki.github.io/advancemc-preview/`
- Pages source: `main` branch / root

## 現在の主要ファイル

- `index.html`: トップページ
- `about.html`: アドバンスMCについて
- `service.html`: カスタム・整備・修理
- `race.html`: レース活動
- `info.html`: お知らせ一覧
- `info-20260601.html`: 6月の定休日のお知らせ
- `info-20260520.html`: エビスサーキット走行会イベント
- `info-20260510.html`: 入荷情報
- `suzuki.html`: SUZUKI
- `mv-agusta.html`: MV AGUSTA
- `royal-enfield.html`: ROYAL ENFIELD
- `assets/site.css`: 共通CSS
- `assets/site.js`: 共通JS
- `DESIGNER_HANDOFF.md`: デザイナー向け共有メモ

## 直近の状態

- 作業ツリーはクリーン。
- 直近コミット: `118892d Use price ranges on service page`
- GitHub Pages へ push 済み。
- `service.html` の「料金目安」はすべて `○○円〜○○円` に統一済み。

## 実装済みの主な内容

- CSS/JSを `assets/site.css` / `assets/site.js` に分離。
- スマホではヘッダーをハンバーガーメニュー化。
- スマホでは主要見出しの36px相当を25pxへ調整。
- フッターに X / Instagram / Facebook の外部リンクとアイコンを追加。
- `h1` / `h2` / 一部 `strong` のサイズ調整済み。
- 店舗基本情報・フッター情報・料金表の不要な太字を解除済み。
- 店舗基本情報に「来店前に事前連絡があるとスムーズ」という案内文を追加済み。

## トップページの構成

- お知らせ
- アドバンスMCについて
- 新車取扱メーカー
- スタッフ紹介
- 中古車販売
- カスタム・整備・修理
- レース活動
- おすすめの取扱いパーツ・ブランド
- 店舗基本情報

## 新車取扱メーカー

- SUZUKI
  - `suzuki.html`
  - 長年の取扱いによるノウハウ、原付二種スクーターから Hayabusa まで幅広く扱える点を訴求。
- MV AGUSTA
  - `mv-agusta.html`
  - イタリアンバイクとしての物語性、美しさ、レースの系譜を重視した文章。
- ROYAL ENFIELD
  - `royal-enfield.html`
  - 栃木県内唯一の正規ディーラーであること、試乗車が充実していることを記載。
- 各メーカー画像クリックでも詳細ページへ遷移する。

## おすすめの取扱いパーツ・ブランド

- 見出し: `PARTS & GEAR BRANDS` / `おすすめの取扱いパーツ・ブランド`
- 表示順:
  - SUNSTAR
  - LUBIRD
  - DUNLOP
  - EKチェーン
  - OGK KABUTO
- 各CTA文言: `ブランド公式サイトへ ↗`
- 公式URL:
  - SUNSTAR: `https://www.sunstar-kc.jp/`
  - LUBIRD: `https://www.ftkoil.com/`
  - DUNLOP: `https://dunlop-motorcycletyres.com/`
  - EK: `https://www.enuma.co.jp/`
  - OGK: `https://www.ogkkabuto.co.jp/motorcycle/`
- アコーディオン:
  - PCではカード群の下に展開。
  - スマホでは押したカード直下に展開。
  - スマホ時の詳細テキストは背景・文字色を調整済みで読みやすくしてある。

## 画像・アセット

- 外部URL画像は原則ローカル保存してHTMLから参照。
- スタッフ画像:
  - `assets/staff-kogure.jpg`
  - `assets/staff-inose.jpg`
  - `assets/staff-yoshii.jpg`
- カスタムサムネイル:
  - `assets/custom-fb-1.jpg` 〜 `assets/custom-fb-6.jpg`
  - `assets/custom-loop-1.jpg` 〜 `assets/custom-loop-6.jpg`
- レース画像:
  - `assets/race-activity-main.jpg`
  - `assets/race-team-activity-bike.jpg`
- ABOUT画像:
  - `assets/about-bike-selection.jpg`
- 中古車販売背景:
  - `assets/used-bike-stock.jpg`
- ブランド画像:
  - `assets/ogk-kabuto-slide.jpg`
  - `assets/ek-logo.jpg`

## 下層ページの意図

- `about.html`
  - 店舗紹介、コンセプト、代表の想い、沿革。
- `service.html`
  - WP固定ページ想定。
  - 整備・車検・修理・カスタム、相談の流れ、料金目安。
  - 運用記事ではなく固定ページとして見せる。
- `race.html`
  - お客さんに売るページではなく、レーシングチームとしての活動履歴・情熱・物語を伝えるページ。
  - 参戦履歴・スタッフ実績・活動記録を掲載。
- `info.html`
  - お知らせ一覧。
- `info-*.html`
  - WordPress記事のモック。

## よく使う確認コマンド

```bash
git status --short
```

日本語要約: 作業ツリーに未コミット変更があるか確認する。

```bash
git diff --check
```

日本語要約: 余計な空白や差分上の問題がないか確認する。

```bash
node --check assets/site.js
```

日本語要約: JavaScriptの構文チェックを行う。

```bash
python3 -m http.server 8765
```

日本語要約: ローカル確認用サーバーを起動する。

```bash
gh api repos/inamihiroyuki/advancemc-preview/pages
```

日本語要約: GitHub Pages のビルド状態を確認する。

## 次回作業時の注意

- まず `git status --short` で状態確認。
- 既存のデザイン・文言方針を優先する。
- 画像を追加する場合、外部URL直参照ではなく `assets/` に保存して参照する。
- 変更後は `git diff --check` と必要な表示確認を行う。
- 公開が必要な変更は commit / push / Pages built 確認まで行う。
