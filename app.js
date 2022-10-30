// Coded By Alireza Bayat
const li = document.createElement("li");
function showtime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    if (h === 0) {
        h = 12;
    }
    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;
    document.querySelector(".clock").appendChild(li).innerHTML = `${h} : ${m} : ${s} ${session}`;
};
setInterval(() => {
    showtime();
}, 1000);