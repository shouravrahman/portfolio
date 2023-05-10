import React from "react";
import { motion } from "framer-motion";

const skillsData = [
	{
		name: "HTML",
		x: "-20vw",
		y: "14vw",
	},
	{
		name: "CSS",
		x: "-13vw",
		y: "-17vw",
	},
	{
		name: "Javascript",
		x: "-20vw",
		y: "-10vw",
	},
	{
		name: "React JS",
		x: "15vw",
		y: "17vw",
	},
	{
		name: "Next JS",
		x: "25vw",
		y: "10vw",
	},
	{
		name: "Node JS",
		x: "4vw",
		y: "-10vw",
	},
	{
		name: "Express ",
		x: "25vw",
		y: "-17vw",
	},
	{
		name: "MongoDB ",
		x: "15vw",
		y: "-6vw",
	},
	{
		name: "Firebase ",
		x: "-25vw",
		y: "8vw",
	},
	{
		name: "Tailwind CSS ",
		x: "2vw",
		y: "9vw",
	},
];

const Skill = ({ name, x, y }) => {
	return (
		<motion.div
			className='flex items-center justify-center rounded-full font-semibold text-accent py-2 px-6  cursor-pointer absolute text-2xl bg-primary'
			whileHover={{ scale: 1.06 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x: x, y: y }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }}
		>
			{name}
		</motion.div>
	);
};

const Skills = () => {
	return (
		<>
			<h2 className='font-bold text-8xl mt-32 w-full text-center mb-32 text-accent'>
				Skills
			</h2>
			{/* todo: make circular light class on tailwind onfig */}
			<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-radialLight'>
				<motion.div
					className='flex items-center justify-center rounded-full text-4xl font-semibold text-red p-8  cursor-pointer bg-primary'
					whileHover={{ scale: 1.06 }}
					transition={{ duration: 1.5 }}
				>
					Web
				</motion.div>

				{skillsData.map(({ name, x, y }) => {
					return <Skill key={name} name={name} x={x} y={y} />;
				})}
			</div>
		</>
	);
};

export default Skills;
