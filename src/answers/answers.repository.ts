import { Repository, EntityRepository } from 'typeorm';
import { Answer } from 'src/entities/answers.entity';

@EntityRepository(Answer)
export class AnswersRepository extends Repository<Answer> {
    async createAnswers(answers) {
        await this.save(answers);

        return answers;
    }
}
