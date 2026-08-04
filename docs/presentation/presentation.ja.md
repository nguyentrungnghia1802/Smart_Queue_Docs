# LINE Smart Queue Assistant
## LINEで始める、見える・離れられる受付体験

> **所要時間:** 約25分  
> **スライド数:** 23  
> **目的:** 製品概要、課題背景、解決策、技術アーキテクチャ、ユーザー体験、全体フロー、注目機能、実現可能性の提示。  
> **スタイル:** 文字数を抑えた視覚的デザイン、画面キャプチャおよび図解の優先配置。  
> **言語:** 日本語。  
> **注記:** `Speaker notes` は発表者用メモであり、スライド上には全表示されません。

---

# Slide 01 — 表紙

## LINE Smart Queue Assistant

### LINEで始める、見える・離れられる受付体験

- Smart Queue
- LINE LIFF
- Booking & Ticket
- Customer Notification

### 画像

![公開トップページ](./docs/images/guide/01-landing-page.png)

### スピーカーノート

皆様、本日は **LINE Smart Queue Assistant** のプレゼンテーションをご覧いただきありがとうございます。

本プロダクトは、店舗、サロン、クリニック等の対面サービスにおいて、受付、予約、注文、決済、顧客通知をLINE上で一貫して提供するスマート順番待ちプラットフォームです。

本発表では、製品コンセプト、解決する課題、技術構成、詳細な運用フローおよび今後の展開についてご説明いたします。

---

# Slide 02 — 現在の背景

## 対面サービスにおける順番待ちの日常的な課題

- お客様が受付付近を離れられない
- 自分の順番や待ち時間が分からない
- スタッフが手動・口頭で呼び出している
- 受付エリアの混雑とストレス

### 画像

> 店舗の待合スペースで待ち続ける従来の受付体験のイラスト／写真。

### スピーカーノート

多くの店舗やサロン、クリニックでは、お客様が受付で番号札を受け取り、待合エリアで待機し続ける必要があります。

問題は待ち時間そのものだけでなく、「あとどれくらいで呼ばれるか分からない」という不透明さにあります。

これによりお客様は受付を離れられず、スタッフも手動での呼び出しや問い合わせ対応に追われることになります。

---

# Slide 03 — 直面する課題

## 順番待ちは「番号の発行」だけではない

- 待ち時間が不透明
- 受付・注文・在庫・決済が分断されている
- 呼び出しに気づかず順番を逃す
- 運用データが集計できない

### 画像

> 分断された業務システム（Queue / Order / Payment / Stock / Staff / Notification）の概念図。

### スピーカーノート

単純に見れば、順番待ちシステムは番号を発行して呼び出すだけで足るように思えます。

しかし実際の店舗運用では、お客様の選択したメニュー、事前決済の有無、在庫状況、担当スタッフ、通知タイミングなど、多くの業務が絡み合っています。

これらが個別システムに分断されていると、店舗の円滑な運用やデータ分析が困難になります。

---

# Slide 04 — インサイト

## お客様は「並びたい」のではない

### 「いつ戻ればいいか」を知りたい

- スマホで番号を受け取る
- 前方の待ち人数を確認する
- 目安待ち時間（ETA）を把握する
- 適切なタイミングで通知を受け取る

### スピーカーノート

本プロジェクトのコアインサイトは、お客様は必ずしも受付の目の前に居続ける必要はないということです。

本当に必要なのは「自分が今どの順番にいて、いつ戻ればよいか」を把握することです。

LINEという日常的なアプリを活用することで、使い慣れたスマホ画面上でこの安心感を提供できます。

---

# Slide 05 — 解決ソリューション

## LINE-first Smart Queue Platform

- 支店固定QRを読み取り
- LINE Loginで瞬時に認証
- キューとメニューを選択
- TicketとETAを取得
- LINEで自動通知を受信
- スタッフは専用Dashboardで対応

### 画像

![Customer Ticket](./docs/images/guide/36-customer-ticket-mobile.png)

### スピーカーノート

提案する解決策は、LINE-firstのアプローチを採用したスマート順番待ちプラットフォームです。

お客様は店舗のQRを読み取り、LINE認証を経て、キューや商品・サービスを選択しデジタルチケットを受け取ります。

ステータスが更新されるとLINE Messaging APIから自動通知が届き、店舗側は役割ごとの専用ダッシュボードで効率的に運用できます。

