import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../category/category.entity.js";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'double precision' })
  price: number;

  @Column({ type: 'integer', default: 0 })
  stock: number;

  @Column({ default: true })
  is_show: boolean;

  @Column({ type: 'integer' }) //внешний ключ на категорию 
  category_id: number;

  //одна Category -> много Product -- один Product -> одна Category
  @ManyToOne(() => Category, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
