# Informe de pruebas de accesibilidad — MiniModa

## 1. Resumen

Se evaluó la ficha del producto Campera polar infantil utilizando Lighthouse, navegación mediante teclado, Narrador de Windows, inspección HTML y pruebas visuales.

La evaluación tomó como referencia los criterios WCAG 2.2.

## 2. Resultados de Lighthouse

- Puntuación: 71/100.
- Auditorías fallidas: 5.
- Auditorías aprobadas: 13.
- Comprobaciones adicionales sugeridas: 10.

## 3. Tabla general de hallazgos

| ID | Hallazgo | WCAG 2.2 | Método de detección | Lighthouse | Estado |
|---|---|---|---|---|---|
| H01 | Carrito sin nombre accesible | 4.1.2 A | Lighthouse, HTML y Narrador | Sí | Confirmado |
| H02 | Imagen principal sin atributo alt | 1.1.1 A | Lighthouse e inspección HTML | Sí | Confirmado |
| H03 | Contraste insuficiente | 1.4.3 AA | Lighthouse | Sí | Sin revisión manual |
| H04 | Documento HTML sin atributo lang | 3.1.1 A | Lighthouse e inspección HTML | Sí | Confirmado |
| H05 | Áreas táctiles insuficientes | 2.5.8 AA | Lighthouse | Sí | Pendiente de medición |
| H06 | Indicador de foco no visible en varios controles | 2.4.7 AA | Teclado | No | Confirmado |
| H07 | No se pudo cerrar la Guía de talles con teclado | 2.1.1 A | Teclado | No | Confirmado |
| H08 | Comprar ahora inaccesible mediante teclado | 2.1.1 A | Teclado e inspección HTML | No | Confirmado |
| H09 | Cartel de cookies oculta la sección de suscripción | 2.4.11 AA | Prueba manual | No | Criterio pendiente de confirmación |
| H10 | Nombre accesible incorrecto en Agregar al carrito | 2.5.3 A | Narrador e inspección HTML | No | Confirmado |
| H11 | Campo email sin etiqueta explícita | 1.3.1 A | Inspección HTML | No | Criterio pendiente de confirmación |
| H12 | Contenido cortado en dispositivos móviles | 1.4.10 AA | Prueba móvil a 375 px | No evaluado | Criterio pendiente de confirmación |
| H13 | Desaparición del botón Agregar al carrito en V2 | Regresión visual | Comparación V1 y V2 | No evaluado | Confirmado |

## 4. Pruebas con teclado

Se utilizaron Tab, Shift+Tab, Enter, Espacio y Esc.

Resultados:

- El indicador de foco solamente se visualizó en el campo cantidad.
- No fue posible acceder a Comprar ahora mediante el teclado.
- No se logró cerrar la Guía de talles mediante el teclado.
- El cartel de cookies ocultó la sección de suscripción.
- No se pudo determinar completamente el orden del foco.
- No se confirmó la existencia de una trampa de teclado según el criterio 2.1.2.

## 5. Pruebas con lector de pantalla

| Elemento | Resultado obtenido | Resultado esperado |
|---|---|---|
| Carrito | Banner, botón | Carrito, botón |
| Imagen principal | Imagen sin descripción | Descripción de la campera |
| Imagen secundaria | Sin descripción significativa según la prueba | Detalle del cierre de la campera |
| Agregar al carrito | Anuncio incorrecto; HTML con aria-label="btn-primary" | Agregar al carrito, botón |
| Correo electrónico | Tu email, editar | Campo identificado mediante una etiqueta descriptiva y persistente |

## 6. Pruebas móviles y zoom

### Resolución de 375 px

Se observaron los siguientes problemas:

- Imagen del producto parcialmente cortada.
- Nombre y precio parcialmente ocultos.
- Tabla de talles que excede el ancho disponible.
- Botón Suscribirme parcialmente cortado.

La conformidad con el criterio 1.4.10 requiere comprobaciones adicionales.

### Zoom al 200 %

No se observaron pérdidas de contenido ni problemas de visualización durante la prueba.

Resultado observado: satisfactorio.

## 7. Comparación visual entre V1 y V2

### Cambio solicitado

Incorporar un banner Envío gratis sobre la imagen principal.

### Resultado

El banner fue incorporado correctamente.

### Regresión detectada

Al comparar ambas versiones en una resolución de 375 px, se confirmó que el botón Agregar al carrito está presente en V1 y no se visualiza en V2.

Este cambio no forma parte del requisito solicitado y afecta la experiencia de compra desde dispositivos móviles.

## 8. Diferencias entre detección automática y manual

Lighthouse identificó problemas relacionados con nombres accesibles, textos alternativos, contraste, idioma y tamaño de objetivos táctiles.

Las pruebas manuales permitieron identificar problemas adicionales de navegación mediante teclado, foco visible, nombres accesibles incorrectos y regresiones visuales.

## 9. Limitaciones

- No se realizaron mediciones manuales de contraste ni de áreas táctiles.
- No se confirmó que el foco quedara completamente atrapado en la ventana emergente.
- No se verificó la ocultación total de un control mientras recibía el foco.
- No se realizó una auditoría completa de conformidad WCAG 2.2.
- Los resultados corresponden al entorno y las condiciones evaluadas.

## 10. Conclusión

Lighthouse es una herramienta útil para iniciar una evaluación de accesibilidad, pero no garantiza que una página sea completamente accesible.

La combinación de pruebas automáticas y manuales permitió detectar problemas que afectan a usuarios de lectores de pantalla, usuarios que navegan con teclado y usuarios de dispositivos móviles.

**La herramienta encuentra una parte; la persona confirma todo.**