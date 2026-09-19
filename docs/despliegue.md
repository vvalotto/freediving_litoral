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

| Variable   | GitHub Pages actual (por defecto)      | Dominio propio                     |
|------------|----------------------------------------|------------------------------------|
| `SITE_URL` | `https://vvalotto.github.io`           | `https://freedivinglitoral.com.ar` |
| `BASE_PATH`| `/freediving_litoral/`                 | `/`                                |

Sin variables definidas se usa el valor por defecto, por lo que el sitio actual sigue funcionando.
Build local con dominio propio: `SITE_URL=https://freedivinglitoral.com.ar BASE_PATH=/ npm run build`.

## Puesta en producción con dominio propio (freedivinglitoral.com.ar)
Solo se hace cuando el sitio esté listo.

1. **Registrar el dominio** en nic.ar (requiere CUIT/CUIL y cuenta AFIP/ARCA). Registrarlo a nombre de la escuela.
2. **Cloudflare (plan gratuito):** agregar el dominio y copiar los nameservers que indique.
3. **En nic.ar:** delegar el dominio a esos nameservers.
4. **Registros DNS en Cloudflare** (proxy desactivado, "solo DNS", hasta validar HTTPS):
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `vvalotto.github.io`
5. **Repositorio:**
   - Crear el archivo `public/CNAME` con el contenido `freedivinglitoral.com.ar`.
   - Definir las variables `SITE_URL` y `BASE_PATH` de la tabla.
6. **GitHub → Settings → Pages:** Custom domain = `freedivinglitoral.com.ar`; activar *Enforce HTTPS*
   cuando el certificado esté disponible (puede tardar hasta unas horas).
7. Push (o *Run workflow*) y verificar `https://freedivinglitoral.com.ar`, la redirección de `www`,
   `/sitemap-index.xml` y `/robots.txt`.

## Checklist previo a publicar
- [ ] Contenido y fotos revisados.
- [ ] Datos de contacto verificados (Instagram, correo, WhatsApp).
- [ ] Build con dominio propio sin errores.
- [ ] Alta del sitio en Google Search Console con el sitemap.
