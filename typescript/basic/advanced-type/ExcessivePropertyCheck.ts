export default null;

/*
過剰プロパティチェック

オブジェクトAがオブジェクトBに割り当て可能になるには、対応するそれぞれのプロパティについて
「Aのプロパティの型がBのプロパティの型のサブタイプであるか、またはBと同じ型である」必要がある。
この性質を共変性という。

過剰プロパティチェックはオブジェクトの割り当て時に関係する。

*/

type Options = {
    baseURL: string
    cacheSize?: number
    tier?: 'prod' | 'dev'
}

class API {
    constructor(private options: Options) { }
}

// Ex1. APIインスタンスを作成 (正常に動作する)
new API({
    baseURL: 'https://api.example.com',
    tier: 'prod'
})

// Ex2. プロパティ名をタイポしてAPIインスタンスを作成 (エラー)
// new API({
//     baseURL: 'https://api.example.com',
//     tierr: 'prod'
// })


/*
Ex2.において、引数として渡したオブジェクトはnew API()が期待する型のサブタイプであるが、エラーが発生した。
この原因はフレッシュなオブジェクトリテラル型Tを別の型Uに割り当てようとするときに、
Uに存在しないプロパティがTに存在すると、TypeScriptがエラーを出すからである。
この仕組みが過剰プロパティチェックである。

「フレッシュなオブジェクトリテラル型」とは、TypeScriptがオブジェクトリテラルから推論する型である。
例えば、
・あるオブジェクトが型アサーションされている
・あるオブジェクトが変数に割り当てられている
以上をどれか1つでも満たす場合、フレッシュではなくなる。(通常のオブジェクト型に型拡大される)

フレッシュではないオブジェクトについては、過剰プロパティチェックは働かなくなる。

*/

// Ex3. フレッシュなオブジェクトリテラル型なので過剰プロパティチェックが働き、共変性を満たさないのでエラーとなる
// new API({
//     baseURL: 'https://api.example.com',
//     badTier: 'prod'
// })


// Ex4. 型アサーションにより強制的にOptions型であると主張する。
//      型アサーションを使うことでフレッシュではなくなり、過剰プロパティチェックは働かない。
new API({
    baseURL: 'https://api.example.com',
    badTier: 'prod'
} as Options)


// Ex5. オブジェクトを変数に割り当てる。
//      変数に割り当てたことで、フレッシュではないとみなし、過剰プロパティチェックは行わない。
//      new API()に渡す引数が期待する型のサブタイプであるため、正常に動作する。
let badOptions = {
    baseURL: 'https://api.example.com',
    badTier: 'prod'
}
new API(badOptions)


// Ex6. 明示的にアノテーションすることで、options変数はフレッシュとなる。
//      したがって、過剰プロパティチェックが作用する。
//      なお、この例ではnew API()ではなく、options変数の宣言時にエラーとなる。(ERROR!!の行)
// let options: Options = {
//     baseURL: 'https://api.example.com',
//     badTier: 'prod'  // ERROR!!
// }

// new API(options)