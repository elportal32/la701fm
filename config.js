// Configuración de la701fm

const CONFIG = {
    // Información de la radio
    radio: {
        name: 'la701fm',
        slogan: 'Tu Radio',
        streamUrl: 'https://streaming01.shockmedia.com.ar/0/stream',
        logo: 'https://i.ibb.co/1fFmt954/Photoroom-20260128-163712.png',
        background: 'https://i.ibb.co/Q7ZKPGjB/Photoroom-20260128-163810.png'
    },

    // Contacto
    contact: {
        whatsapp: '+5493834996581',
        email: 'contacto@la701fm.com',
        web: 'REEMPLAZA_CON_URL_WEB'
    },

    // Redes Sociales
    social: {
        facebook: 'https://www.facebook.com/share/1biPswYxaq/',
        instagram: 'https://www.instagram.com/miguelmarcaregistrada7?igsh=NTc4MTIwNjQ2YQ==',
        tiktok: 'https://www.tiktok.com/@miguel.marcaregistrada.7?_r=1&_t=ZS-93SQuHuEetpContact',
        web: 'REEMPLAZA_CON_URL_WEB'
    },

    // Colores
    colors: {
        primary: '#cc00ff',
        secondary: '#9900cc',
        accent: '#00FFFF',
        background: '#000000',
        text: '#FFFFFF'
    },

    // Notificaciones
    notifications: {
        enabled: true,
        title: '¡Bienvenido a la701fm!',
        body: 'Estás en la701fm. ¡Gracias por escucharnos!',
        icon: 'https://i.ibb.co/1fFmt954/Photoroom-20260128-163712.png',
        badge: 'https://i.ibb.co/1fFmt954/Photoroom-20260128-163712.png',
        requireInteraction: false
    },

    // OneSignal (opcional)
    oneSignal: {
        enabled: false,
        appId: 'YOUR_ONESIGNAL_APP_ID'
    },

    // Service Worker
    serviceWorker: {
        cacheName: 'la701fm-v1',
        cacheVersion: 1
    },

    // Reproductor Luna
    player: {
        userInterface: 'big',
        backgroundColor: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 100%, rgba(255, 255, 255, 0.3) 0%)',
        fontColor: '#ffffff',
        highlightColor: '#ffffff',
        fontName: 'Montserrat',
        googleFont: 'Montserrat',
        fontRatio: 0.4,
        radioName: 'la701fm',
        scroll: true,
        coverImage: 'https://i.ibb.co/1fFmt954/Photoroom-20260128-163712.png',
        onlyCoverImage: false,
        coverStyle: 'animated',
        useVisualizer: true,
        visualizerType: 6,
        metadataTechnic: 'corsproxy',
        corsProxy: '',
        useStreamCorsProxy: true,
        streamUrl: 'https://streaming01.shockmedia.com.ar/0/stream',
        streamType: 'shoutcast2',
        shoutcastPath: '/live',
        shoutcastId: '1',
        metadataInterval: 20000,
        volume: 100,
        autoplay: true,
        displayLiveIcon: true,
        debug: false,
        multicolorVisualizer: true,
        color1: '#cc00ff',
        color2: '#cc00ff',
        color3: '#cc00ff',
        color4: '#cc00ff',
        visualizerOpacity: 0.9,
        displayVisualizerIcon: true
    },

    // Menú
    menu: {
        items: [
            {
                icon: '🎙️',
                label: 'Reproductor',
                action: 'scrollToPlayer'
            },
            {
                icon: '👍',
                label: 'Redes Sociales',
                action: 'openSocialMedia'
            },
            {
                icon: '📱',
                label: 'WhatsApp',
                action: 'openWhatsApp'
            }
        ]
    },

    // Desarrollo
    debug: false,
    logLevel: 'info'
};

// Función para obtener configuración
function getConfig(path) {
    const keys = path.split('.');
    let value = CONFIG;
    for (let key of keys) {
        value = value[key];
        if (value === undefined) return null;
    }
    return value;
}

// Función para actualizar configuración
function updateConfig(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let obj = CONFIG;
    for (let key of keys) {
        if (!obj[key]) obj[key] = {};
        obj = obj[key];
    }
    obj[lastKey] = value;
}

// Logger
const Logger = {
    debug: (msg, data) => {
        if (CONFIG.logLevel === 'debug') {
            console.log(`[DEBUG] ${msg}`, data || '');
        }
    },
    info: (msg, data) => {
        if (['debug', 'info'].includes(CONFIG.logLevel)) {
            console.log(`[INFO] ${msg}`, data || '');
        }
    },
    warn: (msg, data) => {
        if (['debug', 'info', 'warn'].includes(CONFIG.logLevel)) {
            console.warn(`[WARN] ${msg}`, data || '');
        }
    },
    error: (msg, data) => {
        console.error(`[ERROR] ${msg}`, data || '');
    }
};
