# Fase 4 — Medición, Search Console y eventos para LulabTech

Esta fase deja el proyecto listo para conectar herramientas reales de medición sin inventar IDs. El sitio ya puede recibir variables de entorno en Vercel para Google Analytics 4, Google Tag Manager, Google Search Console y Meta Pixel.

## 1. Variables que debes configurar en Vercel

Entra al proyecto de LulabTech en Vercel y ve a:

**Project Settings → Environment Variables**

Agrega estas variables en **Production**. Si quieres probar también en previews, márcalas también para **Preview**.

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=CODIGO_DE_VERIFICACION_GOOGLE
NEXT_PUBLIC_META_PIXEL_ID=1475809483955480
```

Después de guardar o cambiar variables en Vercel, debes hacer un redeploy:

**Deployments → los tres puntos del último deployment → Redeploy**

Si no haces redeploy, Next.js puede seguir usando las variables anteriores.

---

## 2. Google Analytics 4 — qué crear y qué pegar

Objetivo: medir visitas, páginas vistas, clics a WhatsApp, clics a email, clics a servicios y formularios.

Pasos:

1. Entra a `https://analytics.google.com/`.
2. Presiona **Admin**.
3. En la columna de cuenta, crea o selecciona la cuenta de LulabTech.
4. Presiona **Create / Crear** y luego **Property / Propiedad**.
5. Nombre sugerido: `LulabTech Web`.
6. Zona horaria: `Panamá`.
7. Moneda: `USD`.
8. Crea un **Web data stream / Flujo web**.
9. URL del sitio: `https://www.lulabtech.com`.
10. Nombre del stream: `LulabTech sitio web`.
11. Copia el **Measurement ID**. Debe tener formato parecido a `G-XXXXXXXXXX`.
12. En Vercel pega ese valor en:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Qué revisar después:

- En GA4 entra a **Reports → Realtime**.
- Abre `https://www.lulabtech.com` en otra pestaña.
- Debe aparecer al menos 1 usuario activo.
- Haz clic en WhatsApp y revisa si aparecen eventos como `click_whatsapp_header`, `click_whatsapp_hero` o `click_whatsapp_top_banner`.

---

## 3. Google Tag Manager — cuándo usarlo y qué pegar

Objetivo: tener un contenedor para instalar etiquetas futuras sin tocar código cada vez.

Pasos:

1. Entra a `https://tagmanager.google.com/`.
2. Presiona **Create Account / Crear cuenta**.
3. Nombre de cuenta: `LulabTech`.
4. País: `Panama`.
5. Nombre del contenedor: `www.lulabtech.com`.
6. Plataforma: **Web**.
7. Presiona **Create / Crear** y acepta términos.
8. Copia el ID del contenedor. Debe tener formato `GTM-XXXXXXX`.
9. En Vercel pega ese valor en:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Importante:

- El código ya instala GTM si existe `NEXT_PUBLIC_GTM_ID`.
- No tienes que copiar manualmente los scripts de GTM en el código.
- Después de configurar el ID en Vercel, haz redeploy.

Recomendación dentro de GTM:

1. Abre el contenedor.
2. Ve a **Tags → New**.
3. Selecciona **Google tag**.
4. Pega el mismo ID de GA4 `G-XXXXXXXXXX`.
5. Trigger: **Initialization - All Pages** o **All Pages**.
6. Guarda.
7. Presiona **Submit / Publicar**.

Si decides usar GA4 directo y GTM al mismo tiempo, evita duplicar pageviews. Lo más limpio es usar GTM como centro principal y luego decidir si se deja GA4 directo o solo por GTM.

---

## 4. Google Search Console — método recomendado

Objetivo: que Google reconozca el dominio, lea el sitemap y puedas pedir indexación.

Método recomendado: **Domain property por DNS**.

Pasos:

1. Entra a `https://search.google.com/search-console/`.
2. Presiona **Add property / Agregar propiedad**.
3. Elige **Domain / Dominio**.
4. Escribe solo: `lulabtech.com`.
5. Google te dará un registro **TXT**.
6. Copia el TXT completo.
7. Ve al proveedor DNS del dominio, por ejemplo donde esté administrado el DNS.
8. Agrega un registro:
   - Tipo: `TXT`
   - Host/Name: `@`
   - Valor: el TXT que te dio Google
