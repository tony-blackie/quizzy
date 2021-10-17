import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    private tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }
}
