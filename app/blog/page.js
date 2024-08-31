import Link from "next/link";
import React from "react";
import getAllPosts from "../../lib/getAllPosts";

export default async function Blog() {
	const posts = await getAllPosts();

	return (
		<main>
			<div className="blog-area min-h-screen py-10">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl text-center mb-10">Blogs Page</h1>
					<div className="grid lg:grid-cols-3 gap-6">
						{posts.map(({ id, title, body }) => (
							<div
								key={id}
								className="blog__item text-center px-5 py-10 rounded-lg border border-solid border-gray-400"
							>
								<span className="text-2xl font-light">
									Blog Number is : {id}
								</span>
								<h2 className="text-3xl font-medium mt-2">
									<Link
										className="hover:text-green-700 transition-all duration-300"
										href={`/blog/${id}`}
									>
										{title}
									</Link>
								</h2>
								<p className="mt-5">{body.slice(0, 100)} ...</p>
								<Link
									className=" inline-block px-5 py-2 rounded-md bg-green-700 hover:bg-green-800 transition-all duration-300 text-white mt-10"
									href={`/blog/${id}`}
								>
									Read More
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
