
# Tabla de comparación: Información vs. Aplicación

## Clase 5 - TestingAI AcademiaQA

Aplicación: https://minimoda-navy.vercel.app

Fecha de exploración: 25/11/2026

## Objetivo

Comparar las afirmaciones del kit de bienvenida con
el comportamiento observado en MiniModa, registrando
evidencias, discrepancias e hipótesis.

## Tabla de comparación

| ID | Afirmación | Fuente | Qué hace o muestra la app | Evidencia | Hipótesis | Estado |
|---|---|---|---|---|---|---|
| CMP-01 | Envío gratis desde $50.000 | Manual y Sprint 14 (AF-01, AF-02) | El banner anuncia envío gratis desde $80.000 | EV-01-inicio.png | Posible documentación desactualizada | Verificación parcial |
| CMP-02 | Envío gratis desde $80.000 | Chat de Lucas y Changelog (AF-03, AF-04) | El banner anuncia el mismo importe, pero Checkout cobra $3.500 con un subtotal de $80.200 | EV-01-inicio.png y EV-07-envio-80200.png | Posible inconsistencia entre publicidad e implementación | Discrepancia confirmada |
| CMP-03 | Las fichas muestran 3 cuotas sin interés | Manual, sección 5 (AF-34) | Los productos destacados y la ficha del Enterito de Algodón Nubes muestran 3 cuotas sin interés | EV-01-inicio.png y EV-03-ficha-sin-stock.png | Coincidencia para los productos observados | Verificado visualmente |
| CMP-04 | Promoción del 20%: alcance pendiente de confirmar | Manual, sección 1 | Los cuatro productos destacados muestran 20% menos | EV-01-inicio.png | Falta comprobar productos no destacados | Verificación parcial |
| CMP-05 | Financiación siempre sin interés | Manual, README y Sprint 14 (AF-22 a AF-24) | El banner anuncia 3 cuotas sin interés, pero la sección Créditos muestra un interés del 10% | EV-01-inicio.png y EV-16-creditos.png | Posible diferencia entre financiación comercial y sistema de créditos | Discrepancia observada |
| CMP-06 | Filtros por edad, color, precio, orden y búsqueda por nombre | CHANGELOG.md, v0.9.0 (AF-29) | Todos los controles están visibles en la tienda | EV-02-tienda.png | Coincidencia visual; falta ejecutar los filtros | Verificación parcial |
| CMP-07 | Los productos sin stock no aparecen en el catálogo ni se pueden abrir | Manual, sección 1 (AF-11) | Enterito de Algodón Nubes aparece en el catálogo y permite acceder a su ficha | EV-02-tienda.png y EV-03-ficha-sin-stock.png | Posible documentación desactualizada | Discrepancia confirmada |
| CMP-08 | Los productos sin stock aparecen con el botón deshabilitado | Chat de Lucas (AF-12) | El producto aparece sin stock y no permite agregarlo al carrito. El contador permanece en 0 | EV-02-tienda.png y EV-03-ficha-sin-stock.png | Coincide con lo informado por Lucas | Verificado para el producto probado |
| CMP-09 | No se puede confirmar una compra con el carrito vacío | Manual y Changelog (AF-19, AF-20) | Carrito vacío, total $0 y botón Finalizar compra gris | EV-02-tienda.png | Posible coincidencia; falta probar Checkout | Verificación parcial |
| CMP-10 | Promoción del 20%: alcance pendiente de confirmar | Manual, sección 1 | Los destacados visibles tienen descuento y los no destacados visibles no lo muestran | EV-02-tienda.png | La promoción podría limitarse a destacados | Verificación parcial |
| CMP-11 | Las fichas muestran 3 cuotas sin interés | Manual, sección 5 (AF-34) | El producto de $12.000 muestra 3 cuotas sin interés de $4.000 | EV-03-ficha-sin-stock.png | Coincidencia con la documentación | Verificado para el producto probado |
| CMP-12 | Plazo de cambios de 30 días | Manual, sección 6 (AF-33) | La ficha y la página Cambios y devoluciones indican un plazo de 30 días | EV-03-ficha-sin-stock.png y EV-18-cambios-devoluciones.png | Coincidencia informativa | Verificado visualmente |
| CMP-13 | El carrito conserva los productos al recargar | Manual, sección 2 (AF-08) | Antes de recargar contiene un producto de $8.500. Después queda vacío con total $0 | EV-04-carrito-antes.png y EV-05-carrito-despues.png | Posible deuda técnica o documentación desactualizada | Discrepancia confirmada |
| CMP-14 | El carrito se guarda en el navegador | README.md (AF-09) | El producto desaparece después de recargar | EV-04-carrito-antes.png y EV-05-carrito-despues.png | No se observa persistencia; mecanismo de almacenamiento no verificado | Verificación parcial |
| CMP-15 | El carrito puede perderse al recargar | Chat de Lucas (AF-10) | Después de recargar se pierde el producto agregado | EV-04-carrito-antes.png y EV-05-carrito-despues.png | Coincide con la deuda técnica informada por Lucas | Verificado en esta ejecución |
| CMP-16 | Envío gratis desde $50.000 en Argentina | Manual y Sprint 14 (AF-01, AF-02) | Con Argentina seleccionada y un subtotal de $53.400 se cobra un envío de $3.500 | EV-06-envio-53400.png | Posible documentación desactualizada | Discrepancia confirmada |
| CMP-17 | Envío gratis desde $80.000 en Argentina | Chat de Lucas y Changelog (AF-03, AF-04) | Con un subtotal de $53.400 se cobra un envío de $3.500. Con $80.200 se sigue cobrando $3.500 | EV-06-envio-53400.png y EV-07-envio-80200.png | Posible defecto en el cálculo del envío o regla no documentada | Discrepancia confirmada |
| CMP-18 | El banner anuncia envío gratis desde $80.000 | Página de inicio de MiniModa | El Checkout cobra $3.500 de envío para Argentina con un subtotal de $80.200 | EV-01-inicio.png y EV-07-envio-80200.png | Posible inconsistencia entre publicidad y Checkout | Discrepancia confirmada |
| CMP-19 | El cupón MINIMODA10 aplica un 10% de descuento sobre el subtotal | Manual, sección 3 (AF-05) | No se encuentra un campo para ingresar el cupón en Checkout | EV-08-cupon.png | Posible funcionalidad ausente o documentación desactualizada | Discrepancia observada |
| CMP-20 | El cupón MINIMODA10 está disponible en Checkout | Chat de Lucas y Changelog v0.9.1 (AF-06, AF-07) | El formulario no presenta un campo para aplicar el cupón | EV-08-cupon.png | Posible diferencia entre la versión documentada y la desplegada | Discrepancia observada |
| CMP-21 | Contraseña de mínimo 6 caracteres | Sprint 14, HIST-12 (AF-13) | La aplicación rechaza la contraseña de 6 caracteres | EV-09-registro-password6.png | Posibles criterios de aceptación desactualizados | Discrepancia confirmada |
| CMP-22 | Contraseña de mínimo 8 caracteres | Manual, sección 4 (AF-14) | Rechaza contraseñas de 6 y 7 caracteres y acepta una de 8. Muestra el mensaje: La contraseña debe tener al menos 8 caracteres | EV-09-registro-password6.png, EV-10-registro-password8.png y EV-11-registro-password7.png | Coincidencia con el manual para los valores probados | Verificado |
| CMP-23 | Edad entera entre 13 y 120 años | Manual, figura 5 (AF-16) | Rechaza el registro con 12 años y acepta el registro con 13 años | EV-12-registro-edad12.png y EV-13-registro-edad13.png | Coincidencia con el límite inferior documentado | Límite inferior verificado |
| CMP-24 | Edad mínima de 18 años | Sprint 14, HIST-12 (AF-15) | La aplicación permite completar el registro con 13 años | EV-13-registro-edad13.png | Posibles criterios de aceptación desactualizados o cambio de requisito | Discrepancia confirmada |
| CMP-25 | La página /ayuda debería estar disponible | README.md (AF-25) | Al ingresar directamente a /ayuda aparece una pantalla de error 404 | EV-15-pagina-ayuda.png | Posible funcionalidad pendiente | Discrepancia confirmada |
| CMP-26 | Se agregó la página /ayuda | CHANGELOG.md, v0.8.0 (AF-26) | La página muestra el mensaje No encontramos esta página | EV-15-pagina-ayuda.png | Posible diferencia entre documentación y versión desplegada | Discrepancia confirmada |
| CMP-27 | Se puede acceder a Ayuda desde el pie del sitio | Manual, sección 6 (AF-27) | Existe una sección titulada Ayuda, pero no se observa un enlace directo a /ayuda | EV-14-footer-ayuda.png | Posible documentación desactualizada | Discrepancia confirmada |
| CMP-28 | La página /ayuda muestra un error 404 | Chat de Lucas (AF-28) | Al ingresar a /ayuda se muestra una pantalla de error 404 | EV-15-pagina-ayuda.png | Coincide con la funcionalidad pendiente informada por Lucas | Verificado visualmente |
| CMP-29 | Las cuotas de Créditos son sin interés | Sprint 14, HIST-21 y README.md (AF-22, AF-23) | La sección Créditos informa un interés del 10%. Para $50.000 muestra un interés de $5.000 y un total de $55.000 | EV-16-creditos.png | Posible cambio de requisito o documentación desactualizada | Discrepancia observada |
| CMP-30 | La financiación en Créditos es siempre sin interés | Manual, sección 5 (AF-24) | El simulador muestra financiación de $50.000 en 3 cuotas con un total de $55.000 | EV-16-creditos.png | Posible diferencia entre financiación comercial y sistema de créditos | Discrepancia observada |
| CMP-31 | El costo de envío cambia según el país | Manual, sección 3 (AF-35) | La página Envíos informa tarifas diferentes según la zona geográfica | EV-17-politica-envios.png | Coincidencia informativa; falta comprobar las tarifas en Checkout | Verificación parcial |
| CMP-32 | Tabla de costos de envío por zona pendiente | Manual, sección 3 (AF-36) y Chat de Lucas | La página describe las zonas geográficas, pero no presenta una tabla con importes | EV-17-politica-envios.png | Información de envío incompleta | Pendiente de aclaración |
| CMP-33 | El plazo para cambios es de 30 días | Manual, sección 6 (AF-33) | La página Cambios y devoluciones establece un plazo de 30 días, sin uso y con la etiqueta puesta | EV-03-ficha-sin-stock.png y EV-18-cambios-devoluciones.png | Coincidencia documental | Verificado visualmente |
| CMP-34 | El contacto para cambios es hola@minimoda.test y el correo no existe | Manual, sección 6 (AF-37) | La política confirma el correo ficticio y la Bandeja muestra avisos simulados | EV-18-cambios-devoluciones.png y EV-21-bandeja-avisos.png | Coincidencia informativa y funcional para los avisos; no se verificó el envío externo | Verificación parcial |
| CMP-35 | MiniModa no procesa pagos reales | README.md y Manual, página 2 (AF-38, AF-39) | Los términos y condiciones indican que la tienda es ficticia y no procesa pagos reales | EV-19-terminos-condiciones.png | Coincidencia informativa con el kit | Verificado visualmente |
| CMP-36 | Se deben aceptar los términos y condiciones para registrarse | Sprint 14, HIST-12 (AF-18) | La página de términos está disponible y el formulario de registro presenta una casilla de aceptación | EV-09-registro-password6.png y EV-19-terminos-condiciones.png | Coincidencia visual; falta probar el registro sin aceptar los términos | Verificación parcial |
| CMP-37 | El carrito está en memoria del cliente y puede perderse al recargar | Chat de Lucas (AF-10) | La política de privacidad indica que el carrito vive en la memoria de la página. La prueba funcional demuestra que se pierde al recargar | EV-04-carrito-antes.png, EV-05-carrito-despues.png y EV-20-politica-privacidad.png | Posible documentación desactualizada en el manual de uso | Coincidencia documental y funcional |
| CMP-38 | El inicio de sesión es simulado | README.md (AF-31) | La política indica que no existen cuentas ni contraseñas almacenadas en un servidor | EV-20-politica-privacidad.png | Coincidencia informativa; falta probar el login | Verificación parcial |
| CMP-39 | Existe una bandeja de avisos de práctica | CHANGELOG.md, v0.8.0 (AF-32) | La Bandeja muestra los avisos de bienvenida correspondientes a los registros exitosos y los conserva después de recargar | EV-21-bandeja-avisos.png y EV-22-bandeja-despues.png | Coincidencia funcional con la documentación | Verificado |
| CMP-40 | Existe una bandeja de mails de práctica | README.md (AF-40) | Se observan avisos de bienvenida y confirmaciones de compras anteriores | EV-21-bandeja-avisos.png | Coincidencia con la documentación | Verificado |
| CMP-41 | Los avisos aparecen en la Bandeja y no se envían correos reales | Manual, sección 6 (AF-37) | Los mensajes de bienvenida aparecen en la Bandeja simulada | EV-21-bandeja-avisos.png | Coincidencia funcional para los avisos; no se verificó técnicamente el envío externo | Verificación parcial |
| CMP-42 | La Bandeja se guarda en el almacenamiento local | Política de privacidad de MiniModa | Los avisos observados permanecen después de recargar la página | EV-21-bandeja-avisos.png y EV-22-bandeja-despues.png | Comportamiento compatible con la política de privacidad | Persistencia verificada |
| CMP-43 | El país es obligatorio en Registro | Sprint 14, HIST-12 (AF-17) | Al intentar registrarse sin seleccionar un país, la aplicación rechaza el registro y muestra el mensaje: Seleccioná un país. | EV-23-registro-pais-obligatorio.png | Coincidencia con los criterios de aceptación | Verificado |
| CMP-44 | El registro incluye validaciones de email | CHANGELOG.md, v0.8.0 (AF-41) | Al ingresar un email sin arroba, la aplicación rechaza el registro y muestra el mensaje: El formato de email no es válido. | EV-24-registro-email-invalido.png | Coincidencia con las validaciones documentadas | Verificado para el formato probado |
| CMP-45 | El email se valida por formato en Checkout | Sprint 14, HIST-18 (AF-21) | Al ingresar testerexample.com, la aplicación rechaza la confirmación y muestra el mensaje: El formato de email no es válido. | EV-25-checkout-email-invalido.png | Coincidencia con los criterios de aceptación | Verificado para el formato probado |



