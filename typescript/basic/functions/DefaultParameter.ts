/*
オプションパラメータ

「?」を付けることで省略可能な引数を定めることができる。
オプションパラメータはundefinedとの合併型となり、省略された場合はundefinedとして処理が走る。
*/

const showMessage = (message: string, username?: string) => {
    const response = `${username || '名無し'}さん: ${message}`;
    console.log(response);
}

showMessage('hello', '太郎');  // 太郎さん: hello
showMessage('world');  // 名無しさん: world

/*
オプションパラメータは必須パラメータより後ろでなければならない。
*/

/*
const badShowMessage = (username?: string, message: string) => {
     // オプションパラメータが必須パラメータより前にあるのでエラー
}
*/



/*
デフォルトパラメータ

オプションパラメータと同様に関数の引数に省略が可能とするもので、
省略される引数にデフォルト値を設定できる。
*/

const goodShowMessage = (message: string, username = '名無し') => {
    const response = `${username}さん: ${message}`;
    console.log(response);
}

goodShowMessage('ヤッホー', '花子');  // 花子さん: ヤッホー
goodShowMessage('ヤッハロー');  // 名無しさん: ヤッハロー


/*
デフォルトパラメータは必須パラメータとの順番に制限がない。
デフォルトパラメータが必須パラメータよりも前に来てもOK
ただしその場合、呼び出し側はデフォルトパラメータにundefinedを明示的に指定する必要がある(?)
*/

const anotherShowMessage = (username = '名無し', message: string) => {
    const response = `${username}さん: ${message}`;
    console.log(response);
}

anotherShowMessage('次郎', 'よろしく');  // 次郎さん: よろしく
anotherShowMessage(undefined, 'こちらこそ');  // 名無しさん: こちらこそ