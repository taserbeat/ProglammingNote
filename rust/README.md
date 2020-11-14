# Rust

[日本語公式サイト](https://www.rust-lang.org/ja)

# インストール

https://rustup.rs/

ターミナルで上記サイトのコマンドを実行する。  
rustup のインストール方法を聞かれたら、default の 1 を選択する。

```bash
1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>1
```

# バージョン確認

## Cargo

パッケージマネージャ兼ビルドツール。  
新規にプロジェクトを構築する際に実行するコマンドでもある。

```bash
cargo --version
cargo 1.47.0 (f3c7e066a 2020-08-28)
```

## rustc

Rust のコンパイラのこと。
直接実行することもできるが、cargo コマンド経由で呼び出す。

```bash
rustc --version
rustc 1.47.0 (18bf6b4f0 2020-10-07)
```

## rustup

Rust ツールチェインのインストーラ。

```bash
rustup --version
rustup 1.22.1 (b01adbbc3 2020-07-08)
```

# プロジェクト構築

```bash
cargo new hello_world --bin
cd hello_world
```

# VSCode 向けのコーディング設定

## Language Server

執筆時点(2020/11)での Language Server の選択肢は以下 2 つ。

- [Rust Language Server(rls)](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer)

自分の環境では `rls`でコード補完がうまく作動しなかったが、`rust-analyzer`はコード補完できた。  
ただし、プロジェクトフォルダ(例えば、`hello_world`フォルダ)を VSCode で開き直さなければいけない。

## デバッグ

VSCode 上でデバッグを行うには[CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb)をインストールすることでできた。
