import React, { useState, useEffect } from 'react';

//code below referrenced from https://github.com/do-community/react-hooks-timer/blob/master/src/App.js

function CountdownHanukkah() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = new Date(`${year}-12-10`) - new Date();
    let timeLeft = {};

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
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

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
      {timerComponents.length ? timerComponents : <h2>Happy Hanukkah!</h2>}
    </div>
  );
}

export default CountdownHanukkah;