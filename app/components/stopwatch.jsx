"use client";

import React from 'react';
import {useState} from 'react';

const Stopwatch = () => {
	let [startTime, setStartTime] = useState(0);
	let [elapsedTime, setElapsedTime] = useState(0);
	// let [timeInterval, setTimeInterval] = useState(0);
	let [display, setDisplay] = useState("00:00:00:00");
	let timerInterval;

	let startTimer = () => {
		setStartTime(Date.now() - elapsedTime);
		timerInterval = (setInterval(()=>{
			setElapsedTime(Date.now() - startTime);
			displayTime(elapsedTime);
		}, 10));
	}

	let stopTimer = () => {
		// setTimeInterval(0);
		clearInterval(timerInterval);
	}

	let resetTimer = () => {
		// setTimeInterval(0);
		clearInterval(timerInterval);
		setElapsedTime(0);
		displayTime(0);
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
			<div id="display" className="p-1">{display}</div>
			<div className="">
				<button className="p-1" onClick={() => {
					startTimer();
				}}>Start
				</button>
				<button className="p-1" onClick={() => {
					stopTimer();
				}}>Stop
				</button>
				<button className="p-1" onClick={() => {
					resetTimer();
				}}>Reset
				</button>
			</div>
		</div>
	);
};

export default Stopwatch;