---

# Slide 06 — システム概要

## LINE Smart Queue Assistant

### 網羅するプラットフォーム機能

- Business Onboarding (法人申込み)
- Multi-branch Management (複数支店管理)
- Product / Service Catalog (共通カタログ)
- Booking & Ticket (予約・発券)
- Staff Operation (スタッフ受付業務)
- LINE Notification (自動通知)

### 画像

![公開トップページ](./docs/images/guide/01-landing-page.png)

### スピーカーノート

LINE Smart Queue Assistantは、単なる発券画面にとどまりません。

法人の利用申込み、管理者による審査、オーナーによる組織設定、支店長によるキュー・在庫設定、そしてお客様の予約とスタッフの対応完了まで、全運用サイクルをサポートする包括的なシステムです。

---

# Slide 07 — 注目テクノロジー

## アーキテクチャ & コア技術

- **Frontend Web UI**: React + Vite (高速ロード、レスポンシブ、モダンUI)
- **Backend API**: Express + TypeScript (RESTful設計、厳格な型定義と権限管理)
- **Database**: PostgreSQL (マルチテナント・複数支店データのACID一貫性保障)
- **LINE Ecosystem 連携**:
  - **LIFF (LINE Front-end Framework)**: LINEアプリ内でWeb Appを直接起動
  - **LINE Login**: パスワード不要の高速な顧客認証
  - **LINE Messaging API**: Ticketイベントに応じたプッシュ通知送信

### スピーカーノート

技術構成において、本システムは最新かつ柔軟なスタックを採用しています。

フロントエンドはReactとViteを組み合わせ、圧倒的な読み込み速度とスムーズなUI操作を実現。バックエンドはExpressとTypeScriptで構築され、データ型と権限の安全性を確保しています。

データベースにはPostgreSQLを採用し、複数組織・支店・大量のチケットデータを確実に管理します。

最大の特長はLINEエコシステムとの深い連携であり、LIFFとLINE Loginによるアプリ内シームレス認証と、Messaging APIによる自動通知を実現しています。

---

# Slide 08 — 利用ロール

## 1つのシステム — 役割に応じたマルチワークスペース

| ロール | 主な責任 |
|---|---|
| Platform Admin | 法人申請の審査・承認 |
| Organization Owner | 組織・共通カタログの管理 |
| Branch Manager | 担当支店・キュー・在庫の管理 |
| Staff | 当日の受付呼出し・接客業務 |
| Customer | LINEからの予約・状態確認 |

### 画像

![Platform Admin Dashboard](./docs/images/guide/07-admin-dashboard.png)

### スピーカーノート

システムは厳格なロールベースで設計されています。

Platform Adminはプラットフォーム全体を管理。Organization Ownerは組織設定や商品カタログを管理します。

Branch Managerは割り当てられた支店のキューや在庫、スタッフを管理し、Staffは日々の受付業務を担当します。CustomerはLINEを通じて快適に利用します。

---

# Slide 09 — 全体フロー

## End-to-End Business Flow

```text
法人申込み
→ 管理者審査・承認
→ オーナー有効化
→ カタログ作成
→ 支店作成
→ キュー・QR設定
→ LINE予約
→ チケット発行
→ スタッフ対応
→ 領収書・LINE通知
```

### スピーカーノート

これがシステムの全体フローです。

重要なポイントとして、管理者の承認時点では組織と招待状態のオーナーのみが作成され、支店やキューは自動作成されません。

その後、オーナーおよび支店長が実際の店舗運用に合わせて段階的に設定を進めます。

---

# Slide 10 — Business Onboarding

## 法人がWebから直接利用申請

* 法人情報・連絡先の入力
* 規模とプランの選択
* デモ決済 (Demo Payment) の実行
* 管理者審査待ちへ移行

### 画像

![Business Registration Form](./docs/images/guide/03-business-registration-form.png)

### スピーカーノート

法人の導入は公開ページの申込みフォームから始まります。

この段階ではパスワードを設定せず、法人情報、連絡先、想定規模、希望プランのみを入力します。

送信後、申請は管理者による審査ステータスとなります。

---

# Slide 11 — Admin Approval

## Platform Admin による申請審査

* 申請一覧の確認
* 法人情報およびデモ決済の検証
* Approve (承認) または Reject (却下)
* Organizationと招待Ownerの生成

