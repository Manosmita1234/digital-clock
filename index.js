function updateClock(){
    let now = new Date();
    let hours = now.getHours();
    let amPm = hours>=12?"PM":"AM";
    let minutes = now.getMinutes().toString().padStart(2,0);
    let seconds= now.getSeconds().toString().padStart(2,0);
    const text =` ${hours}:${minutes}:${seconds} ${amPm}`;
    document.getElementById("clock").textContent = text;
}

updateClock();
setInterval(updateClock, 1000);