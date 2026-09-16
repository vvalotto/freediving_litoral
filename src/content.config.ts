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

const disciplinas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/disciplinas" }),
  schema: z.object({
    titulo: z.string(),
    sigla: z.string(),
    resumen: z.string(),
    destacados: z.array(z.string()),
    introduccion: z.array(z.string()),
    secciones: z.array(z.object({ titulo: z.string(), parrafos: z.array(z.string()) })),
    fotoPortada: z.string(),
    fotoPortadaAlt: z.string(),
    fotos: z.array(z.object({ archivo: z.string(), alt: z.string() })),
    orden: z.number().optional(),
  }),
});

export const collections = { cursos, blog, disciplinas };
