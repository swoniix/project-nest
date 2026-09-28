import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  Min
} from 'class-validator';

export class CategoryCreateReqDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title must not be empty' })
  @Length(5, 20, {
    message: 'Title must contain between 5 and 20 characters',
  })
  title: string;

  @IsOptional()
  @IsString({ message: 'Image must be a string' })
  image?: string;

  @IsBoolean({ message: 'is_show must be true or false' })
  is_show: boolean;

  @IsString({ message: 'Slug must be a string' })
  @IsNotEmpty({ message: 'Slug must not be empty' })
  @Matches(/^[a-zA-Z0-9_-]+$/, {
    message: 'Slug may contain only Latin letters, numbers, "-" and "_"',
  })
  slug: string;

  @IsOptional()
  @IsInt({ message: 'parent_id must be an integer' })
  @Min(1, { message: 'parent_id must be greater than 0' })
  parent_id: number | null;
}