function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}



var end = new Date('03/31/2017 5:0 PM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('days').innerHTML = pad(days);
    document.getElementById('hours').innerHTML = pad(hours);
    document.getElementById('minutes').innerHTML = pad(minutes);
    document.getElementById('seconds').innerHTML = pad(seconds);
}

timer = setInterval(showRemaining, 1000); 

    