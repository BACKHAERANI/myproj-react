import { useEffect } from 'react';
import { useState } from 'react';
import 'Clock/Clock.css';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock-wrapper">
      <h2>Clock</h2>
      <div class="clock">
        <p class="date">
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
        </p>
        <p class="time">
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </p>
        <p class="text">라니의 시간은 제대로 흐른다</p>
      </div>
    </div>
  );
}

export default Clock;
