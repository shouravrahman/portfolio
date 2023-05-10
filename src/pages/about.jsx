/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const inView = useInView(ref, { once: true });

	useEffect(() => {
		if (inView) {
			motionValue.set(value);
		}
	}, [inView, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [value, springValue]);

	return <span ref={ref}></span>;
};

const about = () => {
	return (
		<>
			<Head>
				<title>Shourav - About page</title>
				<meta name='description' content='' />
			</Head>
			<main className='w-full flex flex-col items-center justify-center'>
				<Layout className='pt-14'>
					<AnimatedText text='Passion Fuels Purpose! ' className='flex mb-14' />

					{/* start a 3 column grid left= bio, center=photo, right=statisitics */}

					<div className='grid w-full grid-cols-8 gap-16'>
						<div className='col-span-3 flex flex-col items-start justify-start'>
							<h2 className='mb-4 text-lg font-bold uppercase text-accent/75'>
								Myself
							</h2>
							<p className='font-medium  text-accent'>
								Hi, I'm CodeBucks, a web developer and UI/UX designer with a
								passion for creating beautiful, functional, and user-centered
								digital experiences. With 4 years of experience in the field. I
								am always looking for new and innovative ways to bring my
								clients' visions to life.
							</p>
							<p className='font-medium text-accent my-4'>
								I believe that design is about more than just making things look
								pretty – it's about solving problems and creating intuitive,
								enjoyable experiences for users.{" "}
							</p>
							<p className='font-medium text-accent'>
								Whether I'm working on a website, mobile app, or other digital
								product, I bring my commitment to design excellence and
								user-centered thinking to every project I work on. I look
								forward to the opportunity to bring my skills and passion to
								your next project.
							</p>
						</div>

						{/* image */}
						<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-red p-8'>
							<img
								src='/images/profile/shourav.jpg'
								alt='shourav rahman'
								className='w-full h-auto object-contain rounded-2xl'
							/>
						</div>

						<div className='col-span-2 flex flex-col items-end justify-between'>
							<div className=' flex flex-col items-end justify-center'>
								<span className='text-red inline-block text-7xl font-bold'>
									<AnimatedNumbers value={50} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-accent/75'>
									satisfied clients
								</h2>
							</div>
							<div className=' flex flex-col items-end justify-center'>
								<span className='text-red inline-block text-7xl font-bold'>
									<AnimatedNumbers value={40} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-accent/75'>
									projects completed
								</h2>
							</div>
							<div className=' flex flex-col items-end justify-center'>
								<span className='text-red inline-block text-7xl font-bold'>
									<AnimatedNumbers value={4} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-accent/75'>
									years of experience
								</h2>
							</div>
						</div>
					</div>
					<Skills />
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	);
};

export default about;
