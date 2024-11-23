// script.js
const display = document.getElementById('display');

// 화면에 값을 추가
function appendToDisplay(value) {
    display.textContent += value;
}

// 화면 초기화
function clearDisplay() {
    display.textContent = '';
}

// 마지막 문자 삭제
function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

// 계산 수행
function calculate() {
    try {
        // 퍼센트 계산 처리
        const expression = display.textContent.replace(/%/g, '*0.01');
        const result = eval(expression);
        display.textContent = formatResult(result);
    } catch (error) {
        display.textContent = 'Error';
    }
}

// 결과 포맷 (너무 긴 소수점 제거)
function formatResult(result) {
    if (Number.isInteger(result)) {
        return result; // 정수는 그대로 반환
    }
    return result.toFixed(10).replace(/\.?0+$/, ''); // 소수점 10자리까지 표시 후 불필요한 0 제거
}
