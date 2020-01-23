'user strict'

let message;
let userAnswer = prompt ('Введите страну доставки');
let deliveryPrice;
const china = 'китай';
const chinaPrice = 100;
const chile = 'чили';
const chilePrice = 250;
const australia = 'австралия';
const australiaPrice = 170;
const india = 'индия';
const indiaPrice = '80';
const jamaica = 'ямайка';
const jamaicaPrice = 120;

userAnswer = userAnswer.toLowerCase();

switch (userAnswer) {
    case china:
    deliveryPrice = chinaPrice;
    message = `Доставка в ${userAnswer} будет стоить ${deliveryPrice} кредитов`;
    break;

    case chile:
    deliveryPrice = chilePrice;
    message = `Доставка в ${userAnswer} будет стоить ${deliveryPrice} кредитов`;
    break;

    case australia:
    deliveryPrice = australiaPrice;
    message = `Доставка в ${userAnswer} будет стоить ${deliveryPrice} кредитов`;
    break;

    case india:
    deliveryPrice = indiaPrice;
    message = `Доставка в ${userAnswer} будет стоить ${deliveryPrice} кредитов`;
    break;

    case jamaica:
    deliveryPrice = jamaicaPrice;
    message = `Доставка в ${userAnswer} будет стоить ${deliveryPrice} кредитов`;
    break;

    default:
    message = 'В вашей стране доставка не доступна';

}
alert (message);

