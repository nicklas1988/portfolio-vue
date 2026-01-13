const puppeteer = require('puppeteer');
const path = require('path');

/**
 * En enkel end‑to‑end‑test som öppnar index.html i en headless webbläsare
 * och verifierar att de viktigaste funktionerna på sidan fungerar som tänkt.
 *
 * Testerna kontrollerar bland annat:
 * – att rätt namn och tagline visas i hero‑sektionen
 * – att knappen “Kontakta mig” länkar till kontaktavsnittet
 * – att formuläret kan fyllas i och ger en alert med tack‑meddelande
 */
(async () => {
  // Ange headless-läge till "new" för att undvika deprecationsvarning och använda nya implementationen
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Hämta den lokala filen index.html
  const filePath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(filePath);

  // Kontrollera att namnet visas korrekt
  const headerName = await page.$eval('header h1', el => el.textContent.trim());
  if (headerName !== 'Nicklas') {
    throw new Error(`Fel namn i headern. Förväntade "Nicklas", fick "${headerName}"`);
  }

  // Kontrollera tagline
  const tagline = await page.$eval('header p', el => el.textContent.trim());
  if (!tagline.includes('Senior')) {
    throw new Error(`Tagline verkar inte korrekt: ${tagline}`);
  }


  // Kontrollera att knappen länkar till #contact
  const btnHref = await page.$eval('header a.btn', el => el.getAttribute('href'));
  if (btnHref !== '#contact') {
    throw new Error(`Knappen länkar inte till kontaktsektionen (#contact). Href är "${btnHref}"`);
  }

  // Lyssna på alert‑dialoger för att verifiera meddelandet
  let alertMessage = null;
  page.on('dialog', async dialog => {
    alertMessage = dialog.message();
    await dialog.dismiss();
  });

  // Fyll i formuläret och skicka
  await page.type('#nameInput', 'Testanvändare');
  await page.type('#emailInput', 'test@example.com');
  await page.type('#messageInput', 'Detta är ett testmeddelande.');
  await page.click('section#contact button[type="submit"]');

  // Vänta lite så att dialogen hinner visas
  await page.waitForTimeout(500);

  if (!alertMessage || !alertMessage.includes('Tack för ditt meddelande')) {
    throw new Error(`Felaktigt eller saknat alert‑meddelande: ${alertMessage}`);
  }

  console.log('Alla tester passerade.');
  await browser.close();
})();