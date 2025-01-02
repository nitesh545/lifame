"use client";

import React from 'react';

const Stopwatch = () => {

	return (
		<div className="flex">
			<div id="display" className="p-1">00:00:00</div>
			<div className="">
				<button className="p-1" onClick={() => {
				}}>Start
				</button>
				<button className="p-1" onClick={() => {
				}}>Stop
				</button>
				<button className="p-1" onClick={() => {
				}}>Reset
				</button>
			</div>
		</div>
	);
};

export default Stopwatch;