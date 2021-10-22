import { Module } from '@nestjs/common';
import { QuizesModule } from './quizes/quizes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { Quiz } from './entities/quizes.entity';
import { Question } from './entities/questions.entity';
import { Answer } from './entities/answers.entity';

@Module({
    imports: [
        QuizesModule,
        QuestionsModule,
        AnswersModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'quiz',
            entities: [Quiz, Question, Answer],
            synchronize: true,
        }),
    ],
})
export class AppModule {}
