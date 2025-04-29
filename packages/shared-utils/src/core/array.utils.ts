export const uniqueArray = <T>(arr: T[]): T[] => Array.from(new Set(arr));

export const chunkArray = <T>(arr: T[], size: number): T[][] => {
	const result: T[][] = [];
	for (let i = 0; i < arr.length; i += size)
		result.push(arr.slice(i, i + size));
	return result;
};

export const groupBy = <T, K extends keyof T>(
	arr: T[],
	key: (item: T) => K,
): Record<K, T[]> =>
	arr.reduce(
		(acc, item) => {
			const group = key(item);
			if (!acc[group]) acc[group] = [];
			acc[group].push(item);
			return acc;
		},
		{} as Record<K, T[]>,
	);
