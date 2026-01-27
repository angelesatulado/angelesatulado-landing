# Ángeles a tu Lado - Cuidado Médico en RD

Este proyecto es una aplicación web construida con Next.js, diseñada para "Ángeles a tu Lado", un servicio de cuidado médico y acompañamiento en la República Dominicana.

---

## Resumen de Cambios Recientes (Enero 26, 2026)

Hoy se han realizado varias mejoras significativas en la configuración del proyecto, la experiencia de usuario y la presentación visual, enfocándose en la profesionalidad y claridad de la interfaz.

### 1. Configuración de PostCSS y Dependencias

Se resolvieron problemas relacionados con la configuración de PostCSS y la compatibilidad de las dependencias.

*   **`postcss.config.mjs`:** Se corrigió la sintaxis para definir plugins, adoptando el formato estándar que Next.js y PostCSS esperan. Esto solucionó errores de procesamiento de CSS.
*   **`package.json`:** Se actualizaron y/o corrigieron las versiones de las siguientes dependencias a sus versiones estables y compatibles:
    *   `next`: Se actualizó a `^14.2.3` (corrigiendo una versión incorrecta que causaba inestabilidad).
    *   `react`, `react-dom`: Actualizados a `^18.2.0` para mayor estabilidad.
    *   `tailwindcss`: Actualizado a `^3.4.3`.
    *   `postcss`, `autoprefixer`: Actualizados a versiones compatibles.
    *   `@types/node`, `@types/react`, `@types/react-dom`, `typescript`: Ajustadas para asegurar la compatibilidad con las versiones estables.
*   **Instalación Limpia:** Se eliminó `package-lock.json` y se ejecutó `npm install` para garantizar una instalación limpia de las dependencias actualizadas.
*   **`postcss-import`:** Se eliminó `postcss-import` de la configuración de PostCSS y de las dependencias, ya que la nueva forma de importar Tailwind CSS (`@tailwind` directivas) no lo requiere.

### 2. Sustitución de Emojis por Iconos Profesionales

Se mejoró la interfaz de usuario reemplazando emojis por iconos de la librería `react-icons`, lo que proporciona una apariencia más profesional y consistente.

*   **`react-icons`:** Se instaló la librería `react-icons`.
*   **`components/Features.tsx`:** Los emojis (`🚗`, `👩‍⚕️`, `🎨`, `🏡`) que representaban los servicios fueron reemplazados por iconos de Font Awesome 6 (`FaCarSide`, `FaUserDoctor`, `FaPalette`, `FaHouse`). Se añadió color dinámico a estos iconos.
*   **`components/Footer.tsx`:** Los emojis de contacto (`📍`, `📞`, `✉️`) fueron reemplazados por iconos de Font Awesome 6 (`FaLocationDot`, `FaPhone`, `FaEnvelope`). Se corrigieron nombres de iconos incorrectos que causaban errores de importación.

### 3. Mejoras en la Sección de Video

Se implementaron cambios significativos para mejorar la presentación y funcionalidad del video promocional en el `landing page`.

*   **Renombrado de Archivo de Video:** El archivo de video `Fiordalisa 2 (1).mp4` fue renombrado a `promo-video.mp4` para una mejor gestión y referencia.
*   **Reproductor de Video Implementado (`VideoSection.tsx`):**
    *   Se reemplazó el `<img>` placeholder con una etiqueta `<video>` interactiva.
    *   **Controles de Reproducción:** Se añadió funcionalidad para que el video se reproduzca/pause al hacer clic.
    *   **Eliminación de `muted`:** Se quitó el atributo `muted` para que el video se reproduzca con sonido al iniciar (sujeto a las políticas de autoplay de cada navegador).
    *   **Ajuste de Visualización (`object-contain`):** Se cambió `object-cover` por `object-contain` para asegurar que el video se muestre completamente dentro de su contenedor sin recortes, manteniendo su relación de aspecto.
    *   **Relación de Aspecto Vertical:** El `aspect-ratio` del contenedor del video fue ajustado a `aspect-[9/16]` para adecuarse a videos verticales (tipo Reels/Shorts).
    *   **Tamaño Responsivo:** El `max-width` del video principal fue limitado a `max-w-sm` para evitar que sea excesivamente grande en pantallas de escritorio, manteniéndolo centrado.
    *   **Diseño de Tres Pantallas Creativo:**
        *   Se implementó un diseño visual con el video principal en el centro y dos versiones "reflejadas" (desenfocadas y semitransparentes) del mismo video a los lados.
        *   Estos videos reflejados se muestran solo en pantallas grandes (`lg:` y superiores) para llenar el espacio horizontal y suavizar la transición del formato vertical.
        *   **Sincronización de Reproducción:** La reproducción de los videos reflejados se sincronizó con el video principal para una experiencia fluida y profesional.
        *   **Ajuste de Efectos Visuales:** El `blur` de los reflejos se redujo de `8px` a `4px` y la `opacity` se incrementó de `0.2` a `0.3` para hacer el efecto más notorio sin ser intrusivo.
    *   **Mejoras Visuales del Overlay:**
        *   La superposición (`overlay`) sobre el video principal se oscureció ligeramente (de `from-slate-900/60` a `from-slate-900/70`).
        *   Se añadió `shadow-lg` y `group-hover:shadow-xl` al botón de reproducción para mayor prominencia y feedback interactivo.
        *   El texto "Reproducir Video" ahora tiene una `opacity-100` para mejorar su legibilidad.

---

## Cómo Empezar

1.  Clona este repositorio:
    `git clone https://github.com/angelesatulado/angelesatulado-landing.git`
2.  Navega a la carpeta del proyecto:
    `cd angelesatulado-landing`
3.  Instala las dependencias:
    `npm install`
4.  Inicia el servidor de desarrollo:
    `npm run dev`

La aplicación estará disponible en `http://localhost:3000` (o un puerto alternativo si el 3000 está en uso).