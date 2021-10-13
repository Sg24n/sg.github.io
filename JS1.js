function randomNumber(){
    var randNumber = Math.random()
    return randNumber
}



console.log(randomNumber());
//Отображение результата в консоли
//if (randomNumber <= 0.1) { console.log(1) }
//else if (randomNumber() <= 0.2) { console.log(2) }
//else if (randomNumber() <= 0.3) { console.log(3) }
//else if (randomNumber() <= 0.4) { console.log(4) }
//else if (randomNumber() <= 0.5) { console.log(5) }
//else if (randomNumber() <= 0.6) { console.log(6) }
//else if (randomNumber() <= 0.7) { console.log(7) }
//else if (randomNumber() <= 0.8) { console.log(8) }
//else if (randomNumber() <= 0.9) { console.log(9) }
//else { console.log(10) }



var answer
var answer2

if (randomNumber() <= 0.3) { answer = 'пекарь' }
else if (randomNumber()<=0.6){answer="отец"}
else { answer = 'плотник' };


if (randomNumber() <= 0.3) { answer2 = 'й молоток' }
else if(randomNumber()<=0.6){answer2 = 'й член'}
else { answer2 = 'е печенье' };

alert('Твоя мама случайно не ' + answer + ' ? Тогда откуда у неё тако'+answer2+' ?')

 