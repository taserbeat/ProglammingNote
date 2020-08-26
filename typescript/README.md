# TypeScript
node、npmがインストール済みとする。  
執筆時点の筆者のバージョンは以下の通り。  

```
node -v
>> v12.16.1

npm -v
>>6.14.8
```

# プロジェクト構築
[ここ](https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49)を参考にプロジェクトを構築していく。  

1. 任意のフォルダ(プロジェクトのフォルダ)で`git init`する

    ```
    git init
    ```


2. `.gitignore`を作成し、不要なファイルのコミットをしないようにする


3. package.jsonを生成し、必要に応じて書き換える。

    ```
    npm init -y
    ```


4. TSC、Node.jsの型宣言をインストール

    ```
    npm install --save_dev typescript @types/node
    ```


5. typescriptパッケージのバージョンを確認する

    ```
    npx tsc --version
    >> Version 4.0.2
    ```


6. tsconfig.jsonの生成

    ```bash
    npx tsc --init
    ```


7. プロジェクトに合わせてtsconfig.jsonを修正 (helloworld/tsconfig.jsonを参考)


8. `src/index.ts`を作成し、確認用のコードを書く

    ```TypeScript
    function hello(name: string): string {
        return `Hello ${name}!`;
    }
    
    console.log(hello("World"));
    ```


9. `npx tsc`を実行すると、TypeScriptからJavaScriptの変換が行われ、distフォルダに出力される

    ```
    npx tsc
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
    npm install --save_dev ts-node
    ```

    `ts-node`コマンドでTypeScriptが実行できるようになる

    ```
    npx ts-node src/index.ts
    >> Hello World!
    ```


12. Lintツールを導入 (オプション)

    `tslint`をインストール

    ```
    npm install --save_dev tslint
    ```

    `tslint.json`を生成

    ```
    npx tslint --init
    ```

    `tslint.json`を適宜書き換える。  
    (helloworld/tslint.jsonを参照)
