export interface UserPayload {
	userId: string;
	email: string;
	role: "user" | "admin";
	iat?: number;
	exp?: number;
}
