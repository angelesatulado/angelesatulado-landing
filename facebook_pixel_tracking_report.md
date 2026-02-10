## Explicación de eventos de Facebook Pixel

### 1. PageView
- **¿Por qué existe?** Este evento es fundamental para cualquier campaña de Meta Ads. Registra cada vez que un usuario visita una página de tu sitio web. Es la base para construir audiencias de retargeting, entender el flujo de navegación y medir el tráfico general. En una SPA (Single Page Application) como Next.js con App Router, es crucial que este evento se dispare no solo en la carga inicial de la página, sino también en cada cambio de ruta interno (navegación entre páginas sin recarga completa), lo cual está manejado por el componente `FacebookPixel.tsx`.

### 2. Lead
- **¿Por qué existe?** El evento `Lead` se dispara cuando un usuario muestra interés en tu oferta y realiza una acción que indica una intención de conversión, pero aún no ha completado la conversión final. En este caso, se ha implementado para cada clic en los botones "Agendar".
- **Diferenciación por `content_name`:** Al diferenciar el origen del clic (ej., `hero_button`, `header_button`, `sticky_cta_button`), podemos:
    - **Optimizar campañas:** Identificar qué llamados a la acción son más efectivos para generar interés.
    - **Personalizar audiencias:** Crear audiencias personalizadas de usuarios que interactuaron con un CTA específico pero no completaron el formulario.
    - **Análisis de embudo:** Entender dónde en la página los usuarios deciden avanzar en el embudo de conversión.

### 3. CompleteRegistration
- **¿Por qué existe?** Este evento marca la finalización exitosa del objetivo principal de la landing page: el envío del formulario de contacto/cita. Es el evento de conversión más importante y se utiliza para:
    - **Medir el ROI:** Determinar el retorno de la inversión de tus campañas de Meta Ads.
    - **Optimización de campañas:** Meta utilizará este evento para encontrar usuarios con mayor probabilidad de registrarse, mejorando la efectividad de tus anuncios.
    - **Reporte de conversiones:** Proporciona datos claros sobre cuántos usuarios completaron el proceso de agenda.

### 4. ViewContent
- **¿Por qué existe?** Este evento se dispara cuando un usuario ve contenido clave en la página, como una sección de servicios, testimonios o un video explicativo. Es más granular que un `PageView` y permite segmentar audiencias basadas en el interés específico por diferentes tipos de contenido.
- **Diferenciación por `content_name` y `content_category`:** Permite identificar exactamente qué contenido fue visto (ej., `content_name: 'Nuestros_Servicios'`, `content_category: 'Servicios'`) y agrupar tipos de contenido.

### 5. Contact
- **¿Por qué existe?** El evento `Contact` registra cuando un usuario interactúa con un método de contacto directo (por ejemplo, haciendo clic en un número de teléfono o un enlace de WhatsApp directo que no es parte del proceso de "Agendar"). Esto es valioso para medir el interés de los usuarios que prefieren la comunicación directa.
- **Diferenciación por `method`:** Permite saber qué método de contacto fue utilizado (ej., `method: 'phone_call'`).

### 6. ScrollDepth (Evento Personalizado)
- **¿Por qué existe?** Este es un evento personalizado que mide el nivel de compromiso del usuario al registrar cuánto se ha desplazado en la página. Un usuario que llega al 75% o 100% de la página está mucho más interesado que uno que solo ve el 25%. Es crucial para:
    - **Calificación de audiencia:** Crear audiencias de retargeting más cualificadas (ej., usuarios que vieron el 75% de la página pero no convirtieron).
    - **Análisis de contenido:** Identificar si el contenido más importante está bien ubicado y si los usuarios lo están viendo.
    - **Optimización de la página:** Sugiere si es necesario ajustar la longitud del contenido o el orden de las secciones.

---

## Recomendaciones para validar el tracking en Meta Events Manager

Para asegurar que tu implementación de Facebook Pixel funciona correctamente, sigue estos pasos utilizando el Meta Events Manager:

