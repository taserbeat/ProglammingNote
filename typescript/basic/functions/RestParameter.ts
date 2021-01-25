/*
引数としてリストを受け取る場合、そのリストを配列で渡すことができる。
*/
const sum = (numbers: number[]) => {
    return numbers.reduce((total, n) => total + n, 0);
}

sum([1, 2, 3]);  // 6


/*
可変長引数関数を作る場合はレストパラメータを使うことで、
任意の数の引数を安全に受け取ることができる。
この引数のアノテーションは配列となり、関数内でも配列型として扱われる。
*/

const variableSum = (...numbers: number[]) => {
    return numbers.reduce((total, n) => total + n, 0);
}

variableSum(1, 2, 3);  // 6

/*
レストパラメータを引数にとる関数にリストを渡すことはできない。
*/

// variableSum([1, 2, 3]);  // エラー