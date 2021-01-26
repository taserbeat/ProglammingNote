# helloworld

TypeScript の Hello World コード

# 新規プロジェクト構築

[typescript/README.md](../README.md)を参照

# プロジェクトの復元

```bash
cd typescript/helloworld
yarn
```

# 機能

- トランスコンパイル
  TypeScript から JavaScript へのコンパイルは`tsc`で行える。
  コンパイル対象のソースファイルや出力するフォルダなどの指定は`tsconfig.json`で行う。

```bash
yarn tsc
```

- Node.js で JavaScript を実行する

```bash
node dist/index.js
```

- TypeScript ファイルから直接実行する
  `ts-node`を使うことで TypeScript ソースを直接実行できる。

```
yarn ts-node src/index.ts
```
