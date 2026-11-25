
# Mapa de afirmaciones - MiniModa

## Clase 5 - TestingAI AcademiaQA

### Objetivo

Identificar las afirmaciones presentes en el kit de bienvenida
de MiniModa, registrar sus fuentes y posteriormente contrastarlas
con el comportamiento real de la aplicación.

### Aplicación bajo prueba

https://minimoda-navy.vercel.app

### Mapa de afirmaciones

| ID | Tema | Afirmación | Fuente | Fecha | Comparación con la app |
|---|---|---|---|---|---|
| AF-01 | Envío | Envío gratis en Argentina desde $50.000 | manual-de-uso.pdf, sección 3 | Septiembre 2026 | Discrepancia confirmada — EV-06 y EV-07 |
| AF-02 | Envío | Envío gratis en Argentina desde $50.000 | criterios-aceptacion-sprint-14.pdf, HIST-18 | Julio 2026 | Discrepancia confirmada — EV-06 y EV-07 |
| AF-03 | Envío | Umbral de envío gratis de $80.000 | chat-lucas-dev.png | 12 de octubre | Discrepancia confirmada — EV-07|
| AF-04 | Envío | Envío gratis en Argentina desde $80.000 | CHANGELOG.md, v0.9.0 | Septiembre 2026 | Discrepancia confirmada — EV-07 |
| AF-05 | Cupón | MINIMODA10 aplica un 10% sobre el subtotal | manual-de-uso.pdf, sección 3 | Septiembre 2026 | Discrepancia observada — EV-08 |
| AF-06 | Cupón | MINIMODA10 aplica un 10% de descuento | chat-lucas-dev.png | 12 de octubre | Discrepancia observada — EV-08 |
| AF-07 | Cupón | MINIMODA10 aplica un 10% sobre el subtotal | CHANGELOG.md, v0.9.1 | Octubre 2026 | Discrepancia observada — EV-08 |
| AF-08 | Carrito | Los productos permanecen al recargar la página | manual-de-uso.pdf, sección 2 | Septiembre 2026 | Discrepancia confirmada — EV-04, EV-05 y EV-20 |
| AF-09 | Carrito | El carrito se guarda en el navegador | README.md | Agosto 2026 | Verificación parcial — EV-04 y EV-05 |
| AF-10 | Carrito | El carrito está en memoria del cliente y puede perderse al recargar | chat-lucas-dev.png | 12 de octubre | Coincidencia documental y funcional — EV-04, EV-05 y EV-20 |
| AF-11 | Stock | Los productos sin stock no aparecen en el catálogo | manual-de-uso.pdf, sección 1 | Septiembre 2026 | Discrepancia confirmada — EV-02 y EV-03|
| AF-12 | Stock | Los productos sin stock aparecen con el botón deshabilitado | chat-lucas-dev.png | 12 de octubre | Verificado para el producto probado — EV-02 y EV-03 |
| AF-13 | Registro | Contraseña de mínimo 6 caracteres | criterios-aceptacion-sprint-14.pdf, HIST-12 | Julio 2026 | Discrepancia confirmada — EV-09 y EV-11 |
| AF-14 | Registro | Contraseña de mínimo 8 caracteres | manual-de-uso.pdf, sección 4 | Septiembre 2026 | Verificado para los valores probados — EV-09, EV-10 y EV-11 |
| AF-15 | Registro | Edad mínima de 18 años | criterios-aceptacion-sprint-14.pdf, HIST-12 | Julio 2026 | Discrepancia confirmada — EV-13 |
| AF-16 | Registro | Edad entera entre 13 y 120 años | manual-de-uso.pdf, figura 5, página 6 | Septiembre 2026 | 	Límite inferior verificado — EV-12 y EV-13 |
| AF-17 | Registro | El país es obligatorio | criterios-aceptacion-sprint-14.pdf, HIST-12 | Julio 2026 | Verificado — EV-23 |
| AF-18 | Registro | Se deben aceptar los términos y condiciones | criterios-aceptacion-sprint-14.pdf, HIST-12 | Julio 2026 | 	Verificación parcial — EV-09 y EV-19 |
| AF-19 | Checkout | No se puede confirmar una compra con el carrito vacío | manual-de-uso.pdf, sección 3 | Septiembre 2026 | Verificación parcial — EV-02 |
| AF-20 | Checkout | No se puede confirmar una compra con el carrito vacío | CHANGELOG.md, v0.9.1 | Octubre 2026 | Verificación parcial — EV-02 |
| AF-21 | Checkout | El email se valida por formato | criterios-aceptacion-sprint-14.pdf, HIST-18 | Julio 2026 | Verificado para el formato probado - EV-25 |
| AF-22 | Créditos | Las cuotas son sin interés | criterios-aceptacion-sprint-14.pdf, HIST-21 | Julio 2026 | Discrepancia observada — EV-16 |
| AF-23 | Créditos | Las cuotas son sin interés | README.md | Agosto 2026 | Discrepancia observada — EV-16 |
| AF-24 | Créditos | La financiación en Créditos es siempre sin interés | manual-de-uso.pdf, sección 5 | Septiembre 2026 | Discrepancia observada — EV-16 |
| AF-25 | Ayuda | La página /ayuda debería estar disponible | README.md | Agosto 2026 | 	Discrepancia confirmada — EV-15 |
| AF-26 | Ayuda | Se agregó la página /ayuda | CHANGELOG.md, v0.8.0 | Agosto 2026 | Discrepancia confirmada — EV-15 |
| AF-27 | Ayuda | Se puede acceder a Ayuda desde el pie del sitio | manual-de-uso.pdf, sección 6 | Septiembre 2026 | Discrepancia confirmada — EV-14 |
| AF-28 | Ayuda | La página /ayuda devuelve un error 404 | chat-lucas-dev.png | 13 de octubre | Verificado visualmente — EV-15 |
| AF-29 | Tienda | Filtros por edad, color y precio, orden y búsqueda por nombre | CHANGELOG.md, v0.9.0 | Septiembre 2026 | Verificación parcial — EV-02 |
| AF-30 | Checkout | Se realizan envíos a cualquier país | README.md | Agosto 2026 | A VERIFICAR |
| AF-31 | Login | El inicio de sesión es simulado | README.md | Agosto 2026 | 	Verificación parcial — EV-20 |
| AF-32 | Avisos | Existe una bandeja de avisos de práctica | CHANGELOG.md, v0.8.0 | Agosto 2026 | 	Verificado — EV-21 y EV-22 |
| AF-33 | Devoluciones | El plazo para cambios es de 30 días | manual-de-uso.pdf, sección 6 | Septiembre 2026 | Verificado visualmente — EV-03 y EV-18 |
| AF-34 | Productos | Las fichas muestran 3 cuotas sin interés | manual-de-uso.pdf, sección 5 | Septiembre 2026 | Verificado para el producto probado — EV-03 |
| AF-35 | Envío | El costo de envío cambia según el país | manual-de-uso.pdf, sección 3 | Septiembre 2026 | Verificación parcial - EV-17 |
| AF-36 | Envío | La tabla de costos por zona está pendiente | manual-de-uso.pdf, sección 3 | Septiembre 2026 | Pendiente de aclaración - EV-17 |
| AF-37 | Devoluciones | El contacto para cambios es hola@minimoda.test, correo ficticio, y los avisos se muestran en la Bandeja | manual-de-uso.pdf, sección 6 | Septiembre 2026 |Verificación parcial — EV-18, EV-21 y EV-22 |
| AF-38 | Pagos | No existe un backend de pagos real | README.md | Agosto 2026 | Coincidencia informativa - EV-19 |
| AF-39 | Pagos | Los pagos no son reales | manual-de-uso.pdf, página 2 | Septiembre 2026 | Coincidencia informativa - EV-19 |
| AF-40 | Avisos | Existe una bandeja de mails de práctica | README.md | Agosto 2026 | Verificado - EV-21 y EV-22 |
| AF-41 | Registro | El registro incluye validaciones de email | CHANGELOG.md, v0.8.0 | Agosto 2026 | Rechazo de formato inválido verificado - EV-24 |



