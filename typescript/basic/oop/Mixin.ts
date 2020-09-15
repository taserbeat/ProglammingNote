import { userInfo } from "os";

export default null;

/*
ミックスイン (※正確には、役割指向の考え方でOOPではない)

複数の振る舞いやプロパティを1つのクラスの中に混ぜ合わせることを可能にするパターン。
次の例では、ServiceUserクラスの振る舞いやプロパティ(getDebugValueメソッドやid、name)を安全に呼び出し可能なことを保証しながら
全く別のUserクラスにServiceUserの振る舞いを混ぜている。(継承やインターフェースを使用せずに)
*/

/* 
デバッグライブラリを実装したときの使い方例

class ServiceUser {
    // ...
}

const User = withEZDebug(ServiceUser);
const user = new User(...);
User.debug();  // ServiceUser({"id": 1, "name": "taro"})のように評価される
*/

type ClassConstructor<T> = new (...args: any[]) => T;

const withEZDebug = <C extends ClassConstructor<{ getDebugValue(): object }>>(Class: C) => {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args);
        }

        debug() {
            let className = Class.name;
            let value = this.getDebugValue();
            return className + '(' + JSON.stringify(value) + ')';
        }
    }
}

class ServiceUser {
    constructor(private id: number, private name: string) { }
    getDebugValue() {
        return {
            id: this.id,
            name: this.name
        }
    }
}

const User = withEZDebug(ServiceUser);
const taro = new User(1, 'taro');
const hanako = new User(2, 'hanako');

console.log(taro.debug());  // ServiceUser({"id":1,"name":"taro"})
console.log(hanako.debug());  // ServiceUser({"id":2,"name":"hanako"})
