import React from "react";
import { Link } from "gatsby";
import "../styles/style.css";

const TopPage = () => {
  return (
    <div className="body-margin-LR">
      {/* トップボタンとホームボタン */}
      <a href="#page-top" id="page-top">
        <i className="blogicon-chevron-up"></i>TOP
      </a>
      <Link to="/" id="home-link">
        <i className="blogicon-home"></i>HOME
      </Link>

      {/* ページタイトル */}
      <div className="text-center">
        <h1>akikukeo Wiki</h1>
      </div>

      {/* リンクセクション */}
      <div className="links">
        <p>
          <Link to="/minecraft-server/minecraft">
            ここをクリック
          </Link>{" "}
          MinecraftServerのページにジャンプします
        </p>
        <p>
          <Link to="/credits/credits">
            ここをクリック
          </Link>
          Creditsのページにジャンプします
        </p>
        <p>
          <Link to="/CHANGELOG/changelog">
            ここをクリック
          </Link>
          ChangeLogのページにジャンプします
        </p>
      </div>
    </div>
  );
};

export default TopPage;