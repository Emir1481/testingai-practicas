
# Clase 6 · Informe de pruebas de API y de carga

**Academia:** AcademiaQA - TestingAI
**API:** MiniModa API 1.0.0
**Modo:** con-defectos
**Entorno:** http://localhost:4000
**Sistema operativo:** Windows 10
**Herramientas:** VS Code, Swagger UI, Git, GitHub, Node.js v22.20.0
**Cliente de API:** Bruno + Bruno CLI
**Versión de k6:** v2.4.0 (windows/amd64)
**IA utilizada:** ChatGPT

## 1. Casos de prueba

Los resultados esperados fueron definidos a partir del contrato OpenAPI disponible en http://localhost:4000/openapi.json, siguiendo un enfoque de pruebas de caja negra.


| ID | Tipo | Solicitud | Esperado (contrato) | Cita del contrato | Obtenido | ¿Pasa? |
|---|---|---|---|---|---|---|
| TC-01 | Negativo | GET /productos/999 | 404 y esquema Error si no existe | paths./productos/{id}.get.responses.404 | 200 con producto null. 0/3 tests aprobados. | FAIL |
| TC-02 | Negativo | POST /carritos/{carritoId}/items con productoId=3 y cantidad=0 | 400 | paths./carritos/{carritoId}/items.post.responses.400; components.schemas.NuevoItem | 201. Permite cantidad 0. 0/2 tests aprobados. | FAIL |
| TC-03 | Valor límite | GET /productos?max=0 | 200. Productos con precio menor o igual a 0. | paths./productos.get.parameters; paths./productos.get.responses.200 | 200. 3/3 tests aprobados. | PASS |
| TC-04 | Secuencia | POST /carritos y GET /carritos/{carritoId} | 201 y 200. Mismo ID. | paths./carritos.post.responses.201; paths./carritos/{carritoId}.get.responses.200 | 201 y 200. Carrito recuperado correctamente. 7/7 tests aprobados. | PASS |
| TC-05 | Idempotencia | POST /pedidos dos veces con la misma clave y cuerpo | 201, mismo pedido, Idempotent-Replayed true y sin duplicación. | paths./pedidos.post.description; paths./pedidos.post.responses.201 | Idempotencia correcta. Una falla adicional por precioUnitario de tipo string. 15/16 tests aprobados. | FAIL |
| TC-06 | Formato de error | GET /productos?pagina=0 | 400 y esquema Error. | paths./productos.get.responses.400; components.schemas.Error | 400. Esquema correcto. 5/5 tests aprobados. | PASS |
| TC-07 | Búsqueda | GET /productos/buscar?q=remera | 200 y productos de tipo array. | paths./productos/buscar.get.responses.200; components.schemas.ResultadoBusqueda | 200. 2/2 tests aprobados. Tiempo individual: 35 ms. | PASS |

### Precondiciones y datos de prueba

#### TC-01
- Verificar que el producto con ID 999 no exista.

#### TC-02
- Crear un carrito abierto.
- Verificar que el producto con ID 3 exista.
- Enviar el siguiente cuerpo:

```json
{
  "productoId": 3,
  "cantidad": 0
}
```

#### TC-03
- Utilizar el valor mínimo permitido para el parámetro max.
- Una lista vacía es un resultado válido.

#### TC-04
- Crear un carrito vacío.
- Guardar el ID devuelto.
- Consultar el carrito utilizando ese mismo ID.

#### TC-05
- Crear un carrito.
- Verificar que el producto 3 exista y tenga stock.
- Agregar una unidad del producto.
- Confirmar el pedido utilizando el encabezado:

`Idempotency-Key: {{claveTC05}}`

Cuerpo de la solicitud:

```json
{
  "carritoId": "{{carritoIdTC05}}",
  "email": "ana@ejemplo.com",
  "tarjeta": "4111111111111111",
  "pais": "AR"
}
```

- Repetir exactamente la misma solicitud.
- Comparar los identificadores de ambos pedidos.
- Verificar el encabezado Idempotent-Replayed.
- Comprobar que no se haya creado un segundo pedido.

#### TC-06
- Enviar pagina=0, valor inferior al mínimo permitido.
- Verificar los campos obligatorios del esquema Error:
  - codigo: string.
  - mensaje: string.
  - detalles: array de strings.


## 2. Resultados de la colección

**Herramienta:** Bruno CLI.
**Entorno:** local.
**API:** http://localhost:4000
**Modo:** con-defectos.

**Comando ejecutado:**

```powershell
bru run "Pruebas Clase 6" --env local | Tee-Object -FilePath "../../resultados/coleccion.txt"
```

### Resumen de ejecución

