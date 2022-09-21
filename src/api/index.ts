import express from 'express';
import Routes from '../helpers/Routes.helper';

import MessageResponse from '../interfaces/MessageResponse';
import todos from './todos/todos.routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use(Routes.TODOS, todos);

export default router;
