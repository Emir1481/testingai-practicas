# [Accesibilidad] Comprar ahora no es accesible mediante el teclado

## Criterio

WCAG 2.2 — 2.1.1: Teclado.

Nivel A.

## Entorno

- Aplicación: MiniModa V1.
- Sistema operativo: Windows 10.
- Navegador: Google Chrome.
- Herramientas: teclado y Chrome DevTools.

## Pasos para reproducir

1. Abrir la ficha de producto de MiniModa V1.
2. No aceptar el cartel de cookies.
3. Navegar por la página utilizando Tab y Shift+Tab.
4. Intentar alcanzar el control Comprar ahora.
5. Inspeccionar su implementación HTML.

## Resultado obtenido

El control Comprar ahora no recibe el foco durante la navegación mediante teclado.

La inspección HTML muestra un elemento div con un evento onclick, sin mecanismos de acceso mediante teclado visibles en el elemento inspeccionado.

## Resultado esperado

El control Comprar ahora debería recibir el foco y permitir su activación mediante el teclado.

## Impacto

Los usuarios que dependen exclusivamente del teclado no pueden utilizar esta opción del proceso de compra.

## Severidad sugerida

Alta.

## ¿Lo detectó la herramienta?

No. El problema se identificó mediante pruebas manuales de navegación con teclado y se corroboró mediante inspección HTML.

## Evidencias

- Resultado de las pruebas de navegación con teclado.
- Captura del código HTML del control Comprar ahora.