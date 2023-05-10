import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
	const { scrollYProgress } = useScroll({
		target: reference,
		offset: ["center end", "center center"],
	});

	return (
		<figure className='absolute left-0 stroke-red'>
			<svg className='-rotate-90' width='75' height='75' viewBox='0 0 100 100'>
				<motion.circle
					cx='75'
					cy='50'
					r='20'
					className='stroke-red stroke-[3px] fill-none'
				/>
				<motion.circle
					cx='75'
					cy='50'
					r='10'
					className='stroke-[4px] fill-black'
					style={{ pathLength: scrollYProgress }}
				/>

				<motion.circle
					cx='75'
					cy='50'
					r='20'
					className='animate-pulse stroke-1 fill-none'
				/>
			</svg>
		</figure>
	);
};

export default LiIcon;
