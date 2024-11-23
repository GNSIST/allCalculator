function calculateMonthlyCompoundInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const years = parseFloat(document.getElementById("years").value);
  const monthlyRate = parseFloat(document.getElementById("rate").value) / 100;

  if (isNaN(principal) || isNaN(years) || isNaN(monthlyRate) || principal <= 0 || years <= 0 || monthlyRate < 0) {
    alert("유효한 값을 입력하세요.");
    return;
  }

  const months = years * 12; // 총 월 수
  let amount = principal;

  const resultBody = document.getElementById("result-body");
  resultBody.innerHTML = ""; // 이전 결과 지우기

  // 월 복리 계산 및 결과 테이블에 추가
  for (let month = 1; month <= months; month++) {
    amount *= 1 + monthlyRate; // 월 복리 계산
    const row = document.createElement("tr");
    const monthCell = document.createElement("td");
    const amountCell = document.createElement("td");

    monthCell.textContent = `${month}월`;
    amountCell.textContent = `${amount.toFixed(2).toLocaleString()} 원`;

    row.appendChild(monthCell);
    row.appendChild(amountCell);
    resultBody.appendChild(row);
  }

  // 결과 후에만 스크롤 활성화
  document.querySelector("main").style.overflowY = "auto";  // 결과 후에만 스크롤 활성화
}
