/* eslint-disable @next/next/no-img-element */
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Shourav Rahman</title>
				<meta
					name='description'
					content='Shourav Rahman - MERN STack developer'
				/>
			</Head>
			<main className='flex items-center text-accent w-full min-h-screen'>
				<Layout className='pt-0'>
					{/* TODO Extract these in hero component */}
					<div className='flex items-center justify-between w-full'>
						<div className='w-1/2'>
							{/* TODO: find a fix for nextjs Image component without sprcifying width and height */}
							<img
								src='/images/profile/shourav.jpg'
								alt='shourav rahman'
								className='w-[300px] h-auto object-contain rounded-2xl'
							/>
						</div>
						<div className='w-1/2 flex flex-col items-center self-center'>
							{/* animated intro text */}
							<AnimatedText
								text='Hello, I am shourav rahman.'
								className='!text-6xl text-left'
							/>
							{/* description */}
							<p className='my-4 text-base font-medium'>
								It's important to note that Quora does not allow spam or overly
								promotional content. So, if you're including a Fiverr link in
								your answer, make sure that it is relevant to the question being
								asked and provides value to the reader. Additionally, you should
								avoid including too many links in your answer, as this can come
								across as spammy. If Quora determines that your answer violates
								their policies, it may be removed or even result in account
								suspe
							</p>
							{/* buttons */}
							<div className='flex items-center self-start mt-2 '>
								<Link
									href='/dummy.pdf'
									target={"_blank"}
									download={true}
									className='flex items-center bg-red text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-accent hover:text-black border-2 border-solid border-transparent hover:border-black'
								>
									Resume
								</Link>
								<Link
									href='mailto:shouravrahman006@gmail.com'
									target={"_blank"}
									className='ml-4 text-lg font-medium capitalize text-accent underline'
								>
									Contact
								</Link>
							</div>
						</div>
					</div>
				</Layout>

				{/* maybe replace with messenger bot */}
				<div className='absolute right-8 bottom-8 inline-block w-24'>
					<img
						src='/images/svgs/light.svg'
						alt='shourav rahman'
						className='w-full h-auto'
					/>
				</div>
			</main>
		</>
	);
}
