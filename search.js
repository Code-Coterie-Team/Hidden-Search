const searchInput = document.querySelector('.searchinput');
const searchButton = document.querySelector('.searchbutton');

searchButton.addEventListener('click', function(){
    searchButton.classList.toggle('active');
    searchInput.classList.toggle('active')
})

