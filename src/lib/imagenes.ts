import type { ImageMetadata } from "astro";

const imagenes = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,JPG,png,webp}"
);

/** Carga una imagen de src/assets/images a partir de su ruta relativa, p. ej. "gallery/equipo/foto.jpg". */
export async function cargarImagen(src: string): Promise<ImageMetadata> {
  const cargar = imagenes[`/src/assets/images/${src}`];
  if (!cargar) throw new Error(`Imagen no encontrada en src/assets/images: ${src}`);
  return (await cargar()).default;
}
