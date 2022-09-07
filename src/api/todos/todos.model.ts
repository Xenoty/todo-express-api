import * as z from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { unixTimeStampInSeconds } from '../../helpers/dateTimeUtility';

export const Todo = z.object({
  id: z.string().default(uuidv4()),
  name: z.string(),
  completed: z.boolean().default(false),
  date_created: z.number().default(unixTimeStampInSeconds()),
  date_completed: z.number(),
});

export const ListTodos = z.object({
  id: z.string().default(uuidv4()),
  name: z.string(),
  todos: z.array(Todo),
  completed: z.boolean().default(false),
  date_created: z.number().default(unixTimeStampInSeconds()),
  date_completed: z.number(),
});

export type Todo = z.infer<typeof Todo>;
export type ListTodos = z.infer<typeof ListTodos>;
