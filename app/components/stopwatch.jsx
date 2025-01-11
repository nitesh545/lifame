// incomplete functionlaity

"use client";

import React from 'react';
import {useState, useEffect} from 'react';

const Stopwatch = () => {
	let [elapsedTime, setElapsedTime] = useState(0);
	let [startTime, setStartTime] = useState(0);
	let [timeInterval, setTimeInterval] = useState(0);
	let [display, setDisplay] = useState("00:00:00:00");
	let timerInterval;

	useEffect(() => {
		setStartTime(Date.now() - elapsedTime);
	}, [startTime]);

	useEffect(() => {
		displayTime(elapsedTime);
	}, [elapsedTime]);

	let startTimer = () => {
		console.log(`${Date.now()}  :  ${elapsedTime}`);
		setStartTime(Date.now() - elapsedTime);
		timerInterval = (setInterval(()=>{
			setElapsedTime(Date.now() - startTime);
			// displayTime(elapsedTime);
		}, 10));
		setTimeInterval(timerInterval);
	}

	let stopTimer = () => {
		setTimeInterval(0);
	}

	let resetTimer = () => {
		setTimeInterval(0);
		setElapsedTime(0);
	}

	let displayTime = (time) => {
		let milliseconds = Math.floor((time%1000)/10);
		let seconds = Math.floor((time/1000)%60);
		let minutes = Math.floor((time/(1000*60))%60);
		let hours = Math.floor((time/(1000*60*60))%60);

		milliseconds = milliseconds.toString().padStart(2, '0');
		seconds = seconds.toString().padStart(2, '0');
		minutes = minutes.toString().padStart(2, '0');
		hours = hours.toString().padStart(2, '0');

		setDisplay(`${hours}:${minutes}:${seconds}:${milliseconds}`);
	}

	return (
		<div className="flex">
			<div className="flex text-2xl p-2 rounded-3xl bg-gradient-to-r from-purple-500 to-red-500">
				<div id="display" className="p-2 m-2 border-2 border-amber-500 rounded-xl">{display}</div>
				<div className="ml-2">
					<button className="p-2 m-2 border-2 border-blue-950 rounded-xl" onClick={() => {
						startTimer();
					}}>Start
					</button>
					<button className="p-2 m-2 border-2 border-blue-950 rounded-xl" onClick={() => {
						stopTimer();
					}}>Stop
					</button>
					<button className="p-2 m-2 border-2 border-blue-950 rounded-xl" onClick={() => {
						resetTimer();
					}}>Reset
					</button>
				</div>
			</div>
		</div>
	);
};

export default Stopwatch;