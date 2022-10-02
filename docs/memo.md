# Chrome Extension with Webpack × TypeScript × React

#### ディレクトリ構造

```
.
├── Makefile
├── dist
├── docs
│   └── memo.md
├── package-lock.json
├── package.json
├── src
│   ├── background         # Background script
│   │   └── index.ts
│   ├── contents           # Content scripts
│   │   └── index.ts
│   ├── manifest.json      # Extension manifest (Manifest V3)
│   ├── options            # Options page
│   │   ├── index.html
│   │   ├── index.tsx
│   │   └── style.css
│   └── popup              # Popup page
│       ├── index.html
│       ├── index.tsx
│       └── style.css
├── tsconfig.json
└── webpack.config.js
```

## プロジェクトセットアップ

```shell
$ npm init -y
$ npm install --save-dev \
  webpack webpack-cli @types/webpack \
  html-webpack-plugin webpack-dev-server \
  style-loader css-loader \
  typescript ts-loader \
  react react-dom @types/react @types/react-dom \
  @types/chrome \
```


## 開発

- 「パッケージ化されていない拡張機能を読み込む」で `./dist` ディレクトリを読み込む
- `npm run watch` で watch モードでビルドする
- いちいち Chrome 上で「更新」ボタンを押さずとも、スクリプトやページが更新されるようになる！
