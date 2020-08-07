function timer(selector, deadline){
    function getZero(num) {
        if( num >= 0 && num < 10 ) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    // Timer
    let _t = document.querySelector(selector),
        currentdate = new Date(),
        _d = currentdate.getDate()+deadline,
        _m = currentdate.getMonth(),
        _y = currentdate.getFullYear(),
        daysElement = _t.querySelector('.days'),
        hoursElement = _t.querySelector('.hours'),
        minutesElement = _t.querySelector('.minutes'),
        secondsElement = _t.querySelector('.seconds');


    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let setDate = new Date(_y,_m,_d,0,0,0).getTime();

    const timer = setInterval(function(){
        let curDate = new Date().getTime();
        let d = setDate - curDate;

        if(d < 0) {
            clearInterval(timer);
            for(let i=0; i<document.querySelectorAll(".number").length; i++) {
                document.querySelectorAll(".number")[i];
            }
        }
        else {
            daysElement.innerHTML	 = getZero(Math.floor(	d / day	 ));
            hoursElement.innerHTML	 = getZero(Math.floor( (d % day) / hour	));
            minutesElement.innerHTML = getZero(Math.floor( (d % hour) / minute));
            secondsElement.innerHTML = getZero(Math.floor( (d % minute) / second));
        }
    }, 1000);
}

export default timer;