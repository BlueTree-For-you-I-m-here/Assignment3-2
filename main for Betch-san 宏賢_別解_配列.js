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

         //-実験
         // conditionWorking: '作業中',
         // conditionDelete: '削除',
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
         // conditionWorkingTd.className = 'btn';//¥NEW
         conditionWorkingTd.classList.add('btn'); //¥NEW
         conditionDeleteTd.classList.add('btn', 'delete'); //¥NEW
         const getRemoveBtn = document.getElementsByClassName('delete'); //¥NEW

         getRemoveBtn[index].addEventListener('click', () => {
            tasks.splice(index, 1);
            displayTasks(); //無限ループが発生してしまう
         });

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

         console.log(getRemoveBtn[0]);

         //1. numOfTasksで現在表示されているタスクの数を保持
         //2. for分で現在あるタスク分ループして、全ての削除ボタンに
         //   クリックイベントを設置し、押されたタスクの番号に応じた
         //   tasksの要素を削除splice(i, 1)で削除;;;;;;
         //3. クリックイベントが発生したらreturnでループを中止
         //4. displayTasks()でブラウザにタスク一覧を表示
      });

      console.log(tasks); //!!!!デバック用_要削除!!
   };

   //追加ボタンクリック時にaddTask()を走らせる
   addTaskTrigger.addEventListener('click', () => {
      addTask();
      input.value = '';
   });
}
