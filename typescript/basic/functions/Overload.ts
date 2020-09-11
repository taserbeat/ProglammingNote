/*
オーバーロード

関数が複数の呼び出しシグネチャ(複数の引数組み合わせや戻り値)を持つこと。
*/

/*
ある関数のオーバーロードシグネチャのセットを宣言する場合、
呼び出し側から見ると、関数の型はオーバロードシグネチャの合併となるが、
実装側は、引数や戻り値に結合された型が必要となる。
*/

type CountDays = {
    (from: Date, to: Date): number  // 指定した2つのDate間の日数を求める
    (to: Date): number  // 今日から指定日までの日数を求める
}

// 実装側はオーバーロードシグネチャの結合を意識する必要がある
const countDays: CountDays = (fromOrTo: Date, to?: Date) => {
    const toOrToday = typeof to === 'undefined' ? new Date() : to;
    if (fromOrTo > toOrToday) {
        return Math.abs(Math.floor((toOrToday.getTime() - fromOrTo.getTime()) / 86400000));
    }

    return Math.abs(Math.floor((fromOrTo.getTime() - toOrToday.getTime()) / 86400000));
}


const [fromDate, toDate] = [new Date("2020/01/01"), new Date("2020/01/11")];
countDays(fromDate, toDate);  // 10
countDays(fromDate);  // 2020/01/01 〜 実行日までの経過日数