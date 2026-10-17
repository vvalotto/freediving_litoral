# Procedimiento de despliegue

Sitio estático (Astro) publicado en GitHub Pages. Cada push a `main` compila y publica automáticamente
(`.github/workflows/deploy.yml`).

## Flujo de cambios
1. Crear un issue en GitHub describiendo el cambio.
2. Implementar y commitear con `Closes #N`.
3. Push a `main` → Actions compila y despliega.
4. Verificar el sitio en vivo (`gh run list` para ver el estado).

**Rollback:** `git revert <commit>` y push; se vuelve a desplegar el estado anterior.

## Configuración por variables
`astro.config.mjs` lee dos variables de repositorio (Settings → Secrets and variables → Actions → Variables):

| Variable   | Valor actual (dominio propio)   | Sin variables (github.io)       |
|------------|---------------------------------|---------------------------------|
| `SITE_URL` | `https://freedivinglitoral.ar`  | `https://vvalotto.github.io`    |
| `BASE_PATH`| `/`                             | `/freediving_litoral/`          |

Build local igual a producción: `SITE_URL=https://freedivinglitoral.ar BASE_PATH=/ npm run build`.
Sin variables, el build apunta a la URL de github.io (útil para pruebas).

## Dominio propio: freedivinglitoral.ar (en producción desde 17/10/2026)
- **Registro:** NIC Argentina, a nombre de Raúl Urquiza. **Vence el 03/10/2027**: renovar antes.
- **DNS:** Cloudflare (plan Free), cuenta de Victor. Delegación en NIC.ar a
  `carlos.ns.cloudflare.com` y `keira.ns.cloudflare.com`.
- **Registros DNS** (todos en *DNS only*, nube gris; con proxy GitHub no puede emitir el certificado):
  - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `CNAME` `www` → `vvalotto.github.io`
- **Repositorio:** `public/CNAME` con `freedivinglitoral.ar` y las variables de la tabla.
- **GitHub → Settings → Pages:** Custom domain = `freedivinglitoral.ar`, *Enforce HTTPS* activado.
- La URL vieja `https://vvalotto.github.io/freediving_litoral/` redirige al dominio propio.

Seguimiento del lanzamiento: issue #16.

## Checklist previo a publicar
- [ ] Contenido y fotos revisados.
- [ ] Datos de contacto verificados (Instagram, correo, WhatsApp).
- [ ] Build con dominio propio sin errores.
- [ ] Alta del sitio en Google Search Console con el sitemap.
