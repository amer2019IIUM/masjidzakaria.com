//////This is the function of prayers time it is working from 12:00 mid night until
/////Azan of Solat Asha


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);

  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updatePrayer(id, prayername) {
  var prayerselector = document.getElementById(id);
  prayerselector.innerHTML = prayername;
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

const prayer = ["05:46:00", "13:12:00", "16:29:00", "19:18:00", "20:29:00"];
const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const prayername = ["Subuh", "Zuhur", "Asar", "Maghrib", "Isyak"];

for (i = 0; i < prayer.length; i++) {
  var today = new Date();
  var date = (months[today.getMonth()])+" "+ today.getDate()+", "+ today.getFullYear();
  var time = prayer[i];
  var solat = prayername[i];
  var dateTime = date+" "+time;
  var deadline = new Date(dateTime + 15 * 24 * 60 * 60 * 1000);

  var checktime = getTimeRemaining(deadline);

  if (checktime.total>=0) {
    initializeClock('clockdiv', deadline);
    updatePrayer('upcomingprayer', solat);
    break;
  }
}
