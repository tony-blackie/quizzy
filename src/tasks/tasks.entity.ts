import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

enum TaskStatus {
    NOT_STARTED,
    IN_PROGRESS,
    DONE,
}

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}
