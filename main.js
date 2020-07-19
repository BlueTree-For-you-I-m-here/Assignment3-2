'use strict';

{
   const addTaskTrigger = document.getElementById('addBtn');
   const addTaskTarget = document.getElementById('addTaskTarget');
   const input = document.getElementById('input');

   let idNum = 0;

   let tasks = [];
   //追加ボタンクリック時の詳細な挙動
   const addTask = () => {
      let task = {
         id: idNum,
         comment: input.value,
      };

      tasks.push(task);

      //結果ブラウザ上に表示させる
      displayTasks();
   };

   //todoのタスクを作成及び結果をブラウザに表示
   const displayTasks = () => {
      //¥初期化処理 - ここでブラウザに表示されるtrを
      //¥全て削除することで画面上タスクを見えなくする
      document.querySelectorAll('.addedTr').forEach((tr) => {
         tr.remove();
      });
      tasks.forEach((each, index) => {
         const tr = document.createElement('tr');
         tr.classList.add('addedTr');
         const idTd = document.createElement('td');
         const commentTd = document.createElement('td');
         const conditionWorkingTd = document.createElement('td');
         const conditionDeleteTd = document.createElement('td');
         conditionWorkingTd.className = 'btn';
         conditionDeleteTd.className = 'btn';

         addTaskTarget.appendChild(tr);
         tr.appendChild(idTd); // 1つめ
         // idTd.textContent = tasks[index].id;
         idTd.textContent = index;
         tr.appendChild(commentTd); // 2つ目
         commentTd.textContent = tasks[index].comment; // タスク入力値
         tr.appendChild(conditionWorkingTd); // 3つ目
         conditionWorkingTd.textContent = '作業中';
         tr.appendChild(conditionDeleteTd); // 4つ目
         conditionDeleteTd.textContent = '削除';

         //¥削除機能:削除ボタンが押された時に押された要素を削除する
         conditionDeleteTd.addEventListener('click', () => {
            //どのindexの削除ボタンが押されたかを確認するためそのindexを取得
            let each = tasks.forEach((taskEach, index) => {
               return index;
            });

            //削除ボタンを押された配列を削除
            tasks.splice(each, 1);

            //配列の要素を削除した後で再表示
            displayTasks();
         });
      });
   };

   //追加ボタンクリック時にaddTask()を走らせる
   addTaskTrigger.addEventListener('click', () => {
      addTask();
      input.value = '';
   });
}
