// document.write("Hello World!");
// alert("Hello World!");

// console.log("Hello World"+"田中さん");
// console.log(10 + 10);
// console.log("10"+"10");

// console.log(1 + 1);
// console.log(1 - 1);
// console.log(2 * 2);
// console.log(10 / 3);
// console.log(10 % 3);

// let x = 1;
// let y = 1;
// x++;
// console.log(x);
// y--;
// console.log(y);


// let x = 7;
// let y = x++; //xがｙに代入されてからインクリメント
// let x2 = 7;
// let y2 = ++x2//x2のインクリメント後にy2に代入

// console.log(x);
// console.log(y);
// console.log(x2);
// console.log(y2);

// console.log(x++);
// console.log(++x);

//変数とは　値を代入するための箱
//定数とは　値を別名で定義したもの

'use strict';

let age = 30;
const name = "田中太郎";

age = age + 2;

console.log(`${name}さんの年齢は${age}です`);

//ES6 or ES2015　←varで指定していた変数/定数を厳密に分けるようになった
// var 変数名/定数　←使わない　インターネット上で調べてサンプルコードなどを使用する際はvarのところをconstやletに置き換えてして使う

//ES2015以降のバージョンでは変数よりもできれば定数を使用しなさいという考え方が優先されている
//変数は後から後から数字等の変更ができるためバグやミスが起きやすい
//何回も変数に再代入を繰り返しているプログラムの場合、後からプログラムを読んだ人が分かりにくい（可読性の悪い）プログラムになってしまう
//→ES2015以降のバージョンでは宣言の時点で値が確定するconstを優先的に使用していく
