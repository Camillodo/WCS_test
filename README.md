## A Propos

Bonjour,
Voici mon test technique pour intégrer l'alternance de la Wild Code School.
Vous trouverez dans ce README l'ensemble des éléments en rapport avec ce projet.
Bonne lecture !

## Stack technique

- Back : Nodejs (v15.11.0), NPM (7.6.0)
- BDD : Postgres (Version 2.4.3 (113))
- Front : Reactjs (v17.0.2), Yarn (1.22.10)
(Il faut installer cette stack pour lancer le projet en local)


## Installation en local

Une fois le repo cloné :

### Back & BDD

Se placer dans le dossier WCS_Argonauts_server

Installer les dépendances :
```bash
npm i
```

Pour initialiser la bdd avec le fichier de seeding :
 Se connecter au Système avec l’utilisateur postgres
 ```bash
sudo -i -u postgres
```
Puis créer un user :
 ```bash
CREATE USER nomDuLutilisateur WITH PASSWORD 'leMotDePasse';
```
Créer une db :
 ```bash
CREATE DATABASE nomDeLaBase OWNER nomDuLutilisateur;
```
et enfin peupler la db :
 ```bash
psql -U nomDuLutilisateur -d nomDeLaBase -f data/import_table.sql;
```
 ```bash
psql -U nomDuLutilisateur -d nomDeLaBase -f data/import_data.sql;
```

Pour lancer le serveur :
```bash
npm start
```

Le serveur se lance sur le port 3000
!!! important, pour lancer le serveur en local il faut désactiver le ssl (l10 / database.js)

### Front

Se placer dans le dossier WCS_Argonauts_front

Installer les dépendances :
```bash
yarn
```

Pour lancer l'application :
```bash
yarn start
```

L'application se lance sur le port 1234

## URL des applications

### Back
https://wcs-argonauts-server-cd.herokuapp.com/argonaut

### Front
https://wcs-test-front.vercel.app/