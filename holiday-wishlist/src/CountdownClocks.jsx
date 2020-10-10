import React, { useEffect } from 'react';

function CountdownClocks() {
//referenced W3 schools for vanilla JS: https://www.w3schools.com/howto/howto_js_countdown.asp
  
    // Set the date we're counting down to
    const countDownDate = new Date("Dec 25, 2020 00:00:00").getTime();
    //use setInterval to update the count every second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Update the count down every 1 second
    }, 1000)
  
    useEffect(() => {
    setInterval(x)
}, []);
  
  return (
    <div>
      <div>
        <h2>{`CHRISTMAS`}</h2>
        <h2>{`${x.days} DAYS`}</h2>
        <h2>{`${x.hours} HOURS`}</h2>
      </div>
    </div>
  );
}

export default CountdownClocks;