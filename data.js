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
    desc: "Generador automático de banners, iconos y animaciones para redes sociales.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://auto.creavite.co/",
    download: "",
    tags: ["gratis", "banners", "redes sociales", "animaciones"]
  },
  {
    id: "img2go",
    name: "Img2go",
    desc: "Herramienta online para ampliar imágenes sin perder calidad (upscaling).",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://www.img2go.com/es/aumentar-imagen",
    download: "",
    tags: ["gratis", "upscaling", "imágenes", "calidad"]
  },
  {
    id: "mcshaders",
    name: "MCShaders",
    desc: "Recurso para separar fondos de imágenes, compartido en X.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://x.com/Seltop7/status/1946391683563659424?t=mf1HqoYQy8vHUEaXorXPWg&s=19",
    download: "",
    tags: ["gratis", "fondos", "imágenes"]
  },
  {
    id: "moewalls",
    name: "MoeWalls",
    desc: "Wallpapers animados y estáticos de anime y videojuegos.",
    category: "Diseño Gráfico",
    subcategory: "Recursos Visuales",
    official: "https://moewalls.com",
    download: "",
    tags: ["gratis", "wallpapers", "anime", "videojuegos"]
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
    desc: "Amplia colección de emojis para servidores de Discord.",
    category: "Discord",
    subcategory: "Emojis",
    official: "https://discadia.com",
    download: "",
    tags: ["gratis", "emojis", "servidores"]
  },
  {
    id: "discords-emoji-list",
    name: "Discords Emoji List",
    desc: "Listado de emojis organizados por categorías.",
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
    desc: "Enciclopedia de emojis con significados y copia rápida.",
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
    desc: "Iconos gratuitos para servidores de Discord.",
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
    desc: "Acortador de enlaces personalizado para Discord.",
    category: "Discord",
    subcategory: "Herramientas",
    official: "https://dsc.gg",
    download: "",
    tags: ["gratis", "links", "acortador"]
  },
  {
    id: "nese-april-fools",
    name: "Nese April Fools Tool",
    desc: "Cambia el icono de tu servidor por el de los inocentes (efímero).",
    category: "Discord",
    subcategory: "Herramientas",
    official: "https://tools.nese.dev/discord-april-fools",
    download: "",
    tags: ["gratis", "diversión", "iconos"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🖼 EDICIÓN DE IMÁGENES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "paint-net",
    name: "paint.net",
    desc: "Editor de imágenes ligero y potente para Windows, con capas y efectos.",
    category: "Edición de Imágenes",
    subcategory: "",
    official: "https://www.getpaint.net",
    download: "https://www.getpaint.net/download.html",
    tags: ["gratis", "editor", "windows", "capas"]
  },
  {
    id: "photopea",
    name: "Photopea",
    desc: "Editor de imágenes online gratuito, similar a Photoshop, compatible con PSD.",
    category: "Edición de Imágenes",
    subcategory: "",
    official: "https://www.photopea.com",
    download: "",
    tags: ["gratis", "editor", "psd", "online"]
  },
  {
    id: "picsart",
    name: "Picsart",
    desc: "Suite completa de edición de imágenes y video para móvil y web.",
    category: "Edición de Imágenes",
    subcategory: "",
    official: "https://picsart.com",
    download: "",
    tags: ["gratis", "premium", "editor", "móvil"]
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
    tags: ["gratis", "open-source", "3d", "animación"]
  },
  {
    id: "capcut",
    name: "CapCut",
    desc: "Editor de video gratuito con herramientas intuitivas y efectos virales.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://www.capcut.com",
    download: "https://www.capcut.com",
    tags: ["gratis", "editor", "móvil", "efectos"]
  },
  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    desc: "Editor profesional con corrección de color, audio y efectos visuales.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://www.blackmagicdesign.com/products/davinciresolve",
    download: "https://www.blackmagicdesign.com/products/davinciresolve",
    tags: ["gratis", "premium", "profesional", "color"]
  },
  {
    id: "misterhorse",
    name: "MisterHorse",
    desc: "Plugins y plantillas para After Effects y animación.",
    category: "Producción de Video",
    subcategory: "Software",
    official: "https://misterhorse.com",
    download: "",
    tags: ["gratis", "premium", "after effects", "plugins"]
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
    desc: "Plantillas y recursos (Crackeados) para crear intros profesionales y animaciones.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://introhd.net",
    download: "",
    tags: ["gratis", "premiere", "aftereffects", "plantillas"]
  },
  {
    id: "jitter-templates",
    name: "Jitter Templates",
    desc: "Plantillas animadas para After Effects y motion graphics.",
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
    tags: ["gratis", "transiciones", "premiere pro", "tutorial"]
  },
  {
    id: "transiciones-premium-navvy",
    name: "Transiciones Premium",
    desc: "Packs de transiciones y efectos para Premiere y After Effects.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://ko-fi.com/navvy_/shop",
    download: "",
    tags: ["premium", "transiciones", "after effects", "premiere pro", "navvy"]
  },
  {
    id: "transitional-hooks",
    name: "Transitional Hooks",
    desc: "Colección de transiciones gratuitas para video.",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://transitionalhooks.com",
    download: "",
    tags: ["gratis", "transiciones", "video"]
  },
  {
    id: "tutorial-subtitulos-premiere",
    name: "Tutorial Subtítulos Premiere",
    desc: "Aprende a hacer subtítulos animados en Premiere Pro (por Auron).",
    category: "Producción de Video",
    subcategory: "Recursos",
    official: "https://youtu.be/im1VwJWp3dU",
    download: "",
    tags: ["gratis", "tutorial", "subtítulos", "premiere pro"]
  },

  // ── Rigs y Modelos ──
  {
    id: "rig-cubo-hielo",
    name: "Rig Cubo de Hielo",
    desc: "Rig gratuito de un cubo de hielo para animaciones.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://ice-cube-rig.carrd.co/",
    download: "",
    tags: ["gratis", "rig", "animación", "blender"]
  },
  {
    id: "rig-estilo-mojang",
    name: "Rig estilo Mojang",
    desc: "Rig de personaje al estilo Mojang para animación.",
    category: "Producción de Video",
    subcategory: "Rigs y Modelos",
    official: "https://azagwen.gumroad.com/l/skEOo",
    download: "",
    tags: ["gratis", "rig", "mojang", "animación", "minecraft"]
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
    tags: ["gratis", "open-source", "editor", "audio"]
  },
  {
    id: "obs-studio",
    name: "OBS Studio",
    desc: "Software libre para grabación de pantalla y streaming en directo.",
    category: "Audio & Grabación",
    subcategory: "",
    official: "https://obsproject.com",
    download: "https://obsproject.com/download",
    tags: ["gratis", "open-source", "grabación", "streaming"]
  },
  {
    id: "speechchat",
    name: "SpeechChat",
    desc: "Convierte voz a texto en tiempo real para chats y subtítulos.",
    category: "Audio & Grabación",
    subcategory: "",
    official: "https://speechchat.com",
    download: "",
    tags: ["gratis", "voz a texto", "subtítulos", "tiempo real"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📺 STREAMING EN VIVO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "casterlabs",
    name: "Casterlabs",
    desc: "Suite avanzada para streamers con análisis, overlays y más.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://casterlabs.co",
    download: "",
    tags: ["gratis", "premium", "análisis", "overlays"]
  },
  {
    id: "streamelements",
    name: "StreamElements",
    desc: "Herramientas para personalizar streams, alertas y gestión de comunidad.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://streamelements.com",
    download: "",
    tags: ["gratis", "alertas", "comunidad", "bots"]
  },
  {
    id: "streamlabs",
    name: "StreamLabs",
    desc: "Plataforma todo-en-uno para streaming con alertas, overlays y donaciones.",
    category: "Streaming en Vivo",
    subcategory: "",
    official: "https://streamlabs.com",
    download: "https://streamlabs.com",
    tags: ["gratis", "premium", "alertas", "overlays"]
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
    tags: ["gratis", "seo", "etiquetas", "youtube"]
  },
  {
    id: "tubebuddy",
    name: "TubeBuddy",
    desc: "Extensión y web para optimizar la gestión y crecimiento de tu canal.",
    category: "Herramientas YouTube",
    subcategory: "",
    official: "https://www.tubebuddy.com",
    download: "",
    tags: ["gratis", "premium", "seo", "gestión", "extensión"]
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
    id: "cobalt",
    name: "Cobalt",
    desc: "Descarga videos, audios e imágenes de múltiples redes sociales sin anuncios.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://cobalt.tools",
    download: "",
    tags: ["gratis", "descargas", "videos", "redes sociales"]
  },
  {
    id: "file-pizza",
    name: "File.Pizza",
    desc: "Transferencia de archivos peer-to-peer directamente desde el navegador.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://file.pizza",
    download: "",
    tags: ["gratis", "transferencia", "p2p", "archivos"]
  },
  {
    id: "online-convert",
    name: "Online-Convert",
    desc: "Convierte archivos de video, audio, imagen, documento y más.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://www.online-convert.com",
    download: "",
    tags: ["gratis", "conversión", "archivos", "formatos"]
  },
  {
    id: "qr-io",
    name: "QR.io",
    desc: "Generador de códigos QR con opciones de personalización y seguimiento.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://qr.io",
    download: "",
    tags: ["gratis", "qr", "códigos", "personalización"]
  },
  {
    id: "rekonise",
    name: "Rekonise",
    desc: "Acortador de URLs con estadísticas y personalización.",
    category: "Utilidades Digitales",
    subcategory: "Herramientas Online",
    official: "https://rekonise.com",
    download: "",
    tags: ["gratis", "urls", "acortador", "estadísticas"]
  },

  // ── Software PC ──
  {
    id: "massgrave",
    name: "MassGrave",
    desc: "Herramientas para activar Microsoft Office y Windows (uso bajo tu responsabilidad).",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://massgrave.dev",
    download: "",
    tags: ["gratis", "activación", "windows", "office"]
  },
  {
    id: "ninite",
    name: "Ninite",
    desc: "Instalador múltiple de programas esenciales para Windows, sin bloatware.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://ninite.com",
    download: "https://ninite.com",
    tags: ["gratis", "instalador", "windows"]
  },
  {
    id: "vscode",
    name: "VSCode",
    desc: "Editor de código fuente ligero y potente de Microsoft.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://code.visualstudio.com",
    download: "https://code.visualstudio.com/download",
    tags: ["gratis", "editor", "código", "microsoft"]
  },
  {
    id: "winutil",
    name: "WinUtil",
    desc: "Script de utilidades para optimizar y configurar Windows.",
    category: "Utilidades Digitales",
    subcategory: "Software PC",
    official: "https://github.com/ChrisTitusTech/winutil",
    download: "",
    tags: ["gratis", "open-source", "windows", "optimización"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎮 MINECRAFT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── Utilidades ──
  {
    id: "birdflop-resources",
    name: "Birdflop Resources",
    desc: "Recursos para optimizar servidores de Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://www.birdflop.com/resources",
    download: "",
    tags: ["gratis", "servidores", "optimización"]
  },
  {
    id: "birdflop-rgb",
    name: "Birdflop RGB",
    desc: "Generador de códigos de color RGB para Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://www.birdflop.com/resources/rgb",
    download: "",
    tags: ["gratis", "rgb", "colores", "generador"]
  },
  {
    id: "chunkbase",
    name: "ChunkBase",
    desc: "Localizador de biomas, estructuras y semillas en Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://www.chunkbase.com",
    download: "",
    tags: ["gratis", "biomas", "semillas", "mapas"]
  },
  {
    id: "chunker",
    name: "Chunker",
    desc: "Conversor de mundos entre versiones y plataformas de Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://oss.chunker.app/",
    download: "",
    tags: ["gratis", "conversor", "mundos", "bedrock", "java"]
  },
  {
    id: "crafting-grid",
    name: "Crafting Grid",
    desc: "Simulador de cuadrícula de crafteo para diseñar recetas.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://crafting.thedestruc7i0n.ca/",
    download: "",
    tags: ["gratis", "crafteo", "recetas", "simulador"]
  },
  {
    id: "mca-selector",
    name: "McaSelector",
    desc: "Editor de regiones para eliminar o exportar áreas específicas del mundo.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://github.com/Querz/mcaselector",
    download: "https://github.com/Querz/mcaselector/releases",
    tags: ["gratis", "open-source", "regiones", "editor"]
  },
  {
    id: "mctitles",
    name: "MCTitles",
    desc: "Generador de títulos animados al estilo Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://mctitles.com",
    download: "",
    tags: ["gratis", "títulos", "generador"]
  },
  {
    id: "minecraft-tools",
    name: "Minecraft Tools",
    desc: "Variedad de herramientas online: calculadoras, generadores y más.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://minecraft.tools",
    download: "",
    tags: ["gratis", "herramientas", "generadores"]
  },
  {
    id: "misode-datapack",
    name: "Misode Datapack Generator",
    desc: "Generador visual de datapacks y estructuras JSON.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://misode.github.io",
    download: "",
    tags: ["gratis", "datapacks", "json", "generador"]
  },
  {
    id: "spritecraft",
    name: "SpriteCraft",
    desc: "Convierte imágenes en mapas de Minecraft.",
    category: "Minecraft",
    subcategory: "Utilidades",
    official: "https://autosaved.org/spritecraft",
    download: "https://autosaved.org/spritecraft",
    tags: ["gratis", "imágenes", "mapas", "pixel art"]
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
    tags: ["gratis", "open-source", "3d", "modelado"]
  },
  {
    id: "mcicons",
    name: "MCIcons",
    desc: "Iconos de objetos y bloques de Minecraft en formato PNG.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://mcicons.ccleaf.com/",
    download: "",
    tags: ["gratis", "iconos", "bloques", "png"]
  },
  {
    id: "mcprep",
    name: "MCprep",
    desc: "Addon de Blender para importar y animar modelos de Minecraft.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://theduckcow.com/dev/blender/mcprep/",
    download: "",
    tags: ["gratis", "open-source", "blender", "modelos"]
  },
  {
    id: "minecraft-capes",
    name: "MinecraftCapes",
    desc: "Consigue capas personalizadas para tu personaje.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://minecraftcapes.net",
    download: "",
    tags: ["gratis", "capas", "personalización"]
  },
  {
    id: "pvprp",
    name: "PvPRP",
    desc: "Web de Resource packs enfocados en PvP 1.8.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://pvprp.com",
    download: "",
    tags: ["gratis", "pvp", "texturas", "resource pack"]
  },
  {
    id: "skinmc",
    name: "SkinMC",
    desc: "Editor y visor de skins de Minecraft con opciones de descarga.",
    category: "Minecraft",
    subcategory: "Personalización",
    official: "https://skinmc.net",
    download: "",
    tags: ["gratis", "skins", "editor", "visor"]
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
    tags: ["gratis", "tótems", "personalización"]
  },

  // ── Modding ──
  {
    id: "curseforge",
    name: "CurseForge",
    desc: "El repositorio más grande de mods y modpacks.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://www.curseforge.com/minecraft",
    download: "https://www.curseforge.com/download/app",
    tags: ["gratis", "mods", "modpacks"]
  },
  {
    id: "mcpedl",
    name: "MCPEDL",
    desc: "Recursos, mods y mapas para Minecraft Bedrock Edition.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://mcpedl.com",
    download: "",
    tags: ["gratis", "bedrock", "mods", "mapas"]
  },
  {
    id: "modrinth",
    name: "Modrinth",
    desc: "Plataforma de mods moderna, rápida y de código abierto.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://modrinth.com",
    download: "",
    tags: ["gratis", "open-source", "mods", "modpacks"]
  },
  {
    id: "optifine",
    name: "OptiFine",
    desc: "Optimización gráfica y soporte para shaders.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://optifine.net",
    download: "https://optifine.net/downloads",
    tags: ["gratis", "optimización", "shaders", "gráficos"]
  },
  {
    id: "physics-mod-pro",
    name: "Physics Mod Pro",
    desc: "Añade física realista a bloques y entidades (Patreon).",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://www.patreon.com/Haubna",
    download: "",
    tags: ["premium", "física", "realismo"]
  },
  {
    id: "vanilla-tweaks",
    name: "Vanilla Tweaks",
    desc: "Mejoras visuales y de calidad de vida sin modificar la jugabilidad.",
    category: "Minecraft",
    subcategory: "Modding",
    official: "https://vanillatweaks.net",
    download: "",
    tags: ["gratis", "vanilla", "mejoras", "qol"]
  },

  // ── Clientes ──
  {
    id: "feather-client",
    name: "Feather Client",
    desc: "Cliente ligero y rápido con soporte para mods y cosméticos.",
    category: "Minecraft",
    subcategory: "Clientes",
    official: "https://feathermc.com",
    download: "https://feathermc.com",
    tags: ["gratis", "ligero", "mods", "cosméticos"]
  },
  {
    id: "labymod",
    name: "Labymod",
    desc: "Cliente de Minecraft con mejoras visuales y funcionales.",
    category: "Minecraft",
    subcategory: "Clientes",
    official: "https://www.labymod.net",
    download: "https://www.labymod.net/download",
    tags: ["gratis", "cliente", "mejoras"]
  },
  {
    id: "lunar-client",
    name: "Lunar Client",
    desc: "Cliente optimizado para PvP con mods y personalización.",
    category: "Minecraft",
    subcategory: "Clientes",
    official: "https://www.lunarclient.com",
    download: "https://www.lunarclient.com/download",
    tags: ["gratis", "pvp", "mods", "optimizado"]
  },

  // ── Launchers ──
  {
    id: "modrinth-app",
    name: "Modrinth App",
    desc: "Lanzador multiplataforma enfocado en mods de Modrinth.",
    category: "Minecraft",
    subcategory: "Launchers",
    official: "https://modrinth.com/app",
    download: "https://modrinth.com/app",
    tags: ["gratis", "open-source", "launcher", "mods"]
  },
  {
    id: "prism-launcher",
    name: "Prism Launcher",
    desc: "Lanzador de Minecraft con gestión avanzada de instancias y mods.",
    category: "Minecraft",
    subcategory: "Launchers",
    official: "https://prismlauncher.org",
    download: "https://prismlauncher.org/download/",
    tags: ["gratis", "open-source", "launcher", "instancias"]
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
    tags: ["oficial", "noticias", "descargas"]
  },
  {
    id: "minemev",
    name: "Minemev",
    desc: "Plataforma para encontrar y compartir memes de Minecraft.",
    category: "Minecraft",
    subcategory: "Comunidad",
    official: "http://minemev.com/",
    download: "",
    tags: ["gratis", "memes", "comunidad", "diversión"]
  },
  {
    id: "planetminecraft",
    name: "PlanetMinecraft",
    desc: "Comunidad para compartir mapas, skins, texturas y proyectos.",
    category: "Minecraft",
    subcategory: "Comunidad",
    official: "https://www.planetminecraft.com",
    download: "",
    tags: ["gratis", "comunidad", "mapas", "skins"]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🧠 INTELIGENCIA ARTIFICIAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "chatgpt",
    name: "ChatGPT",
    desc: "Asistente conversacional de OpenAI, ideal para generar texto, ideas y resolver dudas.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://chat.openai.com",
    download: "",
    tags: ["gratis", "premium", "chatbot", "texto", "openai"]
  },
  {
    id: "claude",
    name: "Claude",
    desc: "Asistente de IA de Anthropic, enfocado en conversaciones seguras y útiles.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://claude.ai",
    download: "",
    tags: ["gratis", "premium", "chatbot", "anthropic"]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    desc: "Modelo de lenguaje gratuito con capacidades de razonamiento y búsqueda en internet.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://www.deepseek.com",
    download: "",
    tags: ["gratis", "razonamiento", "búsqueda", "open-source"]
  },
  {
    id: "gemini",
    name: "Gemini",
    desc: "Modelo multimodal de Google, capaz de entender texto, imágenes y más.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://gemini.google.com",
    download: "",
    tags: ["gratis", "multimodal", "google"]
  },
  {
    id: "grok",
    name: "Grok",
    desc: "IA integrada en X (antes Twitter) con acceso a información en tiempo real.",
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
    tags: ["gratis", "local", "modelos", "offline"]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    desc: "Buscador IA conversacional que responde con fuentes y citas.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://www.perplexity.ai",
    download: "",
    tags: ["gratis", "premium", "búsqueda", "fuentes"]
  },
  {
    id: "whimsical",
    name: "Whimsical",
    desc: "Crea diagramas, mapas mentales y flujos de trabajo con ayuda de inteligencia artificial.",
    category: "Inteligencia Artificial",
    subcategory: "",
    official: "https://whimsical.com",
    download: "",
    tags: ["gratis", "premium", "diagramas", "mapas mentales", "productividad"]
  }
];
