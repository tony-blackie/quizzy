import { Module } from '@nestjs/common';
import { QuizesController } from './quizes.controller';
import { QuizesService } from './quizes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizesRepository } from './quizes.repository';
import { AnswersRepository } from 'src/answers/answers.repository';
import { QuestionsRepository } from 'src/questions/questions.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            QuizesRepository,
            AnswersRepository,
            QuestionsRepository,
        ]),
    ],
    controllers: [QuizesController],
    providers: [QuizesService],
})
export class QuizesModule {}
