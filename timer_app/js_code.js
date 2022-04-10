console.log("hey");
document.getElementById("submit").onclick = (event) => {
  console.log(event);
  let target = document.getElementById("datetime").value;
  //console.log(target);

  //console.log(currentDate);
  let interval = setInterval(() => {
    let currentDate = new Date();
    let diffTime = new Date(target).getTime() - currentDate.getTime();
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("days").innerText = days;
    let hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    document.getElementById("hours").innerText = hours;
    let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("minutes").innerText = minutes;

    let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    document.getElementById("seconds").innerText = seconds;
    if (diffTime < 0) {
      clearInterval(interval);
      document.getElementById("days").innerText = "N.A";
      document.getElementById("hours").innerText = "N.A";
      document.getElementById("minutes").innerText = "N.A";
      document.getElementById("seconds").innerText = "N.A";
    }
  }, 1000);

  //console.log(days, hours, minutes, seconds);
};
