const ul = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', todoList);

function todoList(event) {
   event.preventDefault();

   const inputValue = input.value;

   const element = document.createElement('li');
   element.innerText = inputValue;

   const deleteBtn = document.createElement('button');
   deleteBtn.setAttribute('class', 'deleteBtn');
   const span = document.createElement('span');
   deleteBtn.appendChild(span);
   element.append(deleteBtn);
   deleteBtn.addEventListener('click', function() {
      this.closest('li').remove();
   })

   ul.append(element); 

   input.value = '';

   input.focus();
}