| Métrica | Resultado |
|---|---|
| Estado general | FAIL |
| Solicitudes ejecutadas | 13 |
| Solicitudes aprobadas | 10 |
| Solicitudes fallidas | 3 |
| Tests ejecutados | 39 |
| Tests aprobados | 33 |
| Tests fallidos | 6 |
| Porcentaje de aprobación | 84,62 % |
| Duración total | 1588 ms |
| Archivo de salida | resultados/coleccion.txt |

### Hallazgos

- BUG-01: La consulta de un producto inexistente devuelve HTTP 200 en lugar de 404.
- BUG-02: La API permite agregar un producto al carrito con cantidad igual a cero.
- BUG-03: El campo precioUnitario se devuelve como string en lugar de number.

### Observaciones

La ejecución automatizada permitió reproducir los tres hallazgos identificados durante las pruebas individuales.

La idempotencia funciona correctamente cuando el encabezado Idempotency-Key está habilitado en ambas solicitudes.

Se utilizaron variables dinámicas para compartir identificadores entre solicitudes y una clave de idempotencia diferente para cada ejecución completa.

La búsqueda de productos respondió HTTP 200 en 35 ms. Este tiempo corresponde a una solicitud individual y no representa una medición de rendimiento bajo carga.

## 3. Issues

Durante las pruebas funcionales y de rendimiento se identificaron
cuatro defectos o incumplimientos de los criterios de evaluación.

