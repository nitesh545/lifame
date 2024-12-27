import React from 'react';

const Text = (props) => {
	return (
		<div className="w-screen">
			<div className="flex justify-center items-center content-center text-center">
				<div className="text-white text-2xl p-8 rounded-2xl bg-gradient-to-r from-purple-500 to-red-500">
					{props.text}
				</div>
			</div>
		</div>
	);
};

export default Text;