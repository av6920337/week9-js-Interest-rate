const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

button.addEventListener('click', () => {
    const sum = document.querySelector('.sum').value;
    let annualRate = 0.07;
    let amount = Number(sum) * (1 + annualRate); // расчет суммы с учетом процента
    let message=`Через год у вас будет ${amount.toFixed(2)} ${currency} на счету`;
    total.textContent = (message); 
    
    console.log(`Ваш депозит на начало расчётного периода составлял ${deposit + ' ' + currency}.`);
    console.log(`Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`);
    
    console.log(`К концу расчётного периода прирост составил ${growth + ' ' + currency}, и на данный момент 
    ваш депозит составляет ${Number(deposit) + Number(growth) + ' ' + currency}.`);
});