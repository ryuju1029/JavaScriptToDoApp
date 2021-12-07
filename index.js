

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //押された削除ボタンの親要素を未完了から削除
  document.getElementById("incomplete-list").removeChild(target);
}

//未完了リストに追加する関数
const createIncompleteList = (target) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = target;

  //button(完了ボタン)の生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    //完了ボタンに追加
    const addTaget = completeButton.parentNode;
    //todo内容テキストを取得
    const text = addTaget.firstElementChild.innerText;
    //dev以下を初期化
    addTaget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    })

    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTaget);
  });

  //button(削除ボタン)の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());