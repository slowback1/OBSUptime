class Timer {
    hours = 0;
    minutes = 0;
    seconds = 0;
    hElement;
    mElement;
    sElement;
    hString = "";
    mString = "";
    sString = "";
    result = "";
    constructor(h, m, s) {
        this.hElement = h;
        this.mElement = m;
        this.sElement = s;
        
        setInterval(() => {this.advanceTime()}, 1000);


    }
    //count time up by 1 second
    advanceTime() {
        this.seconds += 1;
        if(this.seconds > 59) {
            this.seconds = 0;
            this.minutes = this.minutes + 1;
            if(this.minutes > 59) {
                this.hours += 1;
                this.minutes = 0;
            }
        }
        this.setElement(this.sElement, this.buildElement(this.seconds));
        this.setElement(this.mElement, this.buildElement(this.minutes));
        this.setElement(this.hElement, this.buildElement(this.hours));
    }
    //set html element to new value
    setElement(element, value) {
        switch(element.id) {
            case "seconds":
                this.result = value;
                break;
            case "minutes":
                    this.result = value + ":";
                    if(this.hours > 0 && this.minutes == 0) {
                        this.result = "00:"
                    }
                break;
            case "hours":
            default:
                if(value.substring(0,1) === "0") {
                    this.result = value.substring(1) + ":";
                } else {
                    this.result = value + ":";
                }
                if(this.hours == 0) {
                    this.result = "";
                }
                break;
        }
        element.innerHTML = this.result;
    }
    //returns a string that represents time value
    buildElement(value) {
        if(value == 0) {
            return "";
        } else if (value < 10) {
             return "0" + value.toString();
         } else {
             return value.toString();
         }
    }
}

let h = document.getElementById("hours");
let m = document.getElementById("minutes");
let s = document.getElementById("seconds");


let t = new Timer(h, m, s);