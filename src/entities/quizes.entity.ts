import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Question } from './questions.entity';

@Entity()
export class Quiz {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(() => Question, (question) => question.quiz)
    questions: Question[];
}
