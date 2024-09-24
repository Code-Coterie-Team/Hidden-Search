const main = document.querySelector('.main');
const searchButton = document.querySelector('.searchbutton');

searchButton.addEventListener('click', function(){
    main.classList.toggle('active')
})

