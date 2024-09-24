const searchInput = document.querySelector('.searchinput');
const main = document.querySelector('.main');
const searchButton = document.querySelector('.searchbutton');

searchButton.addEventListener('click', () => {
    searchButton.classList.toggle('active');
    searchInput.classList.toggle('active')
})

