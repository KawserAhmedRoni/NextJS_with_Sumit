export default async function getAllPosts() {
	const result = await fetch("https://jsonplaceholder.typicode.com/posts");

	if (!result.ok) {
		// throw new Error(`Error: ${result.status} ${result.statusText}`);
		throw new Error("Error for All Blogs Posts");
	}

	return result.json();
}
