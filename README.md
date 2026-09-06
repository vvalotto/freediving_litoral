# Freediving Litoral

Sitio web de la escuela de apnea Freediving Litoral.

## Stack

- [Astro](https://astro.build) — generador de sitio estático, contenido en Markdown.
- Deploy inicial a **GitHub Pages** (ver `.github/workflows/deploy.yml`). Pensado para migrar a hosting propio más adelante sin cambiar la estructura del contenido.

## Estructura

```
src/
  content/
    cursos/    # un .md por curso (título, nivel, duración, resumen)
    blog/      # un .md por artículo del blog
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    cursos.astro
    nosotros.astro
    galeria.astro
    reservas.astro
    contacto.astro
    blog/
      index.astro
      [slug].astro
  styles/
    global.css
public/
  images/      # assets estáticos (fotos, logo, etc.)
```

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

El workflow de GitHub Actions (`.github/workflows/deploy.yml`) construye y publica en GitHub Pages en cada push a `main`. Hay que habilitar Pages en la configuración del repo (Settings → Pages → Source: GitHub Actions).

`astro.config.mjs` define `site` y `base` para el project site de GitHub Pages (`https://vvalotto.github.io/freediving_litoral`). Al migrar a hosting propio, ajustar/quitar `base`.

## Pendiente

- Contenido real de todas las secciones (hoy son placeholders).
- Definir solución de reservas/inscripción online (GitHub Pages no soporta backend propio: evaluar Google Forms, Calendly, o un servicio externo).
- Fotos/videos para la galería.
