

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


    
    var days= time.getDay(); // number
    var months = time.getMonth();
    var year = time.getFullYear();

    var days = new Date (); 
        days ['Sunday']
        days ['Monday']
        days ['Tuesday']
        days ['Wednesday']
        days ['Thursday'] 
        days ['Friday']
        days ['Saturday'];

    document.getElementById("daysIndex").innerHTML = days; 


    
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = ":" + minute;
    document.getElementById("seconds").innerHTML = ":" + seconds;
    document.getElementById("amPm").innerHTML = amPm;  


}

setInterval(realTime, 1000)


    

   
 



    







