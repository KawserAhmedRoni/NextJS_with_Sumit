export default async function getPostComments(id) {
	const result = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}/comments`
	);

	if (!result.ok) {
		throw new Error("Blog Post Comments Error");
	}

	return result.json();
}
