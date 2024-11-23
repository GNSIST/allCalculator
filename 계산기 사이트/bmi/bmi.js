function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "올바른 값을 입력해주세요!";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters ** 2);

    let message;
    if (bmi < 18.5) {
        message = "저체중입니다.";
    } else if (bmi < 24.9) {
        message = "정상 체중입니다.";
    } else if (bmi < 29.9) {
        message = "과체중입니다.";
    } else {
        message = "비만입니다.";
    }

    document.getElementById('result').innerHTML = `
        당신의 BMI는 <strong>${bmi.toFixed(2)}</strong>입니다.<br>${message}
    `;
}