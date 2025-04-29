import {
	Injectable,
	type NestInterceptor,
	type ExecutionContext,
	type CallHandler,
} from "@nestjs/common";
import { type Observable, throwError } from "rxjs";
import type { ApiResponse } from "../../../shared-types/src";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class ResponseInterceptor<T>
	implements NestInterceptor<T, ApiResponse<T | null>>
{
	intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Observable<ApiResponse<T | null>> {
		return next.handle().pipe(
			map((data) => {
				if (data === null || data === undefined) {
					return {
						success: false,
						statusCode: 404,
						message: "No data found",
						data: null,
					};
				}

				return {
					success: true,
					statusCode: 200,
					message: "Request successful",
					data: data ?? null,
				};
			}),
			catchError((error) => {
				return throwError(() => ({
					success: false,
					statusCode: error?.statusCode ?? 500,
					message: error?.message ?? "Internal Server Error",
					error: error?.response ?? "An unexpected error occurred",
				}));
			}),
		);
	}
}
