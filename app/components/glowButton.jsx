"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import Division from "@/app/components/division";

const GlowButton = () => {
	const [isGlowing, setIsGlowing] = useState(false);

	useEffect(() => {
		console.log(isGlowing);
	}, [isGlowing]);

	const handleGlowing = () => {
		setIsGlowing(!isGlowing);
	}

	return (
		<div className="relative">
			<div className={isGlowing ? "absolute blur-xl bg-gradient-to-r from-red-500 to-purple-500 p-5 rounded-3xl" : "absolute bg-gradient-to-r from-purple-500 to-red-500 rounded-3xl p-5"}>Glow Button</div>
			<button className="relative w-full rounded-3xl p-5 bg-gradient-to-r from-purple-500 to-red-500" onClick={handleGlowing}>
				Glow Button
			</button>
		</div>
	);
};

export default GlowButton;