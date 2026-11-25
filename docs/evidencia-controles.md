# Evidencia de controles de seguridad - Clase 4

## Herramientas

- Sistema operativo: Windows 10.
- Editor: Visual Studio Code.
- Agente: Codex CLI 0.170.0.
- Control: approvals y sandbox.
- Permisos: Workspace (Ask for approval).

## Verificación de instrucciones

Mediante el comando /status se confirmó el reconocimiento
de los siguientes archivos:

- ~/.codex/AGENTS.md
- AGENTS.md del repositorio.

Las reglas específicas de tests/AGENTS.md fueron
identificadas por Codex durante la revisión.

## Prueba del control técnico

Se solicitó a Codex agregar un comentario inocuo en
tests/pago.spec.ts sin modificar la lógica de las pruebas.

### Resultado observado

- La edición dentro del repositorio fue permitida.
- La ejecución de Playwright fue permitida.
- El acceso a la red externa quedó restringido.
- No apareció ninguna solicitud de aprobación.
- No se ampliaron los permisos de seguridad.

## Ejecución dentro de Codex

Comando: npx.cmd playwright test

Resultado informado: 12 failed.

Errores observados según Codex:
- ERR_NETWORK_ACCESS_DENIED.
- Could not connect to server.
- Cierres del navegador Firefox.

## Ejecución desde PowerShell local

Comando: npx.cmd playwright test

Resultado real: 12 passed (10.9s).

## Comprobación del verde engañoso

1. Ejecución inicial de los casos de pago:
   6 passed (10.2s).
2. Se comentó temporalmente el clic de confirmación
   en PAGO-01.
3. Resultado: 1 failed, fallo esperado por ausencia
   del mensaje de compra confirmada.
4. Se restauró el código original.
5. Resultado: 6 passed (6.7s).

## Revisión humana

- Se revisó el contenido completo de pago.spec.ts.
- No se encontraron test.skip, test.fixme ni test.only.
- No se encontraron assertions engañosas.
- Las assertions comprueban resultados reales de la UI.

## Conclusión

La sandbox restringió el acceso a la red externa.
La ejecución manual fuera de Codex fue exitosa.

Se mantuvieron los permisos originales y se complementaron
los controles técnicos con la revisión humana del código.


## Verificación de la skill

- Skill: caso-a-playwright.
- Ruta: .agents/skills/caso-a-playwright/SKILL.md.
- Estado: registrada y disponible en Codex.
- Confirmada durante la auditoría final.

## Auditoría final

- Se verificaron los archivos requeridos por la consigna.
- Se revisaron las assertions de PAGO-01 y PAGO-0X.
- No se encontraron tests omitidos ni assertions engañosas.
- No se modificaron los permisos de seguridad.

## Validación final de MiniModa

Comando:
npx.cmd playwright test tests/pago.spec.ts

Resultado: 6 passed (7.4s).

Navegadores:
- Chromium.
- Firefox.
- WebKit.

Casos:
- PAGO-01: compra exitosa.
- PAGO-0X: rechazo de CVV inválido.

## Alcance y limitaciones

- Codex reportó 6 fallos durante la auditoría debido
  a restricciones de red y problemas de navegador
  dentro de su entorno de ejecución.
- La ejecución local posterior fue exitosa.
- Se conservaron los tests de ejemplo de Playwright
  como evidencia de la instalación inicial.
- La validación final se limitó a los casos de MiniModa.
- No se instaló Playwright MCP.
- No se ampliaron los permisos de la sandbox.
