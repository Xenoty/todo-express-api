import * as z from 'zod';

export const BaseObject = z.object({
  date_created: z.number().default(Date.now()),
  date_updated: z.number().default(Date.now()),
  deleted: z.boolean().default(false),
});

export const Todo = z
  .object({
    name: z.string().trim().max(150).min(1),
    completed: z.boolean().default(false),
    date_completed: z.number().nullable().default(null),
  })
  .merge(BaseObject);

export const TodoContainer = z
  .object({
    name: z.string().trim().max(150).min(1),
    todos: z.array(Todo),
    completed: z.boolean().default(false),
    date_completed: z.number().nullable().default(null),
  })
  .merge(BaseObject);

export type Todo = z.infer<typeof Todo>;
export type TodoContainer = z.infer<typeof TodoContainer>;
