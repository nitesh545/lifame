"use client";

import React from 'react';
import {useState, useEffect, useRef} from "react";

const blurs = ["blur-0", "blur-sm", "blur", "blur-md", "blur-lg"];

const GlowProgressBar = () => {
	const [progress, setProgress] = useState(0);
	const [glow, setGlow] = useState("0");

	const progressRef = useRef(null);

	const updateProgressWidth = () => {
		progressRef.current.style.width = `${progress}%`;
	};

	const updateProgress = () => {
		setTimeout(() => {
			setProgress(prevState => prevState + 1);
		}, 25);
	};

	const updateGlow = () => {
		if (progress >= 80 && progress < 100) { setGlow(blurs[4]); }
		else if (progress >= 60 && progress < 80) { setGlow(blurs[3]); }
		else if (progress >= 40 && progress < 60) { setGlow(blurs[2]); }
		else if (progress >= 20 && progress < 40) { setGlow(blurs[1]); }
		else if (progress >= 10 && progress < 20) { setGlow(blurs[1]); }
		else {setGlow("0"); }
	};

	useEffect(() => {progress > 99 ? setProgress(0) : setProgress(progress); updateProgress();}, [progress]);
	useEffect(() => {updateProgressWidth();}, [progress]);
	useEffect(() => {updateGlow()}, [progress]);

	return (
		<div className="w-72">
			<div className="relative flex justify-center content-center items-center">
				<div className={`absolute p-2 w-full ${glow} rounded-3xl bg-gradient-to-r from-red-500 to-purple-500`}></div>
				<div className={`relative bg-blue-950 w-72 p-1 rounded-3xl`}>
					<div ref={progressRef}
						 className="p-2 rounded-3xl bg-gradient-to-r from-purple-500 to-red-500"></div>
				</div>
			</div>
		</div>
	);
};

export default GlowProgressBar;