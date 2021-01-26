# TypeScript
node、yarnがインストール済みとする。  
執筆時点の筆者のバージョンは以下の通り。  

```
node -v
>> v12.16.1

yarn -v
>> 1.22.4
```

# プロジェクト構築
[ここ](https://qiita.com/senou/items/d939601e32c0005ebfe3)を参考にプロジェクトを構築していく。  

1. 任意のフォルダ(プロジェクトのフォルダ)で`git init`する

    ```
    git init
    ```


2. `.gitignore`を作成し、不要なファイルのコミットをしないようにする


3. package.jsonを生成し、必要に応じて書き換える。

    ```
    yarn init -y
    ```


4. TSC、Node.jsの型宣言をインストール

    ```
    yarn add --dev typescript @types/node
    ```


5. typescriptパッケージのバージョンを確認する

    ```
    yarn tsc --version
    >> Version 4.1.3
    ```


6. tsconfig.jsonの生成

    ```bash
    yarn tsc --init
    ```


7. プロジェクトに合わせてtsconfig.jsonを修正 
[helloworld/tsconfig.json](./helloworld/tsconfig.json)を参考


8. `src/index.ts`を作成し、確認用のコードを書く

    ```TypeScript
    function hello(name: string): string {
        return `Hello ${name}!`;
    }
    
    console.log(hello("World"));
    ```


9. `yarn tsc`を実行すると、TypeScriptからJavaScriptの変換が行われ、distフォルダに出力される

    ```
    yarn tsc
    ls dist
    >> index.js    index.js.map
    ```

10. `index.js`を実行してみる

    ```
    node dist/index.js
    >> Hello World!
    ```


11. 開発効率を上げる (`ts-node`の導入)

    ```
    yarn add --dev ts-node
    ```

    `ts-node`コマンドでTypeScriptが実行できるようになる

    ```
    yarn ts-node src/index.ts
    >> Hello World!
    ```


12. Lintツールを導入 (オプション)

    `tslint`をインストール

    ```
    yarn add --dev tslint
    ```

    `tslint.json`を生成

    ```
    yarn tslint --init
    ```

    `tslint.json`を適宜書き換える。  
    [helloworld/tslint.json](./helloworld/tslint.json)を参照