9. Guarda.
10. Regresa a Search Console y presiona **Verify / Verificar**.

Luego agrega el sitemap:

1. En Search Console entra a la propiedad `lulabtech.com`.
2. Ve a **Sitemaps**.
3. En “Add a new sitemap”, escribe:

```txt
sitemap.xml
```

4. Presiona **Submit / Enviar**.

Sitemap real del sitio:

```txt
https://www.lulabtech.com/sitemap.xml
```

Opción alternativa si no puedes tocar DNS:

1. Crea una propiedad tipo **URL prefix** con `https://www.lulabtech.com/`.
2. Elige verificación por **HTML tag**.
3. Google dará algo como:

```html
<meta name="google-site-verification" content="ABC123..." />
```

4. Copia solo el valor dentro de `content`, no todo el meta tag.
5. Pégalo en Vercel así:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=ABC123...
```

6. Haz redeploy.
7. Vuelve a Search Console y presiona **Verify / Verificar**.

---

## 5. Meta Pixel

El proyecto ya tenía este Pixel ID en el código:

```env
NEXT_PUBLIC_META_PIXEL_ID=1475809483955480
```

Se dejó como variable para que sea fácil cambiarlo sin tocar código.

Si Meta entrega otro Pixel ID:

1. Entra a Meta Business Suite / Events Manager.
2. Abre el dataset o Pixel correcto.
3. Copia el Pixel ID numérico.
4. En Vercel cambia:

```env
NEXT_PUBLIC_META_PIXEL_ID=NUEVO_PIXEL_ID
```

5. Haz redeploy.

Eventos enviados a Meta:

- `PageView`
- Eventos personalizados como `click_whatsapp_header`, `click_whatsapp_hero`, `click_email`, `submit_contact_form`.
- Eventos estándar útiles: `Contact`, `ViewContent` y `Lead` según la acción.

---

## 6. Eventos disponibles

El helper `lib/tracking.ts` envía eventos a:

- GA4 por `gtag`, si existe `NEXT_PUBLIC_GA_ID`.
- GTM por `dataLayer`, si existe `NEXT_PUBLIC_GTM_ID`.
- Meta Pixel por `fbq`, si existe `NEXT_PUBLIC_META_PIXEL_ID`.

Eventos principales:

```txt
click_whatsapp_header
click_whatsapp_hero
click_whatsapp_footer
click_whatsapp_top_banner
click_email
click_formulario_contacto
click_servicio_landing_page
click_servicio_web_corporativa
click_servicio_ecommerce
click_servicio_software
click_portafolio
submit_contact_form
spa_page_view
```

Cada evento incluye contexto de página:

```txt
page_title
page_path
page_location
source / service / project_type cuando aplica
```

---

## 7. Cómo probar después del deploy

Checklist rápido:

1. Abre la web en incógnito: `https://www.lulabtech.com`.
2. En GA4 entra a **Realtime** y confirma visita activa.
3. Haz clic en el banner superior de WhatsApp.
4. Revisa si aparece `click_whatsapp_top_banner`.
5. Haz clic en menú, proyectos y servicios.
6. Envía una prueba del formulario con un correo de prueba.
7. Revisa `submit_contact_form` en eventos.
8. En Search Console envía el sitemap.
9. En Search Console usa **URL Inspection / Inspección de URL** para:
   - `https://www.lulabtech.com/`
   - `https://www.lulabtech.com/landing-pages-panama`
   - `https://www.lulabtech.com/software-a-medida-panama`
10. Presiona **Request indexing / Solicitar indexación** en las URLs principales.

---

## 8. Qué no se debe hacer

- No inventar IDs de GA4, GTM ni Search Console.
- No pegar scripts manuales en varios componentes si ya están las variables.
- No activar GA4 directo y Google tag por GTM sin revisar duplicación.
- No cambiar el Pixel de Meta si no estás seguro de cuál Business Manager es el oficial.
- No borrar el sitemap ni robots.

