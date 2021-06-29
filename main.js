// 로직 설명 : 클릭이 됐을 때 beChange의 텍스트를 랜덤한 HexColorCode로 변경해주고, backgroundColor를 HexColorCode에 해당하는 색상으로 변경해준다.
// HexColorCode = #E153Q2 이런 식으로 텍스트가 나온다. HexColorCode는 0 ~ 9 의 숫자와 A ~ F 까지의 문자로 #을 제외한 6개의 문자로 이루어진다.. 여기서 #은 고정적으로 나타난다.

const beChange = document.querySelector(".beChange");
const Btn = document.querySelector(".Btn");

// HexColorCode를 랜덤으로 출력할 함수를 작성

function handleHexCodeChanger() {
    const hexColorCode = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        "A", "B", "C", "D", "E", "F"
    ];

    let hash = "#";

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexColorCode.length);
        hash += hexColorCode[index];
    }
    return hash;
};

function handleChanger() {
    beChange.innerText = handleHexCodeChanger();
    document.body.style.backgroundColor = handleHexCodeChanger();
}

Btn.addEventListener("click", handleChanger);

// 필요한 것: Click 버튼 클릭을 감지할 이벤트 리스너
// HexColorCode를 출력해줄 함수
// 클릭이 눌렸을 때 beChange의 텍스트를 랜덤한 HexColorCode로 변경해줄 함수
// 클릭이 눌렸을 때 backgroundColor를 HexColorCode에 해당하는 색상으로 변경해줄 함수
