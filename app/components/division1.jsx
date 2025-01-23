import React from 'react';

const Division1 = (props) => {
	return (
		<div className="w-full">
			<div className="flex justify-center content-center items-center">
				<div className="text-white text-2xl p-5 rounded-3xl bg-gradient-to-r from-purple-500 bg-blue-950">
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Division1;