function calculateTax() {
    const workingDays = parseFloat(document.getElementById("workingDays").value);
    const totalIncome = parseFloat(document.getElementById("totalIncome").value);
    const totalTaxPaid = parseFloat(document.getElementById("totalTaxPaid").value);

    if (isNaN(workingDays) || isNaN(totalIncome) || isNaN(totalTaxPaid)) {
        alert("모든 값을 올바르게 입력하세요.");
        return;
    }

    let taxOwed = 0;

    if (totalIncome <= 45000) {
        taxOwed = totalIncome * 0.15;
    } else if (totalIncome <= 120000) {
        taxOwed = 6750 + (totalIncome - 45000) * 0.325;
    } else if (totalIncome <= 180000) {
        taxOwed = 31125 + (totalIncome - 120000) * 0.37;
    } else {
        taxOwed = 53325 + (totalIncome - 180000) * 0.45;
    }

    const taxReturn = totalTaxPaid - taxOwed;
    const resultDiv = document.getElementById("result");

    if (taxReturn > 0) {
        resultDiv.textContent = `예상 환급액: $${taxReturn.toFixed(2)}`;
    } else if (taxReturn < 0) {
        resultDiv.textContent = `추가 납부 세액: $${Math.abs(taxReturn).toFixed(2)}`;
    } else {
        resultDiv.textContent = "환급 또는 추가 납부할 세금이 없습니다.";
    }
}
