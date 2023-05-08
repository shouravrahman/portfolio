import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Raleway } from "next/font/google";
import Head from "next/head";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main
				className={`${raleway.variable} font-raleway bg-primary w-full min-h-screen`}
			>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</main>
		</>
	);
}
