
const $heading = document.querySelector('#heading');
$heading.addEventListener('click', (e) => {
    console.log(e.target.style.color);
    e.target.style.color = 'red';
}); 