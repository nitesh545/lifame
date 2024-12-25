'use client';
import React from "react";

const Button = (props) => {
	let handleClick = () => {
		console.log("Button clicked");
	}
	return (
		<div className="container mx-auto justify-center h-screen w-screen">
			<div className="p-5 justify-center text-center content-center h-screen">
				<button
					className="bg-gradient-to-r from-purple-500 to-pink-500 justify-center text-center w-1/5 text-5xl rounded-xl p-10 content-center"
					onClick={handleClick}
				>
					{props.text}
				</button>
			</div>
		</div>
	);
};

export default Button;