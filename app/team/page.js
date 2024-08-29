import Link from "next/link";
import React from "react";
import teamData from "/public/API/teamData.json";

export const metadata = {
	title: "NextJS with Sumit || Team Page",
	description: "NextJS with Sumit. I am try to learn Next.js || Team Page",
};

export default function Team() {
	return (
		<main>
			<section className="team-area py-20">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl text-center mb-10">Team Page</h1>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{teamData.map(({ id, image, name, title, des }) => (
							<div key={id}>
								<div className="team__item p-6 rounded-lg bg-slate-300">
									<div className="team__image">
										<img src={image} alt={name} />
									</div>
									<div className="team__content mt-4">
										<h4 className="capitalize">
											<Link
												className="hover:text-green-700 transition-all duration-300"
												href={`/team/${id}`}
											>
												{name}
											</Link>
										</h4>
										<span className="capitalize">{title}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
