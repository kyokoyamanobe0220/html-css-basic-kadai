//btnというIDを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener("click", () => {
   //非同期処理の設定
  setTimeout(() => {
    const text = document.getElementById("text");
    text.textContent = "ボタンをクリックしました";
  }, 2000);

});
