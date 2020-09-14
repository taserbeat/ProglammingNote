export default null;

/*
クラス

TypeScriptでもクラスや継承はサポートされている。
*/

abstract class Animal {
    isAlive = true;
    constructor(private readonly birthdate: Date, protected age: number, private gender: '男' | '女' | 'その他') { }

    // pubic修飾子を付けることで明示的にpublicメソッドとなる
    public getBirthdate(): Date {
        return this.birthdate;
    }

    // 修飾子を付けていないのでデフォルトのpublicメソッドとなる
    getGender(): string {
        return this.gender;
    }

    setAge(newAge: number) {
        this.age = newAge;
    }

    // 抽象メソッドを宣言し、サブクラスに実装を強制させる
    abstract die(): void;
}


interface IWalk {
    walk(distance: number): void
}

interface IEat {
    eat(food: string): void
}

class Person extends Animal implements IWalk, IEat {
    constructor(private name: string, birthdate: Date, age: number, gender: '男' | '女') {
        super(birthdate, age, gender);
    }

    getAge() {
        return this.age;
    }

    walk(distance: number) {
        console.log(`${distance}キロ歩きました。`);
    }

    eat(food: string) {
        console.log(`${food}を食べました。`);
    }

    die() {
        this.isAlive = false;
        console.log(`ゲームオーバー。${this.name}は享年${this.age}歳です。`);
    }
}

const taro = new Person('taro', new Date(), 0, '男');
taro.eat('ベビーフード');  // ベビーフードを食べました。
taro.walk(0.01);  // 0.01キロ歩きました。


taro.setAge(20);
taro.eat('ビール🍺');  // ビール🍺を食べました。


/* インターフェースからメソッドを呼び出す */
const iWalk: IWalk = taro;
iWalk.walk(10);  // ダイエット


// RIP
taro.setAge(99);
console.log(taro.isAlive);  // true
taro.die();  // ゲームオーバー。taroは享年99歳です。
console.log(taro.isAlive); // false