// gatsby-ssr.js
import React from 'react';
import { Helmet } from 'react-helmet';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script key="marked" src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>,
  ]);
};

// gatsby-browser.js または gatsby-ssr.js
import { HelmetProvider } from "react-helmet-async";  // ここで HelmetProvider をインポート

export const wrapRootElement = ({ element }) => {
  return <HelmetProvider>{element}</HelmetProvider>;  // ここでラップ
};
