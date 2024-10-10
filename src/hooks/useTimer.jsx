import { useState, useRef, useEffect } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const intervalRef = useRef(null);

  // Start the timer with an optional starting time
  const startTimer = (startingTime = '00:00:00') => {
    if (!intervalRef.current) {
      const timeParts = startingTime.split(':').map(Number);

      // If the format is hh:mm:ss (3 parts), calculate time accordingly.
      // If the format is mm:ss (2 parts), calculate from minutes and seconds.
      let startingSeconds;
      if (timeParts.length === 3) {
        const [hours, minutes, seconds] = timeParts;
        startingSeconds = hours * 3600 + minutes * 60 + seconds;
      } else if (timeParts.length === 2) {
        const [minutes, seconds] = timeParts;
        startingSeconds = minutes * 60 + seconds;
      }

      setTime(startingSeconds);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Stop the timer
  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setTime(0);
      intervalRef.current = null;
    }
  };

  // Format time as hh:mm:ss if time exceeds 1 hour, otherwise mm:ss
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');

    // Return hh:mm:ss only if there are hours, otherwise mm:ss
    return hours > 0
      ? `${hours}:${minutes}:${seconds}`
      : `${minutes}:${seconds}`;
  };

  // Reset the timer when the component using it unmounts
  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  return { seconds: time, time: formatTime(time), startTimer, stopTimer };
};