### 画像

![Admin Application Detail](./docs/images/guide/09-admin-application-detail.png)

### スピーカーノート

プラットフォーム管理者は届いた申請の細部を確認します。

承認を実行すると、組織データと招待状態のオーナーアカウントが自動生成されます。

未検証の利用を防ぎ、安全なプラットフォーム運用を担保する重要なステップです。

---

# Slide 12 — Owner Activation

## オーナーによるアカウント有効化

* 招待メールの受信
* 自らパスワードを設定
* Organizationの正式有効化
* カタログ・支店設定の開始

### 画像

![Owner Activation](./docs/images/guide/11-owner-activation.png)

### スピーカーノート

承認後、オーナーは専用メールリンクから自らパスワードを設定します。

管理者が初期パスワードを発行・共有しない設計により、セキュリティリスクを大幅に低減しています。

---

# Slide 13 — Product / Service Catalog

## カタログは Organization 単位で管理

* 組織共通の商品・サービス定義
* 自動生成される商品／サービスコード
* 価格および想定サービス時間の設定
* 事前決済 (Require Prepayment) の指定
* 在庫 (Stock) は支店ごとに分離

### 画像

![Owner Product Catalog](./docs/images/guide/13-owner-product-catalog.png)

### スピーカーノート

設計上の重要なポイントは、商品・サービスが組織レベルで管理される点です。

これにより、全支店で価格やサービス時間の定義を一貫して保つことができます。

一方で、各商品の実在庫（Stock）は各支店で個別に管理されます。

---

# Slide 14 — Branch Management

## 1つの組織で複数支店を管理

* オーナーが支店 (Branch) を作成
* Branch Manager を招待
* 支店ごとに独自の固定QRコードを発行
* 支店ごとの営業時間 (Business Calendar) を設定

### 画像

![Create Branch](./docs/images/guide/16-owner-create-branch.png)

### スピーカーノート

オーナーは実店舗に対応する支店を作成し、支店長を招待できます。

各支店は独自の住所、営業時間、支店長、固定QRコードを持ち、多店舗展開を行う事業者に適した構造となっています。

---

# Slide 15 — Branch Manager Workspace

## 支店ごとの独立した運用空間

* Queue Management (キュー設定)
* Business Calendar (営業時間・定休日)
* Stock Management (支店在庫)
* Staff Management (スタッフ招待)
* Branch QR (店舗掲示用QRコード)

### 画像

![Branch Manager Dashboard](./docs/images/guide/19-branch-manager-dashboard.png)

### スピーカーノート

支店長は割り当てられた店舗のみを管理します。

キュー、営業時間、在庫、スタッフ、QRコードを店舗の状況に合わせて柔軟に調整できます。

権限を支店内に限定することで、他店舗のデータ誤操作を防ぎます。

---

# Slide 16 — Multi-Queue per Branch

## 1つの固定QR — 複数のキュー

* 通常受付 (General Service)
* 優先受付 (Priority Queue)
* サービス専用キュー
* キューごとの商品カタログ割り当て

### 画像

![Queue List](./docs/images/guide/22-queue-list.png)

### スピーカーノート

1つの支店内に複数のキュー（並び列）を作成できます。

たとえば「カット用」「カラー用」「優先受付」などを分けることが可能です。

店舗に掲示するQRコードは1つで済み、お客様が読み取り後に希望のキューを選択します。

---

# Slide 17 — Queue Configuration

## キューの柔軟な動作設定

* ステータス: Open / Closed / Paused / Archived
* Capacity (上限人数制限)
* Ticket Prefix (番号前置詞: A-, B-等)
* 平均サービス時間 (ETA計算用)
* 不在時ポリシー (Absence Policy)

### 画像

![Create Queue](./docs/images/guide/23-create-queue.png)

### スピーカーノート

キューには実際の運用に即した詳細設定が備わっています。

受付状態、1日の受け入れ上限、チケット番号の接頭辞、平均対応時間、不在時の保留ルールなどを細かくチューニングできます。

---

# Slide 18 — Branch Stock

## 支店ごとの在庫コントロール

* 無制限在庫 (Unlimited) と 有限在庫 (Finite)
* Booking時の在庫保持 (Reserve)
* キャンセル時の在庫復元 (Release)
* 対応完了時の在庫消費 (Consume)

