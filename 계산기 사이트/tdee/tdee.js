function calculateTDEE() {
    // 사용자 입력값 가져오기
    const age = parseInt(document.getElementById("age").value);
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;
    const activityLevel = parseFloat(document.getElementById("activity").value);
    
    // 입력값이 모두 제대로 들어왔는지 확인
    if (isNaN(age) || isNaN(weight) || isNaN(height) || !gender || isNaN(activityLevel)) {
        alert("모든 입력 값을 정확히 입력해 주세요.");
        return;
    }

    // BMR 계산
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // TDEE 계산
    const tdee = bmr * activityLevel;

    // 탄단지 비율 설정
    const proteinRatio = 0.35; // 단백질 35%
    const carbRatio = 0.40;    // 탄수화물 40%
    const fatRatio = 0.25;     // 지방 25%

    // 각 비율에 해당하는 Kcal 계산
    const proteinKcal = tdee * proteinRatio;
    const carbKcal = tdee * carbRatio;
    const fatKcal = tdee * fatRatio;

    // 그램으로 변환 (단백질과 탄수화물은 1g = 4Kcal, 지방은 1g = 9Kcal)
    const proteinGrams = proteinKcal / 4;
    const carbGrams = carbKcal / 4;
    const fatGrams = fatKcal / 9;

    // 결과 출력
    document.getElementById("tdeeResult").innerHTML = `유지대사량(TDEE): ${tdee.toFixed(2)} Kcal`;

    document.getElementById("macros").innerHTML = `
        <strong>탄수화물</strong>: ${carbGrams.toFixed(2)}g (${carbKcal.toFixed(2)} Kcal)<br>
        <strong>단백질</strong>: ${proteinGrams.toFixed(2)}g (${proteinKcal.toFixed(2)} Kcal)<br>
        <strong>지방</strong>: ${fatGrams.toFixed(2)}g (${fatKcal.toFixed(2)} Kcal)<br>
    `;

    // 결과가 나올 때 세로 스크롤이 생기도록 설정
    document.querySelector("main").style.overflowY = "auto";  // 결과 후에만 스크롤 활성화
}
