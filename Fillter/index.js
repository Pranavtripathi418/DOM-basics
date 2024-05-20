

document.addEventListener('DOMContentLoaded', () => {
    // Add another input element inside the form before the button
    const form = document.querySelector('form');
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.name = 'description';
    descriptionInput.id = 'description';
    descriptionInput.placeholder = 'Description of the fruit';
    
    const submitButton = form.querySelector('button');
    form.insertBefore(descriptionInput, submitButton);

    // Show the fruit description on screen along with the fruit name
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fruitInput = document.querySelector('#fruit-to-add');
        const fruitName = fruitInput.value.trim();
        const fruitDescription = descriptionInput.value.trim();

        if (fruitName) {
            const fruitList = document.querySelector('ul.fruits');
            const li = document.createElement('li');
            li.classList.add('fruit');
            li.innerHTML = `
                ${fruitName} <button class="delete-btn">x</button>
                <p><em>${fruitDescription}</em></p>
            `;

            fruitList.appendChild(li);

            fruitInput.value = '';
            descriptionInput.value = '';
        }
    });

    // Handle delete button
    document.querySelector('ul.fruits').addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const li = event.target.closest('li.fruit');
            li.remove();
        }
    });

    // Create a filter that shows only those fruits whose either name or description or both matches the entered text
    const filterInput = document.querySelector('#filter');
    filterInput.addEventListener('input', (event) => {
        const filterText = event.target.value.toLowerCase();
        const fruits = document.querySelectorAll('ul.fruits li.fruit');

        fruits.forEach(fruit => {
            const fruitName = fruit.childNodes[0].textContent.toLowerCase();
            const fruitDescription = fruit.querySelector('p em').textContent.toLowerCase();

            if (fruitName.includes(filterText) || fruitDescription.includes(filterText)) {
                fruit.style.display = '';
            } else {
                fruit.style.display = 'none';
            }
        });
    });
});
