export default null;

/*
finalクラスを実現する

TypeScriptには、クラスやメソッドについてのfinal修飾子をサポートしていない。
(OOPでは、finalはクラスの拡張やメソッドのオーバーライドを禁止にするという宣言の修飾子)

ただし、クラスのfinal修飾に相当することはできるのでfinalクラスを実現することは可能。
finalクラスの実現はコンストラクタをprivateにすればよい。

*/

class Queue {
    private constructor(private messages: string[]) { }
}

// class ExtendMessageQueue extends Queue { };  // クラス 'Queue' を拡張できません。Class コンストラクターがプライベートに設定されています。ts(2675)

/*
コンストラクタをprivateにするとfinalクラスを実現できるが、クラス外からnewでインスタンスを生成できなくなってしまう。
newの代わりにstaticメソッド経由でインスタンスを返せば、finalクラスを実現したままインスタンス生成の問題を解消できる。
(インスタンス生成の呼び出しがコンストラクタではなく、ユーザー定義メソッドになるという変更はあるが...)

*/

// newはできない
// const queue = new Queue([]);  // クラス 'Queue' のコンストラクターはプライベートであり、クラス宣言内でのみアクセス可能です。ts(2673)

class MessageQueue {
    private constructor(private messages: string[]) { }
    static create(messages: string[]) {
        return new MessageQueue(messages);
    }
}

// class MyQueue extends MessageQueue { };  // クラス 'MessageQueue' を拡張できません。Class コンストラクターがプライベートに設定されています。ts(2675)

// newの代わりに静的メソッドからインスタンスを生成する
const messageQueue = MessageQueue.create(['hello', 'world']);
console.log(messageQueue);  // MessageQueue { messages: [ 'hello', 'world' ] }
