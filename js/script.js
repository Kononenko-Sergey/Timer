(function () {
    var minSecElement = document.getElementById('minsec');
    var secElement = document.getElementById('sec');
    var minElement = document.getElementById('min');
    var hourElement = document.getElementById('hour');
    var startButton = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    var resetButton = document.getElementById('res');
    var timerState = {
        hour: 0,
        min: 0,
        sec: 0,
        ms: 0
    };
    var counter = 0;
    var counterSec = 0;
    var counterMin = 0;
    var counterHour = 0;
    var interval;

    init();

    function init(id) {
     renderTimer(0, 0, 0, 0);
     addEventListeners();
    }

    function addEventListeners() {
        startButton.addEventListener('click', startTimer);
        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);

    }

    function startTimer() {
        interval = setInterval(increaseMinSec, 100);
        startButton.disabled = true;
    }

    function stopTimer() {
       clearInterval(interval);
        startButton.innerHTML="go";
       startButton.disabled = false;
    }

    function resetTimer() {
        clearInterval(interval);
        startButton.disabled = false;

        timerState = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0
        };
        counter = 0;

        renderTimer();

        start.innerHTML="start";
    }

    
    function renderTimer() {
        var hourStr = prepareTimeString(timerState.hour);
        var minStr = prepareTimeString(timerState.min);
        var secStr = prepareTimeString(timerState.sec);
        var minSexStr = prepareTimeString(timerState.ms);

        hourElement.setAttribute('value', hourStr );
        minElement.setAttribute('value', minStr );
        secElement.setAttribute('value', secStr );
        minSecElement.setAttribute('value', minSexStr );
    }

    function prepareTimeString(timeNumber) {
        var timeStr = timeNumber + '';

        return timeStr.length === 1 ? '0' + timeStr : timeStr;
    }
     function increaseMinSec() {
        counter++;
        minSecElement.setAttribute('value', counter);
        if(counter === 10){
            increaseSec();
            counter = 0;
        }
    }

    function increaseSec() {
        timerState.sec++;
        if (timerState.sec === 60){
            increaseMin();
            timerState.sec = 0;
        } else {
            renderTimer();
        }
    }

    function increaseMin() {
        timerState.min++;
        renderTimer();
        if(timerState.min === 60){
            increaseHour();
            timerState.min = 0;
        }
    }

    function increaseHour() {
        counterHour++;
        hourElement.setAttribute('value', counterHour);
    }
})();