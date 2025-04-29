import { IsEmail, IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";

export class LoginDto {
	@IsEmail({}, { message: "Invalid email address" })
	@Transform(({ value }) => value?.toLowerCase().trim())
	email!: string;

	@IsNotEmpty({ message: "Password is required" })
	password!: string;
}
