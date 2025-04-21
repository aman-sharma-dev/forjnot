export const capitalize = (str: string) =>
	str.charAt(0).toUpperCase() + str.slice(1);

export const slugify = (str: string) =>
	str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/(^-+)|(-+$)/g, "");

export const truncate = (str: string, maxLength: number) =>
	str.length > maxLength ? `${str.slice(0, maxLength)}…` : str;
