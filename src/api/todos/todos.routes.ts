import { Router, Response, Request } from 'express';
import { unixTimeStampInSeconds } from '../../helpers/dateTimeUtility';
import { ListTodos } from './todos.model';

const router = Router();

router.get('/', (req: Request, res: Response<ListTodos[]>) => {
  res.json([
    {
      id: '1',
      name: 'Todo List 1',
      todos: [
        {
          id: '1',
          name: 'Todo 1',
          completed: false,
          date_created: unixTimeStampInSeconds(),
          date_completed: 0,
        },
      ],
      completed: false,
      date_created: unixTimeStampInSeconds(),
      date_completed: 0,
    },
  ]);
});

export default router;
