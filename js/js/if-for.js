'use strict'

// let i = 1;
// if (i === 1) {
//     console.log('真です');
// }

//==  の場合は、左右を比較して、データ型が違っても
//    一致するデータ型に変換した後に比較
//=== の場合は、左右を比較して、データ型が違ったとき、
//    等しくないという判断をする

// let testScore = 60;

// if (testScore >= 80) {
//     document.write("合格です！おめでとうございます！");
// } else if (testScore >=70 ){
//     document.write("惜しい！あと少し！");
// } else {
//     document.write("不合格です！もう少し勉強しましょう");
// }

//下記のループ文をこのように表示しなさい
//1.田中
//2.山田
//3.林
//4.佐藤
//const nameList = ["田中","山田","林","佐藤"];

// console.log(nameList[0]);
// console.log(nameList[1]);
// console.log(nameList[2]);

// for (let i =0; i < nameList.length; i++) {
//     console.log(`${i+1}.${nameList[i]}`);
// }

//continue文
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

// //break文
// for (let i = 1; i < 1000; i++) {
//     if (i >10) break;
//     console.log(i);
// }

function scoreCheck(){
 let testScore = document.getElementById('score').value
 if (testScore >= 80) {
    document.write("合格です！おめでとうございます！");
 } else if (testScore >=70 ){
    document.write("惜しい！あと少し！");
 } else {
    document.write("不合格です！もう少し勉強しましょう");
 }
}