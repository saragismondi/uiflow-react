# 🚀 Guía de Deployment - UI Flow React

Esta guía explica cómo deployar tu proyecto React en un servidor web usando FTP.

---

## 📋 Índice

1. [Entender el Proceso](#entender-el-proceso)
2. [Configuración Previa](#configuración-previa)
3. [Build del Proyecto](#build-del-proyecto)
4. [Upload por FTP](#upload-por-ftp)
5. [Configuración del Servidor](#configuración-del-servidor)
6. [Verificación](#verificación)
7. [Troubleshooting](#troubleshooting)
8. [Alternativas Modernas](#alternativas-modernas)

---

## 🎯 Entender el Proceso

### ¿Por qué no subir directamente el código fuente?

A diferencia de PHP o HTML estático, React necesita ser **compilado** primero:

**Código que escribes** (desarrollo):
- `.jsx` archivos React (no soportados por navegadores)
- Múltiples archivos CSS
- Imports de ES6
- Variables de entorno
- Código sin optimizar

**Código para producción** (después del build):
- HTML estático
- JavaScript optimizado y minificado
- CSS combinado y minificado
- Assets optimizados
- Todo listo para navegadores

### El Flujo Completo

```
1. Escribir código → 2. Build (npm run build) → 3. Carpeta dist/ → 4. Subir por FTP
```

---

## ⚙️ Configuración Previa

### 1. Decidir la URL de Deployment

**Opción A: Dominio raíz**
```
https://ui-flow.com/
```

**Opción B: Subdirectorio** (tu caso)
```
https://ui-flow.com/react/
```

### 2. Configurar `vite.config.js`

El archivo ya está configurado para subdirectorio `/react/`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/react/',  // ← Ruta del subdirectorio
})
```

**Si quieres cambiar la ubicación:**

| URL Final | Configuración `base` |
|-----------|---------------------|
| `https://ui-flow.com/` | `base: '/'` |
| `https://ui-flow.com/react/` | `base: '/react/'` |
| `https://ui-flow.com/projects/react-app/` | `base: '/projects/react-app/'` |

⚠️ **IMPORTANTE**: Siempre incluye `/` al inicio y al final.

---

## 🏗️ Build del Proyecto

### 1. Limpiar build anterior (opcional)

```bash
rm -rf dist/
```

### 2. Ejecutar el build

```bash
npm run build
```

### 3. Verificar el output

Deberías ver algo como:

```
✓ 64 modules transformed.
dist/index.html                   0.91 kB
dist/assets/index-Dt3PxY1o.css   19.96 kB
dist/assets/index-Boh9NhdT.js   186.76 kB
✓ built in 2.07s
```

### 4. Contenido de la carpeta `dist/`

```
dist/
├── index.html           ← Archivo principal
└── assets/
    ├── index-[hash].css ← CSS optimizado
    ├── index-[hash].js  ← JavaScript optimizado
    ├── images/          ← Imágenes (si las hay)
    └── icons/           ← Iconos (si los hay)
```

---

## 📤 Upload por FTP

### Herramientas Recomendadas

**Para Windows:**
- FileZilla (gratis) - https://filezilla-project.org/
- WinSCP (gratis) - https://winscp.net/
- Cyberduck (gratis) - https://cyberduck.io/

**Para Mac/Linux:**
- FileZilla
- Cyberduck
- Transmit (Mac, pago)

### Proceso de Upload

#### 1. Conectarte a tu servidor FTP

Necesitarás:
- **Host**: ftp.ui-flow.com (o la IP del servidor)
- **Usuario**: tu_usuario
- **Contraseña**: tu_contraseña
- **Puerto**: 21 (FTP) o 22 (SFTP)

#### 2. Navegar al directorio correcto

En tu servidor, ve a la carpeta donde quieres subir los archivos:

**Para subdirectorio `/react/`:**
```
/public_html/react/
  o
/www/react/
  o
/htdocs/react/
```

**Para dominio raíz:**
```
/public_html/
  o
/www/
  o
/htdocs/
```

⚠️ **NOTA**: El nombre exacto depende de tu hosting. Los más comunes:
- cPanel: `/public_html/`
- Plesk: `/httpdocs/`
- Generic: `/www/` o `/html/`

#### 3. Subir los archivos

**Opción A: Subir el contenido de `dist/`** (Recomendado)

Sube **TODO el contenido** de la carpeta `dist/`:

```
Servidor (ejemplo: /public_html/react/)
├── index.html
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    └── ...
```

**Opción B: Subir la carpeta `dist/` entera**

Sube la carpeta `dist/` completa y accede a:
```
https://ui-flow.com/react/dist/
```
(No recomendado, URL fea)

#### 4. Ajustar permisos (si es necesario)

Algunos servidores requieren permisos específicos:
- Archivos: `644` (rw-r--r--)
- Carpetas: `755` (rwxr-xr-x)

En FileZilla: Click derecho → File permissions

---

## 🔧 Configuración del Servidor

### Archivo `.htaccess` (Para Apache)

Si usas Apache, necesitas un archivo `.htaccess` en la carpeta de deployment para manejar el routing de React:

Crea este archivo en `/public_html/react/.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /react/

  # Si el archivo o directorio existe, servir directamente
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  # Sino, redirigir a index.html
  RewriteRule . /react/index.html [L]
</IfModule>

# Habilitar compresión GZIP (opcional, mejora velocidad)
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache control (opcional, mejora velocidad)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

**¿Por qué es necesario?**

React Router usa URLs como `/style-guide`, pero el servidor buscaría un archivo llamado `style-guide`. El `.htaccess` le dice al servidor que redirija todas las rutas a `index.html`, y React Router se encarga del resto.

### Para Nginx

Si tu servidor usa Nginx, el proveedor debe agregar esta configuración:

```nginx
location /react {
  alias /path/to/your/app;
  try_files $uri $uri/ /react/index.html;
}
```

---

## ✅ Verificación

### 1. Acceder a tu sitio

Abre tu navegador y ve a:
```
https://ui-flow.com/react/
```

### 2. Checklist de Verificación

- [ ] La página carga sin errores
- [ ] Los estilos se ven correctamente (fondo oscuro, colores cyan)
- [ ] Los botones funcionan
- [ ] La navegación entre rutas funciona (`/` y `/style-guide`)
- [ ] No hay errores en la consola del navegador (F12)
- [ ] Las fuentes se cargan (Fira Code)

### 3. Probar en diferentes dispositivos

- [ ] Desktop
- [ ] Tablet
- [ ] Mobile

### 4. Probar navegación directa

Intenta acceder directamente a:
```
https://ui-flow.com/react/style-guide
```

Si ves un error 404, revisa el `.htaccess`.

---

## 🔍 Troubleshooting

### Problema: Página en blanco

**Causa**: `base` en `vite.config.js` no coincide con la ruta del servidor

**Solución**:
1. Verifica que `base: '/react/'` coincida con tu estructura de carpetas
2. Rebuild: `npm run build`
3. Sube de nuevo los archivos

### Problema: Assets no cargan (CSS/JS)

**Síntoma**: Ves HTML pero sin estilos, errores 404 en consola

**Causa**: Rutas incorrectas

**Solución**:
1. Abre `dist/index.html` y busca las rutas de los assets
2. Deben verse así: `<script src="/react/assets/index-[hash].js">`
3. Si ves `<script src="/assets/index-[hash].js">`, el `base` está mal configurado

### Problema: 404 en rutas (ej: `/style-guide`)

**Causa**: Falta `.htaccess` o configuración del servidor

**Solución**:
1. Verifica que existe `.htaccess` en la carpeta correcta
2. Verifica que tu hosting soporte `mod_rewrite`
3. Contacta a tu proveedor si usas Nginx

### Problema: Google Fonts no cargan

**Causa**: Política CORS o bloqueadas

**Solución**: Generalmente se resuelven solas, pero verifica:
1. Conexión a internet del servidor
2. Firewall del servidor
3. Si persiste, considera self-hosting las fuentes

### Problema: Fuentes se ven diferentes

**Causa**: Fallback a fuentes del sistema

**Solución**:
1. Verifica que el navegador puede acceder a Google Fonts
2. Revisa Network tab en DevTools (F12)

---

## 🚀 Alternativas Modernas (Más Fáciles)

Si el FTP te resulta complicado o quieres automatizar, considera estas opciones **gratuitas**:

### 1. Vercel (Recomendado para React)

**Ventajas:**
- ✅ Deployment automático con Git
- ✅ HTTPS gratis
- ✅ CDN global
- ✅ Preview deployments
- ✅ Sin configuración

**Cómo:**
```bash
npm install -g vercel
vercel login
vercel
```

**URL resultante:**
```
https://uiflow-react.vercel.app
```

Puedes configurar tu dominio custom: `ui-flow.com/react`

### 2. Netlify

Similar a Vercel, muy fácil de usar:

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### 3. GitHub Pages

Si tu repo está en GitHub:

1. Instala: `npm install --save-dev gh-pages`
2. Agrega en `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

**URL resultante:**
```
https://tu-usuario.github.io/uiflow-react
```

### Comparación Rápida

| Método | Dificultad | Velocidad | Costo | HTTPS |
|--------|-----------|-----------|-------|-------|
| FTP Manual | 🔶 Media | 🐌 Lenta | Variable | Depende |
| Vercel | 🟢 Fácil | ⚡ Instantánea | Gratis | ✅ |
| Netlify | 🟢 Fácil | ⚡ Instantánea | Gratis | ✅ |
| GitHub Pages | 🟢 Fácil | ⚡ Rápida | Gratis | ✅ |

---

## 📝 Resumen del Proceso FTP

**Pasos Rápidos:**

1. **Configurar** `vite.config.js` con el `base` correcto
2. **Build**: `npm run build`
3. **Conectar** por FTP a tu servidor
4. **Subir** contenido de `dist/` a `/public_html/react/`
5. **Crear** `.htaccess` si usas Apache
6. **Verificar** en `https://ui-flow.com/react/`

---

## 🆘 Ayuda Adicional

Si tienes problemas:

1. **Revisa la consola del navegador** (F12 → Console)
2. **Revisa Network tab** para ver qué archivos no cargan
3. **Comparte el error específico** que ves
4. **Verifica los logs del servidor** (si tienes acceso)

---

**Última actualización**: 2025-12-15
**Autor**: Sara Gismondi
