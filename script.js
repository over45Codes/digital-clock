

function realTime() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var seconds = time.getSeconds();
    var amPm = "AM";

    if(hour == 0){
        hour = 12;
    }
    
    if(hour >12){
        hour = hour -12;
        amPm = "PM";
    }
 
     if(minute < 10) {
        minute = "0" + minute;
    } if(seconds < 10) {
        seconds = "0" + seconds;
    }
   
    
    var dayIndex = time.getDay(); // number
    var months = time.getMonth();
    var year = time.getFullYear();

    const dayArray = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
     ]; 
         
    const day = dayArray[dayIndex];  
    document.getElementById("daysIndex").innerHTML = day

    const monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",

     ]; 
         
    const month = monthArray[months];  
    document.getElementById("currentMonth").innerHTML = ', ' + month + ', ' + year

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = ":" + minute;
    document.getElementById("seconds").innerHTML = ":" + seconds;
    document.getElementById("amPm").innerHTML = amPm;  


}

setInterval(realTime, 1000)


    

   
 



    







