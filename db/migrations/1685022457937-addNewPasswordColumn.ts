import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewPasswordColumn1685022457937 implements MigrationInterface {
    name = 'AddNewPasswordColumn1685022457937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
