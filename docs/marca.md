# Marca Freediving Litoral

Definido a partir de los 3 isotipos compartidos por Victor (2026-09-06). Los colores son aproximaciones visuales tomadas de esas imágenes — reemplazar por los códigos exactos si el diseñador del logo los tiene.

## Isotipo

Raya (manta) con líneas de estilo maorí/polinesio, dentro de la cual se recorta la silueta de un buzo libre en apnea ascendiendo. Debajo, dos trazos de ola. Las iniciales "F" y "L" aparecen a los costados, y el wordmark "FREEDIVING LITORAL" en versalitas espaciadas.

### Variantes

1. **Insignia sólida navy** — círculo azul marino relleno, isotipo en blanco por dentro. Buena para favicon / usos donde se necesita alto contraste en tamaño chico.
2. **Contorno navy sobre blanco** — solo líneas azul marino, sin relleno. **Variante principal para el header del sitio** (fondo claro).
3. **Anillo degradé (navy → celeste)** — mismo isotipo en contorno, con el anillo exterior en degradé. Uso decorativo (hero, redes sociales, merchandising).

Archivos originales: pendientes de subir a `public/images/brand/` (ver `public/images/brand/README.md`).

## Paleta de color

| Token | Hex aprox. | Uso |
|---|---|---|
| `--color-navy-900` | `#0B2545` | Color principal de marca: líneas del isotipo, texto, footer |
| `--color-navy-700` | `#163A5E` | Tono intermedio (degradé, hover states) |
| `--color-blue-400` | `#4FA3D1` | Acento celeste (degradé, links, detalles) |
| `--color-blue-100` | `#DCEDF7` | Fondo claro / texto sobre navy |
| `--color-white` | `#FFFFFF` | Fondo base, negativo del isotipo |

Definidos como CSS custom properties en [`src/styles/global.css`](../src/styles/global.css).

## Tipografía

- **Wordmark / títulos**: [Cinzel](https://fonts.google.com/specimen/Cinzel) — serif clásica de trazo fino y versalitas ancladas, coherente con el letter-spacing del wordmark del logo.
- **Texto de cuerpo / UI**: [Jost](https://fonts.google.com/specimen/Jost) — sans-serif geométrica, limpia, buena legibilidad en pantalla.

Ambas cargadas vía Google Fonts en `src/layouts/BaseLayout.astro`. **Pendiente de confirmación por Victor** — son una propuesta a partir del estilo visual del logo, no una decisión cerrada.

## Aplicación en el sitio

- Header con fondo blanco y wordmark/isotipo en navy (variante 2).
- Footer en navy sólido con texto celeste claro (variante 1, alto contraste).
- Fondo general blanco, tipografía navy — coherente con la variante de contorno sobre blanco.

## Pendiente

- Subir archivos originales del logo (SVG/PNG alta resolución) a `public/images/brand/`.
- Reemplazar el wordmark de texto en `BaseLayout.astro` por el isotipo real (hay un TODO marcado en el archivo).
- Confirmar tipografías y códigos de color exactos.
- Definir favicon a partir de la variante 1 (insignia sólida).
