const rateBtn = document.querySelectorAll('.rate');
const btn = document.querySelector('button');
const rateResult = document.querySelector('span');
const rating = document.querySelector('.card-content-ratings');
const thanks = document.querySelector('.card-content-thanks');

//Represent initial rating
let result = null;

var clicked = false;
function selectProcess(e) {
    rateBtn.forEach((button) => button.classList.remove('selected'));
    if (clicked) {
        this.classList.toggle('selected');
    }
    this.classList.toggle('selected');  
    result = e.srcElement.textContent;
}


function onSubmit(e) {
    thanks.hidden = false;
    rating.hidden = true;
    rateResult.textContent = result;
}


rateBtn.forEach((button) => { 
    button.addEventListener('click', selectProcess)
});

btn.addEventListener('click', onSubmit);
