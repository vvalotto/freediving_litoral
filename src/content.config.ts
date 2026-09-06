import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cursos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cursos" }),
  schema: z.object({
    titulo: z.string(),
    nivel: z.string().optional(),
    duracion: z.string().optional(),
    resumen: z.string(),
    orden: z.number().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    resumen: z.string(),
    autor: z.string().optional(),
  }),
});

export const collections = { cursos, blog };
