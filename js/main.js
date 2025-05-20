// Liste de commandes Lunix
function ListCommandeLunix() {
    return [
        {
            id : 1,
            nom : "Redemarrage de l'ordinateur",
            commande : "sudo reboot",
            type : "lunix"
        },
        {
            id : 2,
            nom: "Démarrage serveur XAMPP",
            commande: "sudo /opt/lampp/lampp start",
            type : "lunix"
        },
        {
            id : 3,
            nom: "Pour résoudre le problème de démarrage de MySQL",
            commande: "sudo apt install net-tools",
            type : "lunix"
        },
        {
            id : 4,
            nom: "Installation XAMPP, donner la permission",
            commande: "sudo chmod +x xampp-linux.run",
            type : "lunix"
        },
        {
            id : 5,
            nom: "Lancer le fichier",
            commande: "sudo ./xampp-linux-x64-8.2.12-0-installer.run",
            type : "lunix"
        },
        {
            id : 6,
            nom: "Ubuntu desktop",
            commande: "sudo apt-get install ubuntu-desktop",
            type : "lunix"
        }
    ];
}

// Génère et insère les commandes dans le HTML
function renderCommandes() {
    const commandes = ListCommandeLunix();
    const list = document.getElementById('command-list');
    if (!list) return;
    list.innerHTML = '';
    commandes.forEach(cmd => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center justify-content-between';
        li.innerHTML = `
            <div>
                <span class="fw-semibold">${cmd.id} :</span>
                <span class="fw-semibold">${cmd.nom} :</span>
                <code class="ms-2 command-text">${cmd.commande}</code>
            </div>
            <button class="btn btn-outline-secondary btn-sm copy-btn" type="button" data-command="${cmd.commande}">Copier</button>
        `;
        list.appendChild(li);
    });
    // Réattacher les événements de copie
    document.querySelectorAll('.copy-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const command = btn.getAttribute('data-command');
            navigator.clipboard.writeText(command).then(function() {
                const original = btn.textContent;
                btn.textContent = 'Copié !';
                btn.classList.remove('btn-outline-secondary');
                btn.classList.add('btn-success');
                setTimeout(function() {
                    btn.textContent = original;
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-outline-secondary');
                }, 2400);
            });
        });
    });
}

// Appel au chargement du DOM
document.addEventListener('DOMContentLoaded', renderCommandes);
