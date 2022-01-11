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
        <p class="date">2021-10-05 TUE</p>
        <p class="time">{date.toISOString().slice(11, 19)}</p>
        <p class="text">라니의 시간은 제대로 흐른다</p>
      </div>
    </div>
  );
}

export default Clock;
