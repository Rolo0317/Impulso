# IMPULSO VIVIENDA — DOCUMENTO MAESTRO DEL PROYECTO
## Versión 2.0 — Actualizado: Mayo 2026
### Plataforma Inmobiliaria Inteligente + CRM + IA + Automatización

> **INSTRUCCIÓN PARA AGENTE IA**: Este documento es la fuente de verdad del proyecto. Léelo completo antes de generar cualquier código, componente o decisión arquitectónica. No improvises — consulta aquí primero.

---

## ESTADO ACTUAL DEL PROYECTO

### ✅ YA IMPLEMENTADO
- Monorepo configurado con estructura `/apps` y `/packages`
- Web pública en Next.js 15 (`apps/web/app/page.tsx`)
- Logo corporativo integrado (versión con fondo transparente activa)
- Componentes base: `header.tsx`, `button.tsx`, `lead-form.tsx`, `property-card.tsx`, `section.tsx`
- SEO base: metadata, `robots.ts`, `sitemap.ts`
- API NestJS base con módulo de leads (`apps/api/src/leads/`)
- Prisma schema completo con todas las entidades
- TypeScript strict mode habilitado en todo el monorepo
- ESLint + Prettier configurados
- Builds verificados y corriendo en `http://localhost:3000`

### ✅ COMPLETADO EN SPRINT 1
- Galería de inmuebles (primer inmueble real cargado: Conjunto La Macarena Maipore)
- Integración de imágenes reales del apartamento
- Página de detalle de propiedad `/propiedades/la-macarena-maipore-soacha`
- Listado público `/propiedades`
- Endpoint API `GET /propiedades` y `GET /propiedades/:slug`
- Seed Prisma del inmueble real

### ⏳ PENDIENTE (orden de prioridad)
1. Panel Administrativo (`apps/admin`)
2. CRM básico (`apps/crm`)
3. Agente IA de clasificación de leads
4. Automatización WhatsApp/Email
5. Blog inmobiliario
6. Autenticación con Clerk

---

## IDENTIDAD DE LA MARCA

### Nombre
**IMPULSO VIVIENDA**

### Propuesta de valor
No vendemos solo propiedades. Vendemos:
- **Posibilidad** — el sueño de tener casa propia
- **Aprobación** — acompañamiento en crédito y subsidios
- **Acompañamiento** — asesor real en todo el proceso
- **Cumplimiento** — transparencia y seriedad
- **Cierre efectivo** — resultados concretos

### Colores corporativos

| Nombre | Hex | Uso |
|---|---|---|
| Azul Principal | `#0A2E73` | Primario, headers, CTAs principales |
| Dorado Premium | `#D4A437` | Acentos, highlights, badges premium |
| Blanco | `#FFFFFF` | Fondos, texto sobre oscuro |
| Negro Suave | `#1A1A1A` | Texto principal |
| Gris Claro UI | `#F5F7FA` | Fondos de sección, cards |

### Assets
- **Logo**: `apps/web/public/Logo_inmobiliaria.png` (versión transparente — USAR ESTA)
- **Fuente de display**: Elegir entre `Playfair Display`, `Cormorant Garamond` o similar serif premium
- **Fuente body**: `DM Sans` o `Outfit` — NO usar Inter/Roboto

---

## ESTILO VISUAL Y DISEÑO

### Referentes
- **Airbnb** → Cards limpias, fotografía grande, UX intuitiva
- **La Haus** → Inmobiliaria digital latinoamericana, confianza + tecnología
- **Nubank** → Copy humano, colores fuertes, sin jerga
- **Stripe** → Documentación, gradientes sutiles, tipografía precisa
- **Linear** → Minimalismo premium, velocidad percibida

### Principios UI
```
glassmorphism sutil (NO excesivo)
gradientes: azul #0A2E73 → azul oscuro #061a45
sombras: box-shadow con opacidad baja, no duras
spacing: generoso, respira
microinteracciones: hover elevation en cards, transiciones 200-300ms
```

