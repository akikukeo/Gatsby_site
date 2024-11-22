import React from 'react';
import { Link } from 'gatsby';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // 修正箇所
import '../styles/style.css'; // 必要に応じてパスを修正
import '../styles/changelog.css';

const ChangelogPage = () => {
  return (
    <div className="body-margin-LR">
      {/* Helmetでhead要素を管理 */}
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ChangeLog</title>
      </Helmet>

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
          <h1>ChangeLog</h1>
          <p>このページでは、このサイトの変更履歴を記載しています。</p>
        </div>

        {/* 本文 */}
        {/* prettier-ignore */}
        <div className="text">

          {/*<section>
              <h3 id="yyyy-mm-dd">yyyy-mm-dd</h3>
              <ul>
                <li><strong>追加:</strong> hoge</li>
                <li><strong>変更:</strong> hoge</li>
                <li><strong>改善:</strong> hoge</li>
                <li><strong>修正:</strong> hoge</li>
                <li><strong>削除:</strong> hoge</li>
              </ul>
            </section>*/}
          
          <section>
            <h3 id="2024-11-23">2024-11-23</h3>
            <ul>
              <li><strong>追加:</strong> リンクの色とか</li>
              <li><strong>変更:</strong> typescriptの移行(めっちゃめんどかった...)</li>
              <li><strong>改善:</strong> Gatsbyの移行によりパフォーマンス向上(無駄技術)</li>
              <li><strong>修正:</strong> ボタンのリンク</li>
            </ul>
          </section>

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
  );
};

export default ChangelogPage;
