# Commandes Lunix

Ce projet fournit une interface web moderne et responsive pour retrouver et copier rapidement des commandes utiles liées à l'installation et à la gestion de XAMPP, ainsi que d'autres commandes essentielles pour Linux (Ubuntu).

## Fonctionnalités

- **Liste dynamique de commandes** : Les commandes sont centralisées dans un tableau JavaScript (`js/main.js`) et affichées automatiquement dans l'interface.
- **Bouton de copie** : Chaque commande peut être copiée dans le presse-papier en un clic.
- **Navigation multi-pages** : Accès rapide à d'autres pages d'information (ex : paquets utiles, commandes git).
- **Design responsive** : Utilisation de Bootstrap pour une expérience agréable sur tous les écrans.

## Pages principales

- `index.html` : Page principale avec la liste des commandes Linux/Ubuntu/XAMPP.
- `information.html` : Informations sur des paquets utiles (Lightdm, ubuntu-desktop, etc.).
- `git.html` : (à créer/compléter) pour les commandes git.

## Utilisation

1. Ouvrez `index.html` dans votre navigateur.
2. Parcourez la liste des commandes.
3. Cliquez sur le bouton **Copier** à côté de la commande souhaitée pour la copier dans le presse-papier.
4. Naviguez entre les pages via la barre de navigation.

## Prérequis

- [Bootstrap 5](https://getbootstrap.com/) (inclus via le dossier `vendor`)
- Un navigateur moderne supportant l'API `navigator.clipboard`.

## Exemple de commandes disponibles

- Redémarrage de l'ordinateur :  
  `sudo reboot`
- Démarrage serveur XAMPP :  
  `sudo /opt/lampp/lampp start`
- Résoudre le problème de démarrage de MySQL :  
  `sudo apt install net-tools`
- Donner la permission d'exécution à l'installeur XAMPP :  
  `sudo chmod +x xampp-linux.run`
- Lancer l'installeur XAMPP :  
  `sudo ./xampp-linux-x64-8.2.12-0-installer.run`
- Installer l'environnement graphique Ubuntu :  
  `sudo apt-get install ubuntu-desktop`

## Personnalisation

Pour ajouter ou modifier des commandes, éditez simplement le tableau dans `js/main.js` :

```js
function ListCommandeLunix() {
    return [
        { id: 1, nom: "Redemarrage de l'ordinateur", commande: "sudo reboot", type: "lunix" },
        // Ajoutez ici vos propres commandes...
    ];
}
```

---

Fait par Katumba Tchibambe  
[Github](https://github.com/Alphonse243)  
© 2025
