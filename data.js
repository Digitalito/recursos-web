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
    desc: "Genera paletas de color armónicas a partir de la rueda cromática.",
    category: "Diseño Gráfico",
    subcategory: "Paletas de Color",
    official: "https://color.adobe.com",
    download: "",
    tags: ["gratis", "paletas", "color", "adobe"]
  },
  {
    id: "colorspectrum",
    name: "Colorspectrum",
    desc: "Herramienta para crear gradientes y paletas de color personalizadas.",
    category: "Diseño Gráfico",
    subcategory: "Paletas de Color",
    official: "https://colorspectrum.design",
    download: "",
    tags: ["gratis", "gradientes", "paletas", "color"]
  },

  // ── Tipografía & Iconos ──
  {
    id: "fontshare",
    name: "FontShare",
    desc: "Servicio de fuentes gratuitas y de calidad, creado por ITF.",
    category: "Diseño Gráfico",
    subcategory: "Tipografía & Iconos",
    official: "https://www.fontshare.com",
    download: "",
    tags: ["gratis", "fuentes", "tipografía"]
  },
  {
    id: "formia",
    name: "Formia",
    desc: "Convierte logos SVG en modelos 3D interactivos.",
    category: "Diseño Gráfico",
    subcategory: "Tipografía & Iconos",
    official: "https://www.formia.so/",
    download: "",
    tags: ["gratis", "3d", "logos", "svg", "interactivo"]
  },
  {
    id: "google-fonts-icons",
    name: "Google Fonts Icons",
    desc: "Biblioteca de iconos open source de Google, listos para usar en diseños.",
    category: "Diseño Gráfico",
    subcategory: "Tipografía & Iconos",
    official: "https://fonts.google.com/icons",
    download: "",
    tags: ["gratis", "open-source", "iconos", "google"]
  },

  // ── Recursos Visuales ──
  {
    id: "creavite",
    name: "Creavite",
    desc: "Generador automático de banners, iconos y animaciones para Discord y redes sociales.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://auto.creavite.co/",
    download: "",
    tags: ["gratis", "banners", "redes sociales", "animaciones"]
  },
  {
    id: "img2go",
    name: "Img2go",
    desc: "Herramienta online para ampliar imágenes sin perder calidad y convertir formatos.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://www.img2go.com/es/aumentar-imagen",
    download: "",
    tags: ["gratis", "upscaling", "imágenes", "calidad", "conversor"]
  },
  {
    id: "mcshaders",
    name: "MCShaders",
    desc: "Recurso para separar fondos de imágenes usando inteligencia artificial.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://x.com/Seltop7/status/1946391683563659424?t=mf1HqoYQy8vHUEaXorXPWg&s=19",
    download: "",
    tags: ["gratis", "fondos", "imágenes", "ia"]
  },
  {
    id: "moewalls",
    name: "MoeWalls",
    desc: "Descarga wallpapers animados y estáticos de anime y videojuegos.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://moewalls.com",
    download: "",
    tags: ["gratis", "wallpapers", "anime", "videojuegos", "fondos"]
  },

  // ── Adobe Creative Cloud ──
  {
    id: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    desc: "Accede a todas las aplicaciones de Adobe: Photoshop, Illustrator, Premiere y más.",
    category: "Diseño Gráfico",
    subcategory: "Adobe Creative Cloud",
    official: "https://www.adobe.com/creativecloud.html",
    download: "https://creativecloud.adobe.com/apps/download/creative-cloud",
    tags: ["premium", "adobe", "suite", "profesional"]
  },
  {
    id: "genp-guides",
    name: "GenP Guides (Wiki)",
    desc: "Guías y recursos sobre GenP para productos Adobe (uso bajo tu responsabilidad).",
    category: "Diseño Gráfico",
    subcategory: "Adobe Creative Cloud",
    official: "https://wiki.dbzer0.com/genp-guides/",
    download: "",
    tags: ["gratis", "guías", "adobe", "genp"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 💬 DISCORD
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Avatares ──
  {
    id: "discord-avatar-maker",
    name: "Discord Avatar Maker",
    desc: "Crea avatares personalizados para Discord con estilo anime o pixel art.",
    category: "Discord",
    subcategory: "Avatares",
    official: "https://discord-avatar-maker.app",
    download: "",
    tags: ["gratis", "avatares", "anime", "pixel art"]
  },

  // ── Emojis ──
  {
    id: "discadia",
    name: "Discadia",
    desc: "Colección de emojis para servidores de Discord, organizados por categorías.",
    category: "Discord",
    subcategory: "Emojis",
    official: "https://discadia.com",
    download: "",
    tags: ["gratis", "emojis", "servidores"]
  },
  {
    id: "discords-emoji-list",
    name: "Discords Emoji List",
    desc: "Listado de emojis organizados por categorías para copiar y usar en Discord.",
    category: "Discord",
    subcategory: "Emojis",
    official: "https://discords.com/emoji-list",
    download: "",
    tags: ["gratis", "emojis", "lista"]
  },
  {
    id: "emoji-gg",
    name: "Emoji.gg",
    desc: "Descarga y comparte emojis personalizados para Discord.",
    category: "Discord",
    subcategory: "Emojis",
    official: "https://emoji.gg",
    download: "",
    tags: ["gratis", "emojis", "personalización"]
  },
  {
    id: "emojiterra",
    name: "Emojiterra",
    desc: "Enciclopedia de emojis con significados y función de copia rápida.",
    category: "Discord",
    subcategory: "Emojis",
    official: "https://emojiterra.com",
    download: "",
    tags: ["gratis", "emojis", "enciclopedia"]
  },

  // ── Iconos ──
  {
    id: "discotools-iconos",
    name: "DiscoTools Iconos",
    desc: "Iconos gratuitos para servidores de Discord, organizados por categorías.",
    category: "Discord",
    subcategory: "Iconos",
    official: "https://discordicon.com/es/",
    download: "",
    tags: ["gratis", "iconos", "servidores"]
  },

  // ── Herramientas ──
  {
    id: "dsc-gg",
    name: "dsc.gg",
    desc: "Acortador de enlaces personalizado para Discord con estadísticas.",
    category: "Discord",
    subcategory: "Herramientas",
    official: "https://dsc.gg",
    download: "",
    tags: ["gratis", "links", "acortador", "estadísticas"]
  },
  {
    id: "nese-april-fools",
    name: "Nese April Fools Tool",
    desc: "Herramienta efímera para cambiar el icono de tu servidor por el de los inocentes.",
    category: "Discord",
    subcategory: "Herramientas",
    official: "https://tools.nese.dev/discord-april-fools",
    download: "",
    tags: ["gratis", "diversión", "iconos", "temporal"]
  },

  // ── Tutoriales ──
  {
    id: "tutorial-discord-1",
    name: "Tutorial Discord: Conceptos Básicos",
    desc: "Video tutorial que explica los conceptos fundamentales de Discord para nuevos usuarios.",
    category: "Discord",
    subcategory: "Tutoriales",
    official: "https://youtu.be/QRhdQywRIKk",
    download: "",
    tags: ["gratis", "tutorial", "discord", "principiantes", "youtube"]
  },
  {
    id: "tutorial-discord-2",
    name: "Tutorial Discord: Configuración y Roles",
    desc: "Guía en video para configurar servidores, canales y roles en Discord.",
    category: "Discord",
    subcategory: "Tutoriales",
    official: "https://youtu.be/JlaZAj5lP5E",
    download: "",
    tags: ["gratis", "tutorial", "discord", "roles", "configuración", "youtube"]
  },
  {
    id: "tutorial-discord-3",
    name: "Tutorial Discord: Bots y Automatización",
    desc: "Aprende a añadir y configurar bots para automatizar tareas en tu servidor de Discord.",
    category: "Discord",
    subcategory: "Tutoriales",
    official: "https://youtu.be/MVxcc8boSLg",
    download: "",
    tags: ["gratis", "tutorial", "discord", "bots", "automatización", "youtube"]
  },
  {
    id: "tutorial-discord-4",
    name: "Tutorial Discord: Moderación y Seguridad",
    desc: "Consejos y herramientas para moderar y mantener seguro tu servidor de Discord.",
    category: "Discord",
    subcategory: "Tutoriales",
    official: "https://youtu.be/Nk3mUNnuoeM",
    download: "",
    tags: ["gratis", "tutorial", "discord", "moderación", "seguridad", "youtube"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🖼 EDICIÓN DE IMÁGENES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "paint-net",
    name: "paint.net",
    desc: "Editor de imágenes gratuito para Windows con capas, efectos y plugins.",
    category: "Edición de Imágenes",
    subcategory: "",
    official: "https://www.getpaint.net",
    download: "https://www.getpaint.net/download.html",
    tags: ["gratis", "editor", "windows", "capas", "efectos"]
  },
  {
    id: "photopea",
    name: "Photopea",
    desc: "Editor de imágenes online avanzado compatible con PSD, similar a Photoshop.",
    category: "Edición de Imágenes",
    subcategory: "",
    official: "https://www.photopea.com",
    download: "",
    tags: ["gratis", "editor", "psd", "online", "photoshop"]
  },
  {
    id: "picsart",
    name: "Picsart",
    desc: "Suite de edición de imágenes y video para móvil y web con efectos y plantillas.",
    category: "Edición de Imágenes",
    subcategory: "",
    official: "https://picsart.com",
    download: "",
    tags: ["gratis", "premium", "editor", "móvil", "plantillas"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎬 PRODUCCIÓN DE VIDEO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Software ──
  {
    id: "blender",
    name: "Blender",
    desc: "Suite gratuita de código abierto para modelado 3D, animación y composición.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://www.blender.org",
    download: "https://www.blender.org/download/",
    tags: ["gratis", "open-source", "3d", "animación", "modelado"]
  },
  {
    id: "capcut",
    name: "CapCut",
    desc: "Editor de video gratuito con herramientas intuitivas, efectos virales y plantillas.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://www.capcut.com",
    download: "https://www.capcut.com",
    tags: ["gratis", "editor", "móvil", "efectos", "plantillas"]
  },
  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    desc: "Editor profesional con corrección de color avanzada, audio y efectos visuales.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://www.blackmagicdesign.com/products/davinciresolve",
    download: "https://www.blackmagicdesign.com/products/davinciresolve",
    tags: ["gratis", "premium", "profesional", "color", "audio"]
  },
  {
    id: "misterhorse",
    name: "MisterHorse",
    desc: "Plugins y plantillas para After Effects que facilitan la animación.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://misterhorse.com",
    download: "",
    tags: ["gratis", "premium", "after effects", "plugins", "animación"]
  },
  {
    id: "paper-animator",
    name: "PaperAnimator",
    desc: "Herramienta online para crear animaciones 2D estilo paper cut-out.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://paperanimator.com",
    download: "",
    tags: ["gratis", "animación", "2d", "online"]
  },

  // ── Recursos ──
  {
    id: "introhd",
    name: "IntroHD",
    desc: "Plantillas y recursos para crear intros profesionales y animaciones.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://introhd.net",
    download: "",
    tags: ["gratis", "premiere", "aftereffects", "plantillas", "intros"]
  },
  {
    id: "jitter-templates",
    name: "Jitter Templates",
    desc: "Plantillas animadas gratuitas para After Effects y motion graphics.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://jitter.video/templates/",
    download: "",
    tags: ["gratis", "plantillas", "motion graphics", "after effects"]
  },
  {
    id: "pack-premiere-pro",
    name: "Pack Premiere Pro",
    desc: "Más de 60 transiciones gratuitas para Premiere Pro (video tutorial).",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://youtu.be/L-D_1fB6eFk",
    download: "",
    tags: ["gratis", "transiciones", "premiere pro", "tutorial", "descarga"]
  },
  {
    id: "transiciones-premium-navvy",
    name: "Transiciones Premium",
    desc: "Packs de transiciones y efectos para Premiere y After Effects (Navvy).",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://ko-fi.com/navvy_/shop",
    download: "",
    tags: ["premium", "transiciones", "after effects", "premiere pro", "navvy"]
  },
  {
    id: "transitional-hooks",
    name: "Transitional Hooks",
    desc: "Colección de transiciones gratuitas para video, listas para descargar.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://transitionalhooks.com",
    download: "",
    tags: ["gratis", "transiciones", "video", "descarga"]
  },
  {
    id: "tutorial-subtitulos-premiere",
    name: "Tutorial Subtítulos Premiere",
    desc: "Aprende a hacer subtítulos animados en Premiere Pro (por Auron).",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://youtu.be/im1VwJWp3dU",
    download: "",
    tags: ["gratis", "tutorial", "subtítulos", "premiere pro", "animación"]
  },

  // ── Rigs y Modelos ──
  {
    id: "rig-cubo-hielo",
    name: "Rig Cubo de Hielo",
    desc: "Rig gratuito de un cubo de hielo para animaciones en Blender.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://ice-cube-rig.carrd.co/",
    download: "",
    tags: ["gratis", "rig", "animación", "blender", "3d"]
  },
  {
    id: "rig-estilo-mojang",
    name: "Rig estilo Mojang",
    desc: "Rig de personaje al estilo Mojang para animaciones en Blender.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://azagwen.gumroad.com/l/skEOo",
    download: "",
    tags: ["gratis", "rig", "mojang", "animación", "minecraft", "blender"]
  },
  {
    id: "rig-minecraft-bubblerig",
    name: "Mi Rig Favorito Minecraft (Blender)",
    desc: "Rig de personaje estilo Minecraft para Blender, fácil de usar y muy personalizable.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://bubblerig.net/",
    download: "",
    tags: ["gratis", "rig", "minecraft", "blender", "animación", "personaje"]
  },
  {
    id: "rig-minecraft-cinema4d",
    name: "Rig Minecraft Cinema 4D",
    desc: "Video con enlace a la descarga de un rig de personaje de Minecraft para Cinema 4D.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://youtu.be/tQgM7Csj8XM",
    download: "",
    tags: ["gratis", "tutorial", "rig", "minecraft", "cinema 4d", "descarga"]
  },

  // ── Tutoriales ──
  {
    id: "tutorial-mejores-extensiones-premiere",
    name: "Mejores Extensiones Adobe Premiere",
    desc: "Video que recopila las mejores extensiones y plugins para mejorar el flujo de trabajo en Premiere Pro.",
    category: "Producción de Video",
    subcategory: "Tutoriales",
    official: "https://youtu.be/tnJf_vHl8Ts",
    download: "",
    tags: ["gratis", "tutorial", "premiere pro", "extensiones", "plugins", "youtube"]
  },
  {
    id: "tutorial-mcprep-general",
    name: "Tutorial MCPrep (General)",
    desc: "Introducción al uso de MCPrep, el addon de Blender para trabajar con modelos de Minecraft.",
    category: "Producción de Video",
    subcategory: "Tutoriales",
    official: "https://youtu.be/wJN1uOf9Iwo",
    download: "",
    tags: ["gratis", "tutorial", "mcprep", "blender", "minecraft", "addon"]
  },
  {
    id: "tutorial-mcprep-importar-mundos",
    name: "Tutorial Importar Mundos con MCPrep",
    desc: "Guía paso a paso para importar mundos de Minecraft a Blender utilizando MCPrep.",
    category: "Producción de Video",
    subcategory: "Tutoriales",
    official: "https://youtu.be/ei0CtwGMcoA",
    download: "",
    tags: ["gratis", "tutorial", "mcprep", "blender", "minecraft", "mundos", "importar"]
  },
  {
    id: "tutorial-mejorar-miniaturas-minecraft",
    name: "Tutorial Mejorar Miniaturas Minecraft",
    desc: "Consejos y técnicas para crear miniaturas más atractivas para videos de Minecraft.",
    category: "Producción de Video",
    subcategory: "Tutoriales",
    official: "https://youtu.be/fViqFZQCIJE",
    download: "",
    tags: ["gratis", "tutorial", "minecraft", "miniaturas", "diseño", "youtube"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎙️ AUDIO & GRABACIÓN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "audacity",
    name: "Audacity",
    desc: "Editor de audio multipista gratuito y de código abierto.",
    category: "Audio & Grabación",
    subcategory: "",
    official: "https://www.audacityteam.org",
    download: "https://www.audacityteam.org/download/",
    tags: ["gratis", "open-source", "editor", "audio", "multipista"]
  },
  {
    id: "obs-studio",
    name: "OBS Studio",
    desc: "Software libre para grabación de pantalla y streaming en directo.",
    category: "Audio & Grabación",
    subcategory: "",
    official: "https://obsproject.com",
    download: "https://obsproject.com/download",
    tags: ["gratis", "open-source", "grabación", "streaming", "pantalla"]
  },
  {
    id: "speechchat",
    name: "SpeechChat",
    desc: "Convierte voz a texto en tiempo real para chats y subtítulos.",
    category: "Audio & Grabación",
    subcategory: "",
    official: "https://speechchat.com",
    download: "",
    tags: ["gratis", "voz a texto", "subtítulos", "tiempo real", "accesibilidad"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📺 STREAMING EN VIVO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "casterlabs",
    name: "Casterlabs",
    desc: "Suite avanzada para streamers con análisis, overlays y herramientas.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://casterlabs.co",
    download: "",
    tags: ["gratis", "premium", "análisis", "overlays", "streaming"]
  },
  {
    id: "streamelements",
    name: "StreamElements",
    desc: "Plataforma con alertas, overlays y bots para personalizar streams.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://streamelements.com",
    download: "",
    tags: ["gratis", "alertas", "comunidad", "bots", "overlays"]
  },
  {
    id: "streamlabs",
    name: "StreamLabs",
    desc: "Plataforma todo-en-uno para streaming con alertas, overlays y donaciones.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://streamlabs.com",
    download: "https://streamlabs.com",
    tags: ["gratis", "premium", "alertas", "overlays", "donaciones"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📈 HERRAMIENTAS YOUTUBE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "rapidtags",
    name: "RapidTags",
    desc: "Generador de etiquetas SEO para videos de YouTube.",
    category: "Herramientas YouTube",
    subcategory: "",
    official: "https://rapidtags.io",
    download: "",
    tags: ["gratis", "seo", "etiquetas", "youtube", "generador"]
  },
  {
    id: "tubebuddy",
    name: "TubeBuddy",
    desc: "Extensión y web para optimizar la gestión y crecimiento de canales de YouTube.",
    category: "Herramientas YouTube",
    subcategory: "",
    official: "https://www.tubebuddy.com",
    download: "",
    tags: ["gratis", "premium", "seo", "gestión", "extensión", "youtube"]
  },
  {
    id: "yout",
    name: "Yout",
    desc: "Descarga miniaturas de videos de YouTube fácilmente.",
    category: "Herramientas YouTube",
    subcategory: "",
    official: "https://yout.com",
    download: "",
    tags: ["gratis", "miniaturas", "descargas", "youtube"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 💻 UTILIDADES DIGITALES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Herramientas Online ──
  {
    id: "carrd",
    name: "Carrd",
    desc: "Plataforma gratuita para crear sitios web simples, portafolios o páginas de presentación de una sola página.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://carrd.co/",
    download: "",
    tags: ["gratis", "web", "portafolio", "plantillas", "creador de sitios"]
  },
  {
    id: "cobalt",
    name: "Cobalt",
    desc: "Descarga videos, audios e imágenes de redes sociales sin anuncios ni rastreo.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://cobalt.tools",
    download: "",
    tags: ["gratis", "descargas", "videos", "redes sociales", "privacidad"]
  },
  {
    id: "file-pizza",
    name: "File.Pizza",
    desc: "Transfiere archivos peer-to-peer directamente desde el navegador, sin servidores intermedios.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://file.pizza",
    download: "",
    tags: ["gratis", "transferencia", "p2p", "archivos", "seguro"]
  },
  {
    id: "myinstants",
    name: "MyInstants",
    desc: "Amplia biblioteca de efectos de sonido y memes de audio, actualizada diariamente.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://www.myinstants.com/",
    download: "",
    tags: ["gratis", "sonidos", "audio", "efectos de sonido", "memes", "biblioteca"]
  },
  {
    id: "online-convert",
    name: "Online-Convert",
    desc: "Convierte archivos de video, audio, imagen, documento y más entre múltiples formatos.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://www.online-convert.com",
    download: "",
    tags: ["gratis", "conversión", "archivos", "formatos", "multimedia"]
  },
  {
    id: "qr-io",
    name: "QR.io",
    desc: "Generador de códigos QR con opciones de personalización y seguimiento.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://qr.io",
    download: "",
    tags: ["gratis", "qr", "códigos", "personalización", "estadísticas"]
  },
  {
    id: "rekonise",
    name: "Rekonise",
    desc: "Acortador de URLs con estadísticas detalladas y opciones de personalización.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://rekonise.com",
    download: "",
    tags: ["gratis", "urls", "acortador", "estadísticas", "personalización"]
  },
  {
    id: "test-my-thumbnails",
    name: "Test My Thumbnails",
    desc: "Previsualiza cómo se verán las miniaturas de YouTube en diferentes dispositivos y modos (claro/oscuro).",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://www.testmythumbnails.com",
    download: "",
    tags: ["gratis", "youtube", "miniaturas", "previsualización", "diseño", "herramienta"]
  },

  // ── Software PC ──
  {
    id: "bazzite",
    name: "Bazzite",
    desc: "Distribución Linux basada en Fedora para gaming, similar a SteamOS.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://bazzite.gg/",
    download: "https://bazzite.gg/",
    tags: ["gratis", "linux", "gaming", "steamos", "sistema operativo"]
  },
  {
    id: "massgrave",
    name: "MassGrave",
    desc: "Herramientas para activar Microsoft Office y Windows (uso bajo tu responsabilidad).",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://massgrave.dev",
    download: "",
    tags: ["gratis", "activación", "windows", "office", "kms"]
  },
  {
    id: "ninite",
    name: "Ninite",
    desc: "Instalador múltiple de programas esenciales para Windows, sin bloatware.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://ninite.com",
    download: "https://ninite.com",
    tags: ["gratis", "instalador", "windows", "automatización"]
  },
  {
    id: "rufus",
    name: "Rufus",
    desc: "Utilidad para crear USB bootables desde ISOs, rápida y confiable.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://rufus.ie/",
    download: "https://github.com/pbatard/rufus/releases",
    tags: ["gratis", "usb", "booteable", "iso", "windows", "linux", "open-source"]
  },
  {
    id: "ventoy",
    name: "Ventoy",
    desc: "Crea un USB multiboot; solo copia las ISOs y arranca directamente.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://www.ventoy.net/",
    download: "https://www.ventoy.net/en/download.html",
    tags: ["gratis", "usb", "multiboot", "iso", "open-source"]
  },
  {
    id: "vscode",
    name: "VSCode",
    desc: "Editor de código fuente ligero y potente de Microsoft, con extensiones.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://code.visualstudio.com",
    download: "https://code.visualstudio.com/download",
    tags: ["gratis", "editor", "código", "microsoft", "programación"]
  },
  {
    id: "winutil",
    name: "WinUtil",
    desc: "Script de utilidades para optimizar, configurar y desbloat Windows.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://github.com/ChrisTitusTech/winutil",
    download: "",
    tags: ["gratis", "open-source", "windows", "optimización", "script"]
  },
  {
    id: "wiztree",
    name: "WizTree",
    desc: "Analizador de espacio en disco ultrarrápido para Windows (lee la MFT).",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://diskanalyzer.com/",
    download: "https://diskanalyzer.com/download",
    tags: ["gratis", "windows", "disco", "almacenamiento", "analizador", "rápido"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎮 MINECRAFT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Utilidades ──
  {
    id: "birdflop-resources",
    name: "Birdflop Resources",
    desc: "Recursos y guías para optimizar servidores de Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://www.birdflop.com/resources",
    download: "",
    tags: ["gratis", "servidores", "optimización", "guías"]
  },
  {
    id: "birdflop-rgb",
    name: "Birdflop RGB",
    desc: "Generador de códigos de color RGB para usar en Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://www.birdflop.com/resources/rgb",
    download: "",
    tags: ["gratis", "rgb", "colores", "generador", "códigos"]
  },
  {
    id: "chunkbase",
    name: "ChunkBase",
    desc: "Localizador de biomas, estructuras y semillas en Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://www.chunkbase.com",
    download: "",
    tags: ["gratis", "biomas", "semillas", "mapas", "localizador"]
  },
  {
    id: "chunker",
    name: "Chunker",
    desc: "Conversor de mundos entre versiones Java y Bedrock de Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://oss.chunker.app/",
    download: "",
    tags: ["gratis", "conversor", "mundos", "bedrock", "java", "open-source"]
  },
  {
    id: "crafting-grid",
    name: "Crafting Grid",
    desc: "Simulador de cuadrícula de crafteo para diseñar recetas personalizadas.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://crafting.thedestruc7i0n.ca/",
    download: "",
    tags: ["gratis", "crafteo", "recetas", "simulador", "interactivo"]
  },
  {
    id: "mca-selector",
    name: "McaSelector",
    desc: "Editor de regiones para eliminar o exportar áreas específicas del mundo.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://github.com/Querz/mcaselector",
    download: "https://github.com/Querz/mcaselector/releases",
    tags: ["gratis", "open-source", "regiones", "editor", "mundos"]
  },
  {
    id: "mctitles",
    name: "MCTitles",
    desc: "Generador de títulos animados al estilo Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://mctitles.com",
    download: "",
    tags: ["gratis", "títulos", "generador", "animación", "minecraft"]
  },
  {
    id: "minecraft-tools",
    name: "Minecraft Tools",
    desc: "Colección de herramientas online: calculadoras, generadores y más.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://minecraft.tools",
    download: "",
    tags: ["gratis", "herramientas", "generadores", "calculadoras"]
  },
  {
    id: "misode-datapack",
    name: "Misode Datapack Generator",
    desc: "Generador visual de datapacks y estructuras JSON para Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://misode.github.io",
    download: "",
    tags: ["gratis", "datapacks", "json", "generador", "minecraft"]
  },
  {
    id: "spritecraft",
    name: "SpriteCraft",
    desc: "Convierte imágenes en mapas de píxeles para Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://autosaved.org/spritecraft",
    download: "https://autosaved.org/spritecraft",
    tags: ["gratis", "imágenes", "mapas", "pixel art", "conversor"]
  },

  // ── Personalización ──
  {
    id: "blockbench",
    name: "BlockBench",
    desc: "Modelador 3D para crear entidades, bloques y objetos de Minecraft.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://www.blockbench.net",
    download: "https://www.blockbench.net/downloads",
    tags: ["gratis", "open-source", "3d", "modelado", "minecraft"]
  },
  {
    id: "mcicons",
    name: "MCIcons",
    desc: "Iconos de objetos y bloques de Minecraft en formato PNG.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://mcicons.ccleaf.com/",
    download: "",
    tags: ["gratis", "iconos", "bloques", "png", "recursos"]
  },
  {
    id: "mcprep",
    name: "MCprep",
    desc: "Addon de Blender para importar y animar modelos de Minecraft.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://theduckcow.com/dev/blender/mcprep/",
    download: "",
    tags: ["gratis", "open-source", "blender", "modelos", "animación"]
  },
  {
    id: "minecraft-capes",
    name: "MinecraftCapes",
    desc: "Consigue capas personalizadas para tu personaje de Minecraft.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://minecraftcapes.net",
    download: "",
    tags: ["gratis", "capas", "personalización", "minecraft"]
  },
  {
    id: "pvprp",
    name: "PvPRP",
    desc: "Resource packs enfocados en PvP para Minecraft 1.8.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://pvprp.com",
    download: "",
    tags: ["gratis", "pvp", "texturas", "resource pack", "minecraft"]
  },
  {
    id: "skinmc",
    name: "SkinMC",
    desc: "Editor y visor de skins de Minecraft con opciones de descarga.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://skinmc.net",
    download: "",
    tags: ["gratis", "skins", "editor", "visor", "minecraft"]
  },
  {
    id: "texture-packs",
    name: "Texture-Packs.com",
    desc: "Descarga packs de texturas para Minecraft Java y Bedrock.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://texture-packs.com",
    download: "",
    tags: ["gratis", "texturas", "resource packs", "java", "bedrock"]
  },
  {
    id: "totems",
    name: "Totems",
    desc: "Personaliza tótems de la inmortalidad con diseños únicos.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://totems.me/",
    download: "",
    tags: ["gratis", "tótems", "personalización", "minecraft"]
  },

  // ── Modding ──
  {
    id: "curseforge",
    name: "CurseForge",
    desc: "El repositorio más grande de mods y modpacks para Minecraft.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://www.curseforge.com/minecraft",
    download: "https://www.curseforge.com/download/app",
    tags: ["gratis", "mods", "modpacks", "minecraft"]
  },
  {
    id: "mcpedl",
    name: "MCPEDL",
    desc: "Recursos, mods y mapas para Minecraft Bedrock Edition.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://mcpedl.com",
    download: "",
    tags: ["gratis", "bedrock", "mods", "mapas", "recursos"]
  },
  {
    id: "modrinth",
    name: "Modrinth",
    desc: "Plataforma de mods moderna, rápida y de código abierto.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://modrinth.com",
    download: "",
    tags: ["gratis", "open-source", "mods", "modpacks", "minecraft"]
  },
  {
    id: "optifine",
    name: "OptiFine",
    desc: "Optimización gráfica y soporte para shaders en Minecraft.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://optifine.net",
    download: "https://optifine.net/downloads",
    tags: ["gratis", "optimización", "shaders", "gráficos", "minecraft"]
  },
  {
    id: "physics-mod-pro",
    name: "Physics Mod Pro",
    desc: "Añade física realista a bloques y entidades en Minecraft.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://www.patreon.com/Haubna",
    download: "",
    tags: ["premium", "física", "realismo", "minecraft", "mod"]
  },
  {
    id: "vanilla-tweaks",
    name: "Vanilla Tweaks",
    desc: "Mejoras visuales y de calidad de vida sin modificar la jugabilidad.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://vanillatweaks.net",
    download: "",
    tags: ["gratis", "vanilla", "mejoras", "qol", "minecraft"]
  },

  // ── Modpacks ──
  {
    id: "cc-modpack",
    name: "CC Modpack",
    desc: "Modpack de Minecraft diseñado para creadores de contenido, con mejoras visuales y de juego.",
    category: "Minecraft",
    subcategory: "Modpacks",
    official: "https://modrinth.com/modpack/cc-modpack",
    download: "",
    tags: ["gratis", "minecraft", "modpack", "creadores de contenido", "mods", "cc"]
  },

  // ── Clientes ──
  {
    id: "feather-client",
    name: "Feather Client",
    desc: "Cliente ligero para Minecraft con soporte para mods y cosméticos.",
    category: "Minecraft",
    subcategory: "Clientes",
    official: "https://feathermc.com",
    download: "https://feathermc.com",
    tags: ["gratis", "ligero", "mods", "cosméticos", "minecraft"]
  },
  {
    id: "labymod",
    name: "Labymod",
    desc: "Cliente de Minecraft con mejoras visuales y funcionales.",
    category: "Minecraft",
    subcategory: "Clientes",
    official: "https://www.labymod.net",
    download: "https://www.labymod.net/download",
    tags: ["gratis", "cliente", "mejoras", "minecraft"]
  },
  {
    id: "lunar-client",
    name: "Lunar Client",
    desc: "Cliente optimizado para PvP con mods y personalización.",
    category: "Minecraft",
    subcategory: "Clientes",
    official: "https://www.lunarclient.com",
    download: "https://www.lunarclient.com/download",
    tags: ["gratis", "pvp", "mods", "optimizado", "minecraft"]
  },

  // ── Launchers ──
  {
    id: "mc-w10-launcher",
    name: "Launcher Minecraft Bedrock",
    desc: "Lanzador no oficial para versiones antiguas de Minecraft Bedrock.",
    category: "Minecraft",
    subcategory: "Launchers",
    official: "https://github.com/MCMrARM/mc-w10-version-launcher/releases",
    download: "https://github.com/MCMrARM/mc-w10-version-launcher/releases",
    tags: ["gratis", "bedrock", "launcher", "windows", "original"]
  },
  {
    id: "modrinth-app",
    name: "Modrinth App",
    desc: "Lanzador multiplataforma enfocado en mods de Modrinth.",
    category: "Minecraft",
    subcategory: "Launchers",
    official: "https://modrinth.com/app",
    download: "https://modrinth.com/app",
    tags: ["gratis", "open-source", "launcher", "mods", "multiplataforma"]
  },
  {
    id: "prism-launcher",
    name: "Prism Launcher",
    desc: "Lanzador de Minecraft con gestión avanzada de instancias y mods.",
    category: "Minecraft",
    subcategory: "Launchers",
    official: "https://prismlauncher.org",
    download: "https://prismlauncher.org/download/",
    tags: ["gratis", "open-source", "launcher", "instancias", "mods"]
  },

  // ── Comunidad ──
  {
    id: "minecraft-net",
    name: "Minecraft.net",
    desc: "Sitio oficial de Minecraft, noticias y descargas.",
    category: "Minecraft",
    subcategory: "Comunidad",
    official: "https://www.minecraft.net/es-es",
    download: "",
    tags: ["oficial", "noticias", "descargas", "minecraft"]
  },
  {
    id: "minemev",
    name: "Minemev",
    desc: "Plataforma para crear y compartir memes de Minecraft.",
    category: "Minecraft",
    subcategory: "Comunidad",
    official: "http://minemev.com/",
    download: "",
    tags: ["gratis", "memes", "comunidad", "diversión", "minecraft"]
  },
  {
    id: "planetminecraft",
    name: "PlanetMinecraft",
    desc: "Comunidad para compartir mapas, skins, texturas y proyectos.",
    category: "Minecraft",
    subcategory: "Comunidad",
    official: "https://www.planetminecraft.com",
    download: "",
    tags: ["gratis", "comunidad", "mapas", "skins", "texturas"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🧠 INTELIGENCIA ARTIFICIAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "chatgpt",
    name: "ChatGPT",
    desc: "Asistente conversacional de OpenAI para generar texto, ideas y resolver dudas.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://chat.openai.com",
    download: "",
    tags: ["gratis", "premium", "chatbot", "texto", "openai"]
  },
  {
    id: "claude",
    name: "Claude",
    desc: "Asistente de IA de Anthropic para conversaciones seguras y útiles.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://claude.ai",
    download: "",
    tags: ["gratis", "premium", "chatbot", "anthropic"]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    desc: "Modelo de lenguaje gratuito con razonamiento y búsqueda en internet.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://www.deepseek.com",
    download: "",
    tags: ["gratis", "razonamiento", "búsqueda", "open-source"]
  },
  {
    id: "gemini",
    name: "Gemini",
    desc: "Modelo multimodal de Google que entiende texto, imágenes y más.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://gemini.google.com",
    download: "",
    tags: ["gratis", "multimodal", "google"]
  },
  {
    id: "grok",
    name: "Grok",
    desc: "IA integrada en X con acceso a información en tiempo real.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://grok.x.ai",
    download: "",
    tags: ["gratis", "premium", "tiempo real", "x", "twitter"]
  },
  {
    id: "lm-studio",
    name: "LM Studio",
    desc: "Ejecuta modelos de lenguaje localmente en tu ordenador, sin conexión.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://lmstudio.ai",
    download: "https://lmstudio.ai",
    tags: ["gratis", "local", "modelos", "offline", "privacidad"]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    desc: "Buscador IA conversacional que responde con fuentes y citas.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://www.perplexity.ai",
    download: "",
    tags: ["gratis", "premium", "búsqueda", "fuentes", "ia"]
  },
  {
    id: "whimsical",
    name: "Whimsical",
    desc: "Crea diagramas, mapas mentales y flujos de trabajo con IA.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://whimsical.com",
    download: "",
    tags: ["gratis", "premium", "diagramas", "mapas mentales", "productividad"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📚 GUÍAS Y RECURSOS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Guías ──
  {
    id: "pdf-definitivo-contenido",
    name: "PDF Definitivo: Creación de Contenido",
    desc: "Plan gratuito en PDF para aprender a crecer en YouTube y X (Twitter) de manera simultánea.",
    category: "Guías y Recursos",
    subcategory: "Guías",
    official: "https://ko-fi.com/s/bfd5e4ad5f",
    download: "",
    tags: ["gratis", "guía", "pdf", "youtube", "twitter", "crecimiento", "contenido"]
  },

  // ── Hardware ──
  {
    id: "button-designer",
    name: "Button Designer",
    desc: "Creador de iconos personalizados para teclas Stream Deck, 100% en el navegador.",
    category: "Guías y Recursos",
    subcategory: "Hardware",
    official: "https://button-designer.addy.codes/",
    download: "",
    tags: ["gratis", "stream deck", "iconos", "hardware", "diseño", "personalización", "web"]
  }
];

// FIN DEL ARCHIVO AJAJAJA GGG NO JODA VERGACION MAS NUNCA VUELVO A HACER ALGO ASI EN MI VIDA
