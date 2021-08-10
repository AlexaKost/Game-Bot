'use strict'

function numCheck(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

const getRandomNum = function (n, m) {
    const min = Math.floor(Math.min(n, m))
    const max = Math.ceil(Math.max(n, m))
    return Math.ceil( Math.random() * (max - min) ) + min
}

function getUserNumber(str) {
    const n = prompt(str);
   
    if (numCheck(n)) 
        return +n;
         
    if (n === null) //если пользователь нажимает "Отмена"]
        return null;
   
    if (n != numCheck) //если пользователь ввел не число
        return true;
        
        getUserNumber(str);
}

function gameBot() {
       
    const randomNum = getRandomNum(1, 100);
    console.log (randomNum);
    
    return (function checkNum() {
        const userNum = getUserNumber( 'Угадайте число от 1 до 100' )
        
        if (userNum === null) {
            return alert ('Игра окончена!');
        } 

        if (userNum === true) {
            alert ('Введите число!');
            return checkNum()
        }
        
        if (userNum < randomNum) {
            alert('Загаданное число больше');
            return checkNum()
        }

        if (userNum > randomNum) {
            alert('Загаданное число меньше');
            return checkNum()
        }

        if (userNum === randomNum) {
            alert('Поздравляю, Вы угадали!!!');
            
        }
   
    }
    )()
}
gameBot(); 