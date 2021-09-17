let deg = 6;
let hour = document.getElementById("hr");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;
});

setInterval(() => {
    let time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    am_pm = "AM";

    if (hh > 12) {
        hh -= 12;
        am_pm = "PM";
    }
    if (hh == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    let currentTime = hh + ":" + mm + ":" + ss + " " + am_pm;

    document.getElementById("deg-clock").innerHTML = currentTime;
});
