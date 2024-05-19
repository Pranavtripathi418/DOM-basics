

const fruitItems= document.querySelectorAll('.fruit');
for(let i =0; i<fruitItems.length; i++){
    fruitItems[i].innerHTML+='<button class="edit-btn">Edit</button>';
}

const form= document.querySelector('form');
const fruits= document.querySelector('.fruits');

form.addEventListener('submit', function(event){
    event.preventDefault();
const fruitToAdd= document.getElementById('fruit-to-add');
const newli= document.createElement('li');
newli.innerHTML=fruitToAdd.value+'<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>';

fruits.appendChild(newli);

});

fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete= event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
});




