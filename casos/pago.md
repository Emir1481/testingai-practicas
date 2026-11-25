
# Casos de prueba - Checkout MiniModa

## Entorno

- Demo: https://minimoda-navy.vercel.app/checkout
- Datos exclusivamente sintéticos.

## Datos de prueba

| Campo | Valor |
|---|---|
| Nombre | Juan Perez |
| Dirección | Avenida Belgrano 123 |
| Email | juan@example.com |
| País de envío | Argentina |
| Tarjeta de prueba | 4111111111111111 |
| Vencimiento | 12/28 |
| CVV válido | 123 |
| CVV inválido | 12 |

## PAGO-01 - Compra exitosa

### Precondiciones
- Checkout de MiniModa disponible.
- Formulario listo para completar.

### Pasos
1. Abrir el checkout de MiniModa.
2. Completar los datos personales y de envío.
3. Ingresar la tarjeta de prueba.
4. Ingresar el vencimiento 12/28.
5. Ingresar el CVV 123.
6. Presionar Confirmar compra.

### Resultado esperado
- Se muestra "Compra confirmada".
- Se genera un número de orden con prefijo MM-.
- Se muestra el destino de envío Argentina.

### Evidencia manual
- Estado: PASSED.
- Orden observada: MM-306517.
- Mensaje de confirmación verificado visualmente.
- El número de orden es variable.

## PAGO-0X - CVV inválido

### Precondiciones
- Checkout de MiniModa disponible.
- Sin confirmaciones de compras anteriores visibles.

### Pasos
1. Abrir el checkout de MiniModa.
2. Completar los datos personales y de envío.
3. Ingresar la tarjeta de prueba.
4. Ingresar el vencimiento 12/28.
5. Ingresar el CVV 12.
6. Presionar Confirmar compra.

### Resultado esperado
- Se muestra "Revisá los campos marcados."
- Se muestra "El CVV debe tener 3 o 4 dígitos."
- El usuario permanece en el checkout.
- No se confirma la compra.

### Evidencia manual
- Estado: PASSED.
- Mensajes de error confirmados visualmente.

## Consideraciones para la automatización

- No utilizar un número de orden fijo.
- Verificar los mensajes reales mediante assertions.
- No inventar locators.
- Marcar A VERIFICAR si falta evidencia.