## Evidencias

### EV-01 - Página de inicio

![Página de inicio de MiniModa](evidencias/EV-01-inicio.png)

### EV-02 - Tienda y productos sin stock

![Tienda de MiniModa](evidencias/EV-02-tienda.png)

### EV-03 - Ficha de producto sin stock

![Ficha de producto sin stock](evidencias/EV-03-ficha-sin-stock.png)

### EV-04 - Carrito antes de recargar

![Carrito antes de recargar](evidencias/EV-04-carrito-antes.png)

### EV-05 - Carrito después de recargar

![Carrito después de recargar](evidencias/EV-05-carrito-despues.png)

### EV-06 - Checkout con subtotal de $53.400

![Envío por debajo de $80.000](evidencias/EV-06-envio-53400.png)

### EV-07 - Checkout con subtotal de $80.200

![Costo de envío por encima del umbral](evidencias/EV-07-envio-80200.png)

### EV-08 - Ausencia del campo de cupón

![Checkout sin campo de cupón](evidencias/EV-08-cupon.png)

### EV-09 - Registro con contraseña de 6 caracteres

![Validación de contraseña](evidencias/EV-09-registro-password6.png)


### EV-10 - Registro con contraseña de 8 caracteres

![Registro exitoso](evidencias/EV-10-registro-password8.png)

