import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn() //первиний ключ 1 поле
  id: number;
  @Column({ unique: true, length: 30 })
  email: string;
  @Column({ nullable: false, length: 5 })
  password_hash: string;
  @Column({ nullable: false, length: 2 })
  fullname: string;
  @Column({ default: false })
  is_block: boolean;
}
