import { EntityRepository, Repository } from 'typeorm';
import { Question } from '../entities/questions.entity';

@EntityRepository(Question)
export class QuestionsRepository extends Repository<Question> {
    async createQuestion() {
        const question = this.create({
            text: '123',
        });

        await this.save(question);

        return question;
    }

    async createQuestions(questions) {
        // const question = this.create({
        //     text: '123',
        // });

        await this.save(questions);

        return questions;
    }
}
