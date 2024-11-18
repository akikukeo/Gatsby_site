import React from "react";
import { Link } from "gatsby";
import { Helmet, HelmetProvider } from 'react-helmet-async'; // 修正箇所
import "../../styles/style.css";  // 必要に応じてパスを修正

const ChangelogPage = () => {
  return (
    <HelmetProvider> {/* HelmetProvider でヘルメットをラップ */}
      <div>
        {/* Helmetでhead要素を管理 */}
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>ChangeLog</title>
          <link href="../../style.css" rel="stylesheet" type="text/css" media="all" />
          <link href="Changelog.css" rel="stylesheet" type="text/css" media="all" />
          {/* 外部スクリプトの読み込みは通常gatsby-ssr.jsやgatsby-browser.jsで設定 */}
          {/* <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script> */}
        </Helmet>

        <div className="body-margin-LR">
          {/* トップボタンとホームボタン */}
          <a href="#" id="page-top">
            <i className="blogicon-chevron-up"></i>TOP
          </a>
          <Link to="/" id="home-link">
            <i className="blogicon-home"></i>HOME
          </Link>

          {/* ページタイトル */}
          <div className="text-center">
            <h1>ChangeLog</h1>
            <p>このページでは、このサイトの変更履歴を記載しています。</p>
          </div>

          {/* 本文 */}
          <div className="text">
            <section>
              <h3 id="2024-11-12">2024-11-12</h3>
              <ul>
                <li><strong>追加:</strong> ChangeLogページ</li>
                <li><strong>変更:</strong> フォルダ構成</li>
                <li><strong>変更:</strong> CSSの一元化</li>
                <li><strong>変更:</strong> TOPページにChangeLogリンクを追加</li>
                <li><strong>変更:</strong> コードの可読性向上</li>
                <li><strong>変更:</strong> ChangeLogの見やすさ向上</li>
                <li><strong>変更:</strong> ChangeLogにidを追加し、リンクで飛びやすく改善</li>
              </ul>
            </section>
            <section>
              <h3 id="2024-11-10">2024-11-10</h3>
              <ul>
                <li><strong>変更:</strong> 各種更新</li>
              </ul>
            </section>
            <section>
              <h3 id="2024-11-8">2024-11-8</h3>
              <ul>
                <li><strong>追加:</strong> 各ページ</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ChangelogPage;
