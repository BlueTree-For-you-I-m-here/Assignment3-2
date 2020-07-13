'use strict';

{
   const addTaskTrigger = document.getElementById('addBtn');
   const addTaskTarget = document.getElementById('addTaskTarget');
   const input = document.getElementById('input');
   let idNum = 0;

   //追加ボタンクリック時の詳細な挙動
   let tasks = [];
   const addTask = () => {
      let task = {
         id: idNum,
         comment: input.value,
         condition_working: '作業中',
         condition_delete: '削除',
      };

      tasks.push(task);

      const conditionWorkingTd = document.createElement('td');
      const conditionDeleteTd = document.createElement('td');

      // conditionWorkingTd / conditionDeleteTd　にclassを付与
      conditionWorkingTd.className = 'btn';
      conditionDeleteTd.className = 'btn';

      //¥ここだと削除ボタンが機能しない、なぜ?---
      //¥tasks配列の要素のindex番号を取得
      conditionDeleteTd.addEventListener('click', () => {
         let each = tasks.forEach((taskEach, index) => {
            return index;
         });

         //削除ボタンを押された配列を削除
         let emptyArray = tasks.splice(each, 1);
         console.log(tasks);
         idNum--;
      });

      displayTasks();

      console.log(tasks); //¥結果確認用
   };

   const displayTasks = () => {
      const tr = document.createElement('tr');
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
      idTd.textContent = tasks[0].id;
      tr.appendChild(commentTd); // 2つ目
      commentTd.textContent = tasks[0].comment; // タスク入力値
      tr.appendChild(conditionWorkingTd); // 3つ目
      conditionWorkingTd.textContent = tasks[0].condition_working;
      tr.appendChild(conditionDeleteTd); // 4つ目
      conditionDeleteTd.textContent = tasks[0].condition_delete;

      //tasksの配列の要素を削除し、その後displayTasks()によって配列内の要素を表示する流れになるように実装するため、コメントアウト
      // tasks = [];
   };

   //追加ボタンクリック時にaddTask()を走らせる
   addTaskTrigger.addEventListener('click', () => {
      addTask();
      input.value = '';
      idNum++;
   });
}
