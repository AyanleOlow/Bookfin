# 📚 BookReader

## Om prosjektet

BookReader er en webapplikasjon for å organisere og lese e-bøker.
Applikasjonen fungerer som et personlig bibliotek der brukere kan legge til egne bøker og lese dem i nettleseren.

Prosjektet består av:

* En **frontend** laget med Next.js
* En **backend/server** laget med NestJS
* En mappe som inneholder bøker som serveren skanner automatisk

Serveren finner bøker i en mappe og gjør dem tilgjengelige via et API.

---

# Funksjoner

* Skanner en mappe etter bøker
* Viser en liste over tilgjengelige bøker
* API for å hente bøker
* Webgrensesnitt for brukere

Planlagte funksjoner:

* Leser for EPUB og PDF
* Brukerinnlogging
* Leseprogresjon
* Metadata for bøker (tittel, forfatter osv.)

---

# Teknologi brukt

Frontend:

* Next.js
* React

Backend:

* NestJS
* Node.js
* TypeScript

Andre verktøy:

* GitHub
* Git
* NPM

---

# Prosjektstruktur

```
bookreader
│
├ client        # frontend (Next.js)
├ server        # backend (NestJS)
│
└ books         # bøker som serveren leser
```

---

# Hvordan kjøre prosjektet

## 1. Installer Node.js

Last ned Node.js fra:
https://nodejs.org

---

## 2. Last ned prosjektet

```
git clone https://github.com/AyanleOlow/Bookfin.git
```

---

## 3. Start serveren

Gå til server-mappen:

```
cd server
npm install
npm run start:dev
```

Serveren starter på:

```
http://localhost:3000
```

---

## 4. Start klienten

Åpne en ny terminal:

```
cd client
npm install
npm run dev
```

Frontend starter på:

```
http://localhost:3001
```

---

# Hvordan legge til bøker

Legg bøker i mappen:

```
server/books
```

Serveren vil automatisk finne bøker med filtyper som:

* .epub
* .pdf

---

# Lovlig bruk

Dette prosjektet er laget som et personlig bibliotekssystem.
Brukere må kun legge til bøker de har lovlig tilgang til.

Prosjektet distribuerer ikke opphavsrettsbeskyttet materiale.

---

# Formål med prosjektet

Dette prosjektet er laget som en **prosjektoppgave i IT** og viser ferdigheter innen:

* Programutvikling
* Serverdrift
* Brukerstøtte og dokumentasjon
* Versjonskontroll med GitHub

---

