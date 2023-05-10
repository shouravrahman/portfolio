import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";
const experiencedata = [
	{
		position: "Software Engineer",
		company: "Google",
		companyLink: null,
		time: "2022-Present",
		address: " Mountain View, CA",
		work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
	},
	{
		position: "Software Engineer",
		company: "Google",
		companyLink: null,
		time: "2022-Present",
		address: " Mountain View, CA",
		work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
	},
	{
		position: "Software Engineer",
		company: "Google",
		companyLink: null,
		time: "2022-Present",
		address: " Mountain View, CA",
		work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
	},
	{
		position: "Software Engineer",
		company: "Google",
		companyLink: null,
		time: "2022-Present",
		address: " Mountain View, CA",
		work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
	},
];

const ExperienceDetails = ({
	position,
	company,
	companyLink,
	time,
	address,
	work,
}) => {
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
				<h3 className='capitalize font-bold text-2xl'>
					{position}&nbsp;
					<a
						href={companyLink}
						target='_blank'
						rel='noopener noreferrer'
						className='text-red capitalize'
					>
						@{company}
					</a>
				</h3>
				<span className='mt-1'>
					{time} | {address}
				</span>
				<p className='mt-2'>{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className='my-32'>
			<h2 className='font-bold text-8xl mt-32 w-full text-center mb-32 text-accent'>
				Skills
			</h2>

			<div ref={ref} className='w-[75%] mx-auto relative text-accent'>
				{/* line */}
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className='absolute left-9 top-0 w-[5px] h-full bg-red origin-top'
				/>
				{/* line end */}
				<ul className=' w-full ml-4 flex flex-col items-start justify-between'>
					{experiencedata.map(
						({ position, company, companyLink, work, time, address }) => {
							return (
								<ExperienceDetails
									key={company}
									work={work}
									company={company}
									companyLink={companyLink}
									time={time}
									address={address}
									position={position}
								/>
							);
						}
					)}
				</ul>
			</div>
		</div>
	);
};

export default Experience;