### 画像

![Branch Stock](./docs/images/guide/25-branch-stock.png)

### スピーカーノート

在庫は支店ごとに管理されます。同一商品であっても支店Aでは在庫あり、支店Bでは完売という状況に対応します。

予約時にReserve、キャンセル時にRelease、対応完了時にConsumeというライフサイクルで、過剰予約（Overselling）を防止します。

---

# Slide 19 — Customer Journey with LINE

## LINEからのシームレスな受付体験

* 支店固定QRを読み取り
* LINE Loginで認証
* キューを選択
* メニュー／商品を選択
* Booking（予約完了）
* デジタルチケットを取得

### 画像

![Customer Queue Selection](./docs/images/guide/30-customer-queue-selection-mobile.png)

### スピーカーノート

お客様視点では、店舗のQRコードをLINEで読み取ることから始まります。

メールアドレスやパスワードの新規登録は不要です。

LINE認証後、キューとメニューを選び、簡単な情報入力で即座に予約が完了します。

---

# Slide 20 — Booking & Ticket

## チケットは顧客体験の中心

* Ticket Code (受付番号)
* Order Number (注文番号)
* People Ahead (前方待ち人数)
* ETA (予想待ち時間)
* 選択メニュー明細
* 決済状況サマリー

### 画像

![Customer Ticket](./docs/images/guide/36-customer-ticket-mobile.png)

### スピーカーノート

予約完了後、お客様のスマホ上にデジタルチケットが表示されます。

番号だけでなく、前方に何人待っているか、あと何分で呼ばれるか（ETA）、注文内容、決済状況を一画面でリアルタイムに確認できます。

---

# Slide 21 — Công nghệ LINE nổi bật

## LINE連携がもたらす製品価値

* **LIFF**: LINEアプリ内でWeb Appを直接表示
* **LINE Login**: ワンタップでの顧客認証
* **Messaging API**: イベント駆動型の自動プッシュ通知
* **Branch QR**: リアル店舗とデジタルをつなぐ起点

### 画像

![LIFF Home](./docs/images/guide/29-liff-home-mobile.png)

### スピーカーノート

製品の最大の差別化要因はLINEエコシステムとの密な連携です。

LIFFによりアプリ切替なしで操作でき、LINE Loginにより離脱率を激減させます。

Messaging APIによる通知機能が、「いつ呼ばれるか分からない」ストレスを根本から解決します。

---

# Slide 22 — Staff Operation

## スタッフ専用の一元化ワークスペース

* リアルタイムActive Ticketの一覧
* ステータス遷移: Waiting ➔ Called ➔ Serving ➔ Served
* 不在 (Defer) / キャンセル / No-show 処理
* 残金回収・現地決済
* 領収書 (Receipt) 発行

### 画像

![Staff Workspace](./docs/images/guide/40-staff-workspace-desktop.png)

### スピーカーノート

スタッフワークスペースは、現場のスタッフが迷わず操作できるように設計されています。

「呼出 ➔ 対応開始 ➔ 対応完了」の基本フローに加え、不在・保留の繰り越し処理、現地での残金会計、領収書発行まで一画面で完結します。

---

# Slide 23 — Tính khả thi và hướng phát triển

## MVPによる実現可能性の実証と次のステップ

### 実装済み機能

* エンドツーエンドのコアフロー
* マルチロール対応ダッシュボード
* LINE LIFF 受付・デジタルチケット
* 支店固定QR & スタッフ受付画面
* LINE通知基盤 & 日・ベト・英 多言語対応

### 今後の拡張計画

* 本番決済ゲートウェイの統合 (Real Payment)
* Google Routes / 位置情報連携
* 実機LINE環境での受入検証
* 本番環境のセキュリティ強化・監視・バックアップ

### 画像

![Receipt](./docs/images/guide/45-receipt.png)

### スピーカーノート

本MVPは、コンセプトの実現可能性を十分に証明しています。

法人登録から顧客のLINE予約、スタッフの現場対応までのコアフローが完成しており、今後は本番決済システムや位置情報APIの統合、本番監視体制の構築を進めてまいります。

最後に、私たちのメッセージをお伝えしてプレゼンテーションを終わります：

> **「並んで待つ必要はありません — 自分の順番がわかるだけで十分です。」**
