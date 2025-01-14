"use client";

import React from 'react';
import {useState, useEffect, useRef} from 'react';

const ProgressBar = () => {
	// let [divWidth, setDivWidth] = useState(0);
	let [progress, setProgress] = useState(0);
	let insideDiv = useRef(null);

	useEffect(() => {
		if (progress > 99) {
			setProgress(0);
		}
		updateProgress();
		}, [progress]);

	useEffect(() => {
		updateProgressWidth();
	}, [progress]);

	const updateProgressWidth = () => {
		insideDiv.current.style.width = `${progress}%`;
	}

	const updateProgress = () => {
		setTimeout(() => {
			setProgress(prev => prev + 1);
		}, 25);
	}

	return (
		<div className="w-72">
			<div className="flex justify-center content-center items-center">
				<div className={`bg-blue-950 w-72 p-1 rounded-3xl`}>
					<div className="bg-gradient-to-r from-purple-400 to-red-500 p-2 rounded-3xl" ref={insideDiv}>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;