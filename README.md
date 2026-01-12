# Portfolio webbplats med Vue

Den här repository innehåller en enkel portföljhemsida byggd med Vue 3 (CDN-version). Syftet är att ge en modern, responsiv presentationssida för en systemutvecklare. Sidan har följande sektioner:

- **Hero** – introducerar utvecklaren med namn och tagline.
- **Om mig** – beskriver dina färdigheter, passioner och erfarenheter.
- **Projekt** – listar projekt med titel, beskrivning och länk.
- **Kontakt** – erbjuder ett formulär där besökare kan skicka ett meddelande.

Den här versionen har delat upp strukturen i tre filer: `index.html` (HTML‑strukturen), `style.css` (stilmallar) och `app.js` (Vue‑logik). För att anpassa sidan:

1. Ändra värden i funktionen `data()` i `app.js` för namn, tagline och beskrivning.
2. Justera färger, typsnitt och layout i `style.css` för att matcha din personliga stil.
3. Publicera sidan via GitHub Pages eller annan valfri hostinglösning.

Förhandsgranska sidan lokalt genom att öppna `index.html` i en webbläsare.

## Automatiserade tester

I projektet finns även en enkel end‑to‑end‑testuppsättning som använder [Puppeteer](https://pptr.dev/) för att automatiskt testa grundläggande funktioner på sidan.

### Testinnehåll

Testscriptet `automated-tests/test.js` gör följande:

- Öppnar den lokala filen `index.html` i en headless‑webbläsare.
- Verifierar att rätt namn (**Nicklas**) och tagline visas i hero‑sektionen.
- Kontrollerar att knappen “Kontakta mig” länkar till kontaktsektionen.
- Fyller i kontaktformuläret och bekräftar att ett tack‑meddelande visas via en alert.

### Köra testerna

1. Se till att Node.js och npm är installerade.
2. Installera beroenden genom att köra:

   ```bash
   npm install
   ```

3. Kör testerna med:

   ```bash
   npm test
   ```

Om alla steg passerar utan fel skriver skriptet ut `Alla tester passerade.` i konsolen.
