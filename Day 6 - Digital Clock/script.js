const time = document.getElementById("time");
const utcOffset = -7;

setInterval(() => {
  const now = new Date();

    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const offsetTime = new Date(utc + 3600000 * utcOffset);

  let hr = offsetTime.getHours();
  let min = offsetTime.getMinutes();
  let sec = offsetTime.getSeconds();
  let period = hr >= 12 ? "PM" : "AM";

  hr = hr % 12;
  hr = hr ? hr : 12; 

  const formattedTime =
    [
      hr < 10 ? "0" + hr : hr,
      min < 10 ? "0" + min : min,
      sec < 10 ? "0" + sec : sec,
    ].join(":") +
    " " +
    period +
    ` (UTC${utcOffset >= 0 ? "+" : ""}${utcOffset})`;

  time.textContent = formattedTime;
}, 1000);
