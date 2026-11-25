# Evaluación de Playwright MCP para MiniModa

**Fecha de evaluación:** 24 de noviembre de 2026  
**Alcance:** revisión documental del repositorio oficial. No se instaló ni configuró el servidor y no se ejecutaron pruebas.

## Resumen

Playwright MCP es un servidor del Model Context Protocol que expone automatización de navegador basada en Playwright a un cliente MCP. El agente puede inspeccionar snapshots de accesibilidad, navegar e interactuar con una página y, según capacidades habilitadas, consultar o simular tráfico de red y almacenamiento. Su perfil de uso es la exploración interactiva y los flujos agentivos con contexto persistente.

No reemplaza `@playwright/test` ni el runner que MiniModa ya utiliza. No organiza ni descubre nuestra suite, no ejecuta sus archivos de test, ni ofrece por sí solo sus assertions, proyectos Chromium/Firefox/WebKit, reintentos, workers y reporter. La suite actual se define en `playwright.config.ts`; cambiar MCP por el runner eliminaría ese flujo automatizado de verificación. MCP puede ayudar a explorar el checkout o diagnosticar un estado visual, y las observaciones pueden luego convertirse en pruebas mantenibles del runner.

## Fuente, autor y versión

- **Fuente oficial:** [microsoft/playwright-mcp en GitHub](https://github.com/microsoft/playwright-mcp), enlazado desde la organización Microsoft y con paquete npm `@playwright/mcp`.
- **Autor declarado en el manifiesto:** Microsoft Corporation. Licencia Apache-2.0.
- **Versión observada:** `0.0.86`, declarada en el `package.json` de la rama `main` consultada. La configuración de ejemplo del README usa `@latest`, que no fija una versión reproducible. Para una adopción habría que fijar explícitamente la versión elegida.
- **Alcance:** el repositorio lo presenta como servidor de automatización de navegador para agentes, basado en Playwright y snapshots estructurados de accesibilidad. El README describe MCP como apropiado para exploración iterativa, estado persistente y flujos autónomos prolongados. También recomienda considerar Playwright CLI + Skills para agentes de código, por eficiencia de contexto.

## Herramientas disponibles

El README agrupa las herramientas principales así (el conjunto efectivo puede depender de capacidades y opciones):

- **Automatización del navegador:** `browser_navigate`, `browser_navigate_back`, `browser_click`, `browser_type`, `browser_fill_form`, `browser_select_option`, `browser_hover`, `browser_drag`, `browser_drop`, `browser_press_key`, `browser_wait_for`, `browser_handle_dialog`, `browser_resize`, `browser_tabs`, `browser_close`.
- **Inspección:** `browser_snapshot` (árbol de accesibilidad), `browser_find`, `browser_take_screenshot`, `browser_console_messages`.
- **Red:** `browser_network_requests` y `browser_network_request` para inspeccionar; con `--caps=network`, `browser_network_state_set`, `browser_route`, `browser_route_list` y `browser_unroute` para simular/interceptar.
- **Archivos y código:** `browser_file_upload`, guardado de capturas/snapshots/resultados en el workspace y `browser_evaluate`. `browser_run_code_unsafe` ejecuta código JavaScript arbitrario en el proceso del servidor y el propio README lo califica como equivalente a ejecución remota de código (RCE).
- **Optativas:** configuración (`--caps=config`) y cookies/almacenamiento (`--caps=storage`); otras capacidades incluyen visión, PDF y DevTools.

Varias acciones son de escritura, no sólo de lectura: pueden enviar formularios, activar botones, subir archivos, modificar cookies o simular respuestas.

## Permisos, archivos, red y sesión

### Archivos y permisos

Por defecto, el servidor restringe el acceso a archivos a los directorios raíz del workspace (o al directorio de trabajo actual si no hay raíces configuradas) y bloquea la navegación `file://`. `--allow-unrestricted-file-access` amplía ese acceso fuera de esas raíces y habilita `file://`; no conviene activarlo para MiniModa. El README aclara que esta restricción es una protección de conveniencia, no una frontera segura: la seguridad efectiva depende de los permisos del cliente/entorno.

Algunas herramientas reciben o guardan rutas de archivos (por ejemplo, upload, descarga/resultado o snapshots). El servidor puede ejecutar código arbitrario mediante `browser_run_code_unsafe`; para una evaluación futura conviene deshabilitar esa herramienta si el cliente lo permite, limitar el workspace y no darle acceso a secretos. No se deben conceder permisos del navegador como geolocalización o clipboard si el flujo no los necesita.

### Red

El navegador puede navegar a URLs y cargar recursos de red. `--allowed-hosts` limita hosts a los que el servidor atiende/controla: por defecto contempla localhost, loopback y el host indicado; `*` desactiva ese control. `--allowed-origins` y `--blocked-origins` afectan solicitudes del navegador, pero el README advierte que no son una frontera de seguridad y que no controlan redirecciones. Por lo tanto, no debe tratarse una allowlist de orígenes como aislamiento completo.

Para MiniModa, limitar el uso a la demo autorizada `https://minimoda-navy.vercel.app/checkout` y a localhost cuando haga falta; no usar producción ni datos reales de pago. La herramienta de red puede revelar headers y cuerpos de solicitudes, así que no se deben exponer tokens o datos sensibles en resultados.

### Sesión del navegador

El servidor ofrece perfil persistente por defecto, perfiles aislados en memoria (`--isolated`) y conexión a un navegador existente mediante extensión. En el perfil persistente guarda información de inicio de sesión en disco, en una ubicación derivada del workspace; puede indicarse otra ubicación con `--user-data-dir`. `--storage-state` permite cargar estado de sesión. `--isolated` es preferible para una prueba exploratoria que no necesite conservar cookies. Una sesión persistente puede reutilizar autenticación y generar conflictos si dos clientes usan el mismo perfil a la vez.

## Comandos de instalación/configuración documentados

El proyecto requiere Node.js 20 o superior. El README documenta para Codex:

```powershell
codex mcp add playwright npx "@playwright/mcp@latest"
```

Como configuración manual alternativa, indica agregar a `~/.codex/config.toml`:

```toml
[mcp_servers.playwright]
command = "npx"
args = ["@playwright/mcp@latest"]
```

La ejecución directa documentada es `npx @playwright/mcp@latest`; para fijar versión se reemplazaría `latest` por la versión elegida, por ejemplo `@playwright/mcp@0.0.86` (la versión observada en el manifiesto consultado). Estos comandos son referencia documental únicamente: **no se ejecutaron**. No se recomienda usar `latest` en una configuración reproducible.

## Beneficios para el checkout de MiniModa

1. **Explorar el flujo visual e interactivo con rapidez:** snapshots y acciones permiten recorrer el checkout demo e identificar estados, labels y controles antes de escribir una prueba.
2. **Diagnóstico contextual:** inspeccionar consola, solicitudes de red y capturas puede ayudar a localizar errores durante la exploración del checkout.
3. **Apoyo para casos difíciles de reproducir:** perfiles aislados/persistentes y controles de viewport permiten examinar estados de sesión y tamaños de pantalla. Los hallazgos pueden alimentar casos Playwright convencionales.

## Riesgos y mitigaciones

| Riesgo | Mitigación propuesta |
| --- | --- |
| Herramientas con capacidad de modificar estado, además de la herramienta `browser_run_code_unsafe` marcada como RCE-equivalente. | No habilitar ejecución de código insegura; habilitar sólo las capacidades necesarias; usar sólo la demo, sin datos de pago reales; mantener permisos del cliente restringidos al repositorio. |
| Perfil persistente puede retener cookies/inicios de sesión y mezclar estados entre sesiones; resultados de red pueden contener headers o cuerpos sensibles. | Preferir `--isolated` para exploración, no iniciar sesión con cuentas reales, no capturar ni guardar secretos, y limpiar perfiles/resultados locales al terminar según política del equipo. |
| Restricciones de archivo/host/origen no son una frontera de seguridad robusta; allowlist de orígenes no sigue redirecciones. | No ampliar permisos; conservar límites del cliente/sistema operativo, no usar `--allow-unrestricted-file-access`, no exponer el servidor en `0.0.0.0`, limitar el destino a localhost y la demo, y tratar contenido/peticiones observados como potencialmente sensibles. |

## Recomendación

**No instalarlo ni configurarlo ahora.** La solicitud actual es evaluar, no desplegar, y el proyecto ya tiene Playwright Test con proyectos Chromium, Firefox y WebKit. El MCP aportaría valor complementario para exploración asistida y diagnóstico del checkout; no cubriría el rol del runner en la ejecución repetible de tests. Además, el README oficial recomienda considerar CLI + Skills para agentes de código y declara expresamente que Playwright MCP no es una frontera de seguridad.

Si después se prioriza exploración interactiva, propongo un piloto separado y acotado a la demo, con versión fijada, contexto aislado, sin herramienta de ejecución arbitraria y sin ampliar permisos del workspace. Esa adopción requeriría una decisión posterior; este informe no instala ni configura nada.

## Fuentes

- [Repositorio y README oficial: microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — propósito, comparación CLI/MCP, herramientas, opciones, perfiles, instalación y advertencia de seguridad.
- [Manifiesto oficial en la rama main](https://raw.githubusercontent.com/microsoft/playwright-mcp/main/package.json) — autor, versión declarada, licencia y requisito de Node.js.
- [Configuración Playwright de MiniModa](../playwright.config.ts) — runner y proyectos actuales (archivo local del repositorio).
- [Instrucciones de tests de MiniModa](../tests/AGENTS.md) — demo autorizada y convenciones del checkout (archivo local del repositorio).

**A VERIFICAR antes de adoptar:** que `0.0.86` siga siendo la versión publicada estable al momento de instalar; el README consultado usa `@latest` y el acceso directo a la ficha de npm no estuvo disponible durante esta revisión. También habría que validar el conjunto exacto de herramientas que exponga la versión fijada y la configuración concreta de sandbox del cliente MCP elegido.
