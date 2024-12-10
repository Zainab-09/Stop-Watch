let secondsElapsed = 0;
let interval = null;

document.addEventListener("DOMContentLoaded", () => {
    const time = document.getElementById("time");

    function padStart(value) {
        return String(value).padStart(2, "0");
    }

    function setTime() {
        const minutes = Math.floor(secondsElapsed / 60);
        const seconds = secondsElapsed % 60;
        time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
    }

    function timer() {
        secondsElapsed++;
        setTime();
    }

    window.startClock = function () {
        if (interval) stopClock();
        interval = setInterval(timer, 1000);
    };

    window.stopClock = function () {
        clearInterval(interval);
        interval = null; // Reset the interval reference
    };

    window.resetClock = function () {
        stopClock();
        secondsElapsed = 0;
        setTime();
    };

    setTime(); // Initialize the display
});
