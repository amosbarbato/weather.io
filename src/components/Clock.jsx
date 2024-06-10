import { useEffect, useState } from "react";


export const Clock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

		return () => {
      clearInterval(timerID);
    };
  }, []);

	const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

	return (
		<div>
      <h1>{formatTime(time)}</h1>
    </div>
	)
}