### Información pendiente

- Confirmar si la promoción del 20% aplica exclusivamente
  a los productos destacados.
- Obtener la tabla vigente de costos de envío por país o zona.
- Confirmar con el equipo cuál es el umbral de envío gratuito
  vigente y por qué no se aplica en Checkout.
- Confirmar con el equipo si la edad mínima requerida
  para el registro es de 13 o 18 años.
- Verificar el límite superior de edad y las edades decimales.
- Consultar si está prevista la implementación de /ayuda.
- Confirmar la disponibilidad del cupón MINIMODA10.
- Aclarar si Créditos debe aplicar un interés del 10%.
- Verificar el funcionamiento individual de los filtros.
- Verificar el Checkout con carrito vacío.
- Verificar la obligatoriedad de la aceptación de términos y condiciones.
- Verificar el comportamiento de Checkout ante direcciones
  de email con formato válido, pero con dominios incorrectos.
- Verificar el funcionamiento del inicio de sesión.
- Verificar la solicitud de créditos y el pago de cuotas.


### Observaciones

- Se registraron 41 afirmaciones provenientes del kit
  de bienvenida.
- Se conservaron las diferencias entre las fuentes.
- Las fechas del changelog son aproximadas.
- El recorte de chat no muestra el año.
- Las capturas del manual son evidencia documental,
  no evidencia de una ejecución actual.
