let a = ''; //first number
let b = ''; //secont number
let sign = ''; // знак операции
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-', '+', 'X', '/']
const out = document.querySelector('.answer');
const buttons = document.querySelectorAll(".btn");

// экран
function clearAll () {
                    a = ''; //first number and result
                    b = ''; // second numder
                    sign = ''; // знак
                    finish = false;
                    out.textContent = 0;

}
document.querySelector('.ac').onclick = clearAll();

function setEvent(button) {
                    let key = button.target.textContent
                    if (key === 'ac') {
                                        a = ''; //first number and result
                                        b = ''; // second numder
                                        sign = ''; // знак
                                        finish = false;
                                        out.textContent = 0;
                    } else if (digit.)

}

document.querySelectorAll('.buttons').onclick = (event) => {
                    // нажата не кнопка 
                    if(!event.target.classList.contain('btn')) return;
                    // нажата кнопка clearAll as
                    if(event.target.classList.contain('ac')) return;

                    out.textContent = '';
                    // получаю нажатую кнопку
                    const key = event.target.textContent;

                    // если нажата клавиша 0-9 или .
                    if (digit.includes(key)) {
                                        a += key;
                                        console.log(a, b, sign);
                    }
                    
}
