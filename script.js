const sumInput = document.getElementById('sumInput');
const tipSelect = document.getElementById('tip-percentage');
const peopleInput = document.getElementById('people');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
    const sum = Number(sumInput.value);
    const tipPercentage = Number(tipSelect.value);
    const people = Number(peopleInput.value);

    if (sum <= 0 || people <= 0){
    alert("Будь ласка, введіть коректні дані!");
    return;
}

const totalTip = sum * (tipPercentage / 100);
const totalSum = sum + totalTip;
const perPerson = totalSum / people;

resultDiv.textContent = perPerson.toFixed(2);
})




