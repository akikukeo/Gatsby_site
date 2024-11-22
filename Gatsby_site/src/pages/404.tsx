// src/pages/404.js
import React from 'react';
import { Link } from 'gatsby';
import '../styles/404.css'; // CSSファイルのインポート
import '../styles/style.css';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => (
  <div className="not-found-container">
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>404NotFound</title>
    </Helmet>

    {/* トップボタンとホームボタン */}
    <Link to="#page-top" id="page-top">
      <i className="blogicon-chevron-up"></i>TOP
    </Link>
    <Link to="/" id="home-link">
      <i className="blogicon-home"></i>HOME
    </Link>

    <h1>404 - ページが見つかりません</h1>
    <p>お探しのページは存在しないか、削除された可能性があります。</p>
    <div className="links">
      <div className="link">
        <p>
          <Link to="/" className="links">
            HOMEへ戻る
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
