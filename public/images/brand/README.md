# Archivos de marca pendientes

Subir acá los archivos originales del logo (ver `docs/marca.md` para el detalle de cada variante):

- `logo-badge-navy.png` (o `.svg`) — insignia sólida navy, usar como base del favicon.
- `logo-outline-navy.svg` (o `.png`) — contorno navy sobre blanco, variante principal del header.
- `logo-gradient.png` — anillo degradé, uso decorativo.

Preferir SVG cuando esté disponible (escala sin pérdida). Una vez subidos, actualizar el TODO en `src/layouts/BaseLayout.astro` para usar `logo-outline-navy` en el header, y regenerar el favicon a partir de `logo-badge-navy`.
