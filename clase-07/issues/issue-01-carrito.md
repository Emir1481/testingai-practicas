# [Accesibilidad] El botón del carrito no tiene nombre accesible

## Criterio

WCAG 2.2 — 4.1.2: Nombre, función y valor.

Nivel A.

## Entorno

- Aplicación: MiniModa V1.
- Sistema operativo: Windows 10.
- Navegador: Google Chrome.
- Herramientas: Lighthouse, Narrador de Windows y Chrome DevTools.

## Pasos para reproducir

1. Abrir la ficha de producto de MiniModa V1.
2. Activar el Narrador de Windows.
3. Navegar hasta el botón del carrito.
4. Escuchar el nombre anunciado por el lector de pantalla.
5. Inspeccionar el elemento HTML correspondiente.

## Resultado obtenido

El Narrador anuncia «Banner, botón», sin identificar la función del carrito.

El elemento HTML no proporciona un nombre accesible descriptivo.

## Resultado esperado

El lector de pantalla debería anunciar «Carrito, botón» o un nombre equivalente que identifique su función.

## Impacto

Los usuarios de lectores de pantalla pueden tener dificultades para identificar el carrito y continuar con el proceso de compra.

## Severidad sugerida

Alta.

## ¿Lo detectó la herramienta?

Sí. Lighthouse detectó el problema y se confirmó mediante inspección HTML y pruebas con el Narrador.

## Evidencias

- Informe de Lighthouse.
- Captura de la inspección HTML del carrito.