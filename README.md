##God Arena

## Introduction

Ce repo contient l'application permettant de répondre au défi du Coding Game: Gods of the Arena

Il est écrit en javascript (back) et typescript (front).
Il utilise les frameworks
- [Express](https://expressjs.com) pour le server web.
- [Mongoose](http://mongoosejs.com) comme ORM.
- [Angular 5](https://angular.io/) pour le développement front.
- [Eslint](https://eslint.org/) et [TSlint](https://palantir.github.io/tslint/) pour linter.

Et *Mongo DB* comme SGBD

## Développement

Pour lancer l'application vous aurez besoin:
- [NodeJS](https://nodejs.org/en/) version 8.7.x or higher.
- [npm](https://www.npmjs.com) version 5.6.x or higher.
- [mongoDB](https://www.mongodb.com)
- Git. For [windows](https://git-scm.com/downloads), for linux : `sudo apt-get install git`

Cloner le repo avec `git clone https://github.com/ClementGuittat/GodArena.git`.

Puis, run `npm install`.

Vous allez aussi devoir créer localement un base de données mongoDB sous le nom de `GodArena` (visible dans fichier `db.js`)

### Launch server

Pour lancer l'application, run: `nodemon index.js` (dans fichier racine de l'application) et `ng serve --proxy-config proxy.conf.json` (dans fichier `/client de l'application`) dans deux terminals distincts.

Le front sera disponible at _http://localhost:8080_ and the back at _http://localhost:3000_.

Tous les appels API fait du front seront transférés vers le back.

### Notes

L'application utilise [nodemon](https://nodemon.io/) pour regarder les changements de code.
L'application se relancera quand le code édité sera sauvegardé.
