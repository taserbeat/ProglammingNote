/*
ジェネリック

具体的な型を指定せず、抽象的な型指定を行うことで汎用的な型の制約を付けることができる。
*/

// JavaScriptのfilterメソッドを自作するための型シグネチャ
// Tのスコープが1つの1シグネチャに限られるので、Filter1型の関数を呼び出すときにTを具体的な型にバインドする。
type Filter1 = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

// Filter1のジェネリック型パラメータTは、実際に呼び出されるときに具体的な型が決まり、関数の宣言時には抽象的な型となる。
// 一度型が決まれば残りのジェネリック型パラメータTも型チェックによって文脈から推論される。
const filter1: Filter1 = <T>(array: T[], f: (item: T) => boolean) => {
    const result: T[] = [];
    for (let item of array) {
        if (f(item)) {
            result.push(item);
        }
    }

    return result;
}

filter1([1, 2, 3, 4, 5], _ => _ % 2 == 1);  // [1, 3, 5]


// Tのスコープがシグネチャ全体に及び、Filter2の型の一部として宣言されているので、
// 関数を宣言するときにTを具体的な型にバインドする。
type Filter2<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}

// 関数の宣言時にジェネリック型パラメータTを具体的な型(ここではstring)にバインドする。
// そして文脈からarrayやfの型が推論される。
const filter2: Filter2<string> = (array, f) => {
    const result: string[] = [];
    for (let item of array) {
        if (f(item)) {
            result.push(item);
        }
    }

    return result;
}

filter2(['tom', 'john', 'mike', 'alice', 'jane'], _ => _.startsWith('j'));  // ['john', 'jane']


// JavaScriptのmapメソッドを自作する (型シグネチャの定義を行わず、直接関数を宣言する際にジェネリックを使う)
const map = <T, U>(array: T[], f: (item: T) => U): U[] => {
    const result: U[] = [];
    for (let item of array) {
        result.push(f(item));
    }

    return result;
}

map([1, 2, 3, 4, 5], _ => _ * _);  // [1, 4, 9, 16, 25]
