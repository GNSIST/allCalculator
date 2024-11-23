function calculateSalary() {
    // 입력값 가져오기
    const hourlyWage = parseFloat(document.getElementById("hourlyWage").value);
    const dailyHours = parseFloat(document.getElementById("dailyHours").value);
    const workingDays = parseInt(document.getElementById("workingDays").value);
    const deductInsurance = document.getElementById("deductInsurance").checked;
    const deductIncomeTax = document.getElementById("deductIncomeTax").checked;
    const calculationType = document.getElementById("calculationType").value;

    // 입력값 유효성 검사
    if (isNaN(hourlyWage) || isNaN(dailyHours) || isNaN(workingDays) || hourlyWage <= 0 || dailyHours <= 0 || workingDays <= 0) {
        document.getElementById("result").innerText = "올바른 값을 입력해주세요!";
        return;
    }

    // 주휴수당 계산: 주 15시간 이상 근무 시 주휴수당 지급
    let weeklyHours = dailyHours * workingDays;
    let holidayAllowance = 0;
    if (weeklyHours >= 15) {
        const holidayHours = (workingDays >= 5) ? Math.floor(weeklyHours / workingDays) : 0;
        holidayAllowance = hourlyWage * holidayHours;
    }

    // 기본 급여 계산
    let baseSalary = 0;
    if (calculationType === "daily") {
        baseSalary = hourlyWage * dailyHours;
    } else if (calculationType === "weekly") {
        baseSalary = hourlyWage * weeklyHours + holidayAllowance;
    } else if (calculationType === "monthly") {
        baseSalary = (hourlyWage * weeklyHours + holidayAllowance) * 4;
    }

    // 세금 공제
    let totalDeduction = 0;
    if (deductInsurance) totalDeduction += baseSalary * 0.0932;
    if (deductIncomeTax) totalDeduction += baseSalary * 0.033;

    const finalSalary = baseSalary - totalDeduction;

    // 결과 출력
    document.getElementById("result").innerHTML = `
        <p>예상 급여: ₩${baseSalary.toFixed(2)}</p>
        <p>주휴수당: ₩${holidayAllowance.toFixed(2)}</p>
        <p>세금 공제: ₩${totalDeduction.toFixed(2)}</p>
        <p><strong>최종 지급액: ₩${finalSalary.toFixed(2)}</strong></p>
    `;
}
