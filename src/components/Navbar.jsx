import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<header className='w-full px-30 py-8 font-medium'>
			{/* main nav */}
			<nav>
				<Link href='/'>Home</Link>
				<Link href='/about'>About</Link>
				<Link href='/projects'>Projects</Link>
				<Link href='/contact'>Contact</Link>
			</nav>
			{/* logo */}
			<h2>logo</h2>

			{/* social */}
			<nav>
				<Link href='/' target={"blank"}>
					T
				</Link>
				<Link href='/' target={"blank"}>
					T
				</Link>
				<Link href='/' target={"blank"}>
					T
				</Link>
				<Link href='/' target={"blank"}>
					T
				</Link>
				<Link href='/' target={"blank"}>
					T
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
