var number = Math.floor(10 * Math.random()) + 1;
console.log(number);
var count = 2;

document.getElementById('check').onclick = function () {
    if (count > 0) {
        var usernum = document.getElementById('mynum').value;
        usernum = parseInt(usernum);
        var out = document.getElementById('out');


        if (usernum === number) {
            out.innerHTML = "ВЫ УГАДАЛИ ЧИСЛО";

        } else if (usernum > number) {
            out.innerHTML = 'ВВЕДИТЕ ЧИСЛО ПОМЕНЬШЕ'
        } else if (usernum < number) {
            out.innerHTML = 'ВВЕДИТЕ ЧИСЛО ПОБОЛЬШЕ'
        }
        document.getElementById('count').innerHTML = 'Ходов осталось ' + count;
        count--;
    } else {
        alert('ВЫ ПРОИГРАЛИ');
        location.reload();
    }
};