### EV-11 - Registro con contraseña de 7 caracteres

![Validación del límite inferior de contraseña](evidencias/EV-11-registro-password7.png)

### EV-12 - Registro con edad de 12 años

![Validación de edad inferior al mínimo](evidencias/EV-12-registro-edad12.png)

### EV-13 - Registro con edad de 13 años

![Registro exitoso con 13 años](evidencias/EV-13-registro-edad13.png)

### EV-14 - Sección Ayuda del footer

![Footer de MiniModa](evidencias/EV-14-footer-ayuda.png)

### EV-15 - Página de Ayuda con error 404

![Página de Ayuda no disponible](evidencias/EV-15-pagina-ayuda.png)

### EV-16 - Financiación con interés

![Simulación de crédito con 10% de interés](evidencias/EV-16-creditos.png)

### EV-17 - Política de envíos

![Página de política de envíos](evidencias/EV-17-politica-envios.png)

### EV-18 - Política de cambios y devoluciones

![Página de cambios y devoluciones](evidencias/EV-18-cambios-devoluciones.png)

### EV-19 - Términos y condiciones

![Términos y condiciones de MiniModa](evidencias/EV-19-terminos-condiciones.png)


### EV-20 - Política de privacidad

![Política de privacidad de MiniModa](evidencias/EV-20-politica-privacidad.png)

