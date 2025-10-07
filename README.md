# Övningsuppgift - Att göra-applikation

## Projektbeskrivning
En enkel webbapplikation för att hantera en att göra-lista. Användaren kan lägga till, ta bort och rensa uppgifter som lagras lokalt i webbläsaren.

## Syfte
Syftet med denna övningsuppgift är att:
* Förstå och kunna modifiera Document Object Model (DOM)
* Förstå och använda olika typer av händelsehantering (event handlers)
* Använda Web Storage API för att lagra information i webbläsaren
* Börja versionshantera projekt med Git och Github

## Funktionalitet
Applikationen innehåller följande funktioner:

### ✅ Grundläggande funktioner
- **Lägg till uppgifter**: Användaren kan lägga till nya uppgifter via ett textfält
- **Validering**: Texten måste vara minst 5 tecken lång
- **Ta bort uppgifter**: Klicka på en uppgift för att markera den som klar
- **Rensa alla**: Knapp för att rensa hela listan
- **Persistent lagring**: Alla uppgifter sparas i localStorage

### 📱 Teknisk implementation
- **DOM-manipulation**: Skapar `<article>`-element dynamiskt
- **Event handling**: Lyssnar på klick, tangentbordsinmatning och förändringar
- **Web Storage**: Använder localStorage för att bevara data mellan sessioner
- **Responsiv design**: Fungerar på både desktop och mobila enheter

## Filstruktur
```
/
├── index.html          # Huvud-HTML fil
├── css/
│   └── styles.css      # Stilmallar
├── js/
│   └── main.js         # JavaScript-funktionalitet
└── README.md           # Detta dokument
```

## Event Handlers
Följande händelsehanterare implementeras:

| Event              | Element        | Beskrivning                         |
| ------------------ | -------------- | ----------------------------------- |
| `DOMContentLoaded` | document       | Laddar sparad data när sidan laddas |
| `click`            | #newtodobutton | Lägger till ny uppgift              |
| `click`            | #clearbutton   | Rensar hela listan                  |
| `click`            | article        | Tar bort enskild uppgift            |
| `input`            | #newtodo       | Validerar inmatning i realtid       |

## JavaScript-funktioner

### Huvudfunktioner
| Funktion          | Beskrivning                                |
| ----------------- | ------------------------------------------ |
| `loadStorage()`   | Laddar sparade uppgifter från localStorage |
| `storeItems()`    | Sparar alla uppgifter till localStorage    |
| `addItem()`       | Lägger till ny uppgift i listan            |
| `checkItemText()` | Validerar att text är minst 5 tecken       |
| `clearStorage()`  | Rensar hela listan och localStorage        |

### Dataflöde
1. Användaren skriver in text (validering sker i realtid)
2. Vid klick/Enter läggs uppgiften till i DOM
3. Uppgiften sparas samtidigt i localStorage
4. Vid borttagning uppdateras både DOM och localStorage

## Teknologier
- **HTML5**: Semantisk markup
- **CSS3**: Modern styling med responsiv design
- **Vanilla JavaScript**: ES6+ funktioner
- **Web Storage API**: localStorage för datalagring
- **Git**: Versionshantering

## Installation och användning

### 1. Klona projektet
```bash
git clone [repository-url]
cd todo-app
```

### 2. Öppna i webbläsare
Öppna `index.html` i valfri webbläsare.

### 3. Användning
1. Skriv in en uppgift (minst 5 tecken)
2. Klicka "Lägg till" eller tryck Enter
3. Klicka på en uppgift för att markera som klar
4. Använd "Rensa" för att tömma hela listan

## Validering
- ✅ Texten måste vara minst 5 tecken lång
- ✅ Tom input kan inte skickas
- ✅ Feedback visas för användaren vid fel
- ✅ Data sparas automatiskt

## Reflektion
Detta projekt har gett praktisk erfarenhet av:
- DOM-manipulation i JavaScript
- Event-driven programmering
- Lokal datalagring i webbläsare
- Responsiv webbdesign
- Versionshantering med Git

---
*Utvecklad som del av undervisning av JavaScript vid Mittuniversitetet*