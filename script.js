
let isMilitaryTime = false;
let intervalID;

document.addEventListener("DOMContentLoaded", function() {
    realTime()
    setInterval(realTime, 1000)
})

let button = document.getElementById('button-24')
button.addEventListener('click', function() {
     isMilitaryTime = !isMilitaryTime 
     
     clearInterval(intervalID)
     realTime()
     intervalID = setInterval(realTime, 1000)
})

function realTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = formatTime(time.getMinutes());
    let seconds = formatTime(time.getSeconds());
    let dayIndex = time.getDay(); 
    let months = time.getMonth();
    let dayOfTheMonth = time.getDate();
    let year = time.getFullYear();
  

    let formattedHour = isMilitaryTime ? hour : getStandardHour(hour)
   
    document.querySelector(".clock").innerHTML = 
    `${formattedHour}:${minute}:${seconds} <span class="amPm">${getAmPm(hour)}</span>`;

   const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const monthArray = ["January", "February", "March", "April",  "May", "June", "July", "August", "September", "October", "November", "December",
   ]; 
  
   document.querySelector(".date").innerHTML = 
    `${dayArray[dayIndex]}, ${monthArray[months]} ${dayOfTheMonth}, ${year}`;

    //    const day = dayArray[dayIndex]; 
//    document.querySelector

    // document.getElementById("daysIndex").innerHTML = day + ','
    // const month = monthArray[months];  
    // document.getElementById("currentMonth").innerHTML = month + ' ' + dayOfTheMonth + ', ' + year
    
    // This ensures everything is in one line, but still keeps "AM/PM" separate.

    // * Replaced the separate get.ElementById and added it into one line - refactored code - 
    // document.getElementById("hour").innerHTML = formattedHour;
    // document.getElementById("minute").innerHTML = ":" + minute;
    // document.getElementById("seconds").innerHTML = ":" + seconds;
    // document.getElementById("amPm").innerHTML = getAmPm(hour);  
}

function getAmPm(hour) {
    return isMilitaryTime ? "" : hour < 12 ? "AM" : "PM";
}
// function getAmPm(hour) { 
//     return isMilitaryTime ? "" : parseInt(hour) < 12 ? "AM" : "PM"
// }

function formatTime(time) {
    return time < 10 ? "0" + time : time
}

function getStandardHour(hour) {
    return hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
}
// function getStandardHour(hour) {
//     return parseInt(hour) > 12 ? parseInt(hour) - 12 : hour
// }