### EV-21 - Bandeja de avisos antes de recargar

![Bandeja de avisos](evidencias/EV-21-bandeja-avisos.png)

### EV-22 - Bandeja de avisos después de recargar

![Persistencia de avisos](evidencias/EV-22-bandeja-despues.png)

### EV-23 - País obligatorio en Registro

![Validación de país obligatorio](evidencias/EV-23-registro-pais-obligatorio.png)

### EV-24 - Email inválido en Registro

![Validación de formato de email](evidencias/EV-24-registro-email-invalido.png)

### EV-25 - Email con formato inválido en Checkout

![Validación de email en Checkout](evidencias/EV-25-checkout-email-invalido.png)


## Observaciones finales

- Se realizó un recorrido exploratorio de MiniModa.
- Se registraron 41 afirmaciones provenientes del kit
  de bienvenida.
- Se documentaron 45 comparaciones entre las fuentes
  y el comportamiento observado.
- Se obtuvieron 25 evidencias identificadas desde
  EV-01 hasta EV-25.
- Se identificaron 8 grupos de discrepancias.
- Las coincidencias visuales no garantizan el
  funcionamiento completo de las reglas de negocio.
- Las condiciones no ejecutadas permanecen pendientes
  o con verificación parcial.
- Las discrepancias no se consideran automáticamente
  defectos de producto confirmados.
