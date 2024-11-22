
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/workspaces/Gatsby_site/Gatsby_site/src/pages/404.tsx")),
  "component---src-pages-changelog-tsx": preferDefault(require("/workspaces/Gatsby_site/Gatsby_site/src/pages/changelog.tsx")),
  "component---src-pages-credits-tsx": preferDefault(require("/workspaces/Gatsby_site/Gatsby_site/src/pages/credits.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/workspaces/Gatsby_site/Gatsby_site/src/pages/index.tsx")),
  "component---src-pages-minecraft-tsx": preferDefault(require("/workspaces/Gatsby_site/Gatsby_site/src/pages/minecraft.tsx"))
}

