
# Preguntas abiertas - MiniModa

## Clase 5 - TestingAI AcademiaQA

Fecha: 25/11/2026

Aplicación: https://minimoda-navy.vercel.app

## Objetivo

Registrar las preguntas que surgieron durante la
exploración de MiniModa y el contraste entre el
kit de bienvenida y el comportamiento de la aplicación.

No se pretende determinar unilateralmente cuál de
las fuentes es correcta, sino solicitar aclaraciones
al equipo para establecer los requisitos vigentes.

## 1. Preguntas para el equipo de MiniModa

| ID | Tema | Pregunta | Referencias | Prioridad propuesta | Estado |
|---|---|---|---|---|---|
| PA-01 | Envío gratuito | ¿Cuál es el umbral vigente de envío gratis en Argentina: $50.000 o $80.000? | CT-01, AF-01 a AF-04 | Alta | Abierta |
| PA-02 | Cálculo de envío | ¿Por qué Checkout cobra $3.500 de envío cuando el subtotal es de $80.200? | CMP-17, CMP-18, MM-4, EV-07 | Alta | Abierta |
| PA-03 | Carrito | ¿Los productos deben permanecer en el carrito después de recargar la página o la pérdida es un comportamiento temporal aceptado? | CT-02, MM-5, EV-04, EV-05, EV-20 | Alta | Abierta |
| PA-04 | Stock | ¿Los productos sin stock deben ocultarse o permanecer visibles con el botón deshabilitado? | CT-03, EV-02, EV-03 | Media | Abierta |
| PA-05 | Contraseña | ¿La longitud mínima vigente es de 6 u 8 caracteres? | CT-04, EV-09, EV-10, EV-11 | Media | Abierta |
| PA-06 | Edad | ¿La edad mínima vigente para registrarse es de 13 o 18 años? | CT-05, EV-12, EV-13 | Alta | Abierta |
| PA-07 | Ayuda | ¿Se implementará la página /ayuda o se actualizará la documentación que la menciona? | CT-06, EV-14, EV-15 | Media | Abierta |
| PA-08 | Cupón | ¿El cupón MINIMODA10 sigue vigente? ¿Dónde debería ingresarse para aplicar el descuento del 10%? | CT-07, EV-08 | Alta | Abierta |
| PA-09 | Créditos | ¿La financiación en Créditos debe ser sin interés o aplicar un interés del 10%? | CT-08, MM-6, EV-16 | Alta | Abierta |
| PA-10 | Cuotas | ¿Las tres cuotas sin interés de los productos corresponden a una modalidad diferente del sistema de Créditos? | CMP-05, CMP-11, CMP-29, CMP-30 | Alta | Abierta |
| PA-11 | Promoción | ¿El descuento del 20% aplica a todo el catálogo o exclusivamente a los productos destacados? | CMP-04, CMP-10 | Media | Abierta |
| PA-12 | Tarifas de envío | ¿Puede el equipo proporcionar la tabla vigente de tarifas por país o zona mencionada en el chat de Lucas? | AF-35, AF-36, EV-17 | Alta | Abierta |
| PA-13 | Países | ¿La tienda debe permitir envíos a cualquier país o solamente a los países disponibles en el selector? | AF-30 | Media | Abierta |
| PA-14 | Email | ¿La validación de email debe comprobar solamente el formato o también la existencia del dominio? | AF-21, AF-41, EV-24, EV-25 | Media | Abierta |

## 2. Verificaciones pendientes

Las siguientes condiciones no fueron ejecutadas
completamente durante esta exploración.

| ID | Funcionalidad | Prueba pendiente | Estado |
|---|---|---|---|
| VP-01 | Envío gratuito | Comprobar el valor límite exacto de $80.000 y otros importes cuando se confirme la regla vigente | Pendiente |
| VP-02 | Envíos internacionales | Verificar el cálculo de las tarifas para distintos países | Pendiente |
| VP-03 | Tienda | Ejecutar individualmente los filtros de edad, color y precio | Pendiente |
| VP-04 | Tienda | Verificar la búsqueda por nombre y las opciones de ordenamiento | Pendiente |
| VP-05 | Checkout | Intentar confirmar una compra con carrito vacío y datos sintéticos válidos | Pendiente |
| VP-06 | Registro | Verificar el límite superior de edad con valores 119, 120 y 121 | Pendiente |
| VP-07 | Registro | Verificar el rechazo de edades decimales | Pendiente |
| VP-08 | Registro | Intentar registrarse sin aceptar los términos y condiciones | Pendiente |
| VP-09 | Login | Verificar el comportamiento del inicio de sesión simulado | Pendiente |
| VP-10 | Créditos | Verificar la solicitud de crédito, el pago de cuotas y el aumento del límite | Pendiente |
| VP-11 | Cupón | Validar el descuento de MINIMODA10 cuando exista un mecanismo disponible para aplicarlo | Pendiente |
| VP-12 | Email | Verificar el comportamiento ante correos con formato válido y dominios inexistentes o incorrectos | Pendiente |

## 3. Hipótesis generales

- Algunos documentos podrían estar desactualizados.
- Podrían existir cambios de requisitos no documentados.
- Algunas funcionalidades podrían estar pendientes
  de implementación.
- Podrían existir defectos en la aplicación.
- Algunas discrepancias podrían corresponder a
  comportamientos conocidos y aceptados temporalmente
  por el equipo.

Estas hipótesis no representan conclusiones definitivas.

## 4. Limitaciones de la exploración

- Las pruebas fueron realizadas sobre la interfaz
  de usuario de MiniModa.
- No se inspeccionó el código fuente ni la arquitectura.
- No se verificaron técnicamente los mecanismos
  de almacenamiento del navegador.
- No se comprobó el envío real de correos electrónicos.
- No se ejecutaron todas las combinaciones posibles
  de datos ni todos los valores límite.
- La financiación se comprobó mediante el simulador,
  sin confirmar una solicitud de crédito.
- El error 404 de Ayuda se verificó visualmente,
  sin inspeccionar el código de estado HTTP.
- No se dispone de la tabla de tarifas de envío
  mencionada por Lucas.

## 5. Referencias de la práctica

### Documentación

- mapa-afirmaciones.md
- tabla-info-vs-app.md
- Carpeta evidencias/

### Qase

Proyecto: MiniModa (MM).

Suite: Clase 5 · Exploratorio MiniModa.

Test Run: [Exploratorio MiniModa.](https://app.qase.io/public/report/77f87ade3f9ddabe4bab4438148d66b6557dd8fd)

| Caso | Resultado |
|---|---|
| MM-4 - Envío gratuito | Failed |
| MM-5 - Persistencia del carrito | Failed |
| MM-6 - Financiación sin interés | Failed |

Casos ejecutados: 3 de 3.

### GitHub

Issue de entrega:

https://github.com/Simonethg/minimoda-test/issues/12

## 6. Conclusión

La exploración permitió identificar diferencias entre
las fuentes documentales y el comportamiento observado
en MiniModa.

Se requiere una respuesta del equipo para determinar
los requisitos vigentes y clasificar definitivamente
las discrepancias.

Las condiciones pendientes podrán utilizarse como
base para futuras pruebas.

La IA se utilizó como apoyo para el análisis,
la organización de la información y la documentación.
El tester ejecutó las pruebas y revisó los resultados.
