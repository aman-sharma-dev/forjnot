export const formatDate = (date: Date, locale = "en-US") =>
	new Intl.DateTimeFormat(locale, {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(date);

export const getTimeAgo = (date: Date) => {
	const now = new Date();
	const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
	const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

	const intervals: [number, Intl.RelativeTimeFormatUnit][] = [
		[60, "second"],
		[60, "minute"],
		[24, "hour"],
		[7, "day"],
		[4.34524, "week"],
		[12, "month"],
		[Number.POSITIVE_INFINITY, "year"],
	];

	let duration = seconds;
	for (const [divisor, unit] of intervals) {
		if (Math.abs(duration) < divisor) {
			return rtf.format(-Math.floor(duration), unit);
		}
		duration /= divisor;
	}
	return rtf.format(0, "second");
};
