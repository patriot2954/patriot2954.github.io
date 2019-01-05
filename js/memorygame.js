var sec = 0;
var minut = 0;
var clickCount = 0;
var t;
$("#time").innerHTML = "sec";
var imgArray = ['img/6gh.png', 'img/6gh.png', 'img/7gh.png', 'img/7gh.png',
    'img/8gh.png', 'img/8gh.png', 'img/9gh.png', 'img/9gh.png', 'img/10gh.png',
    'img/10gh.png', 'img/vgh.png', 'img/vgh.png', 'img/dgh.png', 'img/dgh.png',
    'img/kgh.png', 'img/kgh.png', 'img/tgh.png', 'img/tgh.png'];

Array.prototype.msh = function myFunc() {
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this [i];
        this[i] = temp;
    }
};
imgArray.msh();

function matrix(arr) {
    var smallArr = [];
    var count = 0;
    var clickNode = [];
    var id = -1;
    for (let i = 0; i < arr.length; i++) {
        var node = document.createElement("button");
        node.setAttribute("class", "city" + i);
        node.setAttribute("id", i);
        $(node).css({
            height: '150px',
            width: '100px',
            backgroundImage: 'url(./img/images.jpg)',
            float: 'left'
        });
        node.addEventListener("click", function () {
            if (id != parseInt(this.id) || smallArr.length == 0) {
                id = parseInt(this.id);
                clickCount++;
                document.getElementById("click_count").innerHTML = "Кликов " + ":     " + clickCount;
                document.getElementById("click_count").style.color = 'white';
                document.getElementById("click_count").style.fontFamily = 'monospace';
                $(this).css('background-image', "url(" + imgArray[id] + ")");
                smallArr.push(imgArray[id]);
                clickNode.push(parseInt(this.id));
                if (smallArr.length === 2) {
                    if (smallArr[0].valueOf() === smallArr[1].valueOf()) {
                        $("#" + clickNode[0]).attr('disabled', 'disabled');
                        $("#" + clickNode[1]).attr('disabled', 'disabled');
                        clickNode = [];
                        count++;
                    } else {
                        setTimeout(function () {
                            $("#" + clickNode[0]).css('background-image', 'url(./img/images.jpg)');
                            $("#" + clickNode[1]).css('background-image', 'url(./img/images.jpg)');
                            clickNode = [];
                        }, 500);
                    }
                    smallArr = [];
                }
            }
            if (count === 9) {
                $(".you_win").css("display", "block");
                clearTimeout(t);
            }
            if (clickCount === 1) {
                timer();
            }
        });
        document.getElementById('front_demo').appendChild(node);
    }
}

matrix(imgArray);

function newGame() {
    document.getElementById("front_demo").innerHTML = "";
    $(".you_win").css("display", "none");
    imgArray.msh();
    matrix(imgArray);
    sec = 0;
    minut = 0;
    clickCount = 0;
}

function timer() {
    sec++;
    if (sec === 60) {
        sec = 0;
        minut++;
    }
    document.getElementById('time').innerHTML = "Времени прошло" + " :  " + minut + ":" + sec;
    document.getElementById('time').style.color = 'white';
    document.getElementById('time').style.fontFamily = 'monospace';
    t = setTimeout("timer()", 1000);
}


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

