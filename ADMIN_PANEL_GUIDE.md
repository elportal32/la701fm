# 📢 Guía del Panel Admin - la701fm

## Acceso al Panel Admin

### URL
```
https://la701fm.vercel.app/admin.html
```

O cuando el dominio esté activo:
```
https://la701fm.com.ar/admin.html
```

### Credenciales de Acceso (Prueba)
- **Usuario**: `admin`
- **Contraseña**: `la701fm`

> ⚠️ **IMPORTANTE**: Estas son credenciales de prueba. Antes de entregar al cliente, debes cambiarlas en el archivo `login.html`

---

## Cómo Cambiar las Credenciales

1. Abre el archivo `login.html`
2. Busca esta sección en el JavaScript:
```javascript
if (username === 'admin' && password === 'la701fm') {
```

3. Reemplaza `'admin'` y `'la701fm'` con las credenciales que desees
4. También actualiza el cuadro de información en el HTML:
```html
<strong>Credenciales de prueba:</strong><br>
Usuario: <code>admin</code><br>
Contraseña: <code>la701fm</code>
```

5. Guarda los cambios, haz commit y push a GitHub

---

## Funcionalidades del Panel

### 1. Enviar Notificaciones (Lado Izquierdo)
- **Título**: El encabezado de la notificación
- **Mensaje**: El contenido que recibirán los usuarios
- **Botón Enviar**: Envía la notificación a todos los usuarios suscritos

**Ejemplo:**
- Título: `¡Nuevo programa en vivo!`
- Mensaje: `Sintoniza la701fm ahora para escuchar nuestro nuevo programa`

### 2. Dashboard de OneSignal (Lado Derecho)
- Acceso completo al panel de OneSignal
- Puedes ver estadísticas de notificaciones
- Crear campañas más complejas
- Ver segmentación de usuarios
- Analizar métricas de engagement

---

## Flujo de Uso

1. **Acceder al panel**: Ve a `admin.html`
2. **Ingresar credenciales**: Usuario y contraseña
3. **Escribir notificación**: Completa título y mensaje
4. **Enviar**: Haz clic en "Enviar Notificación"
5. **Confirmar**: Verás un mensaje de éxito o error
6. **Cerrar sesión**: Haz clic en "Cerrar Sesión" cuando termines

---

## Características de Seguridad

✅ **Autenticación local**: Las credenciales se verifican en el navegador
✅ **Sesiones**: La sesión expira después de 24 horas
✅ **Logout**: Puedes cerrar sesión en cualquier momento
✅ **Protección**: Si intentas acceder a `admin.html` sin estar autenticado, serás redirigido a `login.html`

---

## Solución de Problemas

### "No puedo enviar notificaciones"
- Verifica que el App ID de OneSignal sea correcto en `index.html`
- Asegúrate de que los usuarios hayan permitido notificaciones en la app
- Comprueba que haya usuarios suscritos en OneSignal

### "Me redirige a login.html constantemente"
- Limpia el localStorage del navegador
- Intenta de nuevo con las credenciales correctas
- Verifica que las cookies estén habilitadas

### "El iframe de OneSignal no carga"
- Verifica tu conexión a internet
- Asegúrate de que el App ID sea válido
- Intenta en otro navegador

---

## Próximos Pasos (Mejoras Futuras)

Para una solución más segura en producción, considera:

1. **Backend seguro**: Crear un servidor Node.js/Express que maneje las llamadas a OneSignal
2. **Autenticación mejorada**: Usar JWT tokens en lugar de localStorage
3. **Base de datos**: Almacenar credenciales de forma segura
4. **Logs**: Registrar quién envió qué notificación y cuándo
5. **Permisos**: Diferentes niveles de acceso (admin, editor, viewer)

---

## Contacto y Soporte

Si tienes problemas con el panel admin, contacta al desarrollador.

**Última actualización**: Enero 2026