- Se realizó un recorrido exploratorio de MiniModa,
  documentado mediante 25 capturas identificadas
  desde EV-01 hasta EV-25.
- Se identificaron 8 grupos de discrepancias.
- Las afirmaciones no comprobadas permanecen pendientes
  o con verificación parcial.
- Las discrepancias observadas no constituyen por sí
  solas defectos de producto confirmados.
- Las hipótesis requieren validación o una decisión
  del equipo cuando corresponda.
- La IA colaboró en el análisis y organización de la
  documentación. El tester realizó las pruebas y
  revisó los resultados.
- Las cifras registradas no representan una medición
  de cobertura funcional completa.



## Contradicciones entre las fuentes del kit y la aplicación

| ID | Tema | Afirmación de la fuente A | Afirmación de la fuente B | Referencias del mapa | Estado |
|---|---|---|---|---|---|
| CT-01 | Envío gratis | Manual y Sprint 14: desde $50.000 | Chat de Lucas y Changelog: desde $80.000 | AF-01 a AF-04 | Discrepancia confirmada con ambos umbrales - EV-06 y EV-07 |
| CT-02 | Persistencia del carrito | Manual: conserva los productos al recargar | Chat de Lucas: puede perderse al recargar | AF-08 a AF-10 | Contrastada - Posible manual desactualizado - EV-04, EV-05 y EV-20 |
| CT-03 | Productos sin stock | Manual: no aparecen en el catálogo | Chat de Lucas: aparecen con el botón deshabilitado | AF-11 y AF-12 | Contrastada - Posible manual desactualizado - EV-02 y EV-03 |
| CT-04 | Contraseña | Sprint 14: mínimo 6 caracteres | Manual: mínimo 8 caracteres | AF-13 y AF-14 | Contrastada - Posibles criterios desactualizados - EV-09, EV-10 y EV-11 |
| CT-05 | Edad de registro | Sprint 14: mínimo 18 años | Manual, figura 5: entre 13 y 120 años | AF-15 y AF-16 | Contrastada para el límite inferior - EV-12 y EV-13 |
| CT-06 | Página de ayuda | README, Manual y Changelog: página disponible o prevista | Chat de Lucas: devuelve error 404 | AF-25 a AF-28 | Contrastada visualmente - EV-14 y EV-15 |
| CT-07 | Cupón de descuento | Manual, Chat de Lucas y Changelog: cupón MINIMODA10 disponible | App: no presenta un campo para ingresar el cupón | AF-05 a AF-07 | Discrepancia observada - EV-08 |
| CT-08 | Créditos e intereses | Manual, README y Sprint 14: financiación sin interés | App: simulación de financiación con 10% de interés | AF-22 a AF-24 | Discrepancia observada - EV-16 |




### Hipótesis preliminares

- Algunos documentos podrían estar desactualizados.
- Algunos cambios podrían no estar implementados correctamente.
- Podrían existir modificaciones en los requisitos del producto.
- Algunas funcionalidades podrían estar pendientes de desarrollo.

### Criterio de validación

Las discrepancias identificadas fueron contrastadas
con la aplicación mediante pruebas exploratorias y
evidencias visuales o funcionales.

Las condiciones no ejecutadas permanecen pendientes
y deberán registrarse en preguntas-abiertas.md.

No se determina unilateralmente cuál de las fuentes
representa el requisito vigente.

Una diferencia entre documentos o entre la documentación
y la aplicación no constituye por sí sola un defecto
de producto confirmado.

Las decisiones pendientes deberán consultarse con
el equipo de MiniModa.