### Componentes — Especificaciones
```tsx
// Botón primario
className="bg-[#0A2E73] text-white rounded-2xl px-6 py-3 
           hover:bg-[#0d3a8a] transition-all duration-200 
           hover:shadow-lg hover:-translate-y-0.5"

// Botón secundario / dorado
className="bg-[#D4A437] text-white rounded-2xl px-6 py-3
           hover:bg-[#b8892a] transition-all duration-200"

// Card de propiedad
className="bg-white rounded-3xl overflow-hidden shadow-sm 
           hover:shadow-xl transition-all duration-300 
           hover:-translate-y-1 border border-gray-100"

// Input
className="border border-gray-200 rounded-xl px-4 py-3 
           focus:ring-2 focus:ring-[#0A2E73] focus:border-transparent
           outline-none transition-all duration-200"
```

---

## STACK TECNOLÓGICO

### Frontend (`apps/web`)
```
Next.js 15+ (App Router)
React 19+
TypeScript (strict)
TailwindCSS
Framer Motion
Shadcn/UI
Lucide Icons
```

### Backend (`apps/api`)
```
Node.js + NestJS
TypeScript (strict)
Prisma ORM
PostgreSQL (Supabase free tier en producción)
```

### Paquetes compartidos
```
@impulso/ui      → componentes reutilizables
@impulso/types   → tipos TypeScript compartidos
@impulso/config  → configuraciones (eslint, tailwind, ts)
```

### Deploy
```
Frontend: Vercel
Backend: Railway o Render
DB: Supabase PostgreSQL
```

---

## ARQUITECTURA DE CARPETAS

```
impulso/
├── apps/
│   ├── web/                    ← Sitio público (Next.js)
│   │   ├── app/
│   │   │   ├── page.tsx        ← Landing principal
│   │   │   ├── propiedades/
│   │   │   │   ├── page.tsx    ← Listado de propiedades
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx ← Detalle de propiedad ⭐ PENDIENTE
│   │   │   ├── blog/
│   │   │   └── contacto/
│   │   ├── components/
│   │   │   ├── ui/             ← Componentes base
│   │   │   ├── sections/       ← Secciones de landing
│   │   │   └── property/       ← Componentes de inmuebles
│   │   └── public/
│   │       ├── Logo_inmobiliaria.png
│   │       └── propiedades/
│   │           └── la-macarena-maipore/  ← Imágenes del apto ⭐
│   │
│   ├── admin/                  ← Panel administrativo ⏳
│   ├── crm/                    ← CRM inmobiliario ⏳
│   └── api/                    ← NestJS API
│       ├── src/
│       │   ├── leads/
│       │   ├── propiedades/    ← ⏳ Crear módulo
│       │   ├── auth/           ← ⏳ Crear módulo
│       │   └── ia/             ← ⏳ Agente clasificador
│       └── prisma/
│           └── schema.prisma
│
└── packages/
    ├── ui/
    ├── types/
    └── config/
```

---

## DATOS DEL PRIMER INMUEBLE REAL

> ⭐ Este inmueble debe usarse para construir el primer listado real de la plataforma y validar el diseño de las cards y páginas de detalle.

### Información completa
```
Nombre:         Conjunto La Macarena Maipore
Ubicación:      Soacha, Maipore — Piso 1
Operación:      Venta directa O cesión de deuda
Inmobiliaria:   INMORA Gestión Inmobiliaria S.A.S

CARACTERÍSTICAS:
- 2 Habitaciones
- 1 Baño
- Zona de ropa
- Sala comedor
- Cocina
- Salón social (área común)
- Parqueadero comunal
- Área: 33 m²

FINANCIERO:
- Precio contado:     $140.000.000 (SOLO EFECTIVO)
- Entrega con:        $55.000.000
- Deuda restante:     $90.000.000 (COLSUBSIDIO)
- Cuota mensual:      $600.000 / mes
- Plazo:              20 años (UVR)

SLUG:           la-macarena-maipore-soacha
ESTADO:         disponible
TIPO:           apartamento
```

### Imágenes del inmueble
```
Carpeta local:  C:\Users\millo\Downloads\impulso\CONJUNTO LA MACARENA MAIPORE\
Carpeta web:    apps/web/public/propiedades/la-macarena-maipore/

ACCIÓN REQUERIDA:
1. Copiar imágenes desde la carpeta local a apps/web/public/propiedades/la-macarena-maipore/
2. Optimizar con next/image (width, height, blur placeholder)
3. Nombrar archivos: foto-1.jpg, foto-2.jpg, etc.
4. La primera imagen = imagen principal (thumbnail de la card)
```

---

