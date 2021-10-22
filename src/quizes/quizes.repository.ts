import { EntityRepository, Repository } from 'typeorm';
import { Quiz } from '../entities/quizes.entity';

@EntityRepository(Quiz)
export class QuizesRepository extends Repository<Quiz> {}
