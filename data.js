// 読書の記録 ― 書誌データ
// 並び順を変えたい場合は、この配列の順序を入れ替えるだけで
// 一覧・詳細・前後ボタンすべてに反映されます。
//
// status には次の3つを指定できます：
//   "unread"  → 未読（点線の印）
//   "reading" → 読書中（緑の印）
//   "read"    → 読了（朱の印）

const BOOKS = [
  {
    title: "フィールド・レコーディング入門",
    subtitle: "響きのなかで世界と出会う",
    author: "柳沢英輔",
    year: 2022,
    origYear: null,
    amazon: "https://www.amazon.co.jp/s?k=フィールド・レコーディング入門+柳沢英輔",
    description: "",
    impression: "",
    status: "read"
  },
  {
    title: "明るい部屋",
    subtitle: "写真についての覚書",
    author: "ロラン・バルト，花輪光（訳）",
    year: 1997,
    origYear: 1980,
    amazon: "https://www.amazon.co.jp/s?k=明るい部屋+ロラン・バルト",
    description: "",
    impression: "",
    status: "read"
  },
  {
    title: "音響メディア史",
    subtitle: "",
    author: "谷口文和，中川克志，福間裕大",
    year: 2015,
    origYear: null,
    amazon: "https://www.amazon.co.jp/s?k=音響メディア史",
    description: "",
    impression: "",
    status: "read"
  },
  {
    title: "現象学入門",
    subtitle: "",
    author: "竹田青嗣",
    year: 1989,
    origYear: null,
    amazon: "https://www.amazon.co.jp/s?k=現象学入門+竹田青嗣",
    description: "",
    impression: "",
    status: "read"
  },
  {
    title: "アフターミュージッキング",
    subtitle: "実践する音楽",
    author: "毛利嘉孝（監）",
    year: 2017,
    origYear: null,
    amazon: "https://www.amazon.co.jp/s?k=アフターミュージッキング+毛利嘉孝",
    description: "",
    impression: "",
    status: "reading"
  },
  {
    title: "クリティカル・ワード　メディア論",
    subtitle: "",
    author: "門林岳史，増田展大（編著）",
    year: 2021,
    origYear: null,
    amazon: "https://www.amazon.co.jp/s?k=クリティカル・ワード+メディア論",
    description: "",
    impression: "",
    status: "reading"
  },
  {
    title: "超解読！はじめてのカント『純粋理性批判』",
    subtitle: "",
    author: "竹田青嗣",
    year: 2011,
    origYear: null,
    amazon: "https://www.amazon.co.jp/s?k=超解読！はじめてのカント+純粋理性批判",
    description: "",
    impression: "",
    status: "reading"
  },
  {
    title: "ベルクソン入門",
    subtitle: "",
    author: "村山達也",
    year: 2025,
    origYear: null,
    amazon: "https://www.amazon.co.jp/s?k=ベルクソン入門+村山達也",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "知覚の現象学",
    subtitle: "",
    author: "モーリス・メルロ＝ポンティ，中島盛夫（訳）",
    year: 2015,
    origYear: 1945,
    amazon: "https://www.amazon.co.jp/s?k=知覚の現象学+メルロ＝ポンティ",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "眼がスクリーンになるとき",
    subtitle: "ゼロから読むドゥルーズ『シネマ』",
    author: "福尾匠",
    year: 2024,
    origYear: null,
    amazon: "https://www.amazon.co.jp/s?k=眼がスクリーンになるとき+福尾匠",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "技術哲学入門",
    subtitle: "ポスト現象学とテクノサイエンス",
    author: "ドン・アイディ，稲垣諭ほか（訳）",
    year: 2025,
    origYear: 2009,
    amazon: "https://www.amazon.co.jp/s?k=技術哲学入門+ドン・アイディ",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "小さなデザインの哲学",
    subtitle: "",
    author: "ヴィレム・フルッサー，瀧本雅志（訳）",
    year: 2009,
    origYear: 1993,
    amazon: "https://www.amazon.co.jp/s?k=小さなデザインの哲学+フルッサー",
    description: "",
    impression: "",
    status: "reading"
  },
  {
    title: "写真の哲学のために",
    subtitle: "",
    author: "ヴィレム・フルッサー，深川雅文（訳）",
    year: 1999,
    origYear: 1983,
    amazon: "https://www.amazon.co.jp/s?k=写真の哲学のために+フルッサー",
    description: "",
    impression: "",
    status: "reading"
  },
  {
    title: "写真論",
    subtitle: "",
    author: "スーザン・ソンタグ，近藤耕人（訳）",
    year: 2026,
    origYear: 1977,
    amazon: "https://www.amazon.co.jp/s?k=写真論+スーザン・ソンタグ",
    description: "",
    impression: "",
    status: "reading"
  },
  {
    title: "写真のアルケオロジー",
    subtitle: "",
    author: "ジェフリー・バッチェン，前川修ほか（訳）",
    year: 2010,
    origYear: 1997,
    amazon: "https://www.amazon.co.jp/s?k=写真のアルケオロジー+バッチェン",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "世界の調律",
    subtitle: "サウンドスケープとはなにか",
    author: "レイモンド・マリー・シェーファー，鳥越けい子ほか（訳）",
    year: 2006,
    origYear: 1977,
    amazon: "https://www.amazon.co.jp/s?k=世界の調律+シェーファー",
    description: "",
    impression: "",
    status: "reading"
  },
  {
    title: "聞こえくる過去",
    subtitle: "音響再生産の文化的起源",
    author: "ジョナサン・スターン，中川克志ほか（訳）",
    year: 2015,
    origYear: 2003,
    amazon: "https://www.amazon.co.jp/s?k=聞こえくる過去+ジョナサン・スターン",
    description: "",
    impression: "",
    status: "reading"
  },
  {
    title: "パフォーマンス・アート",
    subtitle: "未来派から現代まで",
    author: "ローズリー・ゴールドバーグ，深川雅文（監訳）",
    year: 2026,
    origYear: 1979,
    amazon: "https://www.amazon.co.jp/s?k=パフォーマンス・アート+ゴールドバーグ",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "実験音楽",
    subtitle: "1970年から現代まで",
    author: "ジェニ・ゴチョーク，杉本拓ほか（訳）",
    year: 2026,
    origYear: 2016,
    amazon: "https://www.amazon.co.jp/s?k=実験音楽+ゴチョーク",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "現代世界における日常生活",
    subtitle: "",
    author: "アンリ・ルフェーブル，森本和夫（訳）",
    year: 2026,
    origYear: 1968,
    amazon: "https://www.amazon.co.jp/s?k=現代世界における日常生活+ルフェーブル",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "複製技術時代の芸術",
    subtitle: "",
    author: "ヴァルター・ベンヤミン，佐々木基一（訳）",
    year: 1999,
    origYear: 1936,
    amazon: "https://www.amazon.co.jp/s?k=複製技術時代の芸術+ベンヤミン",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "現代写真論",
    subtitle: "",
    author: "シャーロット・コットン，大橋悦子ほか（訳）",
    year: 2010,
    origYear: 2004,
    amazon: "https://www.amazon.co.jp/s?k=現代写真論+シャーロット・コットン",
    description: "",
    impression: "",
    status: "reading"
  },
  {
    title: "観察者の系譜",
    subtitle: "",
    author: "ジョナサン・クレーリー，遠藤知巳（訳）",
    year: 2005,
    origYear: 1990,
    amazon: "https://www.amazon.co.jp/s?k=観察者の系譜+ジョナサン・クレーリー",
    description: "",
    impression: "",
    status: "unread"
  },
  {
    title: "WAYS OF BEING",
    subtitle: "人間以外の知性",
    author: "ジェームズ・ブライドル，岩崎晋也（訳）",
    year: 2024,
    origYear: 2022,
    amazon: "https://www.amazon.co.jp/s?k=WAYS+OF+BEING+ジェームズ・ブライドル",
    description: "",
    impression: "",
    status: "unread"
  }
];
