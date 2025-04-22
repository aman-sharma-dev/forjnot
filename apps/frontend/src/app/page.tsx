export default function Home() {
	return (
		<main className="min-h-screen flex items-center justify-center p-4">
			<div className="glass p-8 max-w-lg w-full text-white">
				<h1 className="text-4xl font-bold mb-2">Stackbase</h1>
				<div className="h-1 w-20 bg-white/30 mb-6" />

				<div className="space-y-4">
					<p className="text-xl">Hi, I'm Aman Sharma</p>
					<p className="text-white/80">
						Welcome to Stackbase template. Feel free to modify this template
						according to your needs. This is a simple, clean starting point for
						your next project.
					</p>
					<a
						href="https://github.com/aman-sharma-dev/stackbase"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
					>
						GitHub Profile
					</a>
				</div>
			</div>
		</main>
	);
}
