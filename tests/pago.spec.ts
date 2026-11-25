import { expect, test } from '@playwright/test';

// Estos casos utilizan exclusivamente datos sintéticos de MiniModa.
const checkoutUrl = 'https://minimoda-navy.vercel.app/checkout';

async function completarDatosDePago(page: import('@playwright/test').Page, cvv: string) {
  const nombre = page.getByLabel('Nombre');
  const direccion = page.getByLabel('Dirección');
  const email = page.getByLabel('Email');
  const pais = page.getByLabel('País de envío');
  const tarjeta = page.getByLabel('Número de tarjeta');
  const vencimiento = page.getByLabel('Vencimiento (MM/AA)');
  const codigoSeguridad = page.getByLabel('CVV');

  await nombre.fill('');
  await nombre.pressSequentially('Juan Perez');
  await nombre.press('Tab');
  await expect(nombre).toHaveValue('Juan Perez');
  await direccion.fill('Avenida Belgrano 123');
  await expect(direccion).toHaveValue('Avenida Belgrano 123');
  await email.fill('juan@example.com');
  await expect(email).toHaveValue('juan@example.com');
  await pais.selectOption({ label: 'Argentina' });
  await expect(pais).toHaveValue('AR');
  await tarjeta.fill('4111111111111111');
  await expect(tarjeta).toHaveValue('4111111111111111');
  await vencimiento.fill('12/28');
  await expect(vencimiento).toHaveValue('12/28');
  await codigoSeguridad.fill(cvv);
  await expect(codigoSeguridad).toHaveValue(cvv);
}

test('PAGO-01: confirma la compra y muestra orden y destino', async ({ page }) => {
  await page.goto(checkoutUrl);
  await completarDatosDePago(page, '123');
  await page.getByRole('button', { name: 'Confirmar compra' }).click();

  const confirmacion = page.getByRole('status');
  await expect(confirmacion).toContainText('Compra confirmada');
  await expect(confirmacion).toContainText(/Orden MM-\d+/);
  await expect(confirmacion).toContainText('Envío a Argentina');
});

test('PAGO-0X: rechaza un CVV inválido sin confirmar la compra', async ({ page }) => {
  await page.goto(checkoutUrl);
  await completarDatosDePago(page, '12');
  await page.getByRole('button', { name: 'Confirmar compra' }).click();

  await expect(page.getByRole('alert').filter({ hasText: 'Revisá los campos marcados.' })).toBeVisible();
  await expect(page.getByRole('alert').filter({ hasText: 'El CVV debe tener 3 o 4 dígitos.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible();
  await expect(page.getByRole('status')).toHaveCount(0);
});
