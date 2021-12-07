# 従来の関数
```bash
function func1(str) {
  return str;
}
const func1 = function (str) {
  return str;
}
```

# アロー関数　
　引数が一つの場合、括弧の省略
　関数の中身が一つの場合はreturnを記述しなくても良い
　引数に＝を書くとデフォルトの値を設定できる
```bash
const func2 = (str) => {
  return str;
}
const func3 = (num1,num2) => num1 + num2;
```

# 分割代入
毎回関数の名前を書かないといけないので処理が長くなる
```bash
const myProfile = {
  name: "ryuju",
  age: 24,
}
const message1 = ｀名前は${myProfile.name}です。年齢は${mtProfile.age}です。｀;

const {name,age} = myProfile;
const message1 = ｀名前は${name}です。年齢は${age}です。｀;
```

# スプレッド構文
# 配列の展開
...は中身の配列の値を順番に処理をする
```bash
const arr1 =[1,2];
const sumFunc = (num1,num2) => console.log(num1 + num2);
sumFunc(...arr1);
```
結果　3,

# map.filterを使った配列の処理
```bash
const nameArr = ["田中","山田","澤田"];
for(let index = 0; index < nameArr.length; index++){
  console.log(nameArr[index]);
}
```

# mapを使うことで配列を一つずつにしてくれる
第二引数をindexにすることで何番目なのか表示できる　
```bash
nameArr.map((name,index => console.log(｀順番は${index}で名前は${name}｀)));
```

# filterはある条件に一致したものだけを配列に入れる
奇数のみ表示する
```bash
const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
```