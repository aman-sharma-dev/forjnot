import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Transform } from "class-transformer";

export class RegisterDto {
	@IsNotEmpty({ message: "First name is required" })
	@Transform(({ value }) => value?.trim())
	firstName!: string;

	@IsNotEmpty({ message: "Last name is required" })
	@Transform(({ value }) => value?.trim())
	lastName!: string;

	@IsEmail({}, { message: "Invalid email address" })
	@Transform(({ value }) => value?.toLowerCase().trim())
	email!: string;

	@MinLength(6, { message: "Password must be at least 6 characters long" })
	password!: string;
}
