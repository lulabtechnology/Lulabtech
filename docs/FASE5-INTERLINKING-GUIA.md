# Fase 5 — Navegación, interlinking y mapa de servicios

Esta fase refuerza la arquitectura SEO interna de LulabTech sin cambiar fuerte el diseño visual.

## Qué se agregó

- Nueva página hub: `/servicios-panama`.
- Enlace principal a “Servicios” desde la navegación hacia el hub.
- Footer reorganizado por categorías de servicios.
- Nueva sección en home: “Mapa de servicios”.
- Activación en home de la sección de rutas por sector y operación.
- Breadcrumb visible en páginas internas de servicio: Inicio → Mapa de servicios → Servicio.
- Breadcrumb JSON-LD actualizado para páginas internas.
- Structured Data de la página hub con `CollectionPage`, `ItemList` y `BreadcrumbList`.
- Sitemap actualizado para incluir `/servicios-panama` con prioridad alta.

## Qué debes hacer después de subir esta fase

1. Subir los archivos modificados al repositorio/GitHub o reemplazarlos en el proyecto según el flujo que uses.
2. Esperar el deploy en Vercel.
3. Entrar a la web y probar estas rutas:
   - `https://www.lulabtech.com/servicios-panama`
   - `https://www.lulabtech.com/landing-pages-panama`
   - `https://www.lulabtech.com/software-a-medida-panama`
   - `https://www.lulabtech.com/proyectos`
4. Confirmar que el menú “Servicios” abre el nuevo hub.
5. Confirmar que el footer muestra servicios agrupados por categoría.
6. En Google Search Console, ir a **Sitemaps** y reenviar:
   - `https://www.lulabtech.com/sitemap.xml`
7. En Search Console, inspeccionar y solicitar indexación de:
   - `https://www.lulabtech.com/servicios-panama`
   - `https://www.lulabtech.com/diseno-web-panama`
   - `https://www.lulabtech.com/software-a-medida-panama`

## Revisión recomendada en Search Console

Después de 24 a 72 horas, revisar:

- Indexación → Páginas.
- Rendimiento → Consultas.
- Rendimiento → Páginas.
- Enlaces → Enlaces internos.

La página `/servicios-panama` debería ayudar a que Google detecte mejor la relación entre los servicios: diseño web, landing pages, webs corporativas, ecommerce, software, POS, reservas, inventario, CRM, logística e industrias.
