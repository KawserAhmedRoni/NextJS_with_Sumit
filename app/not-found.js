import Image from "next/image";
import Link from "next/link";
import errorImage from "/public/assets/images/error/error-image.png";

export default function NotFound() {
	return (
		<main>
			<section className="error-area pt-16 pb-16">
				<div className="container mx-auto px-4">
					<div className="error__image">
						<Image src={errorImage} alt="image" />
					</div>

					<div className="error__content text-center ">
						<h1 className="text-8xl mt-10 mb-5">404</h1>
						<h2 className="text-5xl capitalize">
							<span className="text-green-700">Oops!</span> Page not
							found
						</h2>
						<p className="text-2xl">
							The page you are looking for does not exist
						</p>
						<Link
							className="mt-10 bg-green-700 hover:bg-green-800 transition-all duration-300 text-white"
							href="/"
						>
							Back Home
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
