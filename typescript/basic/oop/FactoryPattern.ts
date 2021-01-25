export default null;

/*
Factoryパターン (デザインパターン)

ある型のオブジェクトを生成するための方法で、どのような具象型オブジェクトを生成するかの決定を
Factory(オブジェクト生成用工場)に委ねるパターン。

*/

/*
例: 靴(shoe)のファクトリを作る。createメソッドのtype引数に応じて生成するインスタンスの型を切り替える。

*/

type Shoe = {
    purpose: string
}

class Boot implements Shoe {
    purpose = 'dancing'
}

class Sandals implements Shoe {
    purpose = 'comfortable'
}

class Sneaker implements Shoe {
    purpose = 'outside'
}

const Shoe = {
    create(type: 'boot' | 'sandals' | 'sneaker'): Shoe {
        switch (type) {
            case 'boot':
                return new Boot();
            case 'sandals':
                return new Sandals();
            case 'sneaker':
                return new Sneaker();
        }
    }
}

Shoe.create('sneaker');  // Sneaker { purpose: 'outside' }
Shoe.create('sandals');  // Sandals { purpose: 'comfortable' }
