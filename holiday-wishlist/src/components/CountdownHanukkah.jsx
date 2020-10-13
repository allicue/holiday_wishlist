import React, { useState, useEffect } from 'react';

//code below referrenced from https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks

function CountdownHanukkah() {
  const calculateTimeLeft = () => {
    //gets current year
    let year = new Date().getFullYear();
    //calcutes the difference between current year/date and today's date
    const difference = new Date(`${year}-12-10`) - new Date();
    let timeLeft = {};

    //calculations below translate milliseconds to days, hours, mins, secs
    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  //updates the countdown every second
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  //setting an empty array so we can push the time left to it
  const timerComponents = [];

  //using object keys to loop through the timeLeft object
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "} <br></br>
      </span>
    );
  });
  return (
    <div>
      <h1>HANUKKAH</h1>
      {/* if the timerComponent's array has something left keep displaying time left, if not, display <h2>  */}
      {timerComponents.length ? timerComponents : <h2>Happy Hanukkah!</h2>}
    </div>
  );
}

export default CountdownHanukkah;