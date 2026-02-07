/* script.js - modal de opciones limpio */

function openModal() {
    const modal = document.getElementById('optionsModal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    const modal = document.getElementById('optionsModal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
}

function handleOption(action) {
    const message = 'Hola desde mi web!';
    let url = '#';
    if (action === 'discord') {
        // Grupo de Discord
        url = 'https://discord.com/invite/2yt6bgkFMX';
    } else if (action === 'youtube') {
        // Canal de YouTube @marlygame
        url = 'https://www.youtube.com/@marlygame';
    } else if (action === 'tiktok') {
        // Perfil de TikTok @marlygame
        url = 'https://www.tiktok.com/@marlygame';
    } else if (action === 'instagram') {
        // Instagram usuario soymarlygame
        url = 'https://www.instagram.com/soymarlygame';
    } else if (action === 'twitch') {
        // Canal de Twitch
        url = 'https://www.twitch.tv/soymarlygame';
    }
    if (url !== '#') window.open(url, '_blank');
    closeModal();
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('closeModal');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // botones dentro del modal (si existe)
    // helper: añadir efecto ripple y clase 'clicked' antes de ejecutar acción
    function attachClickEffect(button, callback){
        if(!button) return;
        button.addEventListener('click', function(e){
            // ripple
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 1.2;
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);

            // clicked visual
            button.classList.add('clicked');
            setTimeout(() => button.classList.remove('clicked'), 180);

            // ejecutar acción
            callback(e);
        });
    }

    document.querySelectorAll('.option-btn').forEach(b => {
        attachClickEffect(b, (e) => {
            const action = e.currentTarget.getAttribute('data-action');
            handleOption(action);
        });
    });

    // botones visibles en la entrada de la página
    document.querySelectorAll('.entry-option-btn').forEach(b => {
        attachClickEffect(b, (e) => {
            const action = e.currentTarget.getAttribute('data-action');
            handleOption(action);
        });
    });

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    const modal = document.getElementById('optionsModal');
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
});

const music = document.getElementById("bg-music");
music.volume = 0.4; // 60%

let started = false;

document.addEventListener("click", () => {
    if (!started) {
        music.play();
        started = true;
    }
}, { once: true });

