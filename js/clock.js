const showClock = () => {
    let date = new Date();
    let hour = hourFormat(date.getHours());
    let minutes = hourFormat(date.getMinutes());
    let seconds = hourFormat(date.getSeconds());
    document.getElementById('hour').innerHTML = `${hour}:${minutes}:${seconds}`;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekOfDay = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let stringDate = `${weekOfDay}, ${day} ${month}`;
    document.getElementById('date').innerHTML = stringDate;

    document.getElementById('container').classList.toggle('animation');
}

//This function add a zero when it have only one number.
const hourFormat = (hour) => {
    if (hour < 10)
        hour = '0' + hour;
    return hour;
}

setInterval(showClock, 1000);