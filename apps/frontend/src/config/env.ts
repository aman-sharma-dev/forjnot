let apiURL: string;
switch (process.env.RUNTIME_MODE) {
	case "local":
		apiURL = process.env.BACKEND_URL_LOCAL ?? "";
		break;
	case "production":
		apiURL = process.env.BACKEND_URL_PRODUCTION ?? "";
		break;
	case "development":
		apiURL = process.env.BACKEND_URL_DEVELOPMENT ?? "";
		break;
	default:
		apiURL = process.env.BACKEND_URL_LOCAL ?? "";
}
export const config = {
	environment: process.env.RUNTIME_MODE, // development | production | staging | test | development
	apiURL,
	gitHubURL: "https://github.com/aman-sharma-dev/stackbase",
	linkedinURL: "https://www.linkedin.com/in/aman-sharma-2b2671299/",
};

// You can add more helpers as needed
