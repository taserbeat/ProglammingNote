export default null;

/*
型安全なアサーション関数isを実装する。
is関数は次のように使える。
*/

// stringとstringを比較する
// is('string', 'otherstring')  // false

// booleanとbooleanを比較する
// is(true, false)  // false

// numberとnumberを比較する
// is(20, 20)  // true

// 異なる型同士の比較すると、コンパイル(型チェック)時にエラーとなる
// is(10, 'abc')  // エラー

// 任意の数の引数を渡せる
// is([1], [1, 2], [1, 2, 3])  // false


// is関数の実装
const is = <T>(a: T, ...b: [T, ...T[]]): boolean => {
    return b.every(_ => _ === a);
}


is('string', 'otherstring');  // false
is(true, false)  // false
is(20, 20)  // true
// is(10, 'abc')  // エラー
is([1], [1, 2], [1, 2, 3])  // false
