import * as z from 'zod';

export const BaseObject = z.object({
  date_created: z.number().optional().default(Date.now()),
  date_updated: z.number().optional().default(Date.now()),
  deleted: z.boolean().optional().default(false),
});

export const Todo = z
  .object({
    name: z.string().trim().max(150).min(1),
    completed: z.boolean().optional().default(false),
    date_completed: z.number().optional().nullable().default(null),
  })
  .merge(BaseObject);

export const TodoContainer = z
  .object({
    name: z.string().trim().max(150).min(1),
    todos: z.array(Todo).optional().default([]),
    completed: z.boolean().optional().default(false),
    date_completed: z.number().optional().nullable().default(null),
  })
  .merge(BaseObject);

export type Todo = z.infer<typeof Todo>;
export type TodoContainer = z.infer<typeof TodoContainer>;
