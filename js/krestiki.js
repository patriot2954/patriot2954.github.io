var x = 'X';
var o = 'O';
var count = 0;
var result = document.getElementById('result');

function step() {
    if (count % 2 == 0) {
        this.innerHTML = x;
        this.value = x;
        this.setAttribute('disabled', true);
        if (document.getElementById("btn0").value == x &&
            document.getElementById("btn1").value == x &&
            document.getElementById("btn2").value == x ||
            document.getElementById("btn3").value == x &&
            document.getElementById("btn4").value == x &&
            document.getElementById("btn5").value == x ||
            document.getElementById("btn6").value == x &&
            document.getElementById("btn7").value == x &&
            document.getElementById("btn8").value == x ||
            document.getElementById("btn0").value == x &&
            document.getElementById("btn3").value == x &&
            document.getElementById("btn6").value == x ||
            document.getElementById("btn1").value == x &&
            document.getElementById("btn4").value == x &&
            document.getElementById("btn7").value == x ||
            document.getElementById("btn2").value == x &&
            document.getElementById("btn5").value == x &&
            document.getElementById("btn8").value == x ||
            document.getElementById("btn0").value == x &&
            document.getElementById("btn4").value == x &&
            document.getElementById("btn8").value == x ||
            document.getElementById("btn2").value == x &&
            document.getElementById("btn4").value == x &&
            document.getElementById("btn6").value == x) {
            document.getElementById("result").innerHTML = "ПОБЕДИЛ ИГРОК ЗА КРЕСТИКАМИ";
        }
    } else if (count % 2 != 0) {
        this.innerHTML = o;
        this.value = o;
        this.setAttribute('disabled', true);
        if (document.getElementById("btn0").value == o &&
            document.getElementById("btn1").value == o &&
            document.getElementById("btn2").value == o ||
            document.getElementById("btn3").value == o &&
            document.getElementById("btn4").value == o &&
            document.getElementById("btn5").value == o ||
            document.getElementById("btn6").value == o &&
            document.getElementById("btn7").value == o &&
            document.getElementById("btn8").value == o ||
            document.getElementById("btn0").value == o &&
            document.getElementById("btn3").value == o &&
            document.getElementById("btn6").value == o ||
            document.getElementById("btn1").value == o &&
            document.getElementById("btn4").value == o &&
            document.getElementById("btn7").value == o ||
            document.getElementById("btn2").value == o &&
            document.getElementById("btn5").value == o &&
            document.getElementById("btn8").value == o ||
            document.getElementById("btn0").value == o &&
            document.getElementById("btn4").value == o &&
            document.getElementById("btn8").value == o ||
            document.getElementById("btn2").value == o &&
            document.getElementById("btn4").value == o &&
            document.getElementById("btn6").value == o) {
            document.getElementById("result").innerHTML = "ПОБЕДИЛ ИГРОК ЗА НОЛИКАМИ!";
        }
    }
    count++;
}

for (i = 0; i < 9; i++) {
    document.getElementById('btn' + i).addEventListener('click', step);
}

function newGame() {
    for (i = 0; i < 9; i++) {
        document.getElementById('btn' + i).innerHTML = "";
        document.getElementById('btn' + i).disabled = false;
        document.getElementById('btn' + i).value = "";
        document.getElementById("result").innerHTML = "";
        count = 0;
    }
}

