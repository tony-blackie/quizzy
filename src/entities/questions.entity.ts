import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { Answer } from './answers.entity';
import { Quiz } from './quizes.entity';

@Entity()
export class Question {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz: Quiz;

    @OneToMany(() => Answer, (answer) => answer.question)
    answers: Answer[];
}
