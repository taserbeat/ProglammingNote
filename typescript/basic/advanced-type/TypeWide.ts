export default null;

/*
型の拡大(type widening)

TypeScriptは型推論のとき、考えられる最も具体的な型ではなく、より一般的な型を推論する傾向にある。

ミュータブルな変数宣言(letやvarを使用)における変数の型は、リテラル値からリテラルが属する親玉の型へと拡大される。
*/

let a = 'x'  // string型
let b = 3  // number型
var c = true  // boolean型
const d = { x: 3 }  // {x: number}型

enum E { X, Y, Z }
let e = E.X  // E


/*
イミュータブルな変数宣言(constを使用)では型の拡大は抑えられる。
*/

const f = 'x'  // "x"型
const g = 3  // 3型
const h = true  // true型

enum I { X, Y, Z }
const j = E.X  // E.X型


/*
明示的な型アノテーションを使うと、型の拡大を防ぐことができる。
なお、letやvarで変数宣言したのに関わらず推論されたリテラル型以外の代入はできない。
*/

let k: 'x' = 'x'  // "x"型
let l: 3 = 3  // 3型
var m: true = true  // true型
const n: { x: 3 } = { x: 3 }  // {x: 3}型

// k = 'y'  // 代入できない


/*
拡大されない型を、letやvarで別の新しい変数として再割り当てすると、型が拡大される。
また、型の拡大を抑えるには、宣言元で明示的な型アノテーションを追加する。
*/

const foo = 'x'  // "x"型
let bar = foo  // string型

const hoge: 'x' = 'x'  // "x"型
let fuga = hoge  // "x"型


/*
null、またはundefinedに初期化された変数はany型に拡大される。
*/

let piyo = null  // any型
piyo = 3  // any型
piyo = 'p'  // any型

/*
null、またはundefinedに初期化された変数が、宣言元のスコープを抜けると明確な型を推論する。
*/

const func = () => {
    let a = null;  // any型
    a = 3;  // any型
    a = 'b';  // any型

    return a;
}

func();  // () => string