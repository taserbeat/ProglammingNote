import { Stream } from "stream";

export default null;

/*

タグ付き合併型

*/

/*
[例1]
以下の例では、TypeScriptコンパイラが文脈的型推論によって、
オブジェクトのプロパティ(event.value)から合併型のサブタイプをただ一つに特定していることがわかる。

これはUserEvent1が排他的な型同士の合併であるため実現している。

*/

type UserTextEvent1 = { value: string }
type UserMouseEvent1 = { value: [number, number] }
type UserEvent1 = UserTextEvent1 | UserMouseEvent1

function handle1(event: UserEvent1) {
    if (typeof event.value === 'string') {
        event.value  // string型

        return
    }
    event.value      // [number, number]型

    return
}


/*
[例2]
以下の例はif節の中外関係なく、event.targetが`HTMLInputElement | HTMLElement型`と推論されている。
これはUserEvent2型の引数をとる場合、UserTextEvent2型、またはUserMouseEvent2型を渡さなければならないことを意味しない。

あくまでUserEvent2の型は`UserTextEvent2 | UserMouseEvent2`であり、
合併型のメンバーは型が重複する可能性があるため、TypeScriptは合併型のどのケースであるかをただ一つに特定できない。
(targetプロパティが重複しているので、排他的でない)

*/

type UserTextEvent2 = { value: string, target: HTMLInputElement }
type UserMouseEvent2 = { value: [number, number], target: HTMLElement }
type UserEvent2 = UserTextEvent2 | UserMouseEvent2

function handle2(event: UserEvent2) {
    if (typeof event.value === 'string') {
        event.value    // string型
        event.target   // HTMLInputElement | HTMLElement型

        return
    }
    event.value        // [number, number]型
    event.target       // HTMLInputElement | HTMLElement型

    return
}

/*
例2で、合併型のどのケースかをTypeScriptに知らせるにはリテラル型でタグ付けを行うとよい。
タグ付けのベストプラクティスは以下の通り。

1. 合併型の各ケースについて、同じフィールドに存在すること
    ほとんどの場合タグ付けはオブジェクトに行われるが、同じプロパティ名に設定する。
    (以下の例では、typeキー)

2. リテラル型としてタグ付けすること
    複数のリテラル型(文字列、数値、booleanなどのリテラル)を併用できるが、通常は文字列リテラルのみを使用する

3. ジェネリックではないこと

4. 互いに排他的であること
    合併型の中で一意なタグとする。

*/

type UserTextEvent3 = { type: 'TextEvent', value: string, target: HTMLInputElement }
type UserMouseEvent3 = { type: 'MouseEvent', value: [number, number], target: HTMLElement }
type UserEvent3 = UserTextEvent3 | UserMouseEvent3

function handle3(event: UserEvent3) {
    if (event.type === 'TextEvent') {
        event          // UserTextEvent3
        event.value    // string型
        event.target   // HTMLInputElement

        return
    }
    event              // UserMouseEvent3
    event.value        // [number, number]型
    event.target       // HTMLElement型

    return
}