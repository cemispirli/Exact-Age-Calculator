const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
// console.log(countdown);

const loading = document.querySelector(".loading");
window.addEventListener("load", () => {
    loading.style.display = "block";
    
    setTimeout(() => {
        loading.style.display = "none";
        countdown.style.display = "flex";
        document.body.style.backgroundImage = "url(./whatsapp_image_2020.jpeg)";
    }, 1000);

    

    let H2Elements = document.getElementsByTagName("h2");
   
    let H2Elements2 = countdown.querySelectorAll("h2");
  

    [...H2Elements].forEach(el => {
        el.innerHTML = "00";
    });
});

let selectedBirthday;
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event) => {
    console.log("dateString", event.target.value);
    //event.target == birthdayInput
    //convert to date from dateString
    selectedBirthday = new Date(event.target.value);
    console.log("dateObject", selectedBirthday);
    if (selectedBirthday > new Date()) {
        alert("Doğum tarihiniz bugünden büyük olamaz!!");
        return;
    }
    

    setInterval(updateCountdown, 1000);

});

const updateCountdown = () => {
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHour = selectedBirthday.getHours();
    let dobMinute = selectedBirthday.getMinutes();
    let dobSecond = selectedBirthday.getSeconds();

    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    //if positive => no problem
    let yearOfAge = currentYear - dobYear;
    let monthOfAge = currentMonth - dobMonth;
    let dayOfAge = currentDay - dobDay;
    let hourOfAge = currentHour - dobHour;
    let minuteOfAge = currentMinute - dobMinute;
    let secondOfAge = currentSecond - dobSecond;

    //secondOfAge control  
    if (secondOfAge < 0) {
        secondOfAge += 60;
        minuteOfAge--;
    }
    //minuteOfAge control  
    if (minuteOfAge < 0) {
        minuteOfAge += 60;
        hourOfAge--;
    }
    //hourOfAge control  
    if (hourOfAge < 0) {
        hourOfAge += 24;
        dayOfAge--;
    }

    if (dayOfAge < 0) {
       
        dayOfAge += 30;
        monthOfAge--;
    }

    if (monthOfAge < 0) {
        monthOfAge += 12;
        yearOfAge--;
    }
   

    years.innerHTML = yearOfAge.toString().padStart(2, "0");
    months.innerHTML = monthOfAge.toString().padStart(2, "0");
    days.innerHTML = dayOfAge.toString().padStart(2, "0");
    hours.innerHTML = hourOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
    seconds.innerHTML = secondOfAge.toString().padStart(2, "0");


}
