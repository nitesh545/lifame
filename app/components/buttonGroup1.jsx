"use client";
import React from 'react';
const buttons = ["First", "Second", "Third", "Fourth"];

const ButtonGroup1 = () => {
	return (
		<div className="w-full">
			<div className="flex justify-center content-center items-center">
				<div className="bg-gradient-to-r from-purple-500 bg-blue-950 rounded-2xl">
					{buttons.map((button, index) => {return (
						<button
							key={index}
							onClick={() => {console.log(`${button} Button clicked!`)}}
							className="text-white text-2xl m-1 p-3 rounded-2xl border-2 border-green-800"
						>
							{button}
						</button>
					);})}
				</div>
			</div>
		</div>
	);
};

export default ButtonGroup1;