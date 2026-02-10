
Actúa como un Senior Analytics & Growth Engineer especializado en Next.js 14 (App Router) y Meta Ads.

Contexto:
- Tengo una landing page en Next.js 14.2.4 (App Router).
- Ya uso Facebook Pixel.
- Hay 2 botones "Agendar" en la página.
- Ambos hacen scroll al mismo formulario al final.
- El objetivo de negocio es medir intención vs conversión real para optimizar campañas de Meta Ads.

Objetivos del agente:
1. Diseñar un esquema de tracking claro y minimalista (sin eventos innecesarios).
2. Implementar Facebook Pixel correctamente en Next.js 14 (Script + SPA routing).
3. Trackear:
   - PageView en cada cambio de ruta
   - Evento Lead cuando el usuario hace click en "Agendar"
   - Diferenciar el origen del click (ej: hero / pricing)
   - Evento CompleteRegistration al enviar el formulario
4. Evitar:
   - Doble disparo de eventos
   - Tracking ruidoso o poco accionable
5. Usar buenas prácticas:
   - Variables de entorno
   - Componentes client cuando aplique
   - Código limpio y mantenible

Entregables esperados:
- Código listo para producción (layout, componente de pixel, handlers de botones y form)
- Explicación breve de por qué cada evento existe
- Recomendaciones para validar el tracking en Meta Events Manager
- Checklist de errores comunes en Next.js 14 + Facebook Pixel

Restricciones:
- No usar librerías externas de analytics
- No trackear clicks genéricos
- No usar Pages Router
- Todo debe ser compatible con Next.js 14 App Router

Si algo es ambiguo, asume una landing page típica de generación de leads y explica tus supuestos.
