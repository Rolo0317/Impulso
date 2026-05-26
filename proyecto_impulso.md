# IMPULSO VIVIENDA — ARQUITECTURA BASE DEL PROYECTO
## Plataforma Inmobiliaria Inteligente + CRM + IA + Automatización

---

# OBJETIVO DEL PROYECTO

Construir una plataforma inmobiliaria moderna, escalable y premium llamada:

# IMPULSO VIVIENDA

La plataforma debe transmitir:
- confianza,
- facilidad,
- soluciones,
- acompañamiento,
- tecnología,
- conversión de clientes.

NO vendemos solamente propiedades.
Vendemos:
- posibilidad,
- aprobación,
- acompañamiento,
- cumplimiento,
- cierre efectivo.

---

# IDENTIDAD VISUAL

## Logo oficial
Utilizar el logo corporativo suministrado.

## Colores corporativos

### Azul Principal
#0A2E73

### Dorado Premium
#D4A437

### Blanco
#FFFFFF

### Negro Suave
#1A1A1A

### Gris Claro UI
#F5F7FA

---

# ESTILO VISUAL

- Minimalista
- Elegante
- Premium
- Tecnológico
- Startup moderna
- Inspirado en:
  - Airbnb
  - Nubank
  - La Haus
  - Stripe
  - Linear

---

# STACK TECNOLÓGICO

## FRONTEND
- Next.js 15+
- React 19+
- TypeScript
- TailwindCSS Advanced
- Framer Motion
- Shadcn/UI
- Lucide Icons

## BACKEND
- Node.js
- NestJS
- TypeScript

## BASE DE DATOS
- PostgreSQL
- Prisma ORM

## AUTENTICACIÓN
- Clerk o Auth.js

## IA
- OpenAI API
- Agentes IA
- Clasificación automática de leads
- IA para atención inicial

## DEPLOY
- Vercel (Frontend)
- Railway / Render (Backend)
- Supabase PostgreSQL Free Tier

---

# PRINCIPIOS DE DESARROLLO OBLIGATORIOS

## CLEAN CODE
- Código limpio
- Nombres descriptivos
- Funciones pequeñas
- Componentes reutilizables
- Separación clara de responsabilidades

---

## DRY (DON'T REPEAT YOURSELF)
- Evitar lógica duplicada
- Utilizar hooks reutilizables
- Servicios compartidos
- Componentes modulares

---

## SOLID

### S — Single Responsibility
Cada módulo debe tener una única responsabilidad.

### O — Open/Closed
Arquitectura extensible sin modificar código base.

### L — Liskov Substitution
Interfaces consistentes y reemplazables.

### I — Interface Segregation
Interfaces pequeñas y específicas.

### D — Dependency Inversion
Uso de inyección de dependencias.

---

# ARQUITECTURA GENERAL

## ESTRUCTURA MODULAR

/apps
/web
/admin
/crm
/ia-assistant
/api
/packages/ui
/packages/config
/packages/types

---

# MÓDULOS PRINCIPALES

## 1. WEB PÚBLICA

### Funciones
- Landing premium
- SEO optimizado
- Propiedades
- Filtros avanzados
- Blog inmobiliario
- Integración WhatsApp
- Captación de leads

### Características
- SSR
- SEO técnico
- Lighthouse 95+
- Responsive total

---

## 2. PANEL ADMINISTRATIVO

### Funciones
- Gestión de inmuebles
- Gestión de asesores
- Gestión de clientes
- Subida de imágenes
- Métricas
- Estados de ventas

---

## 3. CRM INMOBILIARIO

### Funciones
- Leads
- Pipeline
- Seguimiento
- Historial
- Tareas
- Automatización

---

## 4. IA ASISTENTE

### Objetivo
Filtrar clientes automáticamente.

### Flujo IA
1. Recibe lead
2. Hace preguntas iniciales
3. Detecta intención real
4. Clasifica:
   - caliente
   - tibio
   - frío
5. Escala a asesor humano

### Variables de clasificación
- presupuesto,
- ingresos,
- crédito,
- tiempo de compra,
- comportamiento,
- nivel de respuesta.

---

# FUNCIONALIDADES PREMIUM

## HISTORIAL DE INMUEBLES
- vendido,
- disponible,
- separado,
- en negociación,
- histórico de precios,
- documentos.

---

## AUTOMATIZACIÓN
- WhatsApp
- Email
- Recordatorios
- Seguimiento IA

---

## SEO AVANZADO

### Técnicas
- Metadata dinámica
- Schema.org
- Sitemap.xml
- Robots.txt
- Open Graph
- URLs amigables

---

# DISEÑO UI/UX

## TAILWINDCSS AVANZADO

Utilizar:
- glassmorphism sutil,
- gradientes premium,
- sombras suaves,
- spacing moderno,
- diseño limpio,
- microinteracciones,
- motion elegante.

---

# ESTILO DE COMPONENTES

## BOTONES
- rounded-2xl
- hover animations
- transitions suaves

## CARDS
- blur ligero
- sombras modernas
- hover elevation

## INPUTS
- minimalistas
- bordes suaves
- focus elegante

---

# ANIMACIONES

## UTILIZAR
- Framer Motion
- Lazy Motion
- Motion One

### Animaciones
- fade-up,
- stagger,
- smooth hover,
- loading skeletons.

---

# PERFORMANCE

## OBJETIVOS
- Lighthouse > 95
- First Load JS mínimo
- Optimización de imágenes
- Lazy Loading
- Dynamic Imports

---

# SEGURIDAD

## IMPLEMENTAR
- Rate limiting
- JWT
- Middleware auth
- Sanitización
- Validaciones Zod
- Helmet
- CSRF Protection

---

# BASE DE DATOS

## ENTIDADES

### Usuarios
### Clientes
### Leads
### Inmuebles
### Historial
### Visitas
### Asesores
### Documentos
### Conversaciones IA

---

# CONVENCIONES

## TYPESCRIPT STRICT MODE
Siempre habilitado.

## ESLINT + PRETTIER
Obligatorio.

## HUSKY
Pre-commit hooks.

## COMMITS
Conventional commits.

---

# DISEÑO RESPONSIVE

## BREAKPOINTS
- mobile-first
- tablet
- desktop
- ultra-wide

---

# EXPERIENCIA DE USUARIO

La plataforma debe sentirse:
- rápida,
- moderna,
- premium,
- intuitiva,
- tecnológica,
- elegante.

---

# OBJETIVO COMERCIAL

Captar clientes.
Convertir leads.
Automatizar procesos.
Generar confianza.
Escalar la inmobiliaria.

---

# REGLAS IMPORTANTES PARA CODEX

- NO generar código repetido.
- Mantener arquitectura escalable.
- Crear componentes reutilizables.
- Priorizar rendimiento.
- Utilizar buenas prácticas modernas.
- Mantener consistencia visual.
- Todo el código debe ser profesional.
- Evitar hacks rápidos.
- Preparar el sistema para escalabilidad futura.

---

# RESULTADO FINAL ESPERADO

Una plataforma inmobiliaria premium tipo startup tecnológica:
- moderna,
- rápida,
- elegante,
- automatizada,
- escalable,
- lista para crecimiento empresarial.