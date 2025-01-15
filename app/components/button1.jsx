"use client";

import React from 'react';
import {useState, useEffect} from "react";

const Button1 = (props) => {
	const [clicked, setClicked] = React.useState(false);

	const handleClick = () => {
		setClicked(prev => !prev);
	};

	useEffect(() => {
		console.log("Button Clicked");
	}, [clicked]);

	return (
		<div className="w-full">
			<div className="flex items-center justify-center content-center">
				<button
					onClick={handleClick}
					className="w-40 p-5 rounded-3xl text-white text-2xl bg-gradient-to-r from-purple-500 bg-blue-950"
				>
					{props.text}
				</button>
			</div>
		</div>
	);
};

export default Button1;