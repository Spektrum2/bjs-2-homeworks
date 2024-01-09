class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.filter((item) => item.time === time).length) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            callback,
            time: time,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = () => {
            this.alarmCollection.forEach((item) => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                    item.canCall = false;
                    item.callback();
                }
            });
        }
        this.intervalId()
    }

    clearInterval() {
        this.intervalId = null;
    }

    stop() {
        this.clearInterval();
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item) => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}
