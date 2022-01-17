/**
 * const, letなどの変数宣言
 */

var val1 = "var変数";
console.log(val1); // var変数

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

// let変数は上書き可能
val2 = "let変数を上書き";
console.log(val2);

// let変数は再宣言不可能
// let val2 = "let変数を上書き";

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const変数は再宣言不可
// const val3 = "const変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
// 新しいプロパティの追加もできる
const val4 = {
  name: "たろう",
  age: 28
};
val4.name = "tarou";
val4.address = "japan";
console.log(val4);

const test = {};
test.name = "テストさん";
test.age = 10;

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */

const name = "tarou";
const age = 5;

// 私の名前はたろうです。年齢は28さいです。

// 従来の方法
const message = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message);

// テンプレート文字列を用いた方法
const message1 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message1);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
// 変数にfunctionを設定することもできる
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const funcTest = () => {
  return "Hello";
};
console.log(funcTest());

// 1行で終わる処理は{}省略できる
const func3 = (str) => str;
console.log(func3("func3です"));

const func3Test = () => false;
console.log(func3Test());

const func4 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4(2, 4));

/**
 * 分割代入
 */

const myProfile = {
  name: "次郎",
  age: 29
};

const message2 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message2);

// 分割代入
const { da_name, da_age } = myProfile;
const message3 = `私の名前は${da_name}です。年齢は${da_age}です。`;
console.log(message3);

const arr_myProfile = ["はなこ", 27];
const message4 = `私は${arr_myProfile[0]}です。年齢は${arr_myProfile[1]}です。`;
console.log(message4);

//　分割代入（配列）
const [da_arr_name, da_arr_age] = arr_myProfile;
const message5 = `私は${da_arr_name}です。年齢は${da_arr_age}です。`;
console.log(message5);

/**
 * デフォルト値、引数など
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
sayHello();

/**
 * スプレッド構文 ...
 */
//配列のの展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const arrString = ["9", "9"];
console.log(arrString);
console.log(...arrString);

const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...num3] = arr2;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(arr2);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["伊藤", "佐藤", "鈴木"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// 配列のデータを出力(配列のみ)
const arrayName = ["potato", "pasta", "rice"];
//for...of
for (const data of arrayName) {
  console.log(data);
}

// 連想配列の一覧を配列にまとめる
const nameArr3 = [
  {
    name: "test",
    age: 20
  },
  {
    name: "テスト",
    age: 30
  }
];
console.log(`${nameArr3[0].name}さん`);

// for...in
for (const index in arrayName) {
  console.log(index);
  console.log(arrayName[index]);
}

for (const index in nameArr3) {
  console.log(index);
  console.log(nameArr3[index]);
}

for (const key in nameArr3[0]) {
  console.log(key);
  console.log(nameArr3[0][key]);
}

// map使用
// リターンされた結果に基づいて新しい配列を生成
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

// 配列をループして何か処理をする
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

// filter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時

const val6 = 1 > 0 ? "trueです" : "falseです";
console.log(val6);

const num = 1300;
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知る && ||
 */

const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}

if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}

// || は左側がfalseとなる時右側を返す
const num4 = null;
const fee = num4 || "金額未設定";
console.log(fee);

// && は左側がtrueなら右側を返す
const num5 = null;
const fee2 = num5 && "何か設定されました";
console.log(fee2);

const ccc = 0 === "0" ? true : false;
console.log(ccc);

// const ddd = 0 == "0" ? true : false;
// console.log(ddd);

/**
 * Null合体
 */
// 左辺がnullまたはundifinedのとき右辺の値を返し、それ以外は左辺を返す
const nfunc = (val) => {
  return val;
};

const null1 = nfunc(0) ?? "null!";
console.log(null1);

const null2 = nfunc(null) ?? "null!!";
console.log(null2);

const null3 = nfunc(undefined) ?? "null!!!";
console.log(null3);

const null4 = nfunc("hahaha") ?? "null!!!!";
console.log(null4);
