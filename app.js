// Registrar Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => {
                console.log('Service Worker registrado:', reg);
            })
            .catch(err => {
                console.log('Error registrando Service Worker:', err);
            });
    });
}

// Variables globales
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Toggle Menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Cerrar menu al hacer click en overlay
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Cerrar menu al hacer click en un link
document.querySelectorAll('.menu-list a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Funciones del menú
function scrollToPlayer() {
    document.querySelector('.player-section').scrollIntoView({ behavior: 'smooth' });
}

function openSocialMedia() {
    document.getElementById('socialModal').style.display = 'block';
}

function closeSocialModal() {
    document.getElementById('socialModal').style.display = 'none';
}

// Solicitar permiso de notificaciones al cargar
window.addEventListener('load', () => {
    requestNotificationPermission();
});

// Solicitar permiso de notificaciones
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notificaciones permitidas');
                sendWelcomeNotification();
            }
        });
    }
}

// Mensajes de bienvenida aleatorios
const welcomeMessages = [
    {
        title: '¡Bienvenido a la701fm!',
        body: 'Estás en la701fm. ¡Gracias por escucharnos!'
    },
    {
        title: '¡Hola! la701fm',
        body: 'Te damos la bienvenida a la701fm. ¡Que disfrutes la música!'
    },
    {
        title: '¡Gracias por estar aquí!',
        body: 'la701fm te saluda. ¡Que disfrutes nuestros programas!'
    },
    {
        title: '¡Conectado a la701fm!',
        body: 'Estás conectado a la701fm. ¡Que disfrutes la transmisión!'
    },
    {
        title: '¡Bienvenido a nuestra radio!',
        body: 'la701fm te recibe. ¡Gracias por tu preferencia!'
    },
    {
        title: '¡Hola oyente!',
        body: 'la701fm te recibe. ¡Que disfrutes nuestro contenido!'
    },
    {
        title: '¡Estás en la701fm!',
        body: 'Gracias por sintonizarnos. ¡Que disfrutes la mejor música!'
    },
    {
        title: '¡Bienvenido a nuestra transmisión!',
        body: 'la701fm - En la Onda. ¡Gracias por tu compañía!'
    }
];

// Obtener mensaje aleatorio
function getRandomWelcomeMessage() {
    return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
}

// Enviar notificación de bienvenida
function sendWelcomeNotification() {
    if ('serviceWorker' in navigator && 'Notification' in window) {
        const message = getRandomWelcomeMessage();
        navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(message.title, {
                body: message.body,
                icon: 'https://i.ibb.co/1fFmt954/Photoroom-20260128-163712.png',
                badge: 'https://i.ibb.co/1fFmt954/Photoroom-20260128-163712.png',
                tag: 'welcome',
                requireInteraction: false,
                actions: [
                    {
                        action: 'open',
                        title: 'Abrir'
                    }
                ]
            });
        });
    }
}

// Escuchar mensajes del Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', event => {
        console.log('Mensaje del SW:', event.data);
    });
}
