// ============================================================
// data.js — Resource database
// ============================================================
// Each resource follows this schema:
// {
//   id:          string  — unique identifier
//   name:        string  — display name
//   desc:        string  — short description
//   category:    string  — primary category
//   subcategory: string  — optional subcategory (can be "")
//   official:    string  — URL to official website
//   download:    string  — direct download URL (optional, can be "")
//   tags:        array   — searchable tags
//   featured:    boolean — optional (default: false)
//   platforms:   array   — optional (default: ["web"])
// }
// ============================================================

export const RESOURCES = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎨 DISEÑO GRÁFICO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Paletas de Color ──
  {
    id: "adobe-color-wheel",
    name: "Adobe Color Wheel",
    desc: "Crea paletas de color basadas en reglas de armonía (análogas, complementarias, etc.) y extrae temas de imágenes para tus proyectos.",
    category: "Diseño Gráfico",
    subcategory: "Paletas de Color",
    official: "https://color.adobe.com",
    download: "",
    tags: ["gratis", "paletas", "color", "adobe"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "colorspectrum",
    name: "Colorspectrum",
    desc: "Generador de paletas de color y gradientes con previsualización en tiempo real y exportación a formatos como CSS, SCSS, etc.",
    category: "Diseño Gráfico",
    subcategory: "Paletas de Color",
    official: "https://colorspectrum.design",
    download: "",
    tags: ["gratis", "gradientes", "paletas", "color"],
    featured: false,
    platforms: ["web"]
  },

  // ── Tipografía & Iconos ──
  {
    id: "fontshare",
    name: "FontShare",
    desc: "Plataforma de fuentes gratuitas y de calidad profesional, creadas por Indian Type Foundry (ITF).",
    category: "Diseño Gráfico",
    subcategory: "Tipografía & Iconos",
    official: "https://www.fontshare.com",
    download: "",
    tags: ["gratis", "fuentes", "tipografía"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "formia",
    name: "Formia",
    desc: "Convierte logos SVG en modelos 3D interactivos listos para web o presentaciones.",
    category: "Diseño Gráfico",
    subcategory: "Tipografía & Iconos",
    official: "https://www.formia.so/",
    download: "",
    tags: ["gratis", "3d", "logos", "svg", "interactivo"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "google-fonts-icons",
    name: "Google Fonts Icons",
    desc: "Biblioteca de iconos open source de Google, listos para usar en diseños y proyectos web mediante enlace o descarga.",
    category: "Diseño Gráfico",
    subcategory: "Tipografía & Iconos",
    official: "https://fonts.google.com/icons",
    download: "",
    tags: ["gratis", "open-source", "iconos", "google"],
    featured: false,
    platforms: ["web"]
  },

  // ── Recursos Visuales ──
  {
    id: "creavite",
    name: "Creavite",
    desc: "Crea banners, iconos y animaciones para Discord, Twitch y redes sociales de forma rápida y sin edición.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://auto.creavite.co/",
    download: "",
    tags: ["freemium", "banners", "redes sociales", "animaciones"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "img2go",
    name: "Img2go",
    desc: "Suite online de edición de imágenes: upscaling, conversión entre formatos, compresión y efectos básicos.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://www.img2go.com/es/aumentar-imagen",
    download: "",
    tags: ["freemium", "upscaling", "imágenes", "calidad", "conversor"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "mcshaders",
    name: "MCShaders",
    desc: "Tres tipos de shaders técnicos para Minecraft: WEM (máscara de luminancia), NPS (mapas normales para selección de caras) y DMS (mapas de profundidad para compositing).",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://x.com/Seltop7/status/1946391683563659424?t=mf1HqoYQy8vHUEaXorXPWg&s=19",
    download: "",
    tags: ["gratis", "shaders", "minecraft", "técnico", "compositing"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "moewalls",
    name: "MoeWalls",
    desc: "Galería de fondos de pantalla animados y estáticos de anime, videojuegos y cultura pop.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://moewalls.com",
    download: "",
    tags: ["gratis", "wallpapers", "anime", "videojuegos", "fondos"],
    featured: false,
    platforms: ["web"]
  },

  // ── Adobe Creative Cloud ──
  {
    id: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    desc: "Suscripción a la suite completa de Adobe: Photoshop, Illustrator, Premiere Pro, After Effects y más.",
    category: "Diseño Gráfico",
    subcategory: "Adobe Creative Cloud",
    official: "https://www.adobe.com/creativecloud.html",
    download: "https://creativecloud.adobe.com/apps/download/creative-cloud",
    tags: ["premium", "adobe", "suite", "profesional"],
    featured: false,
    platforms: ["windows", "mac"]
  },
  {
    id: "genp-guides",
    name: "GenP Guides (Wiki)",
    desc: "Wiki con guías y herramientas para parchear productos Adobe (uso bajo tu responsabilidad).",
    category: "Diseño Gráfico",
    subcategory: "Adobe Creative Cloud",
    official: "https://wiki.dbzer0.com/genp-guides/",
    download: "",
    tags: ["gratis", "guías", "adobe", "genp"],
    featured: false,
    platforms: ["web"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 💬 DISCORD
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Avatares ──
  {
    id: "discord-avatar-maker",
    name: "Discord Avatar Maker",
    desc: "Generador online de avatares estilo anime y pixel art, con opciones de personalización.",
    category: "Discord",
    subcategory: "Avatares",
    official: "https://discord-avatar-maker.app",
    download: "",
    tags: ["gratis", "avatares", "anime", "pixel art"],
    featured: false,
    platforms: ["web"]
  },

  // ── Emojis ──
  {
    id: "discadia",
    name: "Discadia",
    desc: "Base de datos de emojis para Discord con vista previa, categorías y descarga directa.",
    category: "Discord",
    subcategory: "Emojis",
    official: "https://discadia.com",
    download: "",
    tags: ["gratis", "emojis", "servidores"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "discords-emoji-list",
    name: "Discords Emoji List",
    desc: "Lista extensa de emojis de Discord organizados por categorías, con copia al portapapeles.",
    category: "Discord",
    subcategory: "Emojis",
    official: "https://discords.com/emoji-list",
    download: "",
    tags: ["gratis", "emojis", "lista"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "emoji-gg",
    name: "Emoji.gg",
    desc: "Comunidad para descargar y compartir emojis personalizados, con miles de opciones y packs temáticos.",
    category: "Discord",
    subcategory: "Emojis",
    official: "https://emoji.gg",
    download: "",
    tags: ["gratis", "emojis", "personalización"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "emojiterra",
    name: "Emojiterra",
    desc: "Enciclopedia de emojis Unicode con descripciones, significados y copia rápida.",
    category: "Discord",
    subcategory: "Emojis",
    official: "https://emojiterra.com",
    download: "",
    tags: ["gratis", "emojis", "enciclopedia"],
    featured: false,
    platforms: ["web"]
  },

  // ── Iconos ──
  {
    id: "discotools-iconos",
    name: "DiscoTools Iconos",
    desc: "Colección de iconos gratuitos para servidores de Discord, clasificados por temática y estilo.",
    category: "Discord",
    subcategory: "Iconos",
    official: "https://discordicon.com/es/",
    download: "",
    tags: ["gratis", "iconos", "servidores"],
    featured: false,
    platforms: ["web"]
  },

  // ── Herramientas ──
  {
    id: "dsc-gg",
    name: "dsc.gg",
    desc: "Acortador de URLs personalizado para Discord, con estadísticas de clics y enlaces directos a invitaciones de servidores.",
    category: "Discord",
    subcategory: "Herramientas",
    official: "https://dsc.gg",
    download: "",
    tags: ["gratis", "links", "acortador", "estadísticas"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "nese-april-fools",
    name: "Nese April Fools Tool",
    desc: "Herramienta temporal (activa cerca del 28 de diciembre) que permite cambiar el icono de un servidor Discord por una versión humorística.",
    category: "Discord",
    subcategory: "Herramientas",
    official: "https://tools.nese.dev/discord-april-fools",
    download: "",
    tags: ["gratis", "diversión", "iconos", "temporal"],
    featured: false,
    platforms: ["web"]
  },

  // ── Tutoriales ──
  {
    id: "tutorial-discord-1",
    name: "Tutorial Discord: Conceptos Básicos",
    desc: "Introducción a Discord: canales, roles, permisos y configuración básica del servidor.",
    category: "Discord",
    subcategory: "Tutoriales",
    official: "https://youtu.be/QRhdQywRIKk",
    download: "",
    tags: ["gratis", "tutorial", "discord", "principiantes", "youtube"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "tutorial-discord-2",
    name: "Tutorial Discord: Configuración y Roles",
    desc: "Aprende a organizar tu servidor con categorías, canales y permisos personalizados.",
    category: "Discord",
    subcategory: "Tutoriales",
    official: "https://youtu.be/JlaZAj5lP5E",
    download: "",
    tags: ["gratis", "tutorial", "discord", "roles", "configuración", "youtube"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "tutorial-discord-3",
    name: "Tutorial Discord: Bots y Automatización",
    desc: "Guía para añadir bots de música, moderación y utilidades, y cómo configurarlos.",
    category: "Discord",
    subcategory: "Tutoriales",
    official: "https://youtu.be/MVxcc8boSLg",
    download: "",
    tags: ["gratis", "tutorial", "discord", "bots", "automatización", "youtube"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "tutorial-discord-4",
    name: "Tutorial Discord: Moderación y Seguridad",
    desc: "Estrategias y herramientas para moderar tu comunidad y protegerla contra spam y raids.",
    category: "Discord",
    subcategory: "Tutoriales",
    official: "https://youtu.be/Nk3mUNnuoeM",
    download: "",
    tags: ["gratis", "tutorial", "discord", "moderación", "seguridad", "youtube"],
    featured: false,
    platforms: ["web"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🖼 EDICIÓN DE IMÁGENES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "paint-net",
    name: "paint.net",
    desc: "Editor de imágenes gratuito para Windows con soporte para capas, efectos y plugins.",
    category: "Edición de Imágenes",
    subcategory: "",
    official: "https://www.getpaint.net",
    download: "https://www.getpaint.net/download.html",
    tags: ["gratis", "editor", "windows", "capas", "efectos"],
    featured: false,
    platforms: ["windows"]
  },
  {
    id: "photopea",
    name: "Photopea",
    desc: "Editor de imágenes online avanzado compatible con PSD, XD, Sketch y otros formatos. Gratuito y sin necesidad de instalar.",
    category: "Edición de Imágenes",
    subcategory: "",
    official: "https://www.photopea.com",
    download: "",
    tags: ["gratis", "editor", "psd", "online", "photoshop"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "picsart",
    name: "Picsart",
    desc: "Aplicación todo-en-uno para editar fotos, crear collages y diseñar contenido para redes sociales.",
    category: "Edición de Imágenes",
    subcategory: "",
    official: "https://picsart.com",
    download: "",
    tags: ["freemium", "editor", "móvil", "plantillas"],
    featured: false,
    platforms: ["web", "android", "ios"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎬 PRODUCCIÓN DE VIDEO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Software ──
  {
    id: "blender",
    name: "Blender",
    desc: "Software libre de código abierto para modelado 3D, animación, rigging, simulación, composición y edición de video.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://www.blender.org",
    download: "https://www.blender.org/download/",
    tags: ["gratis", "open-source", "3d", "animación", "modelado"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },
  {
    id: "capcut",
    name: "CapCut",
    desc: "Editor de video gratuito con amplia biblioteca de efectos, transiciones y plantillas, popular en TikTok.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://www.capcut.com",
    download: "https://www.capcut.com",
    tags: ["freemium", "editor", "móvil", "efectos", "plantillas"],
    featured: false,
    platforms: ["web", "windows", "mac", "android", "ios"]
  },
  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    desc: "Software profesional que combina edición, corrección de color, efectos visuales y postproducción de audio.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://www.blackmagicdesign.com/products/davinciresolve",
    download: "https://www.blackmagicdesign.com/products/davinciresolve",
    tags: ["freemium", "profesional", "color", "audio"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },
  {
    id: "misterhorse",
    name: "MisterHorse",
    desc: "Colección de plugins y plantillas para After Effects, diseñados para agilizar el trabajo de motion graphics.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://misterhorse.com",
    download: "",
    tags: ["freemium", "after effects", "plugins", "animación"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "paper-animator",
    name: "PaperAnimator",
    desc: "Herramienta online para crear animaciones 2D con técnica de paper cut-out, ideal para proyectos rápidos.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://paperanimator.com",
    download: "",
    tags: ["gratis", "animación", "2d", "online"],
    featured: false,
    platforms: ["web"]
  },

  // ── Recursos ──
  {
    id: "introhd",
    name: "IntroHD",
    desc: "Descarga plantillas y recursos (incluyendo algunos parcheados) para After Effects, Premiere Pro, con intros, títulos y transiciones.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://introhd.net",
    download: "",
    tags: ["gratis", "premiere", "aftereffects", "plantillas", "intros"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "jitter-templates",
    name: "Jitter Templates",
    desc: "Colección gratuita de plantillas animadas para After Effects, fáciles de personalizar y usar.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://jitter.video/templates/",
    download: "",
    tags: ["gratis", "plantillas", "motion graphics", "after effects"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "pack-premiere-pro",
    name: "Pack Premiere Pro",
    desc: "Video tutorial que incluye enlace a un pack con más de 60 transiciones gratuitas para Premiere Pro.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://youtu.be/L-D_1fB6eFk",
    download: "",
    tags: ["gratis", "transiciones", "premiere pro", "tutorial", "descarga"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "transiciones-premium-navvy",
    name: "Transiciones Premium",
    desc: "Packs de transiciones premium para Premiere Pro y After Effects, creados por el diseñador Navvy.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://ko-fi.com/navvy_/shop",
    download: "",
    tags: ["premium", "transiciones", "after effects", "premiere pro", "navvy"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "transitional-hooks",
    name: "Transitional Hooks",
    desc: "Sitio web con transiciones gratuitas para video, organizadas por categorías y listas para descargar en MP4 o MOV.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://transitionalhooks.com",
    download: "",
    tags: ["gratis", "transiciones", "video", "descarga"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "tutorial-subtitulos-premiere",
    name: "Tutorial Subtítulos Premiere",
    desc: "Tutorial paso a paso para crear subtítulos animados en Premiere Pro, impartido por el youtuber Auron.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://youtu.be/im1VwJWp3dU",
    download: "",
    tags: ["gratis", "tutorial", "subtítulos", "premiere pro", "animación"],
    featured: false,
    platforms: ["web"]
  },

  // ── Rigs y Modelos ──
  {
    id: "rig-minecraft-icecube",
    name: "Rig Minecraft (Ice Cube Rig)",
    desc: "Rig de personaje de Minecraft (Steve/Alex) para Blender, con controles sencillos y texturas, ideal para animaciones.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://ice-cube-rig.carrd.co/",
    download: "",
    tags: ["gratis", "rig", "minecraft", "blender", "animación", "personaje"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "rig-estilo-mojang",
    name: "Rig estilo Mojang",
    desc: "Rig de personaje estilo Mojang para Blender, con texturas y controles para crear animaciones al estilo Minecraft.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://azagwen.gumroad.com/l/skEOo",
    download: "",
    tags: ["gratis", "rig", "mojang", "animación", "minecraft", "blender"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "rig-minecraft-bubblerig",
    name: "Mi Rig Favorito Minecraft (Blender)",
    desc: "Rig de personaje de Minecraft para Blender, altamente personalizable y con una interfaz de control sencilla.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://bubblerig.net/",
    download: "",
    tags: ["gratis", "rig", "minecraft", "blender", "animación", "personaje"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "rig-minecraft-cinema4d",
    name: "Rig Minecraft Cinema 4D",
    desc: "Tutorial que incluye enlace de descarga para un rig de personaje de Minecraft compatible con Cinema 4D.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://youtu.be/tQgM7Csj8XM",
    download: "",
    tags: ["gratis", "tutorial", "rig", "minecraft", "cinema 4d", "descarga"],
    featured: false,
    platforms: ["web"]
  },

  // ── Tutoriales ──
  {
    id: "tutorial-mejores-extensiones-premiere",
    name: "Mejores Extensiones Adobe Premiere",
    desc: "Listado comentado de las extensiones más útiles para Premiere Pro, con ejemplos de uso y dónde descargarlas.",
    category: "Producción de Video",
    subcategory: "Tutoriales",
    official: "https://youtu.be/tnJf_vHl8Ts",
    download: "",
    tags: ["gratis", "tutorial", "premiere pro", "extensiones", "plugins", "youtube"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "tutorial-mcprep-general",
    name: "Tutorial MCPrep (General)",
    desc: "Aprende a instalar y usar MCPrep, el addon que facilita la importación y animación de modelos de Minecraft en Blender.",
    category: "Producción de Video",
    subcategory: "Tutoriales",
    official: "https://youtu.be/wJN1uOf9Iwo",
    download: "",
    tags: ["gratis", "tutorial", "mcprep", "blender", "minecraft", "addon"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "tutorial-mcprep-importar-mundos",
    name: "Tutorial Importar Mundos con MCPrep",
    desc: "Cómo exportar un mundo de Minecraft e importarlo en Blender usando MCPrep para crear escenas completas.",
    category: "Producción de Video",
    subcategory: "Tutoriales",
    official: "https://youtu.be/ei0CtwGMcoA",
    download: "",
    tags: ["gratis", "tutorial", "mcprep", "blender", "minecraft", "mundos", "importar"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "tutorial-mejorar-miniaturas-minecraft",
    name: "Tutorial Mejorar Miniaturas Minecraft",
    desc: "Estrategias de diseño y herramientas para crear miniaturas llamativas que aumenten el CTR en YouTube.",
    category: "Producción de Video",
    subcategory: "Tutoriales",
    official: "https://youtu.be/fViqFZQCIJE",
    download: "",
    tags: ["gratis", "tutorial", "minecraft", "miniaturas", "diseño", "youtube"],
    featured: false,
    platforms: ["web"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎙️ AUDIO & GRABACIÓN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "audacity",
    name: "Audacity",
    desc: "Software libre de edición de audio multipista, ideal para grabar, editar y mezclar pistas de sonido.",
    category: "Audio & Grabación",
    subcategory: "",
    official: "https://www.audacityteam.org",
    download: "https://www.audacityteam.org/download/",
    tags: ["gratis", "open-source", "editor", "audio", "multipista"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },
  {
    id: "obs-studio",
    name: "OBS Studio",
    desc: "Programa de código abierto para grabación de pantalla y transmisión en vivo, ampliamente usado por streamers.",
    category: "Audio & Grabación",
    subcategory: "",
    official: "https://obsproject.com",
    download: "https://obsproject.com/download",
    tags: ["gratis", "open-source", "grabación", "streaming", "pantalla"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📺 STREAMING EN VIVO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "aitum-stream-suite",
    name: "Aitum Stream Suite",
    desc: "Suite de plugins para OBS Studio que permite instalar fácilmente plugins populares y añadir funcionalidades como multistream (transmisión simultánea a múltiples plataformas).",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://aitum.tv/products/stream-suite",
    download: "",
    tags: ["freemium", "obs", "plugins", "multistream", "streaming", "software"],
    featured: false,
    platforms: ["windows", "mac"]
  },
  {
    id: "casterlabs",
    name: "Casterlabs",
    desc: "Plataforma todo-en-uno para streamers con overlays personalizables, análisis de audiencia y herramientas de monetización.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://casterlabs.co",
    download: "",
    tags: ["gratis", "análisis", "overlays", "streaming"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "streamelements",
    name: "StreamElements",
    desc: "Conjunto de herramientas gratuitas para streamers: alertas, overlays, bots de chat y gestión de comunidad.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://streamelements.com",
    download: "",
    tags: ["freemium", "alertas", "comunidad", "bots", "overlays"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "streamlabs-platform",
    name: "StreamLabs (Plataforma)",
    desc: "Plataforma web de Streamlabs para gestión de stream: alertas, overlays, donaciones, merch y análisis.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://streamlabs.com",
    download: "",
    tags: ["freemium", "alertas", "overlays", "donaciones", "web"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "streamlabs-obs",
    name: "StreamLabs Desktop (OBS)",
    desc: "Versión personalizada de OBS con integración nativa de alertas, overlays y widgets de StreamLabs.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://streamlabs.com/streamlabs-live-streaming-software",
    download: "https://streamlabs.com/",
    tags: ["freemium", "obs", "streaming", "software", "overlays"],
    featured: false,
    platforms: ["windows", "mac"]
  },
  {
    id: "speechchat",
    name: "SpeechChat",
    desc: "Herramienta que lee en voz alta los mensajes del chat de plataformas como Twitch o YouTube en tiempo real.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://speechchat.com",
    download: "",
    tags: ["gratis", "voz", "chat", "lector", "tiempo real", "accesibilidad"],
    featured: false,
    platforms: ["web"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📈 HERRAMIENTAS YOUTUBE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "rapidtags",
    name: "RapidTags",
    desc: "Generador de etiquetas SEO basado en palabras clave, sugerencias de YouTube y análisis de la competencia.",
    category: "Herramientas YouTube",
    subcategory: "",
    official: "https://rapidtags.io",
    download: "",
    tags: ["gratis", "seo", "etiquetas", "youtube", "generador"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "tubebuddy",
    name: "TubeBuddy",
    desc: "Extensión para navegador que añade herramientas de SEO, análisis, gestión de publicaciones y sugerencias para YouTube.",
    category: "Herramientas YouTube",
    subcategory: "",
    official: "https://www.tubebuddy.com",
    download: "",
    tags: ["freemium", "seo", "gestión", "extensión", "youtube"],
    featured: false,
    platforms: ["web", "extension"]
  },
  {
    id: "yout",
    name: "Yout",
    desc: "Herramienta online para descargar miniaturas de videos de YouTube en máxima calidad con solo pegar la URL.",
    category: "Herramientas YouTube",
    subcategory: "",
    official: "https://yout.com",
    download: "",
    tags: ["gratis", "miniaturas", "descargas", "youtube"],
    featured: false,
    platforms: ["web"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 💻 UTILIDADES DIGITALES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Herramientas Online ──
  {
    id: "carrd",
    name: "Carrd",
    desc: "Creador de páginas web de una sola página, ideal para portfolios, landing pages o enlaces de presentación. Plan gratuito muy completo.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://carrd.co/",
    download: "",
    tags: ["freemium", "web", "portafolio", "plantillas", "creador de sitios"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "cobalt",
    name: "Cobalt",
    desc: "Descargador online que extrae videos y audio de múltiples redes (YouTube, Twitter, TikTok, etc.) sin publicidad ni seguimiento.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://cobalt.tools",
    download: "",
    tags: ["gratis", "descargas", "videos", "redes sociales", "privacidad"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "file-pizza",
    name: "File.Pizza",
    desc: "Transferencia de archivos P2P basada en WebTorrent: envía archivos directamente entre navegadores, sin límite de tamaño.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://file.pizza",
    download: "",
    tags: ["gratis", "transferencia", "p2p", "archivos", "seguro"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "guns-lol",
    name: "guns.lol",
    desc: "Plataforma para crear páginas modernas de link-in-bio con perfiles personalizables y alojamiento de archivos.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://guns.lol",
    download: "",
    tags: ["freemium", "linktree", "bio", "personalización", "archivos", "web"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "myinstants",
    name: "MyInstants",
    desc: "Buscador y biblioteca de efectos de sonido y memes de audio, con posibilidad de subir los propios y descargar.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://www.myinstants.com/",
    download: "",
    tags: ["gratis", "sonidos", "audio", "efectos de sonido", "memes", "biblioteca"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "online-convert",
    name: "Online-Convert",
    desc: "Convertidor online versátil que soporta más de 200 formatos de video, audio, imagen, documento y ebook.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://www.online-convert.com",
    download: "",
    tags: ["freemium", "conversión", "archivos", "formatos", "multimedia"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "qr-io",
    name: "QR.io",
    desc: "Crea códigos QR personalizados con logos, colores y seguimiento de escaneos. Versión gratuita con funciones básicas.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://qr.io",
    download: "",
    tags: ["freemium", "qr", "códigos", "personalización", "estadísticas"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "rekonise",
    name: "Rekonise",
    desc: "Acortador de enlaces con estadísticas en tiempo real, códigos QR y personalización de la URL acortada.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://rekonise.com",
    download: "",
    tags: ["freemium", "urls", "acortador", "estadísticas", "personalización"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "test-my-thumbnails",
    name: "Test My Thumbnails",
    desc: "Simulador de miniaturas de YouTube que muestra cómo se verán en móvil, ordenador, modo claro y oscuro antes de publicarlas.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://www.testmythumbnails.com",
    download: "",
    tags: ["gratis", "youtube", "miniaturas", "previsualización", "diseño", "herramienta"],
    featured: false,
    platforms: ["web"]
  },

  // ── Software PC ──
  {
    id: "bazzite",
    name: "Bazzite",
    desc: "Sistema operativo basado en Fedora optimizado para gaming, con soporte para Steam, Lutris y controladores de NVIDIA/AMD.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://bazzite.gg/",
    download: "https://bazzite.gg/",
    tags: ["gratis", "linux", "gaming", "steamos", "sistema operativo"],
    featured: false,
    platforms: ["linux"]
  },
  {
    id: "massgrave",
    name: "MassGrave",
    desc: "Conjunto de scripts y herramientas para activar productos Microsoft de forma no oficial (uso bajo tu responsabilidad).",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://massgrave.dev",
    download: "",
    tags: ["gratis", "activación", "windows", "office", "kms"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "ninite",
    name: "Ninite",
    desc: "Instalador automático que descarga e instala múltiples programas populares en Windows sin toolbars ni extras no deseados.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://ninite.com",
    download: "https://ninite.com",
    tags: ["gratis", "instalador", "windows", "automatización"],
    featured: false,
    platforms: ["windows"]
  },
  {
    id: "rufus",
    name: "Rufus",
    desc: "Herramienta ligera para formatear y crear USBs de arranque a partir de imágenes ISO, compatible con Windows, Linux y otros.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://rufus.ie/",
    download: "https://github.com/pbatard/rufus/releases",
    tags: ["gratis", "open-source", "usb", "booteable", "iso", "windows", "linux"],
    featured: false,
    platforms: ["windows"]
  },
  {
    id: "ventoy",
    name: "Ventoy",
    desc: "Utilidad que convierte un USB en un dispositivo multiboot: solo tienes que copiar los archivos ISO y arrancar desde ellos.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://www.ventoy.net/",
    download: "https://www.ventoy.net/en/download.html",
    tags: ["gratis", "open-source", "usb", "multiboot", "iso"],
    featured: false,
    platforms: ["windows", "linux"]
  },
  {
    id: "vscode",
    name: "VSCode",
    desc: "Editor de código multiplataforma con soporte para depuración, control de versiones y miles de extensiones.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://code.visualstudio.com",
    download: "https://code.visualstudio.com/download",
    tags: ["gratis", "editor", "código", "microsoft", "programación"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },
  {
    id: "winutil",
    name: "WinUtil",
    desc: "Script PowerShell de Chris Titus Tech para desinstalar bloatware, ajustar configuraciones y optimizar Windows.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://github.com/ChrisTitusTech/winutil",
    download: "",
    tags: ["gratis", "open-source", "windows", "optimización", "script"],
    featured: false,
    platforms: ["windows"]
  },
  {
    id: "wiztree",
    name: "WizTree",
    desc: "Escáner de disco que lee la tabla maestra de archivos (MFT) de NTFS para mostrar el uso del espacio de forma instantánea.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://diskanalyzer.com/",
    download: "https://diskanalyzer.com/download",
    tags: ["gratis", "windows", "disco", "almacenamiento", "analizador", "rápido"],
    featured: false,
    platforms: ["windows"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎮 MINECRAFT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Utilidades ──
  {
    id: "birdflop-resources",
    name: "Birdflop Resources",
    desc: "Artículos y herramientas para mejorar el rendimiento de servidores de Minecraft, con flags de Java, configuraciones y más.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://www.birdflop.com/resources",
    download: "",
    tags: ["gratis", "servidores", "optimización", "guías"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "birdflop-rgb",
    name: "Birdflop RGB",
    desc: "Genera códigos de color RGB para textos en Minecraft (compatible con MiniMessage y formatos antiguos).",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://www.birdflop.com/resources/rgb",
    download: "",
    tags: ["gratis", "rgb", "colores", "generador", "códigos"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "chunkbase",
    name: "ChunkBase",
    desc: "Conjunto de mapas interactivos y herramientas para localizar biomas, estructuras y slime chunks a partir de la semilla.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://www.chunkbase.com",
    download: "",
    tags: ["gratis", "biomas", "semillas", "mapas", "localizador"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "chunker",
    name: "Chunker",
    desc: "Herramienta online y de escritorio para convertir mundos entre Minecraft Java y Bedrock, con opciones avanzadas.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://oss.chunker.app/",
    download: "",
    tags: ["gratis", "open-source", "conversor", "mundos", "bedrock", "java"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "crafting-grid",
    name: "Crafting Grid",
    desc: "Simulador online de la mesa de crafteo de Minecraft, ideal para diseñar y probar recetas personalizadas.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://crafting.thedestruc7i0n.ca/",
    download: "",
    tags: ["gratis", "crafteo", "recetas", "simulador", "interactivo"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "mca-selector",
    name: "McaSelector",
    desc: "Aplicación Java que permite seleccionar y eliminar chunks o regiones de un mundo Minecraft, útil para resetear áreas.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://github.com/Querz/mcaselector",
    download: "https://github.com/Querz/mcaselector/releases",
    tags: ["gratis", "open-source", "regiones", "editor", "mundos"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },
  {
    id: "mctitles",
    name: "MCTitles",
    desc: "Crea títulos animados con la tipografía y estilo de Minecraft, personalizando texto, colores y efectos.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://mctitles.com",
    download: "",
    tags: ["gratis", "títulos", "generador", "animación", "minecraft"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "minecraft-tools",
    name: "Minecraft Tools",
    desc: "Recopilación de utilidades para Minecraft: calculadora de semillas, generador de comandos, convertidor de skins, etc.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://minecraft.tools",
    download: "",
    tags: ["gratis", "herramientas", "generadores", "calculadoras"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "misode-datapack",
    name: "Misode Datapack Generator",
    desc: "Generador online que permite crear datapacks, funciones y estructuras JSON de Minecraft mediante una interfaz visual.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://misode.github.io",
    download: "",
    tags: ["gratis", "datapacks", "json", "generador", "minecraft"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "spritecraft",
    name: "SpriteCraft",
    desc: "Convierte imágenes en esquemas de mapas de Minecraft o en archivos .schematic para importar con herramientas externas.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://autosaved.org/spritecraft",
    download: "https://autosaved.org/spritecraft",
    tags: ["gratis", "imágenes", "mapas", "pixel art", "conversor"],
    featured: false,
    platforms: ["web", "windows"]
  },
  {
    id: "vault-ccvaults",
    name: "Vault (by ccLeaf)",
    desc: "Colección de recursos para Minecraft: avatares de skin, generadores de renders y un generador de texturas de fondo sin interrupciones.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://ccvaults.com",
    download: "",
    tags: ["gratis", "minecraft", "assets", "skins", "renders", "texturas"],
    featured: false,
    platforms: ["web"]
  },
  // NUEVO: Creator Coaster FREE Pack
  {
    id: "creator-coaster-pack",
    name: "Creator Coaster FREE Pack",
    desc: "Pack gratuito con recursos para edición y miniaturas de Minecraft: fondos, modelos Blender, fuentes, elementos GUI, mapas, overlays, cielos y sonidos.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://ko-fi.com/s/ee122ce3dc",
    download: "",
    tags: ["gratis", "minecraft", "thumbnail", "edición", "pack", "recursos", "psd", "sonidos", "modelos"],
    featured: false,
    platforms: ["web"]
  },

  // ── Personalización ──
  {
    id: "blockbench",
    name: "BlockBench",
    desc: "Software de modelado 3D especializado en crear modelos, texturas y animaciones para Minecraft (Java y Bedrock).",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://www.blockbench.net",
    download: "https://www.blockbench.net/downloads",
    tags: ["gratis", "open-source", "3d", "modelado", "minecraft"],
    featured: false,
    platforms: ["windows", "mac", "linux", "web"]
  },
  {
    id: "mcicons",
    name: "MCIcons",
    desc: "Colección de iconos de objetos, bloques y entidades de Minecraft en PNG, listos para usar en guías o diseños.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://mcicons.ccleaf.com/",
    download: "",
    tags: ["gratis", "iconos", "bloques", "png", "recursos"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "mcprep",
    name: "MCprep",
    desc: "Addon para Blender que automatiza la importación de modelos de Minecraft, añade materiales y facilita la animación.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://theduckcow.com/dev/blender/mcprep/",
    download: "",
    tags: ["gratis", "open-source", "blender", "modelos", "animación"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "minecraft-capes",
    name: "MinecraftCapes",
    desc: "Servicio que permite obtener y gestionar capas personalizadas para tu personaje de Minecraft Java Edition.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://minecraftcapes.net",
    download: "",
    tags: ["gratis", "capas", "personalización", "minecraft"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "pvprp",
    name: "PvPRP",
    desc: "Web con resource packs optimizados para PvP en versiones 1.7-1.8, con mejoras visuales y de rendimiento.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://pvprp.com",
    download: "",
    tags: ["gratis", "pvp", "texturas", "resource pack", "minecraft"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "skinmc",
    name: "SkinMC",
    desc: "Visor de skins con editor integrado, galería de skins populares y opción de descargar o subir las tuyas.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://skinmc.net",
    download: "",
    tags: ["gratis", "skins", "editor", "visor", "minecraft"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "texture-packs",
    name: "Texture-Packs.com",
    desc: "Directorio de texture packs para Minecraft, con filtros por versión, resolución y estilo.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://texture-packs.com",
    download: "",
    tags: ["gratis", "texturas", "resource packs", "java", "bedrock"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "totems",
    name: "Totems",
    desc: "Generador online que permite crear tótems de la inmortalidad personalizados cambiando colores y patrones.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://totems.me/",
    download: "",
    tags: ["gratis", "tótems", "personalización", "minecraft"],
    featured: false,
    platforms: ["web"]
  },

  // ── Modding ──
  {
    id: "curseforge",
    name: "CurseForge",
    desc: "Plataforma de modding con miles de mods y modpacks para Minecraft, además de otros juegos.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://www.curseforge.com/minecraft",
    download: "https://www.curseforge.com/download/app",
    tags: ["gratis", "mods", "modpacks", "minecraft"],
    featured: false,
    platforms: ["web", "windows", "mac"]
  },
  {
    id: "mcpedl",
    name: "MCPEDL",
    desc: "Comunidad y repositorio de mods, mapas, texturas y addons para Minecraft Bedrock (PE y Windows 10).",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://mcpedl.com",
    download: "",
    tags: ["gratis", "bedrock", "mods", "mapas", "recursos"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "modrinth",
    name: "Modrinth",
    desc: "Repositorio de mods de código abierto para Minecraft, con enfoque en rendimiento y sin publicidad.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://modrinth.com",
    download: "",
    tags: ["gratis", "open-source", "mods", "modpacks", "minecraft"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "optifine",
    name: "OptiFine",
    desc: "Mod que mejora el rendimiento, añade opciones gráficas avanzadas y soporte para shaders en Minecraft Java.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://optifine.net",
    download: "https://optifine.net/downloads",
    tags: ["gratis", "optimización", "shaders", "gráficos", "minecraft"],
    featured: false,
    platforms: ["web", "windows", "mac", "linux"]
  },
  {
    id: "physics-mod-pro",
    name: "Physics Mod Pro",
    desc: "Mod que introduce física avanzada: bloques que caen, explosiones con físicas, ragdolls y más (ahora gratuito).",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://www.patreon.com/Haubna",
    download: "",
    tags: ["premium", "física", "realismo", "minecraft", "mod"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "vanilla-tweaks",
    name: "Vanilla Tweaks",
    desc: "Conjunto de datapacks y resource packs que añaden mejoras opcionales sin alterar la esencia de Minecraft.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://vanillatweaks.net",
    download: "",
    tags: ["gratis", "vanilla", "mejoras", "qol", "minecraft"],
    featured: false,
    platforms: ["web"]
  },

  // ── Modpacks ──
  {
    id: "cc-modpack",
    name: "CC Modpack",
    desc: "Modpack pensado para youtubers y streamers, incluye optimizaciones, mejoras visuales y mods útiles para grabar.",
    category: "Minecraft",
    subcategory: "Modpacks",
    official: "https://modrinth.com/modpack/cc-modpack",
    download: "",
    tags: ["gratis", "minecraft", "modpack", "creadores de contenido", "mods", "cc"],
    featured: true,
    platforms: ["web"]
  },
  {
    id: "fabulously-optimized",
    name: "Fabulously Optimized",
    desc: "Popular modpack de Minecraft centrado en el rendimiento y las mejoras gráficas. Incluye mods como Sodium, Lithium y soporte para shaders.",
    category: "Minecraft",
    subcategory: "Modpacks",
    official: "https://modrinth.com/modpack/fabulously-optimized",
    download: "",
    tags: ["gratis", "minecraft", "modpack", "optimización", "rendimiento", "shaders"],
    featured: true,
    platforms: ["windows", "mac", "linux"]
  },
  {
    id: "re-console-plus",
    name: "Re-Console+",
    desc: "Modpack que busca expandir la experiencia de Minecraft Legacy Console Edition, añadiendo contenido moderno de Java y mejoras de calidad de vida.",
    category: "Minecraft",
    subcategory: "Modpacks",
    official: "https://modrinth.com/modpack/re-console-plus",
    download: "",
    tags: ["gratis", "minecraft", "modpack", "legacy", "console", "qol"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },

  // ── Clientes ──
  {
    id: "feather-client",
    name: "Feather Client",
    desc: "Cliente de Minecraft optimizado que permite usar mods y cosméticos sin afectar el rendimiento.",
    category: "Minecraft",
    subcategory: "Clientes",
    official: "https://feathermc.com",
    download: "https://feathermc.com",
    tags: ["gratis", "ligero", "mods", "cosméticos", "minecraft"],
    featured: false,
    platforms: ["windows", "mac"]
  },
  {
    id: "labymod",
    name: "Labymod",
    desc: "Cliente todo-en-uno que añade mejoras visuales, emotes, capas y mods sin necesidad de instalar Forge.",
    category: "Minecraft",
    subcategory: "Clientes",
    official: "https://www.labymod.net",
    download: "https://www.labymod.net/download",
    tags: ["gratis", "cliente", "mejoras", "minecraft"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },
  {
    id: "lunar-client",
    name: "Lunar Client",
    desc: "Cliente popular en la comunidad PvP, con mods preinstalados, mejoras de FPS y personalización de la interfaz.",
    category: "Minecraft",
    subcategory: "Clientes",
    official: "https://www.lunarclient.com",
    download: "https://www.lunarclient.com/download",
    tags: ["gratis", "pvp", "mods", "optimizado", "minecraft"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },

  // ── Launchers ──
  {
    id: "mc-w10-launcher",
    name: "Launcher Minecraft Bedrock",
    desc: "Lanzador que permite instalar y jugar versiones antiguas de Minecraft Bedrock Edition en Windows 10.",
    category: "Minecraft",
    subcategory: "Launchers",
    official: "https://github.com/MCMrARM/mc-w10-version-launcher/releases",
    download: "https://github.com/MCMrARM/mc-w10-version-launcher/releases",
    tags: ["gratis", "bedrock", "launcher", "windows", "original"],
    featured: false,
    platforms: ["windows"]
  },
  {
    id: "modrinth-app",
    name: "Modrinth App",
    desc: "Aplicación de escritorio para jugar con mods de Modrinth, gestionar perfiles y actualizar modpacks fácilmente.",
    category: "Minecraft",
    subcategory: "Launchers",
    official: "https://modrinth.com/app",
    download: "https://modrinth.com/app",
    tags: ["gratis", "open-source", "launcher", "mods", "multiplataforma"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },
  {
    id: "prism-launcher",
    name: "Prism Launcher",
    desc: "Lanzador open-source derivado de MultiMC, con soporte para instancias separadas, mods y cuentas.",
    category: "Minecraft",
    subcategory: "Launchers",
    official: "https://prismlauncher.org",
    download: "https://prismlauncher.org/download/",
    tags: ["gratis", "open-source", "launcher", "instancias", "mods"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },

  // ── Comunidad ──
  {
    id: "minecraft-net",
    name: "Minecraft.net",
    desc: "Web oficial de Minecraft: compra el juego, descarga el launcher y entérate de las últimas novedades.",
    category: "Minecraft",
    subcategory: "Comunidad",
    official: "https://www.minecraft.net/es-es",
    download: "",
    tags: ["oficial", "noticias", "descargas", "minecraft"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "minemev",
    name: "Minemev",
    desc: "Generador de memes de Minecraft con plantillas personalizables y galería de memes populares.",
    category: "Minecraft",
    subcategory: "Comunidad",
    official: "http://minemev.com/",
    download: "",
    tags: ["gratis", "memes", "comunidad", "diversión", "minecraft"],
    featured: false,
    platforms: ["web"]
  },
  {
    id: "planetminecraft",
    name: "PlanetMinecraft",
    desc: "Comunidad masiva donde descargar y compartir mapas, skins, texturas y proyectos de construcción.",
    category: "Minecraft",
    subcategory: "Comunidad",
    official: "https://www.planetminecraft.com",
    download: "",
    tags: ["gratis", "comunidad", "mapas", "skins", "texturas"],
    featured: false,
    platforms: ["web"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🧠 INTELIGENCIA ARTIFICIAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "chatgpt",
    name: "ChatGPT",
    desc: "Modelo de lenguaje de OpenAI que mantiene conversaciones, responde preguntas y ayuda con tareas de escritura.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://chat.openai.com",
    download: "",
    tags: ["freemium", "chatbot", "texto", "openai"],
    featured: false,
    platforms: ["web", "android", "ios"]
  },
  {
    id: "claude",
    name: "Claude",
    desc: "Asistente de IA desarrollado por Anthropic, enfocado en seguridad, comprensión de contexto y tareas complejas.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://claude.ai",
    download: "",
    tags: ["freemium", "chatbot", "anthropic"],
    featured: false,
    platforms: ["web", "android", "ios"]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    desc: "IA gratuita con capacidad de búsqueda en internet y razonamiento profundo, disponible en web y app.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://www.deepseek.com",
    download: "",
    tags: ["gratis", "razonamiento", "búsqueda", "open-source"],
    featured: false,
    platforms: ["web", "android", "ios"]
  },
  {
    id: "gemini",
    name: "Gemini",
    desc: "IA multimodal de Google que procesa texto, imágenes, audio y video, integrada con servicios de Google.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://gemini.google.com",
    download: "",
    tags: ["gratis", "multimodal", "google"],
    featured: false,
    platforms: ["web", "android", "ios"]
  },
  {
    id: "grok",
    name: "Grok",
    desc: "Asistente de IA de X (Twitter) con acceso a la red social en tiempo real, respuestas ingeniosas y actualizadas.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://grok.x.ai",
    download: "",
    tags: ["premium", "tiempo real", "x", "twitter"],
    featured: false,
    platforms: ["web", "android", "ios"]
  },
  {
    id: "lm-studio",
    name: "LM Studio",
    desc: "Aplicación de escritorio para descargar y ejecutar modelos de lenguaje locales (LLMs) sin necesidad de conexión.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://lmstudio.ai",
    download: "https://lmstudio.ai",
    tags: ["gratis", "local", "modelos", "offline", "privacidad"],
    featured: false,
    platforms: ["windows", "mac", "linux"]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    desc: "Motor de búsqueda impulsado por IA que proporciona respuestas con citas y fuentes verificables.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://www.perplexity.ai",
    download: "",
    tags: ["freemium", "búsqueda", "fuentes", "ia"],
    featured: false,
    platforms: ["web", "android", "ios"]
  },
  {
    id: "whimsical",
    name: "Whimsical",
    desc: "Herramienta de diagramación colaborativa que integra IA para generar mapas mentales, wireframes y flujos.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://whimsical.com",
    download: "",
    tags: ["freemium", "diagramas", "mapas mentales", "productividad"],
    featured: false,
    platforms: ["web"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📚 GUÍAS Y RECURSOS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Guías ──
  {
    id: "pdf-definitivo-contenido",
    name: "PDF Definitivo: Creación de Contenido",
    desc: "Guía gratuita en PDF con estrategias para crecer en YouTube y X, incluyendo planificación, contenido y promoción.",
    category: "Guías y Recursos",
    subcategory: "Guías",
    official: "https://ko-fi.com/s/bfd5e4ad5f",
    download: "",
    tags: ["gratis", "guía", "pdf", "youtube", "twitter", "crecimiento", "contenido"],
    featured: true,
    platforms: ["web"]
  },

  // ── Hardware ──
  {
    id: "button-designer",
    name: "Button Designer",
    desc: "Herramienta web para diseñar iconos para Stream Deck y otras teclas programables, con plantillas y exportación directa.",
    category: "Guías y Recursos",
    subcategory: "Hardware",
    official: "https://button-designer.addy.codes/",
    download: "",
    tags: ["gratis", "stream deck", "iconos", "hardware", "diseño", "personalización", "web"],
    featured: false,
    platforms: ["web"]
  }
];
