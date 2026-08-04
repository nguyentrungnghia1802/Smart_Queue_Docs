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

---

# Slide 03 — 直面する課題

## 順番待ちは「番号の発行」だけではない

- 待ち時間が不透明
- 受付・注文・在庫・決済が分断されている
- 呼び出しに気づかず順番を逃す
- 運用データが集計できない

---

# Slide 04 — インサイト

## お客様は「並びたい」のではない — 「いつ戻るか」を知りたい

- スマホで番号を受け取る
- 前方の待ち人数を確認する
- 目安待ち時間（ETA）を把握する
- 適切なタイミングで通知を受け取る

---

# Slide 05 — 解決ソリューション

## LINE-first Smart Queue Platform

- 支店固定QRを読み取り
- LINE Loginで瞬時に認証
- キューとメニューを選択
- TicketとETAを取得
- LINEで自動通知を受信
- スタッフは専用Dashboardで対応

---

# Slide 06 — システム概要

## LINE Smart Queue Assistant

- Business Onboarding (法人申込み)
- Multi-branch Management (複数支店管理)
- Product / Service Catalog (共通カタログ)
- Booking & Ticket (予約・発券)
- Staff Operation (スタッフ受付業務)
- LINE Notification (自動通知)

---

# Slide 07 — 注目テクノロジー

## アーキテクチャ & コア技術

- **Frontend Web UI**: React + Vite
- **Backend API**: Express + TypeScript
- **Database**: PostgreSQL
- **LINE Ecosystem**: LIFF + LINE Login + Messaging API

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

---

# Slide 09 — 全体フロー

## End-to-End Business Flow

```text
法人申込み → 管理者審査・承認 → オーナー有効化 → カタログ作成 → 支店作成 → キュー・QR設定 → LINE予約 → チケット発行 → スタッフ対応 → 領収書・LINE通知
```

---

# Slide 10 — Business Onboarding
## 法人がWebから直接利用申請

# Slide 11 — Admin Approval
## Platform Admin による申請審査

# Slide 12 — Owner Activation
## オーナーによるアカウント有効化

# Slide 13 — Product / Service Catalog
## カタログは Organization 単位で管理

# Slide 14 — Branch Management
## 1つの組織で複数支店を管理

# Slide 15 — Branch Manager Workspace
## 支店ごとの独立した運用空間

# Slide 16 — Multi-Queue per Branch
## 1つの固定QR — 複数のキュー

# Slide 17 — Queue Configuration
## キューの柔軟な動作設定

# Slide 18 — Branch Stock
## 支店ごとの在庫コントロール

# Slide 19 — Customer Journey with LINE
## LINEからのシームレスな受付体験

# Slide 20 — Booking & Ticket
## チケットは顧客体験の中心

# Slide 21 — Công nghệ LINE nổi bật
## LINE連携がもたらす製品価値

# Slide 22 — Staff Operation
## スタッフ専用の一元化ワークスペース

# Slide 23 — Tính khả thi và hướng phát triển
## MVPによる実現可能性の実証と次のステップ
