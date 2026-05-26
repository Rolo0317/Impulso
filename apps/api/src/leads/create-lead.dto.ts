import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateLeadDto {
  @IsString()
  @MinLength(2)
  name!: string;

  @IsString()
  @MinLength(7)
  phone!: string;

  @IsString()
  @IsNotEmpty()
  budgetRange!: string;

  @IsString()
  @IsNotEmpty()
  purchaseTimeline!: string;

  @IsOptional()
  @IsString()
  @IsIn(["web", "whatsapp", "referral", "campaign"])
  source: "web" | "whatsapp" | "referral" | "campaign" = "web";
}
