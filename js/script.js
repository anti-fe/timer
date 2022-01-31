window.addEventListener('load', () => {

    const timerDays = document.querySelector('.timer-days'),
        timerHours = document.querySelector('.timer-hours'),
        timerMinutes = document.querySelector('.timer-minutes'),
        timerSeconds = document.querySelector('.timer-seconds');

    const deadLine = new Date(2022, 1, 2, 16, 35, 0);
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
        if(ourMls < 0) {
            arrDate.days = 0;
            arrDate.hours = '00';
            arrDate.minutes = '00';
            arrDate.seconds = '00';
            clearInterval(intervalDate);
        }

        if (arrDate.days == 0) {
            timerDays.innerHTML = '0 дней';
        }
        if (arrDate.days >= 11 && arrDate.days <= 20) {
            timerDays.innerHTML = `${arrDate.days} дней`;
        } 
        else if (arrDate.days % 10 === 1) {
            timerDays.innerHTML = `${arrDate.days} день` ;
        } 
        else if ((arrDate.days >= 2 && arrDate.days <= 4) || (arrDate.days >= 22 && arrDate.days <= 24) || (arrDate.days >= 32 && arrDate.days <= 34)){   
            timerDays.innerHTML = `${arrDate.days} дня`;
        } 
        else if ((arrDate.days >= 5 && arrDate.days <= 9) || arrDate.days % 10 === 0) {
            timerDays.innerHTML = `${arrDate.days} дней`;   
        }

        timerHours.innerHTML = `${arrDate.hours}:`;
        timerMinutes.innerHTML = `${arrDate.minutes}:`;
        timerSeconds.innerHTML = arrDate.seconds;
    }

    let intervalDate = setInterval(() => {
        setTimer();
    }, 1000);

})