## SCHEMA DE BASE DE DATOS (Prisma)

### Entidad Inmueble (referencia para el módulo de propiedades)
```prisma
model Inmueble {
  id              String    @id @default(cuid())
  slug            String    @unique
  titulo          String
  descripcion     String
  tipo            String    // apartamento, casa, lote, local
  estado          String    // disponible, separado, vendido, en_negociacion
  precio          Float
  precioDeuda     Float?    // para cesión de deuda
  cuotaMensual    Float?
  plazoAnios      Int?
  entregaCon      Float?    // inicial requerido
  habitaciones    Int
  banos           Int
  area            Float     // m²
  piso            Int?
  ciudad          String
  barrio          String
  direccion       String?
  imagenes        String[]  // array de URLs/paths
  amenidades      String[]  // parqueadero, zona social, etc.
  financiacion    Boolean   @default(false)
  subsidio        String?   // COLSUBSIDIO, VIS, etc.
  slug            String    @unique
  creadoEn        DateTime  @default(now())
  actualizadoEn   DateTime  @updatedAt
}
```

---

## MÓDULOS FUNCIONALES

### 1. WEB PÚBLICA — Secciones de la Landing

```
HERO
- Headline: "Tu hogar en Colombia, hecho realidad"
- Subheadline: sobre el acompañamiento y aprobación
- CTA principal: "Ver propiedades disponibles"
- CTA secundario: "Hablar con un asesor" (WhatsApp)
- Fondo: gradiente azul oscuro con imagen de ciudad/apartamento

PROPIEDADES DESTACADAS
- Grid de cards (máx 6 en landing)
- Filtro rápido: ciudad, tipo, precio
- Cada card muestra: imagen, precio, habitaciones, m², ciudad, badge de estado

¿POR QUÉ ELEGIRNOS?
- 3-4 diferenciadores: acompañamiento, financiación, tecnología, confianza
- Iconos Lucide + texto

CALCULADORA RÁPIDA (⭐ diferenciador)
- ¿Cuánto puedes pagar mensualmente?
- Input: ingresos mensuales → output: rango de propiedades accesibles

FORMULARIO DE LEAD
- Nombre, teléfono, presupuesto aproximado, mensaje
- Submit → API leads → clasificación IA → notificación WhatsApp

FOOTER
- Logo, links, WhatsApp, redes sociales
```

### 2. PÁGINA DE DETALLE DE PROPIEDAD (`/propiedades/[slug]`)

```
GALERÍA principal (lightbox)
TÍTULO + PRECIO + BADGE DE ESTADO
DATOS CLAVE: habitaciones, baños, m², piso, ciudad
DESCRIPCIÓN LARGA
TABLA FINANCIERA: precio contado / cesión de deuda / cuota mensual
MAPA (Google Maps embed o Mapbox)
CTA FIJOS: "Me interesa" (abre form) + "WhatsApp directo"
PROPIEDADES SIMILARES
```

### 3. CRM — Pipeline de Leads

```
Estados del pipeline:
NUEVO → CONTACTADO → CALIFICADO → VISITA → NEGOCIACIÓN → CERRADO / PERDIDO

Clasificación IA:
🔴 CALIENTE  → presupuesto OK + tiempo < 3 meses + crédito viable
🟡 TIBIO     → interesado pero alguna variable incompleta
🔵 FRÍO      → solo curiosidad, sin urgencia ni capacidad clara
```

### 4. AGENTE IA

```
Flujo:
1. Lead llega (web form o WhatsApp)
2. IA envía mensaje inicial: saludo + 3 preguntas clave
3. Preguntas: 
   - ¿Cuánto puedes destinar mensualmente?
   - ¿Tienes crédito preaprobado o subsidio?
   - ¿En cuánto tiempo planeas comprar?
4. IA analiza respuestas → clasifica (caliente/tibio/frío)
5. Si caliente → escala a asesor humano inmediatamente
6. Si tibio/frío → entra a secuencia de nurturing automático

Variables de scoring:
- presupuesto_disponible (1-10)
- tiene_subsidio (boolean)
- tiempo_compra (inmediato/3meses/6meses/explorando)
- nivel_respuesta (responde rápido / lento / no responde)
```

---

## PRÓXIMOS PASOS — ORDEN EXACTO

