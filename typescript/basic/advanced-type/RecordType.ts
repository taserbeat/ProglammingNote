export default null;

/*

レコード型

*/

/*
TypeScriptの組み込み機能として実装されているRecord型は、あるものから別のあるものへのマップ(対応付け)として
オブジェクトを表現する方法である。
Record型を使うことはオブジェクトが特定のキーの集まりを定義することを強制するための1つの手段である。
*/

/*
Recordを使って、それぞれの曜日から次の曜日へのマップを作成する。
*/

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Day = Weekday | 'Sat' | 'Sun';

let nextDay: Record<Weekday, Day> = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
}

console.log(nextDay.Mon);  // Tue
console.log(nextDay.Tue);  // Wed
console.log(nextDay.Wed);  // Thu
console.log(nextDay.Thu);  // Fri
console.log(nextDay.Fri);  // Sat