'use client';
import React from "react";

const Button = (props) => {
	let handleClick = () => {
		console.log("Button clicked");
	}
	return (
		<div className="w-screen">
			<div className="h-full flex justify-center content-center">
				<button
					className="h-10 bg-gradient-to-r flex items-center from-purple-500 to-pink-500 text-2xl rounded-3xl p-8"
					onClick={handleClick}
				>
					{props.text}
				</button>
			</div>
		</div>
	);
};

export default Button;