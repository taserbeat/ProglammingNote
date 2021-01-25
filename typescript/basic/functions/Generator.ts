/*
ジェネレータ

一連の値を生成するときに使える関数。
nextメソッドで次々に値を取得でき、取得した値は次のようなオブジェクトになる。
*/

function* createOddGenerator() {
    let odd = 1;
    while (true) {
        yield odd;
        odd += 2;
    }
}

const oddGenerator = createOddGenerator();
oddGenerator.next();  // { value: 1, done: false }
oddGenerator.next();  // { value: 3, done: false }
oddGenerator.next();  // { value: 5, done: false }

/*
ジェネレータの値生成が終わってからはundefinedが返る。
また、doneフラグがtrueになる。
*/

function* createMessageGenerator() {
    const messages = ['hello', 'world', '!'];
    for (let i = 0; i < messages.length; i++) {
        yield messages[i];
    }
}

const messageGenerator = createMessageGenerator();
messageGenerator.next();  // { value: 'hello', done: false }
messageGenerator.next();  // { value: 'world', done: false }
messageGenerator.next();  // { value: '!', done: false }
messageGenerator.next();  // { value: undefined, done: true }
messageGenerator.next();  // { value: undefined, done: true }
