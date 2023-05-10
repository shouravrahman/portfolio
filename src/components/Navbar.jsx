/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
	const router = useRouter();
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}

			<span
				className={`h-[3px] inline-block bg-red absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in ${
					router.asPath === href ? "w-full" : "w-0"
				}`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const Navbar = () => {
	return (
		<header className='w-full px-32 text-accent py-8 font-medium flex items-center justify-between'>
			{/* main nav */}
			<nav>
				<CustomLink href='/' title='Home' className='mr-4' />
				<CustomLink href='/about' title='About' className='mx-4' />
				<CustomLink href='/projects' title='Projects' className='mx-4' />
				<CustomLink href='/contact' title='Contact' className='mx-4' />
			</nav>
			{/* logo */}
			<div className='absolute left-[50%] t0p-2 translate-x-[-50%] '>
				<Logo />
			</div>

			{/* social */}
			<nav className='flex items-center justify-between flex-wrap'>
				<Link href='/' target={"blank"}>
					<img
						className='w-[50px] h-[50px]'
						src='/images/social/facebook-logo.png'
						alt=''
					/>
				</Link>
				<Link href='/' target={"blank"}>
					<img
						className='w-[50px] h-[50px]'
						src='/images/social/twitter-logo.png'
						alt=''
					/>
				</Link>
				<Link href='/' target={"blank"}>
					<img
						className='w-[50px] h-[50px]'
						src='/images/social/github.png'
						alt=''
					/>
				</Link>
				<Link href='/' target={"blank"}>
					<img
						className='w-[50px] h-[50px]'
						src='/images/social/linkedin-logo.png'
						alt=''
					/>
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
