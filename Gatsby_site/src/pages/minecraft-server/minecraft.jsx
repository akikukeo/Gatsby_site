import React, { useEffect, useState } from "react";
import "../../styles/style.css"; // 必要に応じてCSSをインポート
import { Link } from "gatsby"; // GatsbyのLinkコンポーネントを使用
import marked from "marked"; // markedをインポート

const MinecraftWikiPage = () => {
  const [readmeContent, setReadmeContent] = useState("Loading...");

  useEffect(() => {
    async function fetchAndDisplayReadme() {
      const url = 'https://raw.githubusercontent.com/akikukeo/minecraft-server/refs/heads/main/docs/README.md';
      try {
        const response = await fetch(url);
        if (response.ok) {
          const markdown = await response.text();
          const htmlContent = marked.parse(markdown);
          setReadmeContent(htmlContent);
        } else {
          console.error('Failed to fetch README:', response.status);
          setReadmeContent("READMEの取得に失敗しました。");
        }
      } catch (error) {
        console.error('Error fetching README:', error);
        setReadmeContent("エラーが発生しました。");
      }
    }

    fetchAndDisplayReadme();
  }, []);

  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MinecraftServer Wiki</title>
        <link rel="stylesheet" href="../../style.css" />
        <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      </head>

      <body className="body-margin-LR">
        {/* トップボタンとホームボタン */}
        <a href="#" id="page-top">
          <i className="blogicon-chevron-up"></i>TOP
        </a>
        <Link to="../../index.html" id="home-link">
          <i className="blogicon-home"></i>HOME
        </Link>

        {/* ページタイトル */}
        <div className="text-center">
          <h1>MinecraftServer Wiki</h1>
          <h2>GitHub Document Viewer</h2>
          <p>Links are not supported!</p>
        </div>

        {/* README取得セクション */}
        <div className="bordered">
          <div
            id="readme-content"
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: readmeContent }}
          />
        </div>
      </body>
    </div>
  );
};

export default MinecraftWikiPage;