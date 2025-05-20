# Commandes Lunix

Ce projet fournit une interface web simple pour retrouver et copier rapidement des commandes utiles liées à l'installation et à la gestion de XAMPP sous Linux.

## Fonctionnalités

- Liste des commandes courantes pour XAMPP/Linux.
- Bouton pour copier chaque commande dans le presse-papier.
- Interface responsive et design moderne grâce à Bootstrap.

## Utilisation

1. Ouvrez `index.html` dans votre navigateur.
2. Cliquez sur le bouton **Copier** à côté de la commande souhaitée pour la copier dans le presse-papier.

## Prérequis

- [Bootstrap 5](https://getbootstrap.com/) (inclus via le dossier `vendor`)
- Un navigateur moderne supportant l'API `navigator.clipboard`.

## Exemple de commandes

- Démarrage serveur XAMPP :  
  `sudo /opt/lampp/lampp start`
- Résoudre le problème de démarrage de MySQL :  
  `sudo apt install net-tools`
- Donner la permission d'exécution à l'installeur XAMPP :  
  `sudo chmod +x xampp-linux.run`
- Lancer l'installeur XAMPP :  
  `sudo ./xampp-linux-x64-8.2.12-0-installer.run`

---
© 2025
