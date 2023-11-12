
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let endDate = '01/01/2024 00:00:00';
//date format mm/dd/yyyy

let x = setInterval(function () {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    //time calculation for days, hours, minutes and seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let v = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let y = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let z = Math.floor((distance % (1000 * 60)) / (1000));

    //output the result in element with id 
    days.innerHTML = d + "<br><span>Days<span>";
    hours.innerHTML = v + "<br><span>Hours<span>";
    minutes.innerHTML = y + "<br><span>Minutes<span>";
    seconds.innerHTML = z + "<br><span>Seconds<span>";

    // //animate stroke
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    // 365 days in year 
    hh.style.strokeDashoffset = 440 - (440 * v) / 24;
    // 24 hrs in a day 
    mm.style.strokeDashoffset = 440 - (440 * y) / 60;
    // 60 minutes in an hours
    ss.style.strokeDashoffset = 440 - (440 * z) / 60;
    // 60 seconds in a minutes

    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;

    hr_dot.style.transform = `rotateZ(${v * 15}deg)`;

    min_dot.style.transform = `rotateZ(${y * 6}deg)`;

    sec_dot.style.transform = `rotateZ(${z * 6}deg)`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
        document.querySelector(".newyear").style.display = 'block';
    }

})