# Site-ameliedev.fr

[![Pipeline-CI](https://github.com/AmelieAlonah/Site-ameliedev.fr/actions/workflows/ci.yml/badge.svg)](https://github.com/AmelieAlonah/Site-ameliedev.fr/actions/workflows/ci.yml)

[![Pipeline-CD](https://github.com/AmelieAlonah/Site-ameliedev.fr/actions/workflows/cd.yml/badge.svg)](https://github.com/AmelieAlonah/Site-ameliedev.fr/actions/workflows/cd.yml)

## Description

Ce site est un site vitrine pour ma personne. Il est en cours de développement.

## Installation et lancement en local du projet

### Prérequis

- PHP 8.1 et ses extensions (voir le fichier `composer.json`)
- Composer 2
- Symfony Cli
- NodeJS 18
- Yarn ou Npm
- Docker et Docker Compose

Pour installer le projet, il faut cloner le dépôt et installer les dépendances :

```bash
git clone git@github.com:AmelieAlonah/Site-ameliedev.fr.git
```

```bash
composer install
```

```bash
npm install
```

```bash
npm run build
```

```bash
composer dump-env dev
```
Cette précédente commande va créer un fichier `.env.local` qui contient les variables d'environnement. Il faut ensuite modifier les valeurs de ces variables.

```bash
php bin/console doctrine:create:database --if-not-exists
```

```bash
php bin/console doctrine:migrations:migrate --no-interaction
```

```bash
symfony serve
```

```bash
npm run watch
```

## Lancement des tests

```bash
./bin/phpunit
```
