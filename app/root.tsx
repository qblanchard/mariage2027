import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	Link,
} from "react-router";
import { useEffect } from "react";
import orangeImage from "./Images/Orange.png";

import "./app.css";

export const links = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap",
	},
];

function ParallaxDecor() {
	useEffect(() => {
		let animationFrame: number | undefined;

		const updateDecor = () => {
			const scrollY = window.scrollY;
			document.documentElement.style.setProperty("--parallax-slow", `${scrollY * -0.055}px`);
			document.documentElement.style.setProperty("--parallax-medium", `${scrollY * 0.09}px`);
			animationFrame = undefined;
		};

		const onScroll = () => {
			if (animationFrame === undefined) animationFrame = window.requestAnimationFrame(updateDecor);
		};

		updateDecor();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
		};
	}, []);

	return <div className="parallax-decor" aria-hidden="true">
		<img className="parallax-fruit parallax-fruit-left" src={orangeImage} alt="" />
		<img className="parallax-fruit parallax-fruit-right" src={orangeImage} alt="" />
	</div>;
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<ParallaxDecor />
				<header className="site-header"><Link className="site-logo" to="/">Quentin <span>✦</span> Bérengère</Link><nav aria-label="Navigation principale"><Link to="/lieu">Le lieu</Link><Link to="/logement">Les logements</Link><Link to="/theme">Le thème</Link><Link to="/le-programme">Le programme</Link></nav></header>
				{children}
				<footer className="site-footer">À très vite <span>✦</span> pour célébrer</footer>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
