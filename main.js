const loader = document.querySelector('.loader3');
const main = document.querySelector('.main');


function init(){
    setTimeout(() =>{
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        main.style.opacity = 1;
    }, 10000);
}
init();