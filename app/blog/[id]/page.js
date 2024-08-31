import React from "react";
import getPost from "../../../lib/getPost";
import getPostComments from "../../../lib/getPostComments";

export async function generateMetadata({ params }) {
	const { id } = params;
	const post = await getPost(id);
	return {
		title: `${post.title} - Learn with Sumit`,
		description: post.body,
	};
}

export default async function BlogDetails({ params }) {
	const { id } = params;
	// 2 ta Api thekke Data tantachi so ***
	// stype: 1***
	// const post = await getPost(id);
	// const comments = await getPostComments(id);

	// stype: 2***
	const postPromise = getPost(id);
	const commentsPromise = getPostComments(id);
	const [post, comments] = await Promise.all([postPromise, commentsPromise]);

	return (
		<main>
			<div className="blog-details-area min-h-screen py-10">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl text-center mb-10">
						Blog Details Page {post.id}
					</h1>
					<div className="grid lg:grid-cols-1 gap-6">
						<div className="blog-details__item text-center px-5 py-10 rounded-lg border border-solid border-gray-400">
							<span className="text-2xl font-light">
								Blog Number is : {post.id}
							</span>
							<h2 className="text-3xl font-medium capitalize mt-2">
								{post.title}
							</h2>
							<p className="mt-5">{post.body}</p>
						</div>
					</div>
					<h2 className="text-3xl mt-20 mb-5">Comments</h2>
					<div className="grid lg:grid-cols-2 gap-10">
						{comments.map((comment) => (
							<div key={comment.id} className="blog__comments-item">
								<h3 className="text-2xl font-medium capitalize mt-2">
									{comment.name}
								</h3>
								<p>{comment.body}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
