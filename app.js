const months = [
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
  "December"
];
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const biday = document.querySelector(".biday");
const imaging = document.querySelector(".gift-img");
const bgshit = document.querySelector(".gift-info");


//
//This thing is setup for the automatic check for the current date and adding to if 10 days
//For example your site have a black friday in 10 days. or different timer. Just pass there one number and that's it
//
// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();
// const futureDate = new Date(tempYear, tempMonth, tempDay+10, 11, 30, 0);

let futureDate = new Date(2023, 11, 8, 0, 0, 0);

const year = futureDate.getFullYear();
const date = futureDate.getUTCDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `This beautiful day starts on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1sec = 1000ms
  // 1min = 60sec
  // 1h = 60min
  // 1d = 24h
  
  const d = t/1000/60/60/24;
  const days = Math.floor(d);
  const h = (d - days)*24;
  const hours = Math.floor(h);
  const m = (h - hours)*60;
  const mins = Math.floor(m);
  const s = (m - mins)*60;
  const secs = Math.floor(s);
  console.log(items);

  items.forEach(item => {
    if (item.className === "days") {
      item.textContent = `${days}`;
    } else if (item.className === "hours") {
      item.textContent = `${hours}`;
    } else if (item.className === "mins") {
      item.textContent = `${mins}`;
    } else if (item.className === "secs") {
      item.textContent = `${secs}`;
    }
  });

  if(t<0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">happy birthday Sereja!</h4>`
    biday.innerHTML = `<p class="magic">З Днем Народження Тебе Сонечко!<br> Будь Щасливим!</p>`
    imaging.innerHTML = `<img src="./yayaya.jpg" />`
    giveaway.innerHTML = `<h4>♥♥♥♥♥♥♥</h4>`
    document.body.style.background = " url('bgb.jfif') no-repeat center center fixed";
    document.body.style.backgroundSize = "100%";
    bgshit.classList.add("mystyle");
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();


// HIS function
/*
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
*/
