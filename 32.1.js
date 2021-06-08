import React, { useState } from 'react'
import './App.css';

function App() {
	const initDate = {
		year: 2025,
		month: 12,
		day: 31,
	}
	const [date, setDate] = useState(initDate);

	function getWeekDay(obj) {
		let dt = new Date(obj.year, obj.month - 1, obj.day);
		let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
		let day = dt.getDay();
		return days[day];
	}

	return (
		<>
			<p>{date.year}.{date.month}.{date.day} {getWeekDay(date)}</p>
		</>
	)
}
export default App;