### SPRINT 1 (Esta semana) — Primer inmueble visible
```
[x] 1. Copiar imágenes del apto a apps/web/public/propiedades/la-macarena-maipore/
[x] 2. Crear seed de la DB con el inmueble real (apps/api/prisma/seed.ts)
[x] 3. Crear endpoint GET /propiedades en la API
[x] 4. Actualizar property-card.tsx con diseño mejorado + datos reales
[x] 5. Crear página /propiedades/[slug] con galería y detalle completo
[x] 6. Mejorar el Hero de la landing (imagen + copy actualizado)
```

### SPRINT 2 (Semana 2) — Leads y conversión
```
[ ] 7. Formulario de lead mejorado (validación Zod + feedback visual)
[x] 8. Botón flotante de WhatsApp en todas las páginas
[x] 9. Calculadora de cuota mensual (componente interactivo)
[ ] 10. Página /contacto
[ ] 11. Notificación por email cuando llega un lead (Resend API)
```

### SPRINT 3 (Semana 3) — Admin básico
```
[ ] 12. apps/admin: autenticación con Clerk
[ ] 13. CRUD de inmuebles (crear, editar, subir imágenes)
[ ] 14. Vista de leads recibidos
[ ] 15. Dashboard con métricas básicas
```

---

## REGLAS OBLIGATORIAS PARA EL AGENTE IA

### Código
- **TypeScript strict** en todos los archivos — sin `any`
- **Componentes < 150 líneas** — si supera, dividir
- **Hooks personalizados** para lógica de estado compleja
- **Server Components por defecto** en Next.js — Client solo cuando necesario
- **Zod** para validación de formularios y API
- **No duplicar lógica** — si algo se repite 2 veces, abstraer

### Imágenes
- **Siempre usar `next/image`** con `width`, `height` y `alt`
- **`priority`** solo en la imagen above-the-fold
- **`placeholder="blur"`** en galería de propiedades
- Formatos: `.webp` preferido, `.jpg` aceptable

### Performance
- Lighthouse target: **> 95**
- `dynamic(() => import(...))` para componentes pesados
- `loading="lazy"` en imágenes que no son above-the-fold

### Git
```
feat: nueva funcionalidad
fix: corrección de bug
chore: mantenimiento, configs
style: cambios visuales sin lógica
refactor: refactoring sin cambio funcional

Ejemplos:
feat(propiedades): agregar página de detalle con galería
feat(leads): integrar clasificación IA automática
fix(header): corregir alineación del logo en mobile
```

---

## VARIABLES DE ENTORNO NECESARIAS

```env
# apps/web/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WHATSAPP_NUMBER=+57XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_KEY=...

# apps/api/.env
DATABASE_URL=postgresql://...
JWT_SECRET=...
OPENAI_API_KEY=...
RESEND_API_KEY=...       # Para emails de notificación
CLERK_SECRET_KEY=...     # Para autenticación admin
```

---

## CONTACTO Y CONFIGURACIÓN DEL NEGOCIO

```
Empresa:        Impulso Vivienda (marca personal)
Plataforma:     INMORA Gestión Inmobiliaria S.A.S (inmobiliaria aliada)
País:           Colombia
Ciudad base:    Soacha / Bogotá
WhatsApp:       [Configurar en .env NEXT_PUBLIC_WHATSAPP_NUMBER]
Moneda:         COP (pesos colombianos)
Formato precio: $140.000.000 (punto como separador de miles)
```

---

## NOTAS TÉCNICAS IMPORTANTES

### Logo
```
USAR SIEMPRE: apps/web/public/Logo_inmobiliaria.png (fondo transparente)
En header: height máximo 48px, width auto
Sobre fondo oscuro: logo blanco o usar el PNG transparente directamente
```

### WhatsApp Integration
```tsx
// Usar siempre este patrón para abrir WhatsApp
const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`

// Mensaje preconfigurado para propiedad específica:
const mensaje = `Hola, me interesa la propiedad: ${nombrePropiedad} (${precioFormateado}). ¿Pueden darme más información?`
```

### Formato de precios COP
```ts
// utils/format.ts
export const formatCOP = (valor: number) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(valor)
// → $140.000.000
```

---

*Documento generado y mantenido como guía maestra del proyecto Impulso Vivienda.*
*Actualizar este archivo cada vez que se complete un sprint o cambie la arquitectura.*
