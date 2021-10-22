import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { QuizesRepository } from './quizes.repository';
import { QuestionsRepository } from '../questions/questions.repository';
import { AnswersRepository } from '../answers/answers.repository';
import { Answer } from '../entities/answers.entity';
import { Question } from 'src/entities/questions.entity';
import { Quiz } from 'src/entities/quizes.entity';

@Injectable()
export class QuizesService {
    constructor(
        @InjectRepository(QuizesRepository)
        private quizesRepository: QuizesRepository,
        @InjectRepository(AnswersRepository)
        private answersRepository: AnswersRepository,
        @InjectRepository(QuestionsRepository)
        private questionsRepository: QuestionsRepository,
    ) {}

    async setQuizes() {
        const Answer1 = new Answer();
        Answer1.text = 'Answer1';
        const Answer2 = new Answer();
        Answer2.text = 'Answer2';
        const Answer3 = new Answer();
        Answer3.text = 'Answer3';
        const Answer4 = new Answer();
        Answer4.text = 'Answer4';
        await this.answersRepository.save([Answer1, Answer2, Answer3, Answer4]);

        const Question1 = new Question();
        Question1.text = 'Question1';
        Question1.answers = [Answer1, Answer2, Answer3, Answer4];
        const Question2 = new Question();
        Question2.text = 'Question2';
        Question2.answers = [Answer1, Answer2];
        await this.questionsRepository.save([Question1, Question2]);

        const Quiz1 = new Quiz();
        Quiz1.title = 'Quiz1';
        Quiz1.description = 'Quiz1';
        Quiz1.questions = [Question1, Question2];

        return await this.quizesRepository.save([Quiz1]);
    }

    async getQuizes() {
        return await this.quizesRepository.find({
            relations: ['questions', 'questions.answers'],
        });
    }
}
