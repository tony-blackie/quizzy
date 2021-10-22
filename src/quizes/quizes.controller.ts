import { Controller, Get, Post, Param } from '@nestjs/common';
import { QuizesService } from './quizes.service';

import { Quiz } from '../entities/quizes.entity';

@Controller('quizes')
export class QuizesController {
    private quizesService: QuizesService;

    constructor(quizesService: QuizesService) {
        this.quizesService = quizesService;
    }

    @Get()
    getQuizes(@Param('id') id: string): Promise<Quiz[]> {
        return this.quizesService.getQuizes();
    }

    @Post()
    setQuizes() {
        return this.quizesService.setQuizes();
    }
}
