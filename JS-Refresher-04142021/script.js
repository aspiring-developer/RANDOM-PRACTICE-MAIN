const formEl = document.getElementById('loan-form');
const amountEl = document.getElementById('amount');
const interestEl = document.getElementById('interest');
const yearsEl = document.getElementById('years');


formEl.addEventListener('submit', calculateResult);
function calculateResult(e) {
  e.preventDefault();
  let principle = amountEl.value;
  let rate = interestEl.value;
  let years = yearsEl.value;
  console.log(`Principle: ${principle} | Rate: ${rate}`);
  let monthlyPayment = ((principle * rate) / 100) / 12;

  console.log(monthlyPayment + " <--Monthly Payment");
}