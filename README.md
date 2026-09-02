# Cápsulas Embalajes Mamut 📦

Plataforma web interactiva de capacitación y visualización de cápsulas de video y manuales operativos para los procesos de embalaje en **Mamut**.

Desarrollada completamente en **React 19** y **Vite**, optimizada para máxima velocidad, diseño moderno (paleta Carbon & Gold con soporte de Modo Claro / Modo Oscuro) y **funcionamiento 100% Offline**.

---

## 🚀 Características Principales

- **Totalmente Offline**: Todos los videos instructivos, manuales técnicos en PDF, imágenes y tipografías (Roboto y Noto Sans) están alojados localmente en `public/assets/`. La aplicación funciona sin conexión a internet.
- **Navegación Intuitiva**:
  - **Inicio**: Pantalla de bienvenida con accesos rápidos por rol y manuales.
  - **Menú General**: Categorización por roles (*Embalador*, *Supervisor*, *Errores Frecuentes*, *Embalador con Privilegios*), buscador en tiempo real y selector de manuales.
  - **Módulo de Cápsulas**: Filtrado dinámico por categoría y búsqueda instantánea por título o descripción.
  - **Reproductor de Video Profesional**: Control de velocidad (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x), salto rápido ±10 segundos, pantalla completa, soporte Picture-in-Picture (PiP), atajos de teclado y panel de cápsulas relacionadas.
  - **Visor de Manuales PDF**: Lectura integrada sin dependencias de visores en la nube, con opciones de descarga y pantalla completa.
- **Diseño Responsivo y Temas**: Soporte para Modo Claro y Modo Oscuro con persistencia en `localStorage`.

---

## 🛠️ Tecnologías

- **React 19**: Interfaz declarativa de alto rendimiento.
- **Vite 6**: Empaquetador y entorno de desarrollo ultrarrápido.
- **Lucide React**: Conjunto de iconos vectoriales limpios y modernos.
- **CSS3 / Variables Custom**: Sistema de diseño a medida sin frameworks pesados, con glassmorphism y micro-interacciones fluidas.

---

## 📦 Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18.0 o superior recomendada).
- `npm` (incluido con Node.js).

---

## 💻 Instrucciones de Uso

### 1. Instalación de Dependencias
```bash
npm install
```

### 2. Ejecutar en Modo Desarrollo
Inicia el servidor local de desarrollo:
```bash
npm run dev
```
La aplicación se abrirá en `http://localhost:3000` (o el puerto configurado).

### 3. Compilar para Producción
Genera el paquete estático ultra optimizado en la carpeta `dist/`:
```bash
npm run build
```

### 4. Previsualizar la Compilación de Producción
```bash
npm run preview
```

---

## 📁 Estructura del Proyecto

```
AppCapsulasEmbalajes/
├── public/
│   ├── assets/
│   │   ├── Documentos/               # Manuales oficiales en formato PDF
│   │   ├── fonts/                    # Fuentes locales (Roboto, Noto Sans) para uso offline
│   │   ├── images/                   # Logotipos y recursos gráficos
│   │   └── videos/                   # Cápsulas de video organizadas por categoría
│   └── manifest.json                 # Configuración PWA / Standalone web app
├── src/
│   ├── components/                   # Componentes reutilizables (VideoPlayer, PdfViewer, Navbar, etc.)
│   ├── context/                      # Contextos globales (ThemeContext)
│   ├── data/                         # Información estructurada de cápsulas y manuales (capsulesData.js)
│   ├── screens/                      # Pantallas principales de la plataforma
│   ├── App.jsx                       # Orquestador principal de navegación
│   ├── index.css                     # Sistema de diseño global y variables
│   └── main.jsx                      # Punto de entrada React
├── index.html                        # Plantilla HTML principal
├── package.json                      # Configuración de dependencias y scripts
└── vite.config.js                    # Configuración de Vite
```
