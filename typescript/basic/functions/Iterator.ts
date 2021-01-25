/*
イテレータ

ジェネレータが一連の値を生成するのに対し、
イテレータはそれらの値を利用するための方法である。
*/

/*
Symbol.iteratorを実装するオブジェクトを作成することで、
反復可能なオブジェクトを自作できる。
*/
const myNumbers = {
    *[Symbol.iterator]() {
        for (let i = 1; i <= 10; i++) {
            yield i;
        }
    }
}

// for-ofで反復可能オブジェクトを反復できる
for (let i of myNumbers) {
    console.log(i);  // 1 2 3 ... 10
}

// 反復可能オブジェクトを配列に展開できる
const allNumbers = [...myNumbers];  // [1, 2, 3, ..., 10]

// スプレッド構文で反復可能オブジェクトを分割割り当てできる
const [one, two, ...otherNumbers] = myNumbers;  // 1 2 [3, 4, 5, ..., 10]

/*
***** 用語の確認 *****

・反復可能オブジェクト(Iterable)
Symbol.iteratorと呼ばれるプロパティを含んでいるオブジェクト。
このプロパティの値は、イテレータを返す関数。

・イテレータ(Iterator)
nextと呼ばれるメソッドを定義しているオブジェクト。
nextメソッドは、valueとdoneというプロパティを持つオブジェクトを返す。(Generator.tsも参照)

*/

