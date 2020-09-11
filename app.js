'use strict';
const memo = new Map();
// n=0 と n=1 は必ず使うので最初に配列に入れておく
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    // 配列にデータがあった場合の処理
    // 配列にあるデータが使う
    if (memo.has(n)) {
        return memo.get(n);
    }
    // 配列にデータがなかった場合の処理
    // データがないのでまず計算する
    const value = fib(n - 1) + fib(n - 2);
    // 計算した結果を配列に入れる
    memo.set(n, value);
    return value; 
}
for (let i = 0; i <= 40; i++) {
    fib(i)
    console.log(i + "のフィボナッチ数は" + fib(i) + "です");
}