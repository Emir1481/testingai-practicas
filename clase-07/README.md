# Clase 7 — QA de accesibilidad

## Objetivo

Evaluar la accesibilidad de una ficha de producto de MiniModa mediante herramientas automáticas, pruebas manuales y comparación visual entre versiones.

## Entorno de pruebas

- Sistema operativo: Windows 10.
- Navegador: Google Chrome.
- Herramientas: Lighthouse, Chrome DevTools y Narrador de Windows.
- Estándar de referencia: WCAG 2.2.
- Resolución móvil: 375 px.
- Zoom del navegador: 200 %.
- Fecha: 27/11/2026.

## Páginas evaluadas

- [MiniModa V1](https://simonethg.github.io/minimoda-test/practicas/clase-07/kit/)
- [MiniModa V2](https://simonethg.github.io/minimoda-test/practicas/clase-07/kit/index-v2.html)

## Retos realizados

- [x] Reto 1: análisis con Lighthouse.
- [x] Reto 2: navegación mediante teclado.
- [x] Reto 3: lector de pantalla.
- [x] Reto 4: pruebas móviles, zoom y regresión visual.
- [x] Reto 5: documentación de hallazgos.

## Resultados principales

- Puntuación de accesibilidad: 71/100.
- 5 auditorías fallidas en Lighthouse.
- 13 auditorías aprobadas.
- 10 comprobaciones adicionales sugeridas para revisión manual.
- Problemas de navegación mediante teclado.
- Problemas de nombres accesibles y textos alternativos.
- Problemas de adaptación a dispositivos móviles.
- Una regresión visual confirmada en la versión 2.

## Documentación

- [Informe de accesibilidad](informe-accesibilidad.md)
- [Issue 01 — Carrito sin nombre accesible](issues/issue-01-carrito.md)
- [Issue 02 — Comprar ahora inaccesible mediante teclado](issues/issue-02-teclado.md)
- [Issue 03 — Regresión visual en V2](issues/issue-03-regresion-visual.md)
- [Evidencias](evidencias/)

## Conclusión

Las herramientas automáticas permiten detectar una parte de los problemas de accesibilidad, pero las pruebas manuales son indispensables para comprobar la experiencia real del usuario.

La herramienta encuentra una parte; la persona confirma todo.