1.  **Acceder al Administrador de Eventos:**
    *   Ve a [business.facebook.com/events_manager](https://business.facebook.com/events_manager).
    *   Selecciona tu cuenta publicitaria y tu Pixel de Facebook.

2.  **Usar la herramienta de Prueba de Eventos (Test Events):**
    *   Dentro de tu Pixel, navega a la pestaña "Probar eventos".
    *   Ingresa la URL de tu landing page y haz clic en "Abrir sitio web".
    *   Interactúa con tu sitio: navega entre las secciones, haz clic en los botones "Agendar" y envía el formulario de contacto, desplázate por la página, etc.
    *   Observa en tiempo real cómo los eventos (`PageView`, `Lead`, `CompleteRegistration`, `ViewContent`, `Contact`, `ScrollDepth`) aparecen en el Administrador de Eventos. Verifica que los parámetros como `content_name`, `content_category`, y `method` sean correctos.

3.  **Verificar la pestaña "Visión general":**
    *   Después de realizar las pruebas, revisa la pestaña "Visión general" para ver si los eventos están siendo recibidos y procesados correctamente. Los gráficos y contadores deben mostrar actividad.

4.  **Meta Pixel Helper (Extensión de Chrome):**
    *   Instala la extensión "Meta Pixel Helper" para Chrome.
    *   Navega por tu sitio web y haz clic en el icono de la extensión. Te mostrará qué eventos de Pixel se están disparando en cada página y si hay errores. Esto es excelente para una depuración rápida en el navegador.

5.  **Revisar los datos del último día/hora:**
    *   En la pestaña "Visión general", filtra por "última hora" o "últimas 24 horas" para ver los eventos más recientes y confirmar que se están registrando sin problemas en un entorno real.

---

## Checklist de errores comunes en Next.js 14 (App Router) + Facebook Pixel

1.  **Doble disparo de PageView:**
    *   **Problema:** El evento `PageView` se dispara dos veces en la carga inicial de la página (una vez por el script base en `layout.tsx` y otra por el componente de `useEffect` en `FacebookPixel.tsx`).
    *   **Solución:** Asegúrate de que `fbq('track', 'PageView');` solo se llame una vez. En esta implementación, se eliminó de `layout.tsx` para que `FacebookPixel.tsx` lo maneje de manera consistente para todas las navegaciones de SPA.

2.  **Eventos no se disparan en cambios de ruta (SPA):**
    *   **Problema:** En Next.js App Router, la navegación es del lado del cliente (SPA), lo que significa que el `PageView` inicial del script solo ocurre una vez. Los cambios de ruta posteriores no recargan la página completa, por lo que el `PageView` debe ser disparado manualmente.
    *   **Solución:** Utilizar el hook `usePathname` de Next.js en un componente `client` (como `FacebookPixel.tsx`) para detectar cambios de ruta y disparar `fbq('track', 'PageView')` en cada cambio.

3.  **Acceso a `window` o `document` en el servidor:**
    *   **Problema:** Intentar acceder a `window` o `document` en componentes del servidor o durante el Server-Side Rendering (SSR) causará errores.
    *   **Solución:** Encerrar el código que interactúa con objetos del navegador en un bloque `if (typeof window !== "undefined")` o asegurarse de que el componente sea un `client component` (usando `"use client";` al inicio del archivo) cuando se necesite acceder a estas APIs.

4.  **Pixel ID incorrecto o ausente:**
    *   **Problema:** El Pixel de Facebook no se inicializa porque el ID está mal configurado o no se carga desde las variables de entorno.
    *   **Solución:** Verifica que `NEXT_PUBLIC_FB_PIXEL_ID` esté correctamente definido en tu archivo `.env.local` (o el adecuado para tu entorno) y que esté accesible en el `Script` del `layout.tsx`. Recuerda que las variables de entorno del lado del cliente en Next.js deben empezar con `NEXT_PUBLIC_`.

5.  **Bloqueo por Content Security Policy (CSP):**
    *   **Problema:** Si tienes una Content Security Policy estricta, el script de Facebook Pixel puede ser bloqueado.
    *   **Solución:** Asegúrate de que `connect.facebook.net` y `www.facebook.com` estén permitidos en tu CSP, tanto para scripts (`script-src`) como para conexiones (`connect-src`).

6.  **Atributos de Script `strategy` incorrectos:**
    *   **Problema:** Usar `strategy="lazyOnload"` o `beforeInteractive` para el script de Pixel puede causar que no se cargue a tiempo o bloquee el renderizado.
    *   **Solución:** `strategy="afterInteractive"` es generalmente la mejor opción para scripts de terceros como Facebook Pixel, ya que se carga después de que la página es interactiva, sin bloquear el contenido crítico. `lazyOnload` puede tardar demasiado.

7.  **No diferenciar eventos `Lead` o `ViewContent`:**
    *   **Problema:** Disparar eventos genéricos para interacciones específicas dificulta la optimización fina de la campaña y la segmentación de audiencia.
    *   **Solución:** Utilizar parámetros como `content_name`, `content_category`, `value`, `currency`, o `method` en los eventos para proporcionar contexto adicional y granularidad.

8.  **Eventos `ViewContent` y `ScrollDepth` disparándose en exceso o en momentos incorrectos:**
    *   **Problema:** Sin un manejo adecuado, estos eventos podrían dispararse múltiples veces o en situaciones donde el usuario no ha demostrado interés real.
    *   **Solución:** Utilizar `IntersectionObserver` para `ViewContent` con `threshold` apropiados y `unobserve` después de la primera intersección. Para `ScrollDepth`, usar un `Set` para registrar los umbrales ya alcanzados en la sesión.