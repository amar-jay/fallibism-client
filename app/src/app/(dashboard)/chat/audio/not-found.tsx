import { buttonVariants } from "@/components";
import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div className="flex items-center gap-3 justify-center">
			<h1 className="text-center text-primary text-3xl">404</h1>
			<h2>Sorry, that page cannot be found.</h2>
			<button className={buttonVariants({variant: "secondary"})}>
				<Link href="/#">
					Back to the homepage
				</Link>
			</button>
		</div>
	);
}