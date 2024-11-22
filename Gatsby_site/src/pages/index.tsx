import React from 'react';
import { Link } from 'gatsby';
import '../styles/style.css';
import { Helmet } from 'react-helmet-async';

const TopPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HOME</title>
      </Helmet>

      <Link to="/" className="link" />
      <div className="body-margin-LR">
        {/* トップボタンとホームボタン */}
        <Link to="#page-top" id="page-top">
          <i className="blogicon-chevron-up"></i>TOP
        </Link>
        <Link to="/" id="home-link">
          <i className="blogicon-home"></i>HOME
        </Link>

        {/* ページタイトル */}
        <div className="text-center">
          <h1>akikukeo Wiki</h1>
        </div>

        {/* リンクセクション */}
        <div className="links">
          <div className="link">
            <p>
              <Link to="/minecraft" className="links">
                ここをクリック
              </Link>
              MinecraftServerのページにジャンプします
            </p>
            <p>
              <Link to="/credits" className="links">
                ここをクリック
              </Link>
              Creditsのページにジャンプします
            </p>
            <p>
              <Link to="/changelog" className="links">
                ここをクリック
              </Link>
              ChangeLogのページにジャンプします
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
