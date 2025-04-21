export interface ApiResponse<T> {
	success: boolean;
	statusCode: number;
	message: string;
	data?: T;
	error?: string;
}

export interface PaginatedResponse<T> {
	success: boolean;
	statusCode: number;
	message: string;
	data: {
		items: T[];
		total: number;
		page: number;
		limit: number;
	};
	error?: string;
}
