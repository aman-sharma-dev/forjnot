export const isEmptyObject = (obj: object) =>
	Object.keys(obj).length === 0 && obj.constructor === Object;

export const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const pick = <T extends object, K extends keyof T>(
	obj: T,
	keys: K[],
): Pick<T, K> => {
	const result = {} as Pick<T, K>;
	for (const key of keys) {
		if (key in obj) result[key] = obj[key];
	}
	return result;
};
