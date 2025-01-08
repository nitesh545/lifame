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

			<div className={isGlowing ? "blur-lg bg-gradient-to-r from-red-500 to-purple-500" : "shadow-2xl shadow-cyan-500"}>
			<button className="w-full rounded-3xl" onClick={handleGlowing}>
				<Division>
				Glow Button
				</Division>
			</button>
			</div>

	);
};

export default GlowButton;