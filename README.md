# My_tech_Job

[erwinbottius.com](https://www.erwinbottius.com)

## Description

Mytechjob est un site d’annonces d’offres d’emploi que
j’ai réalisé avec React en front
et Express en back.
Basé sur Monster.fr pour le design, j’ai adapté le projet pour en faire un site qui sert exclusivement à trouver un job dans le digital. Toutes les annonces sont réelles et proviennent de l’API Pole-emploi.io, le site n'a cependant aucune prétention commerciale.

## Fonctionnement

Afin de trouver le job de vos rêves, il vous suffit de renseigner votre stack technique (langage, frameworks, plateforme), jusqu'à 3 valeurs maximum,
exemple (mobile, react native, nodejs);
puis renseignez la localisation de votre recherche (géolocalisation, toute la france, région ou département)

## Front End

Ce projet est très axé sur le frontend, réalisé en React & Redux. Le site a une version desktop et une version mobile toutes deux basées sur le design de [monster.fr](https://monster.fr).
J'ai également utilisé Material Ui afin d'apprendre plus en profondeur à utiliser une librairie de composant.
Tout le responsive du site a été réalisé en utilisant useMediaqueries de material ui.
Pour finir, le frontend requête le Back grâce a un middleware Redux, en passant plusieurs paramètre dans le body de la requête (champs renseignés dans les inputs par l'utilisateur)

## Backend

Le backend du projet est simplement un server express avec une seule route, qui lorsqu'elle est appellée, requete l'api de pole emploi en s'identifiant afin d'obtenir un token d'accès, puis réalise une 2e requete pour récupérer toutes les offres d'emploi correspondantes aux critères renseignés par l'utiisateur.
