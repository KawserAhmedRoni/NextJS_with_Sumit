import Link from "next/link";
import React from "react";

export default function About() {
	// throw new Error("A Big Error here")
	return (
		<main>
			<div className="about-area min-h-screen py-10">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl text-center">About Page</h1>
					<h2 className="text-2xl text-center mt-5">
						<Link href="/about/mission"> Misson</Link> ||
						<Link href="/about/vission"> Vission</Link>
					</h2>
				</div>
			</div>
		</main>
	);
}
