import React, { useState, useEffect } from 'react';

//code below referrenced from https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks

function CountdownChristmas() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = new Date(`${year}-12-25`) - new Date();
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

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  }) ;

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
      <h1 className="holiday-title">CHRISTMAS</h1>
      {timerComponents.length ? timerComponents : <h2>Merry Christmas!</h2>}
    </div>
  );
}

export default CountdownChristmas;