// Copier dans le presse-papier
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
            }, 1200);
        });
    });
});