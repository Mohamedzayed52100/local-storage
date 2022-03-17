 let allspans = document.querySelectorAll('.buttons span');
 let results = document.querySelector('.results>span');
 let theinput = document.querySelector('.input');
 allspans.forEach(span => {
     span.addEventListener('click', (e) => {
         if (e.target.classList.contains('check')) {
             cheeckItem();
         }
         if (e.target.classList.contains('add')) {
             addItem();
         }
         if (e.target.classList.contains('delete')) {
             deleteItem();
         }
         if (e.target.classList.contains('show')) {
             showItem();
         }
     });

 });




 function checkinput() {
     results.innerHTML = 'input can\'t be empty';

 }

 function cheeckItem() {
     if (theinput.value !== '') {
         if (localStorage.getItem(theinput.value)) {
             results.innerHTML = `founded local item called <span>${theinput.value}</span>`;

         } else {
             results.innerHTML = ` No local storage item withe name  <span>${theinput.value}</span>`;

         }

     } else {
         checkinput();

     }
 }

 function addItem() {
     console.log('Add');
     if (theinput.value !== '') {
         localStorage.setItem(theinput.value, "test");
         results.innerHTML = `localStorage item <span>${theinput.value}</span> Add`;
         theinput.value = '';

     } else {
         checkinput();

     }

 }

 function deleteItem() {
     console.log('Delete');

     if (theinput.value !== '') {
         if (localStorage.getItem(theinput.value)) {
             localStorage.removeItem(theinput.value);
             results.innerHTML = `Deleted local item called <span>${theinput.value}</span>`;
             theinput.value = '';

         } else {
             results.innerHTML = ` No local storage item withe name  <span>${theinput.value}</span>`;

         }


     } else {
         checkinput();

     }
 }

 function showItem() {

     if (localStorage.length) {
         console.log('founde' + localStorage.length);
         results.innerHTML = '';
         for (let [key, value] of Object.entries(localStorage)) {
             results.innerHTML += `${key}="${value}" <br>`;


         }


     } else {
         results.innerHTML = `  local storage is Empty.`;

     }




 }