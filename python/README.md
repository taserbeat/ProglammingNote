# Python
- Python 3.7.4 (3.6.0以上)
- pip 19.0.3 (バージョンは基本的に気にしなくてよい)
- ライブラリのバージョン依存問題をなるべく回避するため、venvを使用
- pyenvを利用してホストマシンのPythonバージョンを切り替えるようにすると便利

<br>

# 環境構築
1. 下記を参考にpyenvを導入し、Python 3.7.4をインストール

    https://qiita.com/crankcube/items/15f06b32ec56736fc43a

<br>

2. サンプルのフォルダに`cd`する

    ```
    cd PATH/TO/http_client
    ```

<br>

3. venvで仮想環境を作成し、環境を読み込む (ホスト上でライブラリの依存問題を気にしない場合はスキップ)

    ```
    python -m venv .venv
    source .venv/bin/activate
    >> (.venv) ~/PATH/TO/http_client
    ```

<br>

4. 必要なライブラリをインストール

    ```
    pip install -r requirements.txt
    ```

<br>

5. ソースコードを実行

    ```
    python http_client.py
    ```

<br>

6. 仮想環境から抜けるときは以下のコマンドを実行する

    ```
    deactivate
    >> ~/PATH/TO/http_client
    ```

<br>