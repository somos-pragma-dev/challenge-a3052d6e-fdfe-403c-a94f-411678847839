# Desarrollo de una Plataforma de Gestión de Proyectos Ágiles

Debes desarrollar una plataforma completa de gestión de proyectos ágiles que incluya autenticación, gestión de roles, motor de workflow, integraciones con servicios externos, reportes en tiempo real, persistencia en base de datos, caché, búsqueda full-text, rate limiting, compresión de respuestas, configuración de CORS, health checks, logging, métricas de performance y tests de integración. Los actores involucrados son el usuario final, el sistema de autenticación OAuth2, el motor de workflow, los servicios de notificación (Slack y Microsoft Teams), el sistema de reportes, la base de datos PostgreSQL, el caché Redis, el sistema de búsqueda ElasticSearch, y el sistema de logging y métricas. La plataforma debe manejar un throughput de 10 000 solicitudes por segundo con una latencia máxima de 50ms y una disponibilidad del 99.9%.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Node.js Enterprise Platform |
| **Nivel** | advanced-l2 |
| **Tipo** | mixed |
| **Tiempo estimado** | 40 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Autenticación y Gestión de Roles

**Objetivo:** Implementar un sistema de autenticación OAuth2 y un sistema de roles basado en RBAC con permisos granulares.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Diseña e implementa un sistema de autenticación OAuth2 que permita a los usuarios autenticarse de forma segura.
- Implementa un sistema de roles basado en RBAC que permita asignar permisos granulares a los usuarios.

**Entregable:** Sistema de autenticación OAuth2 y sistema de roles RBAC funcionales.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los flujos de autenticación y autorización comunes.
- Piensa en cómo manejar los permisos granulares y su impacto en la seguridad y usabilidad del sistema.

</details>

### Fase 2: Motor de Workflow y Integraciones

**Objetivo:** Implementar un motor de workflow para manejar transiciones de estado de las tareas y realizar integraciones con servicios externos via webhooks.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Diseña e implementa un motor de workflow que permita manejar transiciones de estado de las tareas (backlog, in progress, review, done, archived).
- Integra el sistema con servicios externos via webhooks para notificaciones en Slack y Microsoft Teams.

**Entregable:** Motor de workflow funcional y sistema de notificaciones integrado con Slack y Microsoft Teams.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los estados y transiciones posibles de las tareas.
- Piensa en cómo manejar las integraciones con servicios externos de forma efectiva y segura.

</details>

### Fase 3: Reportes en Tiempo Real y Persistencia

**Objetivo:** Implementar un sistema de reportes en tiempo real usando WebSockets y persistencia en PostgreSQL con migraciones automatizadas usando Knex.js.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Diseña e implementa un sistema de reportes en tiempo real usando WebSockets para actualizar dashboards de progreso.
- Implementa la persistencia en PostgreSQL con migraciones automatizadas usando Knex.js.

**Entregable:** Sistema de reportes en tiempo real funcional y sistema de persistencia en PostgreSQL con migraciones automatizadas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la latencia y el throughput requeridos para los reportes en tiempo real.
- Piensa en cómo manejar las migraciones de la base de datos de forma efectiva y segura.

</details>

### Fase 4: Caché, Búsqueda y Optimizaciones

**Objetivo:** Implementar caché con Redis para las consultas más frecuentes del dashboard, sistema de búsqueda full-text sobre las tareas y comentarios usando ElasticSearch, rate limiting por usuario y por endpoint, compresión gzip de respuestas, y configuración de CORS para múltiples orígenes.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Implementa caché con Redis para las consultas más frecuentes del dashboard.
- Implementa un sistema de búsqueda full-text sobre las tareas y comentarios usando ElasticSearch.
- Implementa rate limiting por usuario y por endpoint.
- Implementa compresión gzip de respuestas.
- Configura CORS para múltiples orígenes.

**Entregable:** Sistema de caché, búsqueda full-text, rate limiting, compresión gzip y configuración de CORS funcionales.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la latencia y el throughput requeridos para las consultas del dashboard.
- Piensa en cómo manejar la búsqueda full-text de forma efectiva y segura.
- Considera los límites de tasa y compresión de respuestas requeridos.
- Piensa en cómo configurar CORS para múltiples orígenes de forma efectiva y segura.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un sistema de autenticación OAuth2 y cómo funciona?
- **paraQueSirve**: ¿Para qué sirve un sistema de roles basado en RBAC con permisos granulares?
- **comoSeUsa**: ¿Cómo se usa un motor de workflow para manejar transiciones de estado de las tareas?
- **erroresComunes**: ¿Cuáles son los errores comunes al integrar un sistema con servicios externos via webhooks?
- **queDecisionesImplica**: ¿Qué decisiones implica implementar un sistema de reportes en tiempo real usando WebSockets?

## Criterios de Evaluacion

- Implementar un sistema de autenticación OAuth2 funcional.
- Implementar un sistema de roles basado en RBAC con permisos granulares.
- Implementar un motor de workflow para manejar transiciones de estado de las tareas.
- Integrar el sistema con servicios externos via webhooks para notificaciones en Slack y Microsoft Teams.
- Implementar un sistema de reportes en tiempo real usando WebSockets.
- Implementar persistencia en PostgreSQL con migraciones automatizadas usando Knex.js.
- Implementar caché con Redis para las consultas más frecuentes del dashboard.
- Implementar un sistema de búsqueda full-text sobre las tareas y comentarios usando ElasticSearch.
- Implementar rate limiting por usuario y por endpoint.
- Implementar compresión gzip de respuestas.
- Configurar CORS para múltiples orígenes.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
