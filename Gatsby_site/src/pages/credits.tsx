import React, { useEffect } from 'react';
import { marked } from 'marked';
import '../styles/style.css'; // CSSのインポート
import '../styles/credits.css';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet-async';

const CreditsPage = () => {
  useEffect(() => {
    // marked_md READMEの表示
    fetchAndDisplayReadme(
      'https://raw.githubusercontent.com/taisukef/marked_md/refs/heads/master/LICENSE.md',
      'readme-content'
    );

    // github-markdown-css ライセンスの表示
    fetchAndDisplayReadme(
      'https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/license',
      'content'
    );
  }, []);

  async function fetchAndDisplayReadme(url: string, elementId: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const markdown = await response.text();
        const htmlContent = await marked.parse(markdown);
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = htmlContent;
        }
      } else {
        console.error(`Failed to fetch ${elementId}:`, response.status);
        const element = document.getElementById(elementId);
        if (element) {
          element.innerText = 'コンテンツの取得に失敗しました。';
        }
      }
    } catch (error) {
      console.error(`Error fetching ${elementId}:`, error);
      const element = document.getElementById(elementId);
      if (element) {
        element.innerText = 'エラーが発生しました。';
      }
    }
  }
  return (
    <div className="body-margin-LR">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Credits</title>
      </Helmet>

      {/* トップボタンとホームボタン */}
      <Link to="#page-top" id="page-top">
        <i className="blogicon-chevron-up"></i>TOP
      </Link>
      <Link to="/" id="home-link">
        <i className="blogicon-home"></i>HOME
      </Link>

      <div className="text-center">
        <h1>Credits</h1>
        <p>
          以下のオープンソースソフトウェア／ライブラリ／ソースコードを使用しています。
        </p>
      </div>

      <h2>
        <div className="leftMargin">
          <div className="links">
            <div className="link">
              <p>
                <Link
                  to="https://github.com/taisukef/marked_md"
                  className="links"
                >
                  marked_md
                </Link>
              </p>
            </div>
          </div>
        </div>
      </h2>
      <div className="bordered" id="readme-content">
        <p>Loading...</p>
      </div>

      <h2>
        <div className="leftMargin">
          <div className="links">
            <div className="link">
              <p>
                <Link
                  to="https://github.com/sindresorhus/github-markdown-css"
                  className="links"
                >
                  github-markdown-css
                </Link>
              </p>
            </div>
          </div>
        </div>
      </h2>
      <div className="bordered" id="content">
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default CreditsPage;
