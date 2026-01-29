/**
 * Authentication Helper
 * Maneja la autenticación del panel admin
 */

// Verificar si el usuario está autenticado
function isAuthenticated() {
    const auth = localStorage.getItem('adminAuth');
    if (!auth) return false;

    try {
        const authData = JSON.parse(auth);
        // Verificar que la sesión no haya expirado (24 horas)
        const sessionAge = Date.now() - authData.timestamp;
        const maxSessionTime = 24 * 60 * 60 * 1000; // 24 horas

        if (sessionAge > maxSessionTime) {
            localStorage.removeItem('adminAuth');
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error verificando autenticación:', error);
        return false;
    }
}

// Obtener datos de autenticación
function getAuthData() {
    const auth = localStorage.getItem('adminAuth');
    if (!auth) return null;

    try {
        return JSON.parse(auth);
    } catch (error) {
        console.error('Error obteniendo datos de autenticación:', error);
        return null;
    }
}

// Cerrar sesión
function logout() {
    localStorage.removeItem('adminAuth');
    window.location.href = 'login.html';
}

// Verificar autenticación al cargar página
function checkAuthOnPageLoad() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
    }
}

// Ejecutar verificación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAuthOnPageLoad);
} else {
    checkAuthOnPageLoad();
}
