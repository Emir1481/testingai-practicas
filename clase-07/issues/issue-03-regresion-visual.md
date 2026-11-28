# [Regresión visual] El botón Agregar al carrito desaparece en V2 a 375 px

## Requisito

El único cambio solicitado para la versión 2 es incorporar un banner Envío gratis sobre la imagen principal del producto.

## Criterio

Regresión visual y funcional respecto de la versión 1.

## Entorno

- Aplicación: MiniModa V1 y V2.
- Sistema operativo: Windows 10.
- Navegador: Google Chrome.
- Herramienta: Chrome DevTools, modo responsive.
- Ancho de pantalla: 375 px.
- Zoom: 100 %.

## Pasos para reproducir

1. Abrir MiniModa V1.
2. Activar el modo responsive de Chrome DevTools.
3. Configurar un ancho de 375 px.
4. Localizar el botón Agregar al carrito.
5. Abrir MiniModa V2.
6. Mantener las mismas condiciones de visualización.
7. Comparar la sección de botones de compra.

## Resultado obtenido

El botón Agregar al carrito está presente en la versión 1, pero no se visualiza en la versión 2 a 375 px.

El banner Envío gratis aparece correctamente.

## Resultado esperado

La versión 2 debería incorporar el banner Envío gratis sin eliminar ni ocultar los controles de compra existentes en la versión 1.

## Impacto

Los usuarios de dispositivos móviles podrían perder la posibilidad de agregar productos al carrito mediante este control.

## Severidad sugerida

Alta.

## ¿Lo detectó la herramienta?

No fue detectado en la auditoría de Lighthouse realizada sobre V1.

Se confirmó mediante comparación visual manual entre ambas versiones.

## Evidencias

- Captura de MiniModa V1 a 375 px.
- Captura de MiniModa V2 a 375 px.