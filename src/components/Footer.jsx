import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-red font-medium text-lg text-accent'>
			<Layout className='py-8 flex items-center justify-between'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

				<div className='flex items-center'>
					Made with <span className='text-red text-2xl px-1 '>&#9825;</span>by{" "}
					<Link href='/' className='underline underline-offset-2'>
						&nbsp;shourav
					</Link>
				</div>
				<Link href='/' target={"_blank"}>
					Say Hello!
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
