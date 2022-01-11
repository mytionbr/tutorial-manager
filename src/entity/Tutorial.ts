import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Tutorial {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    published: boolean;

}
