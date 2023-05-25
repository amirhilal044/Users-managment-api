import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() //auto incrementing id
    id:number

    @Column()
    firstName: String
    
    @Column()
    lastName: String

    @Column()
    dob: Date

    @Column()
    jobID: number

    @Column()
    password: string
}
