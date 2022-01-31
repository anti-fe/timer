window.addEventListener('load', () => {

    const timerDays = document.querySelector('.timer-days'),
        timerHours = document.querySelector('.timer-hours'),
        timerMinutes = document.querySelector('.timer-minutes'),
        timerSeconds = document.querySelector('.timer-seconds');

    const deadLine = new Date(2022, 1, 3, 0, 0, 0);

    let date,
        ourMls,
        days,
        hours,
        minutes,
        seconds

    function getTimer(deadLine) {
        date = new Date();
        ourMls = deadLine - date;

        days = Math.floor(ourMls / (1000 * 60 * 60 * 24));

        hours = Math.floor(ourMls / (1000 * 60 * 60) % 24);
        if (hours < 10) hours = `0${hours}`;

        minutes = Math.floor((ourMls / 1000 / 60) % 60);
        if (minutes < 10) minutes = `0${minutes}`;

        seconds = Math.floor((ourMls / 1000) % 60);
        if (seconds < 10) seconds = `0${seconds}`;

        return { days, hours, minutes, seconds };
    }

    function setTimer() {
        let arrDate = getTimer(deadLine);
        if(arrDate.days <= 0 && arrDate.hours <= 0 && arrDate.minutes <= 0 && arrDate.seconds <= 0) {
            timerDays.innerHTML = `0 дней`;
            timerHours.innerHTML = `0:`;
            timerMinutes.innerHTML = `0:`;
            timerSeconds.innerHTML = 0;    
            alert('Sale is over');
            clearInterval(intervalDate);
        }

        if(days == 1) days = 
        timerDays.innerHTML = `${arrDate.days} дня`;
        timerHours.innerHTML = `${arrDate.hours}:`;
        timerMinutes.innerHTML = `${arrDate.minutes}:`;
        timerSeconds.innerHTML = arrDate.seconds;
    }

    let intervalDate = setInterval(() => {
        setTimer();
    }, 1000);

})