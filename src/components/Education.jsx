import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";
const educationdata = [
	{
		type: "Bachelor Of Science In Computer Science",
		time: "2016-2022",

		place: "Massachusetts Institute Of Technology (MIT) ",
		info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
	},
	{
		type: "Bachelor Of Science In Computer Science",
		time: "2016-2022",

		place: "Massachusetts Institute Of Technology (MIT) ",
		info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
	},
	{
		type: "Bachelor Of Science In Computer Science",
		time: "2016-2022",

		place: "Massachusetts Institute Of Technology (MIT) ",
		info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
	},
];

const EducationDetails = ({ type, time, place, info }) => {
	const ref = useRef();
	return (
		<li
			ref={ref}
			className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<h3 className='capitalize font-bold text-2xl'>{type}&nbsp;</h3>
				<span className='mt-1'>
					{time} | {place}
				</span>
				<p className='mt-2'>{info}</p>
			</motion.div>
		</li>
	);
};

const Education = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className='my-32'>
			<h2 className='font-bold text-8xl mt-32 w-full text-center mb-32 text-accent'>
				Education
			</h2>

			<div ref={ref} className='w-[75%] mx-auto relative text-accent'>
				{/* line */}
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className='absolute left-9 top-0 w-[5px] h-full bg-red origin-top'
				/>
				{/* line end */}
				<ul className=' w-full ml-4 flex flex-col items-start justify-between'>
					{educationdata.map(({ type, time, place, info }) => {
						return (
							<EducationDetails
								key={type}
								time={time}
								place={place}
								info={info}
								type={type}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Education;
