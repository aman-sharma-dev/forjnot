import {
	CallToAction,
	Features,
	Footer,
	Hero,
	HowItWorks,
	Navbar,
} from "../../components/landing";
import React from "react";

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Navbar */}
			<Navbar />

			{/* Spacing to account for fixed navbar */}
			<div className="pt-20" />

			{/* Hero section */}
			<Hero />

			{/* Features section */}
			<section id="features">
				<Features />
			</section>

			{/* How it Works section */}
			<section id="how-it-works">
				<HowItWorks />
			</section>

			{/* CTA section */}
			<CallToAction />

			{/* Footer */}
			<Footer />
		</main>
	);
}
