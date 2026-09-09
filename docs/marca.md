# Marca Freediving Litoral

Definido a partir de los 3 isotipos compartidos por Victor (2026-09-06). Los colores son aproximaciones visuales tomadas de esas imágenes — reemplazar por los códigos exactos si el diseñador del logo los tiene.

## Isotipo

Raya (manta) con líneas de estilo maorí/polinesio, dentro de la cual se recorta la silueta de un buzo libre en apnea ascendiendo. Debajo, dos trazos de ola. Las iniciales "F" y "L" aparecen a los costados, y el wordmark "FREEDIVING LITORAL" en versalitas espaciadas.

### Archivos (`public/images/brand/`)

- `logo-badge-navy.png` — insignia sólida navy (círculo relleno, isotipo en blanco). Usada como base del favicon y en el footer (fondo oscuro).
- `logo-icon-navy.png` — el mismo isotipo en contorno navy, recortado sin el texto "FREEDIVING LITORAL" (crop programático del archivo de abajo). Usado en el header junto al wordmark tipográfico.
- `logo-outline-navy.webp` — isotipo en contorno navy + wordmark, anillo exterior degradé navy → celeste. Lockup completo, vertical.
- `logo-outline-oval.webp` — variante del anterior, proporción más ovalada. Uso decorativo alternativo.

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

- Header con fondo blanco, ícono navy (`logo-icon-navy.png`) + wordmark tipográfico en Cinzel.
- Footer en navy sólido con la insignia (`logo-badge-navy.png`), autocontenida y legible sobre fondo oscuro.
- Favicon generado a partir de `logo-badge-navy.png` (`public/favicon-32.png`, `public/favicon-180.png`).
- Fondo general blanco, secciones alternan blanco / `--color-blue-100` / `--color-navy-900` para dar ritmo (inspirado en trainfreediving.com).

## Diseño de la home (2026-09-09)

Rediseñada tomando como referencia [trainfreediving.com](https://www.trainfreediving.com/), adaptada a nuestra identidad (no clon 1:1):

- `Hero` — foto full-bleed (placeholder) + título + CTA.
- `WelcomeSection` — collage de fotos + formas decorativas SVG (onda, círculo) sobre fondo celeste pálido.
- `ProcessSteps` — acordeón "Iniciación / Entrenamiento / Certificación".
- `FeatureGrid` — disciplinas (Estática, Dinámica, Profundidad) en banda navy.
- `BlogPreview` — últimos posts del content collection.

Todas las fotos son **placeholders** (`PhotoPlaceholder.astro`, cajas con degradé + ícono) hasta que se suban fotos reales — ver `public/images/brand/README.md` y `docs/marca.md` pendientes.

## Pendiente

- Subir fotografía real (reemplaza los `PhotoPlaceholder`).
- Confirmar tipografías y códigos de color exactos.
- Revisar el PDF `docs/PROPUESTA DE PROYECTO Apnea PRC_.pdf` (apareció en el repo sin que se discutiera su contenido en la conversación — confirmar con Victor si es relevante al proyecto).
