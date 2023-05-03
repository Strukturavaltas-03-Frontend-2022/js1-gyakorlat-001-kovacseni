'use strict'

const handleClick = () => {
    const elements = document.querySelectorAll('.button');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', () => console.log(elements[i].textContent));
    }
}