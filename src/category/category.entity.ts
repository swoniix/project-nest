import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity() //decorator / @UNIQUE([]) - опред поля уникальные
export class Category {
  //поля майбут таблиці
  @PrimaryGeneratedColumn() //первиний ключ 1 поле
  id: number;

  @Column({ length: 20, nullable: false }) // 2 поле
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ unique: true, length: 30 }) //ток рядок поэтому нету типа varchar
  slug: string;

  @Column({ type: 'varchar', nullable: true }) //выбор 
  image: string | null;

  @Column({ default: true })
  is_show: boolean;

  @Column({ type: 'integer', nullable: true })
  parent_id: number | null; //link to category 
}