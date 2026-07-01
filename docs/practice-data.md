# Capacities Data

## Objetivo

La página de Sectores y capacidades muestra una lista editorial de capacidades legales y sectoriales. Cada capacidad puede activar una card contextual con información resumida, profesionales relacionados y capacidades vinculadas.

La información no debe estar hardcodeada directamente en el JSX. Debe venir de una fuente de datos estructurada.

## Fuente de referencia

La fuente editorial de referencia es el sitio actual de Bruchou:

- Página general: https://bruchoufunes.com/areas-de-practica/
- Páginas individuales: https://bruchoufunes.com/areas-de-practica/[slug]/

La página general contiene:

- filtros por tipo de servicio;
- listado de prácticas;
- links a páginas individuales.

Cada página individual puede contener:

- título de la práctica;
- introducción;
- contenido general;
- socios o profesionales de contacto;
- prácticas relacionadas;
- artículos relacionados.

## Modelo de datos

```ts
export type PracticeServiceType = 'asesoria' | 'transaccional' | 'litigios'

export type PracticeProfessional = {
  id: string
  name: string
  href?: string
}

export type PracticeRelatedArea = {
  id: string
  title: string
  href?: string
}

export type Practice = {
  id: string
  slug: string
  title: string
  groupId: string
  serviceTypes: PracticeServiceType[]
  href: string
  summary: string
  professionals: PracticeProfessional[]
  relatedAreas: PracticeRelatedArea[]
  sourceUrl?: string
  contentStatus?: "complete" | "partial" | "pending"
}

export type PracticeGroup = {
  id: string
  label: string
  practiceIds: string[]
}
```

## Tabla de ejemplo

| Campo | Uso | Fuente |
| --- | --- | --- |
| `title` | Nombre visible | Página oficial |
| `slug` | Path oficial | URL |
| `summary` | Bajada corta para card | Intro / General |
| `professionals` | Socios de contacto | Página individual |
| `relatedAreas` | Capacidades relacionadas | Página individual |
| `serviceTypes` | Filtro funcional | Página general |
| `groupId` | Agrupación editorial | Diseño nuevo |

## Reglas de contenido

- `id`: estable, en kebab-case.
- `slug`: debe coincidir con la URL de la práctica.
- `title`: nombre visible de la práctica.
- `groupId`: categoría editorial usada por el nuevo diseño.
- `serviceTypes`: filtros a los que pertenece la práctica.
- `href`: URL de detalle.
- `summary`: texto corto para la card contextual.
- `professionals`: profesionales relacionados.
- `relatedAreas`: áreas o prácticas relacionadas.
- `sourceUrl` y `contentStatus`: opcionales, para trazabilidad editorial y estado de completitud.

## Regla de la card contextual

La card debe mostrar:

- label superior: `CONTEXTO RELACIONAL`;
- nombre de la práctica activa;
- resumen breve;
- profesionales relacionados, solo si existen;
- áreas relacionadas, solo si existen.

No mostrar placeholders.

Textos prohibidos:

- `TODO`;
- `TODO: Profesional`;
- `Lorem ipsum`;
- `Pendiente`;
- `Profesional 1`;
- `Área relacionada 1`.

Si una práctica no tiene profesionales cargados, se oculta la sección `Profesionales`.

Si una práctica no tiene áreas relacionadas cargadas, se oculta la sección `Áreas relacionadas`.

## Estado vacío

Desktop:

`Pasá el cursor por un área para ver sus profesionales y áreas relacionadas.`

Mobile:

`Tocá un área para ver sus profesionales y áreas relacionadas.`

## Interacción

Desktop:

- hover sobre práctica activa la card;
- focus por teclado activa la card;
- mouse leave vuelve al estado vacío o mantiene la última práctica según diseño.

Mobile:

- tap sobre práctica activa la card;
- no depender de hover.

## Validación de duplicados

Antes de renderizar:

- validar prácticas duplicadas por id;
- validar prácticas duplicadas por slug;
- validar prácticas duplicadas por title;
- validar grupos duplicados por id;
- validar grupos duplicados por label.

Los duplicados deben corregirse en la data, no ocultarse con CSS.

## Actualización de información

La fuente ideal para producción es:

- `src/data/practices.ts`

No hacer fetch client-side a `bruchoufunes.com` durante hover o render.

Si se necesita sincronizar información desde el sitio actual, usar un script controlado:

- `scripts/sync-practices.ts`

Ese script debe:

- leer URLs oficiales;
- extraer título, resumen, profesionales y relacionadas;
- normalizar slugs;
- generar o actualizar `src/data/practices.ts`;
- reportar duplicados;
- no romper la build si falta un campo opcional.

## Campos que pueden quedar vacíos

- `professionals`: cuando la fuente oficial no expone socios de contacto verificables.
- `relatedAreas`: cuando la página individual no lista prácticas relacionadas.
- `sourceUrl`: solo si no se pudo verificar la URL oficial.
- `contentStatus`: `pending` o `partial` mientras falte soporte editorial.

## Reglas de placeholder

No usar:

- `TODO`;
- `TODO: Profesional`;
- `Lorem ipsum`;
- `Pendiente`;
- `Profesional 1`;
- `Área relacionada 1`.
