// gatsby-browser.js または gatsby-ssr.js
import React from "react";
import { HelmetProvider } from "react-helmet-async";  // ここで HelmetProvider をインポート

export const wrapRootElement = ({ element }) => {
  return <HelmetProvider>{element}</HelmetProvider>;  // ここでラップ
};
