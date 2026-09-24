import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cursos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cursos" }),
  schema: z.object({
    titulo: z.string(),
    categoria: z.enum(["certificacion", "entrenamiento"]).default("certificacion"),
    certificacion: z.string().optional(),
    nivel: z.string().optional(),
    duracion: z.string().optional(),
    resumen: z.string(),
    edadMinima: z.number().optional(),
    prerrequisito: z.string().optional(),
    teoria: z.object({ clases: z.string(), temas: z.array(z.string()) }).optional(),
    practica: z.object({ clases: z.string(), temas: z.array(z.string()) }).optional(),
    marcas: z.array(z.object({ sigla: z.string(), prueba: z.string(), valor: z.string() })).optional(),
    profundidadMaxima: z.string().optional(),
    aguasAbiertas: z.string().optional(),
    destacados: z.array(z.string()).optional(),
    introduccion: z.array(z.string()).optional(),
    secciones: z.array(z.object({ titulo: z.string(), parrafos: z.array(z.string()) })).optional(),
    requisitos: z.string().optional(),
    fotoPortada: z.string().optional(),
    fotoPortadaAlt: z.string().optional(),
    orden: z.number().optional(),
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
    orden: z.number().optional(),
  }),
});

export const collections = { cursos, disciplinas };
