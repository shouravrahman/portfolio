import React from "react";

const AnimatedText = ({ text, className = "" }) => {
	return (
		<div className='w-full mx-auto py-2 flex items-center justify-center text-center'>
			<h1
				className={`inline-block w-full font-bold capitalize text-8xl text-accent ${className}`}
			>
				{text.split(" ").map((word, index) => (
					<span className='inline-block' key={word + "-" + index}>
						{word}&nbsp;
					</span>
				))}
			</h1>
		</div>
	);
};

export default AnimatedText;
