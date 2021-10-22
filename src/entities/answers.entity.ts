import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Question } from './questions.entity';

@Entity()
export class Answer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @ManyToOne(() => Question, (question) => question.answers)
    question: Question;
}
