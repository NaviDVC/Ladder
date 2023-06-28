let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { // показує теперішню сходинку
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().up().up().down().showStep();