- Las hipótesis requieren una decisión del equipo
  cuando corresponda.
- Se utilizó IA como apoyo para el análisis y la
  documentación.
- El tester ejecutó las pruebas y revisó los resultados.
- Las cifras corresponden a los registros realizados,
  no a una medición de cobertura funcional.
- Las evidencias destinadas a publicación deben estar
  libres de datos personales y sensibles.


## Resultados de ejecución en Qase

- Proyecto: MiniModa (MM).
- Suite: Clase 5 · Exploratorio MiniModa.
- Test Run: [Exploratorio MiniModa](https://app.qase.io/public/report/77f87ade3f9ddabe4bab4438148d66b6557dd8fd).
- Fecha de ejecución: 25/11/2026.
- Estado del Test Run: Finalizado - Failed.

| ID Qase | Caso de prueba | Resultado | Referencias | Evidencias |
|---|---|---|---|---|
| MM-4 | Envío gratuito en Argentina | Failed | CT-01, CMP-17, CMP-18 | EV-01, EV-06, EV-07 |
| MM-5 | Persistencia del carrito | Failed | CT-02, CMP-13, CMP-37 | EV-04, EV-05, EV-20 |
| MM-6 | Financiación sin interés | Failed | CT-08, CMP-29, CMP-30 | EV-16 |

### Resumen de ejecución

- Casos registrados: 3.
- Casos ejecutados: 3.
- Passed: 0.
- Failed: 3.
- Sin ejecutar: 0.
- Porcentaje de ejecución: 100%.
- Tiempo total de ejecución: 12 minutos y 6 segundos.

Los resultados Failed corresponden a discrepancias
respecto a los requisitos documentados seleccionados.

No implican necesariamente tres defectos de producto
confirmados. Se requiere una definición del equipo.

### EV-26 - Test Run finalizado

![Resultados del Test Run en Qase](evidencias/EV-26-qase-run-finalizado.png)



## Reporte de hallazgos en GitHub

Repositorio: Simonethg/minimoda-test

Issue publicado:

https://github.com/Simonethg/minimoda-test/issues/12

| Hallazgo reportado | Referencias | Caso Qase |
|---|---|---|
| Cobro de envío por encima de $80.000 | CT-01, CMP-17, CMP-18 | MM-4 |
| Pérdida del carrito al recargar | CT-02, CMP-13, CMP-37 | MM-5 |
| Financiación con interés del 10% | CT-08, CMP-29, CMP-30 | MM-6 |
| Ausencia del campo de cupón | CT-07, CMP-19, CMP-20 | No registrado en Qase |
| Página de Ayuda no disponible | CT-06, CMP-25 a CMP-28 | No registrado en Qase |

Los cinco hallazgos principales se agruparon en un
único issue de entrega, incluyendo fuentes, pasos
de reproducción, resultados esperados y obtenidos,
evidencias, hipótesis y preguntas para el equipo.

Las demás discrepancias permanecen registradas
en el mapa de afirmaciones y la tabla de comparación.
