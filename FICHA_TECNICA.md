# TecBolt - Mamut
**Documento Técnico: Antecedentes del Proyecto**  
**Plataforma Web Cápsulas de Embalaje Mamut**  
*(Migración desde Flutter a React 19 + Vite y Despliegue en Servidor Web Nginx Puerto 8080)*

---

**Responsable:** Lya López, Alumno en Práctica Duoc UC  
**Jefe Supervisor:** Francisco Norambuena, Informática Tecbolt  
**Empresa:** TecboltSA – Mamut  
**Fecha:** 01-09-2026  

---

## Tabla de contenido

1. [Antecedentes del Proyecto](#1-antecedentes-del-proyecto)
   - 1.1 [Antecedentes Personales](#11-antecedentes-personales)
   - 1.2 [Descripción del Proyecto](#12-descripción-del-proyecto)
   - 1.3 [Contexto del Proyecto](#13-contexto-del-proyecto)
   - 1.4 [Descripción Técnica de la Solución](#14-descripción-técnica-de-la-solución)
2. [Especificaciones Técnicas de la Solución](#2-especificaciones-técnicas-de-la-solución)
   - 2.1 [Infraestructura y Servidor Host](#21-infraestructura-y-servidor-host)
   - 2.2 [Servidor Web (Nginx en Puerto 8080)](#22-servidor-web-nginx-en-puerto-8080)
   - 2.3 [Arquitectura del Software (SPA Desacoplada y Offline-Ready)](#23-arquitectura-del-software-spa-desacoplada-y-offline-ready)
   - 2.4 [Patrones de Diseño Implementados](#24-patrones-de-diseño-implementados)
   - 2.5 [Frameworks y Librerías](#25-frameworks-y-librerías)
   - 2.6 [Lenguajes de Programación](#26-lenguajes-de-programación)
3. [Compilación y Despliegue en Producción](#3-compilación-y-despliegue-en-producción)
   - 3.1 [Compilación del Frontend (React + Vite)](#31-compilación-del-frontend-react--vite)
   - 3.2 [Configuración del Servidor Web Nginx (Puerto 8080)](#32-configuración-del-servidor-web-nginx-puerto-8080)
   - 3.3 [Verificación y Conexión al Servidor](#33-verificación-y-conexión-al-servidor)
   - 3.4 [Conexión Remota mediante PuTTY (SSH)](#34-conexión-remota-mediante-putty-ssh)
   - 3.5 [Configuración de Permisos de Archivo y Sistema](#35-configuración-de-permisos-de-archivo-y-sistema)
   - 3.6 [Configuración del Firewall (Apertura de Puertos)](#36-configuración-del-firewall-apertura-de-puertos)
   - 3.7 [Guía Operativa: ¿Cómo Agregar un Nuevo Video o Manual y Reiniciar el Servidor?](#37-guía-operativa-cómo-agregar-un-nuevo-video-o-manual-y-reiniciar-el-servidor)
4. [Estructura Funcional y Módulos de Capacitación](#4-estructura-funcional-y-módulos-de-capacitación)
   - 4.1 [Categorías Operativas y Cápsulas de Video](#41-categorías-operativas-y-cápsulas-de-video)
   - 4.2 [Manuales Técnicos Oficiales](#42-manuales-técnicos-oficiales)
5. [¿Por qué la Migración de Flutter a React + Vite?](#5-por-qué-la-migración-de-flutter-a-react--vite)
   - 5.1 [Justificación Técnica y Operativa](#51-justificación-técnica-y-operativa)
   - 5.2 [Garantía de Funcionamiento 100% Offline](#52-garantía-de-funcionamiento-100-offline)
6. [Resumen Detallado de los Archivos HTML, JSX y CSS](#6-resumen-detallado-de-los-archivos-html-jsx-y-css)
   - 6.1 [Archivos Base y de Configuración](#61-archivos-base-y-de-configuración)
   - 6.2 [Pantallas Principales (Vistas)](#62-pantallas-principales-vistas)
   - 6.3 [Componentes Visuales y Reproductores](#63-componentes-visuales-y-reproductores)
7. [Diccionario de Componentes y Datos](#7-diccionario-de-componentes-y-datos)
8. [Tipos de Archivos Multimedia y Especificaciones Técnicas](#8-tipos-de-archivos-multimedia-y-especificaciones-técnicas)

---

## 1. Antecedentes del Proyecto

### 1.1 Antecedentes Personales

| Campo | Información |
| :--- | :--- |
| **RUT** | 20.949.991-6 |
| **Nombres** | Lya Millaray Anttonela |
| **Apellidos** | López Valenzuela |
| **Institución** | Duoc UC |
| **Cargo** | Alumno en Práctica Profesional |
| **Empresa** | TecboltSA – Mamut |
| **Supervisor** | Francisco Norambuena (Informática Tecbolt) |

---

### 1.2 Descripción del Proyecto

| Elemento | Detalle |
| :--- | :--- |
| **Tema** | Plataforma Web Interactiva de Cápsulas de Capacitación y Manuales de Embalaje Mamut. |
| **Descripción** | Plataforma digital diseñada para centralizar, reproducir y consultar el material audiovisual y documental de los procesos operativos de embalaje de la empresa Mamut (TecboltSA). Permite el aprendizaje guiado de operarios, supervisores y personal con privilegios. |
| **Problemática Detectada** | La implementación anterior en Flutter requería emuladores, runtimes pesados o compilaciones web voluminosas con CanvasKit/Wasm, las cuales provocaban tiempos de carga lentos en terminales de planta, alto consumo de memoria RAM y dificultades para la reproducción fluida de video y lectura de manuales en entornos locales con conectividad restringida. |
| **Solución Esperada** | Migración completa de la solución a una Single Page Application (SPA) ultra rápida en **React 19** con **Vite**, eliminando todo el ecosistema Flutter, desplegándola sobre un servidor **Nginx en el puerto 8080** dentro de la red corporativa, garantizando un funcionamiento **100% Offline** y compatible con cualquier navegador moderno sin requerir software adicional. |
| **Objetivos Generales** | Proveer una plataforma web moderna, ágil, responsiva y autónoma para la capacitación continua del personal de embalajes de Mamut. |
| **Objetivos Específicos** | 1. Eliminar por completo el entorno y las dependencias de Flutter del servidor.<br>2. Compilar y desplegar la nueva aplicación React en Nginx en el puerto 8080.<br>3. Autocontener el 100% de los recursos multimedia (videos WebM/MP4, manuales PDF, tipografías e imágenes) para garantizar su operación sin internet.<br>4. Implementar un reproductor de video profesional con control de velocidad, saltos rápidos y atajos de teclado.<br>5. Proveer un visor de manuales integrado con soporte para pantalla completa y descarga directa. |
| **Alcance del Proyecto** | La plataforma cubre los 4 roles/módulos operativos del proceso de embalaje (Embalador, Supervisor, Errores Frecuentes y Embalador con Privilegios), abarcando un total de 21 cápsulas de video interactivas y 2 manuales técnicos completos en formato PDF. |

---

### 1.3 Contexto del Proyecto

En el área de operaciones y logística de **Mamut (TecboltSA)**, el personal de embalaje ejecuta rutinas de trabajo críticas basadas en Órdenes de Entrega (OE), asignación de mesones, clonación de tareas y manejo de excepciones operativas. Para estandarizar los procedimientos y reducir los errores en la preparación de pedidos, se requiere que los operarios y supervisores tengan acceso inmediato e ininterrumpido a cápsulas audiovisuales explicativas y manuales técnicos.

Debido a que muchas estaciones de trabajo en la fábrica se encuentran en terminales dedicados dentro de una red privada local (LAN) o quioscos industriales que pueden experimentar pérdidas temporales de enlace a internet, era mandatorio que la solución no dependiese de nubes externas ni servicios SaaS, operando con máxima eficiencia directamente servida desde Nginx en el puerto 8080.

---

### 1.4 Descripción Técnica de la Solución

El flujo operativo de la plataforma se compone de los siguientes pasos:
1. **Acceso al Portal**: El usuario ingresa desde cualquier navegador de la red interna a la URL `http://<IP_SERVIDOR>:8080/`.
2. **Bienvenida e Inicio**: Visualiza la pantalla principal con identidad corporativa Mamut (paleta Carbon & Gold), métricas globales de capacitación y accesos directos al Menú o a la lectura inmediata de manuales.
3. **Selección de Rol y Módulo**: Desde el menú interactivo, el operario selecciona su perfil (Embalador, Supervisor, Errores Frecuentes, Embalador con Privilegios) o accede al catálogo de manuales PDF.
4. **Búsqueda y Filtrado**: Puede filtrar en tiempo real las cápsulas disponibles utilizando el buscador dinámico por palabras clave (ej: *"solicitar"*, *"pausa"*, *"cierre"*).
5. **Reproducción Multimedia**: Al seleccionar una cápsula, se abre el reproductor de video HTML5 con controles avanzados (reproducción continua, control de volumen, saltos ±10s, cambio de velocidad 0.5x - 2x, PiP, pantalla completa) y una lista lateral de navegación rápida entre videos del mismo módulo.
6. **Consulta de Manuales Oficiales**: Si requiere profundizar en normas y procedimientos escritos, abre el visor de PDF integrado que renderiza el documento sin salir de la plataforma.

---

## 2. Especificaciones Técnicas de la Solución

### 2.1 Infraestructura y Servidor Host

- **Sistema Operativo:** Linux (CentOS 8 / RHEL) en la red privada de la empresa.
- **Dirección IP del Servidor:** Asignada en segmento LAN corporativo (ejemplo estándar: `192.168.17.72` o según configuración DHCP/estática).
- **Acceso de Administración:** Protocolo SSH (puerto 22) vía PuTTY o terminal con credenciales administrativas (`ctest`).

---

### 2.2 Servidor Web (Nginx en Puerto 8080)

- **Función:** Servidor HTTP de alto rendimiento encargado de alojar y despachar los archivos estáticos de la aplicación (`index.html`, JS empaquetado, CSS, videos, PDFs e imágenes).
- **Puerto Asignado:** **8080/TCP** (reemplazando al antiguo contenedor/proceso de Flutter).
- **Ruta Raíz de Despliegue:** `/home/ctest/AppCapsulasEmbalajes/dist` (o la ruta configurada en el servidor).
- **Regla de Enrutamiento SPA:** `try_files $uri $uri/ /index.html;` para permitir la navegación fluida de React sin recargas ni errores 404.

---

### 2.3 Arquitectura del Software (SPA Desacoplada y Offline-Ready)

La plataforma está diseñada bajo el modelo **Single Page Application (SPA)** completamente desacoplada:

```
+-----------------------------------------------------------------------+
|                       NAVEGADOR DEL USUARIO                           |
|  (Terminal de Planta, PC de Supervisor o Dispositivo Móvil en LAN)     |
|                                                                       |
|  [ React 19 Engine ] <---> [ Context API (Theme) ] <---> [ Virtual DOM]
|         |                                                      |      |
|         v                                                      v      |
|  <VideoPlayer /> (HTML5 Nativo)                 <PdfViewer /> (Iframe)|
+-----------------------------------------------------------------------+
                                  ^
                                  | Peticiones HTTP Estáticas (Puerto 8080)
                                  v
+-----------------------------------------------------------------------+
|                      SERVIDOR WEB NGINX                               |
|                         (Puerto 8080)                                 |
|                                                                       |
|   /index.html   /assets/videos/*.webm   /assets/Documentos/*.pdf      |
|   /manifest.json       /assets/fonts/*.ttf     /assets/images/*.png   |
+-----------------------------------------------------------------------+
```

- **Cero Dependencia de Backend de Base de Datos:** Al tratarse de un sistema de capacitación estandarizado con cápsulas y manuales predefinidos, la información de las 21 cápsulas y 2 manuales está estructurada de forma inmutable en `src/data/capsulesData.js`. Esto elimina la necesidad de mantener activos motores de base de datos o APIs en Python/Uvicorn, reduciendo el consumo de RAM a cero y garantizando una disponibilidad del 100%.
- **Autocontención de Recursos:** Toda la multimedia reside en `public/assets/` y se transfiere de forma eficiente por Nginx con cabeceras `Cache-Control` inmutables.

---

### 2.4 Patrones de Diseño Implementados

1. **Component-Based Architecture:** La interfaz se descompone en unidades aisladas, reutilizables y comprobables (Navbar, Footer, CapsuleCard, SearchBar, ThemeToggle, VideoPlayer, PdfViewer, ExitModal).
2. **Context Provider Pattern (`ThemeContext`):** Maneja el estado global del tema (Claro u Oscuro) propagando variables CSS al elemento raíz `:root` y persistiendo la preferencia del usuario en `localStorage`.
3. **Container / Presentational Pattern:** Las pantallas (`HomeScreen`, `MenuScreen`, `CapsulesListScreen`, `PlayerScreen`, `DocumentViewerScreen`) gestionan el estado y la orquestación, mientras que los componentes presentan la UI.
4. **Defensive Resource Resolution:** Rutas de assets absolutas vinculadas al servidor Nginx, con fallbacks de tipografía local garantizados vía `@font-face`.

---

### 2.5 Frameworks y Librerías

#### Frontend
1. **React 19 (`react`, `react-dom`):** Biblioteca declarativa fundamental para la construcción de interfaces de usuario interactivas basadas en componentes.
2. **Vite 6 (`vite`, `@vitejs/plugin-react`):** Herramienta de compilación ultrarrápida impulsada por Rollup y ES Modules para desarrollo y empaquetado optimizado de producción.
3. **Lucide React (`lucide-react`):** Biblioteca de iconos vectoriales SVG limpios y optimizados (Play, Pause, BookOpen, Layers, ShieldCheck, Sun, Moon, Search, Volume2, Maximize, etc.).

#### Infraestructura
1. **Nginx:** Servidor web HTTP, reverse proxy y gestor de entrega de contenido estático y multimedia en el puerto 8080.

---

### 2.6 Lenguajes de Programación

1. **JavaScript (ES6+ / JSX):** Lógica funcional de la aplicación, hooks de estado (`useState`, `useEffect`, `useRef`, `useContext`), manipulación del DOM y manejo de eventos multimedia.
2. **HTML5 Semántico:** Estructuración de la plantilla principal `index.html`, etiquetas `<video>` y contenedor `#root`.
3. **CSS3 Modular y Variables Custom:** Sistema de diseño completo (paleta Carbon & Gold #D9A542), efectos de desenfoque de fondo (*glassmorphism*), animaciones de transición fluidas y reglas `@font-face` locales.

---

## 3. Compilación y Despliegue en Producción

### 3.1 Compilación del Frontend (React + Vite)

Para compilar el proyecto en el entorno de desarrollo o directamente en el servidor:

1. **Posicionarse en el directorio del proyecto:**
   ```bash
   cd /home/ctest/AppCapsulasEmbalajes
   ```
2. **Instalar dependencias (si no se han instalado):**
   ```bash
   npm install
   ```
3. **Ejecutar la compilación de producción optimizada:**
   ```bash
   npm run build
   ```
4. **Resultado de la compilación:**
   Los archivos estáticos finales se generan en la carpeta `dist/`, listos para ser servidos por Nginx:
   - `dist/index.html` (plantilla HTML minimizada)
   - `dist/assets/index-[hash].js` (código de React y librerías unificadas)
   - `dist/assets/index-[hash].css` (hoja de estilos global consolidada)
   - `dist/assets/videos/` (cápsulas de video completas)
   - `dist/assets/Documentos/` (manuales técnicos en PDF)
   - `dist/assets/fonts/` (fuentes locales Roboto y Noto Sans)
   - `dist/assets/images/` (logotipos e iconografía)

---

### 3.2 Configuración del Servidor Web Nginx (Puerto 8080)

Para servir la aplicación en el puerto **8080** en reemplazo de la antigua versión de Flutter, se crea o edita el archivo de configuración en `/etc/nginx/conf.d/capsulas_embalajes.conf`:

```nginx
# /etc/nginx/conf.d/capsulas_embalajes.conf

server {
    listen 8080;
    server_name _;

    # Ruta absoluta al directorio dist generado por Vite
    root /home/ctest/AppCapsulasEmbalajes/dist;
    index index.html;

    # Tamaño máximo de carga
    client_max_body_size 50M;

    # Redirección para Single Page Application (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caché y entrega óptima de videos, PDFs, fuentes e imágenes
    location ~* \.(webm|mp4|pdf|png|jpg|jpeg|svg|ico|ttf|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
        add_header Access-Control-Allow-Origin *;
        try_files $uri =404;
    }

    # Compresión Gzip para agilizar la carga en red interna
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        application/json
        application/javascript
        image/svg+xml;

    access_log /var/log/nginx/capsulas_embalajes_access.log;
    error_log /var/log/nginx/capsulas_embalajes_error.log warn;
}
```

**Validar sintaxis y reiniciar Nginx:**
```bash
# Comprobar que no existan errores de sintaxis en los archivos .conf
sudo nginx -t

# Reiniciar el servicio para aplicar los cambios
sudo systemctl restart nginx
```

---

### 3.3 Verificación y Conexión al Servidor

- **Acceso desde el navegador:** `http://<IP_SERVIDOR>:8080/` (por ejemplo: `http://192.168.17.72:8080/`).
- **Verificación de estado de Nginx:**
  ```bash
  sudo systemctl status nginx
  ```
- **Verificación de puerto a la escucha:**
  ```bash
  sudo ss -tulpn | grep 8080
  # o bien:
  sudo netstat -plnt | grep 8080
  ```

---

### 3.4 Conexión Remota mediante PuTTY (SSH)

1. Abrir la aplicación **PuTTY** en la computadora cliente.
2. En el campo **Host Name (or IP address)** ingresar la dirección del servidor (ej. `192.168.17.72`) y en **Port** el `22`.
3. Seleccionar tipo de conexión **SSH** y pulsar **Open**.
4. Ingresar el usuario (`ctest`) y la contraseña correspondiente.
5. Una vez dentro de la sesión, navegar a la carpeta del proyecto:
   ```bash
   cd /home/ctest/AppCapsulasEmbalajes
   ```

---

### 3.5 Configuración de Permisos de Archivo y Sistema

Nginx (ejecutándose bajo el usuario `nginx` o `nobody`) requiere permisos de lectura y ejecución en las carpetas y archivos para poder servirlos sin arrojar error `403 Forbidden`:

```bash
# Asignar permisos de lectura y navegación sobre la carpeta dist compilada
chmod -R 755 /home/ctest/AppCapsulasEmbalajes/dist/

# Garantizar permisos de paso sobre el home del usuario (si aplica en CentOS)
chmod 755 /home/ctest
```

---

### 3.6 Configuración del Firewall (Apertura de Puertos)

Para que las terminales y equipos de la red local puedan acceder a la plataforma a través del puerto 8080, se debe registrar la regla en el firewall de CentOS/RHEL (`firewalld`):

```bash
# Abrir permanentemente el puerto TCP 8080
sudo firewall-cmd --permanent --add-port=8080/tcp

# Recargar la configuración del firewall
sudo firewall-cmd --reload

# Comprobar los puertos activos
sudo firewall-cmd --list-ports
```

---

### 3.7 Guía Operativa: ¿Cómo Agregar un Nuevo Video o Manual y Reiniciar el Servidor?

Este procedimiento estandarizado describe los pasos exactos que el equipo de soporte o desarrollo debe seguir para incorporar nuevo contenido audiovisual (cápsulas de video) o documental (manuales PDF) a la plataforma y actualizar el servicio en producción sin interrupción de servicio para los operarios.

```
+---------------------------------------------------------------------------------------------------+
|                                      FLUJO DE ACTUALIZACIÓN                                       |
|                                                                                                   |
|  [Paso 1]                  [Paso 2]                 [Paso 3]                [Paso 4 y 5]          |
|  Copiar archivo a    --->  Registrar en       --->  Recompilar        --->  Ajustar permisos y    |
|  public/assets/...         src/data/                npm run build           recargar Nginx        |
|  (videos/manuales)         capsulesData.js          (Genera dist/)          systemctl reload nginx|
+---------------------------------------------------------------------------------------------------+
```

#### Paso 1: Subir el archivo multimedia al servidor Linux
1. Guardar el nuevo video en formato `.webm` (códec recomendado VP9/Opus) o `.mp4` (H.264/AAC), o el nuevo manual en `.pdf`.
2. Asignar un nombre normalizado sin espacios, caracteres especiales ni tildes (por ejemplo: `VerificarEtiquetas.webm` o `ManualCalidad.pdf`).
3. Copiar el archivo al directorio correspondiente dentro de `public/assets/`:
   - Para cápsulas de **Embalador**: `public/assets/videos/CapsulasEmbalador/`
   - Para cápsulas de **Supervisor**: `public/assets/videos/CapsulasSupervisor/`
   - Para cápsulas de **Errores Frecuentes**: `public/assets/videos/CapsulasErrores/`
   - Para cápsulas de **Embalador con Privilegios**: `public/assets/videos/CapsulasEmbaladorPrivilegios/`
   - Para **Manuales Técnicos Oficiales**: `public/assets/Documentos/`

   *Ejemplo de comando SCP ejecutado desde la computadora local (Windows) hacia el servidor:*
   ```bash
   scp C:\Videos\VerificarEtiquetas.webm ctest@192.168.17.72:/home/ctest/AppCapsulasEmbalajes/public/assets/videos/CapsulasEmbalador/
   ```

#### Paso 2: Registrar la nueva cápsula en `src/data/capsulesData.js`
1. Conectarse al servidor por SSH o abrir la carpeta del proyecto en VS Code mediante la extensión **Remote - SSH**.
2. Abrir el archivo de catálogo:
   ```bash
   nano /home/ctest/AppCapsulasEmbalajes/src/data/capsulesData.js
   ```
3. Ubicar el arreglo de la categoría a la cual pertenece la nueva cápsula dentro de `CAPSULES_DATA` y agregar el nuevo objeto JSON:
   ```javascript
   {
     id: 'emb-10',
     title: 'Verificar Etiquetas de Bulto',
     categoria: 'Embalador',
     ruta: '/assets/videos/CapsulasEmbalador/VerificarEtiquetas.webm',
     formato: 'webm',
     descripcion: 'Procedimiento estándar para la verificación y escaneo de etiquetas antes del cierre final de la orden.'
   },
   ```
   > **Nota de Automatización:** Al registrar el elemento en `CAPSULES_DATA`, la constante global `ALL_CAPSULES` se actualiza de manera automática mediante `Object.values(CAPSULES_DATA).flat()`, quedando inmediatamente disponible en el buscador en tiempo real y en la lista de reproducción.

4. *(Opcional)* Si se agregó un nuevo **Manual PDF**, registrarlo dentro del arreglo `MANUALS`:
   ```javascript
   {
     id: 'manual_calidad',
     title: 'Manual de Control de Calidad',
     category: 'Manuales',
     file: '/assets/Documentos/ManualCalidad.pdf',
     icon: 'ShieldCheck',
     badge: 'PDF',
     description: 'Normativas de inspección visual, empaque y sellado de seguridad.',
     size: '850 KB'
   },
   ```

#### Paso 3: Recompilar la aplicación para Producción (Vite)
Para que Vite procese los cambios de datos e integre los nuevos archivos de `public/` al directorio de distribución `dist/`, ejecutar en la terminal del servidor:
```bash
cd /home/ctest/AppCapsulasEmbalajes
npm run build
```
*La compilación se completará en menos de 5 segundos, generando los nuevos bundles y actualizando `dist/`.*

#### Paso 4: Ajustar Permisos de Lectura para Nginx
Asegurar que los nuevos archivos generados en `dist/` cuenten con los permisos de lectura adecuados para el proceso de Nginx:
```bash
chmod -R 755 /home/ctest/AppCapsulasEmbalajes/dist/
```

#### Paso 5: Reiniciar o Recargar el Servidor Web Nginx
Para aplicar la actualización y limpiar la memoria intermedia sin desconectar a los operarios que se encuentren actualmente visualizando videos:

1. **Recarga Suave (Reload - Método Recomendado sin Caída de Servicio):**
   ```bash
   # Comprobar la integridad de la configuración
   sudo nginx -t

   # Recargar Nginx suavemente
   sudo systemctl reload nginx
   ```
2. **Reinicio Completo (Restart - Si se realizaron modificaciones en puertos o firewall):**
   ```bash
   sudo systemctl restart nginx
   ```
3. **Comprobar que el servicio Nginx responda en el puerto 8080:**
   ```bash
   sudo systemctl status nginx
   ```

#### Paso 6: Verificación en los Equipos de Planta
1. Abrir el navegador en cualquier computadora o quiosco de la red local:
   ```text
   http://192.168.17.72:8080/
   ```
2. Si el navegador retiene en caché la versión estática anterior, presionar la combinación `Ctrl + F5` (o `Shift + F5`) para forzar la recarga limpia de la SPA.
3. Ingresar a la categoría correspondiente y verificar que la nueva cápsula aparezca en la lista, se filtre correctamente con el buscador y reproduzca el video con fluidez.

---

## 4. Estructura Funcional y Módulos de Capacitación

### 4.1 Categorías Operativas y Cápsulas de Video

La plataforma organiza un total de **21 cápsulas de video interactivas** distribuidas en cuatro módulos según el rol operativo:

#### Módulo 1: Embalador (9 Cápsulas)
| ID | Título | Archivo de Video | Duración |
| :--- | :--- | :--- | :--- |
| `emb-1` | Trabajar una OE | `/assets/videos/CapsulasEmbalador/Trabajarunaoe.webm` | 2:15 min |
| `emb-2` | Solicitar una OE | `/assets/videos/CapsulasEmbalador/Solicitaroe.mp4` | 1:45 min |
| `emb-3` | Quitar pausa | `/assets/videos/CapsulasEmbalador/Quitarpausa.webm` | 1:10 min |
| `emb-4` | Solicitar una pausa | `/assets/videos/CapsulasEmbalador/Solicitarunapausa.webm` | 1:30 min |
| `emb-5` | Solicitud de cierre | `/assets/videos/CapsulasEmbalador/Solicitudcierre.webm` | 1:55 min |
| `emb-6` | Tablero resumen | `/assets/videos/CapsulasEmbalador/Tableroresumen.webm` | 2:40 min |
| `emb-7` | Tarjeta de OE | `/assets/videos/CapsulasEmbalador/Tarjetaoe.webm` | 1:20 min |
| `emb-8` | Stop de seguridad | `/assets/videos/CapsulasEmbalador/Stop.webm` | 1:50 min |
| `emb-9` | Visualizar guías | `/assets/videos/CapsulasEmbalador/Visualizarguias.webm` | 2:05 min |

#### Módulo 2: Supervisor (6 Cápsulas)
| ID | Título | Archivo de Video | Duración |
| :--- | :--- | :--- | :--- |
| `sup-1` | Asignar una OE | `/assets/videos/CapsulasSupervisor/Asignarunaoe.webm` | 2:30 min |
| `sup-2` | Asignar un mesón | `/assets/videos/CapsulasSupervisor/Asignarunmeson.webm` | 1:50 min |
| `sup-3` | Clonar una OE | `/assets/videos/CapsulasSupervisor/Clonaroe.webm` | 2:10 min |
| `sup-4` | Dar una pausa | `/assets/videos/CapsulasSupervisor/Darunapausa.webm` | 1:35 min |
| `sup-5` | OE con solicitud de cierre | `/assets/videos/CapsulasSupervisor/Oeconsolicituddecierre.webm` | 2:00 min |
| `sup-6` | Ver monitor de OE | `/assets/videos/CapsulasSupervisor/Vermonitoroe.webm` | 2:45 min |

#### Módulo 3: Errores Frecuentes (3 Cápsulas)
| ID | Título | Archivo de Video | Duración |
| :--- | :--- | :--- | :--- |
| `err-1` | Error 1: No se puede ver una OE asignada | `/assets/videos/CapsulasErrores/Error1.Nosepuedeverunaoeasignada.webm` | 1:40 min |
| `err-2` | Error 2: No se puede cerrar una OE | `/assets/videos/CapsulasErrores/Error2.Nosepuedecerrarunaoe.webm` | 2:15 min |
| `err-3` | Error 3: Sin mesón al solicitar OE | `/assets/videos/CapsulasErrores/Error3.Sinmesonalsolicitaroe.webm` | 1:25 min |

#### Módulo 4: Embalador con Privilegios (3 Cápsulas)
| ID | Título | Archivo de Video | Duración |
| :--- | :--- | :--- | :--- |
| `priv-1` | Cerrar una OE | `/assets/videos/CapsulasEmbaladorPrivilegios/Cerraroe.webm` | 1:50 min |
| `priv-2` | Trabajar una OE | `/assets/videos/CapsulasEmbaladorPrivilegios/Trabajaroe.webm` | 2:05 min |
| `priv-3` | Pausar una OE | `/assets/videos/CapsulasEmbaladorPrivilegios/Pausaroe.webm` | 1:30 min |

---

### 4.2 Manuales Técnicos Oficiales

| ID | Documento | Archivo PDF | Páginas / Uso |
| :--- | :--- | :--- | :--- |
| `manual-1` | **Manual de Embalador** | `/assets/Documentos/ManualEmbalador.pdf` | Guía de procedimientos y estándares operativos de embalaje (968 KB). |
| `manual-2` | **Manual de Supervisor** | `/assets/Documentos/ManualSupervisor.pdf` | Protocolos de gestión, control de calidad y resolución de incidencias (721 KB). |

---

## 5. ¿Por qué la Migración de Flutter a React + Vite?

### 5.1 Justificación Técnica y Operativa

| Criterio | Flutter (Legacy) | React 19 + Vite (Actual) |
| :--- | :--- | :--- |
| **Tiempo de Carga Inicial** | Lento (3 a 7 segundos para inicializar el motor de Flutter en navegador). | **Ultra Rápido (< 500 ms)** gracias a módulos nativos ES y bundles ligeros. |
| **Consumo de Memoria RAM** | Alto (demanda ejecución de WebAssembly o renderizado CanvasKit continuo). | **Mínimo y Eficiente**, usa el motor nativo de JavaScript del navegador. |
| **Reproducción de Video** | Requiere plugins pesados (`chewie`, `video_player_win` o bindings web con fallos de códec). | **Soporte Nativo HTML5 (`<video>`)**, acelerado por hardware de la GPU/CPU. |
| **Visualización de PDFs** | Dependía de plugins como `syncfusion_flutter_pdfviewer` con licencias o limitaciones. | **Renderizado Nativo en Iframe**, con herramientas de zoom, impresión y descarga. |
| **Mantenimiento y Despliegue** | Complejo (requería SDK completo de Flutter, Dart y build tools móviles). | **Sencillo y Estándar**, solo requiere `npm run build` y copiar los archivos a Nginx. |
| **Peso del Entorno** | Cientos de MB en carpetas de plataformas (`android`, `ios`, `windows`, `linux`). | **Limpieza Total**, solo código fuente moderno y archivos multimedia organizados. |

---

### 5.2 Garantía de Funcionamiento 100% Offline

Para certificar que la plataforma opere sin interrupciones en la fábrica sin conexión externa a internet:
1. **Tipografías Locales Embebidas (`@font-face`):** Se integraron en `src/index.css` las fuentes tipográficas `Roboto` y `Noto Sans` desde `/assets/fonts/`, asegurando que la interfaz no dependa de Google Fonts CDN ni se degrade estéticamente si no hay salida a internet.
2. **Web App Manifest (`public/manifest.json`):** Permite la instalación de la aplicación como Progressive Web App (PWA) o Standalone en los quioscos y terminales de fábrica.
3. **Multimedia Local:** Los 21 videos y los 2 manuales PDF residen íntegramente dentro de `public/assets/`, servidos por Nginx con respuestas HTTP 200 inmediatas.

---

## 6. Resumen Detallado de los Archivos HTML, JSX y CSS

### 6.1 Archivos Base y de Configuración

1. **`index.html`:** Plantilla maestra del navegador. Define el contenedor raíz `<div id="root"></div>`, metaetiquetas PWA/móviles, enlace a `/manifest.json` e ícono corporativo `/Capsulas/assets/images/mamut.png`.
2. **`public/manifest.json`:** Manifiesto de la aplicación para soporte de visualización en pantalla completa y modo standalone sin marcos de navegador.
3. **`src/main.jsx`:** Punto de entrada JavaScript que inicializa React 19 mediante `createRoot`, envuelve la aplicación en el proveedor de tema `<ThemeProvider>` y monta `<App />`.
4. **`src/App.jsx`:** Orquestador principal de estado y navegación de la plataforma. Controla la pantalla activa (`home`, `menu`, `capsules_list`, `player`, `doc_viewer`), el rol/categoría seleccionado, la cápsula en reproducción y el modal de salida.
5. **`src/App.css`:** Contenedor general del layout, transiciones entre pantallas y padding superior para el navbar fijo.
6. **`src/index.css`:** Sistema de diseño global (*Design System*). Define la paleta Carbon & Gold (`--primary-gold: #D9A542`, `--carbon-900: #0D0D0E`), reglas de modo claro/oscuro, variables de espaciado, radio de bordes y reglas `@font-face` locales.
7. **`src/context/ThemeContext.jsx`:** Hook y contexto global para alternar entre modo Claro y Oscuro con persistencia en `localStorage`.
8. **`src/data/capsulesData.js`:** Estructura de datos inmutable que contiene el catálogo de las 4 categorías, los 2 manuales oficiales y las 21 cápsulas de video con sus metadatos (título, descripción, ruta de video, duración).
9. **`nginx/capsulas_embalajes.conf`:** Archivo de configuración listo para ser enlazado en `/etc/nginx/conf.d/` para el puerto 8080.

---

### 6.2 Pantallas Principales (Vistas en `src/screens/`)

1. **`HomeScreen.jsx` y `HomeScreen.css`:**  
   Pantalla de bienvenida. Presenta el isotipo y logotipo de Mamut, tarjetas con métricas de capacitación (4 categorías, 21 cápsulas, 2 manuales, 100% offline) y botones de acción principal para ingresar al menú o salir.
2. **`MenuScreen.jsx` y `MenuScreen.css`:**  
   Panel central de selección. Renderiza las tarjetas de roles (Embalador, Supervisor, Errores Frecuentes, Embalador con Privilegios), la sección de lectura de manuales técnicos PDF y una barra de búsqueda global para localizar cualquier cápsula de forma instantánea.
3. **`CapsulesListScreen.jsx` y `CapsulesListScreen.css`:**  
   Módulo de lista de cápsulas. Muestra las tarjetas de video correspondientes a la categoría seleccionada, badges con la cantidad de cápsulas y duración estimada, selector rápido de categorías en píldoras y filtro de búsqueda por texto.
4. **`PlayerScreen.jsx` y `PlayerScreen.css`:**  
   Vista del reproductor multimedia interactivo. Contiene el componente `<VideoPlayer />`, panel de información técnica de la cápsula en curso y una barra lateral con la lista de reproducción para alternar rápidamente entre videos del módulo sin volver atrás.
5. **`DocumentViewerScreen.jsx` y `DocumentViewerScreen.css`:**  
   Pantalla de lectura de manuales en PDF. Permite alternar entre el Manual de Embalador y el Manual de Supervisor mediante pestañas interactivas, renderizando el documento en el componente `<PdfViewer />`.

---

### 6.3 Componentes Visuales y Reproductores (`src/components/`)

1. **`Navbar.jsx` y `Navbar.css`:**  
   Barra de navegación superior fija con efecto *glassmorphism*. Muestra el logotipo corporativo, el título y subtítulo dinámico de la pantalla activa, botón de retorno contextual, accesos rápidos a Inicio/Menú/Manuales y el conmutador de tema.
2. **`Footer.jsx` y `Footer.css`:**  
   Pie de página institucional con logotipo de Mamut, mención a TecboltSA y confirmación del estado de servicio offline.
3. **`ThemeToggle.jsx` y `ThemeToggle.css`:**  
   Botón interactivo con icono de Sol/Luna para alternar instantáneamente entre la estética oscura (Carbon) y clara (Light).
4. **`SearchBar.jsx` y `SearchBar.css`:**  
   Campo de búsqueda en tiempo real con icono de lupa y botón para limpiar el texto ingresado.
5. **`CapsuleCard.jsx` y `CapsuleCard.css`:**  
   Tarjeta interactiva para cada cápsula de video. Incluye miniatura visual con botón flotante de Play, insignia de categoría, badge de duración, título y descripción con efecto *hover* responsivo.
6. **`VideoPlayer.jsx` y `VideoPlayer.css`:**  
   Reproductor de video profesional desarrollado sobre HTML5 nativo:
   - Controles personalizados (Play, Pause, barra de progreso con buffer).
   - Control de volumen con slider y botón de silencio (*Mute*).
   - Selector de velocidad de reproducción (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x).
   - Botones de salto temporal rápido (retroceder 10s, avanzar 10s).
   - Soporte para Picture-in-Picture (PiP) y Pantalla Completa nativa.
   - Atajos de teclado (Espacio/K para play/pause, M para mute, F para pantalla completa, flechas izquierda/derecha para saltar ±5s, flechas arriba/abajo para volumen).
7. **`PdfViewer.jsx` y `PdfViewer.css`:**  
   Visor de documentos PDF embebido mediante `<iframe>`. Incluye barra de herramientas superior con título del documento, botón de descarga directa (`download`), apertura en nueva pestaña y botón de pantalla completa.
8. **`ExitModal.jsx` y `ExitModal.css`:**  
   Diálogo modal de confirmación con diseño Carbon & Gold que se activa al solicitar cerrar o salir de la sesión de capacitación.

---

## 7. Diccionario de Componentes y Datos

### 7.1 Estructura Base y Enrutamiento Frontend (SPA & Core)

| Componente / Elemento | Tipo | Descripción | Uso en el Sistema |
| :--- | :--- | :--- | :--- |
| `<div id="root">` | Etiqueta HTML | Contenedor principal de la SPA en `index.html`. | Punto de anclaje donde React monta la interfaz de usuario completa. |
| `index.html` | Archivo HTML | Plantilla única servida por Nginx. | Carga metadatos, favicon, manifest y el bundle de Vite. |
| `main.jsx` | Módulo JS / React | Punto de entrada JavaScript. | Instancia el `createRoot`, monta `<ThemeProvider>` y renderiza `<App />`. |
| `<ThemeProvider>` | Proveedor Context | Contexto de tema Claro/Oscuro (`ThemeContext.jsx`). | Almacena y distribuye el estado del tema y lo persiste en `localStorage`. |
| `<App />` | Componente React | Orquestador principal de vistas y estados. | Controla la navegación condicional entre pantallas sin recarga de página. |

---

### 7.2 Vistas y Pantallas Principales (`src/screens/`)

| Componente | Tipo | Descripción | Uso en el Sistema |
| :--- | :--- | :--- | :--- |
| `<HomeScreen />` | Vista (Pantalla) | Pantalla de inicio de la plataforma. | Bienvenida, resumen cuantitativo de cápsulas y accesos directos. |
| `<MenuScreen />` | Vista (Pantalla) | Menú general de categorías y manuales. | Selección de módulo de rol, buscador global y acceso a PDFs. |
| `<CapsulesListScreen />` | Vista (Pantalla) | Catálogo de cápsulas por categoría. | Lista interactiva de videos, filtros por categoría y búsqueda local. |
| `<PlayerScreen />` | Vista (Pantalla) | Reproductor de video interactivo. | Ejecuta la cápsula seleccionada y ofrece playlist lateral. |
| `<DocumentViewerScreen />` | Vista (Pantalla) | Visor integrado de manuales técnicos. | Selector de manuales de Embalador/Supervisor y visor PDF. |

---

### 7.3 Componentes Visuales Reutilizables (`src/components/`)

| Componente | Tipo | Descripción | Uso en el Sistema |
| :--- | :--- | :--- | :--- |
| `<Navbar />` | Componente UI | Barra de navegación superior fija. | Muestra títulos, botón de retorno, menú rápido y tema. |
| `<Footer />` | Componente UI | Pie de página estático. | Marca corporativa y estado de servicio offline. |
| `<ThemeToggle />` | Componente UI | Conmutador de modo claro y oscuro. | Permite alternar la paleta de colores entre Carbon y Light. |
| `<SearchBar />` | Componente UI | Campo de búsqueda de cápsulas. | Filtra instantáneamente por texto en títulos y descripciones. |
| `<CapsuleCard />` | Componente UI | Tarjeta interactiva de cápsula de video. | Muestra título, duración, miniatura y evento de selección. |
| `<VideoPlayer />` | Componente Multimedia | Reproductor de video HTML5 con controles custom. | Reproducción de videos locales, control de velocidad y saltos. |
| `<PdfViewer />` | Componente Documental | Visor de archivos PDF integrado. | Lectura local de manuales oficiales sin salir de la plataforma. |
| `<ExitModal />` | Componente Modal | Diálogo interactivo de confirmación de salida. | Confirmación de retorno a inicio o salida del módulo. |

---

## 8. Tipos de Archivos Multimedia y Especificaciones Técnicas

| Formato | Extensión | Ubicación en el Proyecto | Tamaño Promedio / Límite | Uso en la Plataforma |
| :--- | :--- | :--- | :--- | :--- |
| **WebM Video** | `.webm` | `public/assets/videos/*/` | 700 KB a 2.5 MB | Formato principal de alta compresión y calidad para cápsulas de video. |
| **MP4 Video** | `.mp4` | `public/assets/videos/*/` | 800 KB a 2.0 MB | Formato estándar de video compatible con cualquier navegador web. |
| **PDF** | `.pdf` | `public/assets/Documentos/` | 700 KB a 1.0 MB | Manuales técnicos oficiales de consulta para Embaladores y Supervisores. |
| **TrueType Font** | `.ttf` | `public/assets/fonts/` | 480 KB a 2.3 MB | Fuentes locales Roboto y Noto Sans para funcionamiento 100% offline. |
| **PNG Image** | `.png` | `public/assets/images/` | 85 KB a 450 KB | Logotipos e isotipos corporativos de Mamut con canal alfa (transparencia). |
| **JSON** | `.json` | `public/manifest.json` | 1 KB | Manifiesto de la aplicación para instalación y modo standalone PWA. |
