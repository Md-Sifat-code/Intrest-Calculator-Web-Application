function calculateMaturityAmount(){
    const principal = parseFloat(document.getElementById('principal').value);
    const interst = parseFloat(document.getElementById('intrestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);
    const maturityAmount = principal+ (principal*interst*tenure)/100;
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}
document.getElementById('Btn').addEventListener('click',calculateMaturityAmount);