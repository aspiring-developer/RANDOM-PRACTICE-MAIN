const formEl = document.getElementById('loan-form');
const amountEl = document.getElementById('amount');
const interestEl = document.getElementById('interest');
const yearsEl = document.getElementById('years');
const monthlyPaymentEl = document.getElementById('monthly-payment');
const totalPaymentEl = document.getElementById('total-payment');
const totalInterestEl = document.getElementById('total-interest');

formEl.addEventListener('submit', calculateResult);
function calculateResult(e) {
  e.preventDefault();
  let principle = amountEl.value;
  let rate = interestEl.value;
  let duration = yearsEl.value * 12;

  let monthlyInterest = ((principle * rate) / 100) / 12;
  let monthlyPrinciple = principle / duration;
  let monthlyTotal = parseFloat(monthlyInterest + monthlyPrinciple).toFixed(2);
  let totalInterest = parseFloat(monthlyInterest * duration).toFixed(2);
  let totalPayment = parseFloat(monthlyTotal * duration).toFixed(2);

  monthlyPaymentEl.value = monthlyTotal;
  totalPaymentEl.value = totalPayment;
  totalInterestEl.value = totalInterest;

  console.log(`Monthly Payment: ${monthlyTotal} | Total Payment: ${totalPayment} | Total Interest: ${totalInterest}`);
}