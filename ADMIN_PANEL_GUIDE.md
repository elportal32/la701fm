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
- **Usuario**: `LA701FM`
- **Contraseña**: `LA701FM`

> ⚠️ **IMPORTANTE**: Estas son las credenciales actuales. Puedes cambiarlas en el archivo `login.html` si lo deseas

---

## Cómo Cambiar las Credenciales

1. Abre el archivo `login.html`
2. Busca esta sección en el JavaScript:
```javascript
if (username === 'LA701FM' && password === 'LA701FM') {
```

3. Reemplaza `'LA701FM'` con las credenciales que desees
4. También actualiza el cuadro de información en el HTML:
```html
<strong>Credenciales:</strong><br>
Usuario: <code>LA701FM</code><br>
Contraseña: <code>LA701FM</code>
```

5. Guarda los cambios, haz commit y push a GitHub

---

## Funcionalidades del Panel

### 1. Enviar Notificaciones (Sección Superior)
- **Título**: El encabezado de la notificación
- **Mensaje**: El contenido que recibirán los usuarios
- **Botón Enviar**: Envía la notificación a todos los usuarios suscritos

**Ejemplo:**
- Título: `¡Nuevo programa en vivo!`
- Mensaje: `Sintoniza la701fm ahora para escuchar nuestro nuevo programa`

### 2. SonicPanel Audio (Sección Media)
Acceso directo a la plataforma de streaming:
- **Panel**: https://streaming01.shockmedia.com.ar:2083/
- **Usuario**: `scdj608`
- **Contraseña**: `la701fm`

**Funciones disponibles:**
- Gestionar DJ en vivo
- Configurar AutoDJ
- Ver estadísticas de streaming
- Administrar usuarios

### 3. Dashboard de OneSignal (Lado Derecho)
- Acceso completo al panel de OneSignal
- Ver estadísticas de notificaciones
- Crear campañas más complejas
- Ver segmentación de usuarios
- Analizar métricas de engagement

---

## Flujo de Uso

1. **Acceder al panel**: Ve a `admin.html`
2. **Ingresar credenciales**: Usuario `LA701FM` y contraseña `LA701FM`
3. **Escribir notificación**: Completa título y mensaje
4. **Enviar**: Haz clic en "Enviar Notificación"
5. **Confirmar**: Verás un mensaje de éxito o error
6. **Acceder a SonicPanel**: Haz clic en el enlace para gestionar el streaming
7. **Ver Dashboard**: El lado derecho muestra OneSignal para estadísticas
8. **Cerrar sesión**: Haz clic en "Cerrar Sesión" cuando termines

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
