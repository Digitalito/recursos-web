# Recursos Web

Colección curada de herramientas digitales para creadores. Sitio estático moderno con diseño glassmorphism, animaciones estilo Apple y arquitectura modular.

## 🚀 Desplegar en GitHub Pages

1. Sube este directorio a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En "Source", selecciona la rama `main` y carpeta `/ (root)`.
4. Espera ~1 minuto. Tu sitio estará en `https://tu-usuario.github.io/tu-repo/`.

## ➕ Agregar nuevos recursos

Edita `data.js` y añade un objeto al array `RESOURCES`:

```js
{
  id: "mi-recurso",           // ID único (sin espacios)
  name: "Mi Recurso",         // Nombre visible
  desc: "Descripción corta.", // Descripción
  category: "Categoría",      // Categoría principal
  subcategory: "Sub",         // Subcategoría (opcional, puede ser "")
  official: "https://...",     // URL oficial
  download: "https://...",     // URL de descarga (opcional, puede ser "")
  tags: ["gratis", "tag2"]    // Etiquetas para búsqueda
}
```

Las categorías y subcategorías se generan dinámicamente desde los datos.

## 🎨 Personalizar colores

Edita las variables CSS en `:root` dentro de `style.css`:

```css
--bg: #0b0f14;
--accent: #4ade80;
--text: #e5e7eb;
/* ... más variables disponibles */
```

## ⚡ Personalizar animaciones

En `style.css`, ajusta:
- `--ease` — curva de easing global
- `--duration` — duración de transiciones
- `--duration-fast` — duración de micro-interacciones

En `modules/animations.js`, ajusta:
- `DURATION` — duración en ms de animaciones JS
- `STAGGER` — delay entre cards secuenciales

## 📁 Estructura del proyecto

```
├── index.html              ← HTML semántico (shell)
├── style.css               ← Sistema de diseño completo
├── app.js                  ← Orquestador principal
├── data.js                 ← Base de datos de recursos
├── modules/
│   ├── state.js            ← Estado global (pub/sub)
│   ├── filters.js          ← Lógica de filtrado pura
│   ├── renderer.js         ← Renderizado DOM
│   └── animations.js       ← Sistema de animaciones (FLIP)
├── assets/
│   └── bg.jpg              ← Fondo abstracto
└── README.md
```

## 🧩 Arquitectura

- **state.js**: Store reactivo con patrón pub/sub.
- **filters.js**: Funciones puras sin dependencia DOM.
- **renderer.js**: Toda la manipulación DOM centralizada, usa `DocumentFragment`.
- **animations.js**: FLIP transitions, IntersectionObserver, micro-interacciones.
- **app.js**: Orquesta módulos y conecta eventos.

## 📱 Responsive

Mobile-first con breakpoints en 480px, 768px y 1024px.

## ⌨️ Atajos de teclado

- `/` — Enfocar buscador
- `Escape` — Cerrar modal
