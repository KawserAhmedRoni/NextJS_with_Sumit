import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import "/public/assets/css/style.css";
import logo from "/public/assets/images/logo/logo.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "NextJS with Sumit",
	description: "NextJS with Sumit. I am try to learn Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="header-aera py-4">
					<div className="container mx-auto px-4">
						<div className="header__wrp flex items-center flex-wrap justify-between gap-4">
							<Link className="logo inline-block" href="/">
								<Image width={190} priority src={logo} alt="Logo" />
							</Link>
							<ul className="nav flex gap-4 flex-wrap justify-center">
								<li className="nav-item">
									<Link
										className="nav-link hover:text-green-700 transition-all duration-500 p-4 inline-block font-medium"
										href="/"
									>
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link hover:text-green-700 transition-all duration-500 p-4 inline-block font-medium"
										href="/about"
									>
										About
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link hover:text-green-700 transition-all duration-500 p-4 inline-block font-medium"
										href="/team"
									>
										Team
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link hover:text-green-700 transition-all duration-500 p-4 inline-block font-medium"
										href="/blog"
									>
										Blogs
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link hover:text-green-700 transition-all duration-500 p-4 inline-block font-medium"
										href="/contact"
									>
										Contact
									</Link>
								</li>
							</ul>
							<button className="px-10 py-4 inline-block font-medium hover:bg-green-800 transition-all duration-300 text-white bg-green-700 rounded-md">
								Login
							</button>
						</div>
					</div>
				</header>

				{children}

				<footer className="footer-area">
					<p className="footer-copyright text-center py-4 bg-green-700 text-white capitalize">
						&copy; {new Date().getFullYear()} All rights reserved by
						kawser ahemd roni.
					</p>
				</footer>
			</body>
		</html>
	);
}