| Issue | Defecto | Caso de prueba | Severidad | Etiqueta |
|---|---|---|---|---|
| [#3](https://github.com/Emir1481/testingai-practicas/issues/3) | BUG-01 - Producto inexistente devuelve HTTP 200 | TC-01 | Media | api |
| [#4](https://github.com/Emir1481/testingai-practicas/issues/4) | BUG-02 - Permite agregar productos con cantidad 0 | TC-02 | Media | api |
| [#5](https://github.com/Emir1481/testingai-practicas/issues/5) | BUG-03 - precioUnitario se devuelve como string | TC-05B | Media | api |
| [#6](https://github.com/Emir1481/testingai-practicas/issues/6) | BUG-04 - Incumplimiento del umbral p95 con 20 VU | k6 - 20 VU | Media | performance |

Los cuatro issues permanecen abiertos.

Los defectos funcionales se identificaron utilizando el contrato
OpenAPI como oráculo de pruebas.

El hallazgo de rendimiento se identificó mediante los umbrales
establecidos para la práctica.

Cada reporte contiene pasos para reproducir, resultados esperados,
resultados obtenidos, entorno, impacto y evidencias.


## 4. Preguntas para el equipo

- ¿Cuál debe ser el texto exacto de los mensajes de error?
- ¿Cuánto tiempo debe conservarse una Idempotency-Key?

Estos comportamientos no están completamente especificados en el contrato, por lo que no se consideran defectos.

## 5. Carga y conclusión


### Perfil de carga

**Objetivo:** evaluar el comportamiento de MiniModa API ante
distintos niveles de concurrencia.

**Herramienta:** k6.

**Endpoint:** GET /productos/buscar?q=remera

**URL base:** http://localhost:4000

**Modo:** con-defectos.

**Escenarios:**

| Corrida | Usuarios virtuales | Propósito |
|---|---|---|
| 1 | 1 VU | Carga mínima |
| 2 | 5 VU | Línea base (baseline) |
| 3 | 20 VU | Carga elevada |

**Etapas de cada corrida:**

- Ramp-up: 10 segundos.
- Carga estable: 30 segundos.
- Ramp-down: 5 segundos.
- Duración total: 45 segundos.
- Pausa entre iteraciones: 1 segundo.

**Validaciones (checks):**

- Código HTTP 200.
- Campo productos de tipo array.

**Umbrales (thresholds):**

- http_req_duration: p(95)<300
- http_req_failed: rate<0.01

**Métricas a registrar:**

- Percentil 90 (p90).
- Percentil 95 (p95).
- Tasa de errores HTTP.
- Solicitudes por segundo (RPS).
- Cumplimiento de los umbrales.

**Justificación:**

Se seleccionó el endpoint de búsqueda porque permite realizar
consultas repetidas sin modificar los datos de la aplicación.

Se utilizarán tres niveles de concurrencia para comparar el
comportamiento de la API ante el incremento de usuarios virtuales.

**Limitaciones:**

La API y k6 se ejecutarán en la misma computadora.
Los resultados estarán condicionados por los recursos disponibles
del equipo y no representan un entorno de producción.

Los umbrales son criterios de evaluación de esta práctica,
no acuerdos de nivel de servicio de producción.

### Resultados de k6

Fecha de ejecución: 27/11/2026.

| Corrida | p90 | p95 | Tasa de error | Solicitudes por segundo | Umbrales |
|---|---|---|---|---|---|
| 1 VU | 56.23 ms | 56.43 ms | 0.00% | 0.956 | PASS |
| 5 VU (línea base) | 55.99 ms | 59.17 ms | 0.00% | 4.023 | PASS |
| 20 VU | 403.46 ms | 414.39 ms | 0.00% | 12.589 | FAIL |

### Métricas adicionales

| Métrica | 1 VU | 5 VU | 20 VU |
|---|---|---|---|
| Promedio | 45.01 ms | 44.65 ms | 325.46 ms |
| Mínimo | 26.27 ms | 25.78 ms | 25.40 ms |
| Mediana | 44.15 ms | 41.32 ms | 357.97 ms |
| Máximo | 61.26 ms | 67.59 ms | 464.25 ms |
| Solicitudes HTTP | 44 | 185 | 577 |
| Checks aprobados | 88/88 | 370/370 | 1154/1154 |
| Iteraciones interrumpidas | 0 | 0 | 0 |
| Duración real | 46.0 s | 46.0 s | 45.8 s |

### Cumplimiento de umbrales

| Umbral | 1 VU | 5 VU | 20 VU |
|---|---|---|---|
| http_req_duration: p(95)<300 | PASS | PASS | FAIL |
| http_req_failed: rate<0.01 | PASS | PASS | PASS |

### Evidencias de rendimiento

- [Script de k6](k6/carga.js)
- [Resumen de 1 VU](k6/resultados/resumen-1-vu.txt)
- [Resumen de 5 VU](k6/resultados/resumen-5-vu.txt)
- [Resumen de 20 VU](k6/resultados/resumen-20-vu.txt)
- [Reporte HTML de 20 VU](k6/resultados/reporte-20-vu.html)
- [Issue de rendimiento #6](https://github.com/Emir1481/testingai-practicas/issues/6)

### Análisis de rendimiento

Con 1 y 5 usuarios virtuales, la API presentó tiempos de
respuesta bajos y estables, cumpliendo ambos umbrales.

Al incrementar la carga de 5 a 20 usuarios virtuales, el
percentil 95 pasó de 59.17 ms a 414.39 ms, aproximadamente
siete veces el valor de la línea base.

El escenario de 20 VU superó el umbral de latencia en
114.39 ms, equivalente a un 38.13%.

Las solicitudes por segundo aumentaron de 4.023 a 12.589,
pero el incremento no fue proporcional al aumento de
usuarios virtuales.

No se registraron errores HTTP ni fallas en los checks
funcionales durante las tres corridas.

El reporte HTML muestra latencias elevadas durante el
período de carga estable, lo que respalda el incumplimiento
observado en el resumen de k6.

### Hipótesis

1. Posible limitación en el procesamiento de solicitudes
   concurrentes por parte de la API.

2. Posible contención de recursos al ejecutar la API y k6
   en la misma computadora.

Estas hipótesis requieren pruebas adicionales y monitoreo
de recursos para ser confirmadas.

### Conclusión

Las pruebas funcionales permitieron identificar tres
incumplimientos del contrato OpenAPI de MiniModa API.

La colección automatizada de Bruno ejecutó 13 solicitudes
y 39 tests, de los cuales 33 fueron aprobados y 6 fallaron.

Las pruebas de rendimiento demostraron que la API cumple
los umbrales definidos con 1 y 5 usuarios virtuales, pero
incumple el criterio de latencia p95 con 20 usuarios
virtuales.

Aunque todas las solicitudes de carga respondieron
correctamente, se observó una degradación significativa
en los tiempos de respuesta al incrementar la concurrencia.

Se registraron cuatro issues en GitHub: tres funcionales
y uno de rendimiento.

Se recomienda corregir los defectos funcionales, investigar
la causa del incremento de latencia y repetir las pruebas
en condiciones controladas.

### Límites

- Se realizó una sola corrida por escenario.
- La API y k6 se ejecutaron en la misma computadora.
- No se monitorearon CPU, memoria ni recursos internos.
- Se evaluó un único endpoint de rendimiento.
- Cada escenario tuvo una duración planificada de 45 segundos.
- No se determinó la capacidad máxima de la API.
- Los umbrales corresponden a la práctica, no a un SLA
  de producción.
- Los resultados no pueden extrapolarse directamente
  a un entorno productivo.
- No se inspeccionó ni modificó el código fuente de la API.
  Las pruebas siguieron un enfoque de caja negra.


## 6. Evidencia de preparación del entorno

- API ejecutada correctamente en localhost.
- Swagger UI disponible en http://localhost:4000/docs/
- Endpoint verificado: GET /health.
- Código HTTP obtenido: 200.
- Estado obtenido: ok.
- Modo obtenido: con-defectos.
- Versión obtenida: 1.0.0.
- Tiempo de respuesta observado: 27 ms.

### Incidencia durante la configuración

Swagger UI no cargaba sus recursos CSS y JavaScript, mostrando errores HTTP 404.

Se solucionó utilizando la barra final en la dirección:

http://localhost:4000/docs/

No se realizaron modificaciones en el código fuente de la API.
