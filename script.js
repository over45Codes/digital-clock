

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

    var days = time.getDay();
    var months = time.getMonth();
    var year = time.getFullYear();
    
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("days").innerHTML = days
    document.getElementById("months").innerHTML = months
    document.getElementById("year").innerHTML = year;

    document.getElementById("hour").innerHTML = hour
    document.getElementById("minute").innerHTML = ":" + minute
    document.getElementById("seconds").innerHTML = ":" + seconds 
    document.getElementById("amPm").innerHTML = amPm;
    
    
}
setInterval(realTime, 1000)



 



    

   
 



    







