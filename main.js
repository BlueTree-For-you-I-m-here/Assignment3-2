'use strict';

{
   const addTaskTrigger = document.getElementById('addBtn');
   const addTaskTarget = document.getElementById('addTaskTarget');
   const input = document.getElementById('input');
   const conditionWorkingTd = document.createElement('td');
   const conditionDeleteTd = document.createElement('td');
   // conditionWorkingTd / conditionDeleteTd　にclassを付与
   conditionWorkingTd.className = 'btn';
   conditionDeleteTd.className = 'btn';
   let idNum = 0;

   conditionWorkingTd.addEventListener('click', () => {
      console.log('BBB');
   });

   let tasks = [];
   //追加ボタンクリック時の詳細な挙動
   const addTask = () => {
      let task = {
         id: idNum,
         comment: input.value,
         conditionWorking: '作業中',
         conditionDelete: '削除',
      };

      tasks.push(task);

      displayTasks();

      console.log(tasks); //¥結果確認用
   };

   const displayTasks = () => {
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

         // conditionWorkingTd / _b　にclassを付与
         conditionWorkingTd.className = 'btn';
         conditionDeleteTd.className = 'btn';

         // //¥変更箇所!!! indexを使って指定する??

         addTaskTarget.appendChild(tr);
         tr.appendChild(idTd); // 1つめ
         // idTd.textContent = tasks[index].id;
         idTd.textContent = index;
         tr.appendChild(commentTd); // 2つ目
         commentTd.textContent = tasks[index].comment; // タスク入力値
         tr.appendChild(conditionWorkingTd); // 3つ目
         conditionWorkingTd.textContent = tasks[index].conditionWorking;
         tr.appendChild(conditionDeleteTd); // 4つ目
         conditionDeleteTd.textContent = tasks[index].conditionDelete;

         //tasksの配列の要素を削除し、その後displayTasks()によって配列内の要素を表示する流れになるように実装するため、コメントアウト
         // tasks = [];
      });
   };

   //追加ボタンクリック時にaddTask()を走らせる
   addTaskTrigger.addEventListener('click', () => {
      addTask();
      input.value = '';
   });

   //¥tasks配列の要素のindex番号を取得

   //削除ボタンが押された時に押された要素を削除する-動かない-なぜでしょうか？
   conditionDeleteTd.addEventListener('click', () => {
      //イベントが発生しているかの確認のためconsole.log('確認')を出力-出力されません。;
      console.log('確認');

      //どのindexの削除ボタンが押されたかを確認するためそのindexを取得
      let each = tasks.forEach((taskEach, index) => {
         return index;
      });

      //削除ボタンを押された配列を削除
      let emptyArray = tasks.splice(each, 1);
      console.log(tasks);
   });

   displayTasks();

   console.log(tasks); //¥結果確認用
}
