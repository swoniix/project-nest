import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProduct1790873719696 implements MigrationInterface {
    name = 'CreateProduct1790873719696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "description" text, "price" double precision NOT NULL, "stock" integer NOT NULL DEFAULT '0', "is_show" boolean NOT NULL DEFAULT true, "category_id" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password_hash"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password_hash" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fullname" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fullname" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password_hash"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password_hash" character varying(5) NOT NULL`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
