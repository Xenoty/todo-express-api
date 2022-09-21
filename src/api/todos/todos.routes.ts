import { Router, Response, Request } from 'express';
import { TodoContainer } from './todos.model';

const router = Router();
router.get('/', (req: Request, res: Response<TodoContainer[]>) => {
  res.json([
    {
      name: 'Todo List 1',
      todos: [
        {
          name: 'Todo 1',
          completed: false,
          date_completed: null,
          date_created: Date.now(),
          date_updated: Date.now(),
          deleted: false,
        },
      ],
      completed: false,
      date_created: Date.now(),
      date_updated: Date.now(),
      date_completed: null,
      deleted: false,
    },
  ]);
});

export default router;
