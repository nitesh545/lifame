"use client";

import React, {useEffect, useRef, useState} from 'react';

const ProgressBar1 = () => {
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
		<div className="w-full">
			<div className="flex justify-center content-center items-center">
				<div className="bg-blue-950 w-72 p-1 rounded-3xl">
					<div className="bg-gradient-to-r from-transparent to-purple-500 rounded-3xl p-2" ref={insideDiv}>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar1;