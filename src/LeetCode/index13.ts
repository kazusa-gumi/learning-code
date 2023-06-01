/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

const romanToInt13 = (s: string): number => {
    const romanToInteger: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };
    // 変換した整数の合計と直前に処理した値を保持する2つの変数を宣言する
    let sum = 0;
    let prevValue = 0;

    // 文字列sに対してループ処理を行い、ローマ数字を1つずつ処理する

    // ローマ数字の文字列sを１文字ずつ処理するためのコード。"LVIII" だと、`s.split('')` は ["L", "V", "I", "I", "I"]と分解してくれてる感じ
    // const char of は for...of ループの構文で、配列の要素を1つずつ取り出してループを実行。その要素は、ループ内の char 定数に代入されます。結果として、このループは、`s` に含まれるローマ数字の各文字を1文字ずつ処理することができる。
    // 例えば、`s` が "LVIII" の場合、`char` は順に "L", "V", "I", "I", "I" の値を取る。
  for (const char of s.split('')) {
      // ローマ字から整数に直す
    let currentValue = romanToInteger[char];
    // 現在の値が前回の値より大きい場合（IV, IX, XL, XC, CD, CMのケース）、
    // 現在の値から2倍の前回の値を引く（現在の値-2*前回の値を加算）
    if (currentValue > prevValue) {
        // IVの場合
        // sum = 1
        // sum = 5 -2 * 1 + 1 (4)
        sum = currentValue - 2 * prevValue + sum;
    } else {
      // それ以外の場合は、現在の値を加算する
      sum = currentValue + sum;
    }
    prevValue = currentValue;
}
    return sum;
}

   
// @lc code=end

