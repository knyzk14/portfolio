// スキルの詳細を管理する辞書
const skillDescriptions = {
  "HTML": "Webページの記述に用いるマークアップ言語です。4年ほど前から使用しており、Web開発の基礎として習得しています。",
  "CSS": "Webページのスタイルやレイアウトを指定するためのスタイルシート言語です。HTMLと同じく4年ほど前から使用しており、Web開発の基礎として習得しています。",
  "JavaScript": "Webページに動的な振る舞いや複雑な機能を追加するためのプログラミング言語です。4年ほど前から使用していますが、HTMLやCSSと比べるとまだまだ学習中です。",
  "TypeScript": "JavaScriptに静的型付けを追加し、安全かつ効率的な開発を可能にするスーパーセット言語です。 Reactなどで用いますが、学習中です。",
  "React": "ユーザーインターフェースを構築するためのコンポーネントベースのJavaScriptライブラリです。1年ほど前から使用しており、Web開発のフロントエンドで活用しています。",
  "Vite": "非常に高速な開発サーバーと最適化されたビルドを提供する、次世代のフロントエンドツールです。Reactと組み合わせて使用しています。",
  
  "Go": "シンプルで信頼性が高く、効率的なバックエンドシステムなどを構築できるコンパイル言語です。2年ほど前から使用しており、主にWeb開発のバックエンドで活用しています。",
  "Python": "簡潔で読みやすい文法を持ち、データ処理からWeb開発まで幅広く使われる言語です。5年ほど前から使用していますが、最近はGoに注力しており、Pythonはあまり使用していません。",
  "Tauri": "Web技術を用いてクロスプラットフォームのデスクトップアプリケーションを構築するためのフレームワークです。使用歴は1年未満ですが、基本的にほとんどがweb開発の知識で対応可能です。",
  "Firebase": "Googleが提供するクラウドプラットフォームで、リアルタイムデータベースや認証、ホスティングなどの機能を提供します。2年ほど前から使用しており、主にアカウント認証に活用しています。",
  "FastAPI": "Pythonで高速なWeb APIを構築するためのフレームワークです。最近はGo(net/http)を使用することが多いですが、使用経験はFastAPIの方が長いです。",
  "Docker": "アプリケーションをコンテナ化し、環境の一貫性を保ちながら開発・デプロイを行うためのプラットフォームです。1年ほど前から使用しています。",

  "Git": "プログラムのソースコードなどの変更履歴を記録・追跡するための分散型バージョン管理システムです。5年ほど前から使用しています。",
  "GitHub": "Gitを用いたソースコードのバージョン管理や共同開発を行うためのWebサービスです。5年ほど前から使用しています。",
  "VS Code": "Microsoftが提供する拡張性の高いコードエディタです。開発は主にこれを用いて行っています。5年ほど前から使用しています。",
  "Ubuntu": "Debian系のLinuxディストリビューションです。サーバー機として運用しており、2年ほど稼働し続けています。",
  "Markdown": "軽量マークアップ言語で、テキストを簡単に整形するための記法です。主にREADME.mdなどのドキュメント作成に使用しています。5年ほど前から使用しています。",
  "IntelliJ IDEA": "Javaをはじめとする多くのプログラミング言語に対応した統合開発環境です。MinecraftのMod開発に、1年ほど前から使用しています。",
  "Gradle": "JavaやKotlinなどのプロジェクトのビルドや依存関係管理を自動化するためのビルドツールです。MinecraftのMod開発に、1年ほど前から使用しています。",
  "Ableton Live": "直感的な楽曲制作やライブパフォーマンスに特化したDAWソフトウェアです。趣味で音楽制作を行う際に使用しています。"
};

// DOM要素の取得
const skillIcons = document.querySelectorAll('.skill-icon');
const descContainer = document.querySelector('.skill-desc');
const descTitle = descContainer.querySelector('h1');
const descText = descContainer.querySelector('p');

const defaultTitle = descTitle.textContent;
const defaultText = descText.textContent;

let textChangeTimeout; // テキスト変更の遅延用
let resetTimeout;      // 初期化の遅延用
let leaveTimeout;      // マウス離脱時の遅延用

skillIcons.forEach(icon => {
  icon.addEventListener('mouseenter', (e) => {

    clearTimeout(leaveTimeout);
    clearTimeout(resetTimeout);

    const title = e.target.getAttribute('data-title');
    const newText = skillDescriptions[title] || "説明文が登録されていません。";

    descContainer.classList.add('is-active');

    if (descTitle.textContent === title) return;

    descTitle.classList.add('text-fade');
    descText.classList.add('text-fade');

    clearTimeout(textChangeTimeout);
    textChangeTimeout = setTimeout(() => {
      descTitle.textContent = title;
      descText.textContent = newText;

      descTitle.classList.remove('text-fade');
      descText.classList.remove('text-fade');
    }, 150);
  });

  icon.addEventListener('mouseleave', () => {
    leaveTimeout = setTimeout(() => {
      descContainer.classList.remove('is-active');
    }, 2000);
    resetTimeout = setTimeout(() => {
      descTitle.textContent = defaultTitle;
      descText.textContent = defaultText;
      descTitle.classList.remove('text-fade');
      descText.classList.remove('text-fade');
      descContainer.classList.add('is-active');
    }, 2300);
  });
});