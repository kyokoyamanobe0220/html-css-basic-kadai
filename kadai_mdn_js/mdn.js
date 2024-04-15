const today = new Date();

//年の取得
const year = today.getFullYear();

//月の取得
const month = today.getMonth() +1 ;

//日付の取得
const day = today.getDate();

console.log(year + "年" + month + "月" + day + "日");
