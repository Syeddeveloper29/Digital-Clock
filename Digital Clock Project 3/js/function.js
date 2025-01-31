function clock() {
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    let today = new Date().getDay();
    let weekDays = document.querySelectorAll("#weekdays span");


    for (i = 0; i < weekDays.length; i++) {
        if (i === today) {
            weekDays[i].classList.add("active");
        } else {
            weekDays[i].classList.remove("active");
        };
    };
};

setInterval(clock, 1000);
