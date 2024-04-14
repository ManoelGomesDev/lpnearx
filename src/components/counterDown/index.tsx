import React, { useEffect, useState } from 'react';

const Countdown: React.FC = () => {
  const targetDate = new Date('april 15, 2024 23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-purple-600  w-full h-[60px]  flex flex-col items-center justify-center  '>
   
      <p className='text-white font-bold'>
       Faltam apenas: {String(timeLeft.days).padStart(2, '0')} dias 
      </p>
      <p className='text-white font-bold'> 
      {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')} 
      </p>

    </div>
  );
};

export default Countdown;