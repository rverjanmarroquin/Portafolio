# 🌐 Portafolio Personal - Ricardo Verjan Marroquin

Portafolio web profesional desarrollado con HTML, CSS y JavaScript vanilla. Incluye sistema de temas (claro/oscuro), soporte multiidioma (ES/EN) y diseño completamente responsive.

## 🚀 Características

- ✅ **Bilingüe**: Alterna entre Español e Inglés con persistencia
- ✅ **Tema claro/oscuro**: Toggle automático con localStorage
- ✅ **Responsive**: Optimizado para mobile, tablet y desktop
- ✅ **Animaciones**: Efecto typewriter cíclico en títulos
- ✅ **Colores oficiales**: Iconos de tecnologías con sus colores representativos
- ✅ **SEO optimizado**: Meta tags Open Graph para redes sociales
- ✅ **Sin frameworks**: HTML/CSS/JS puro, fácil de mantener

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Grid, Flexbox, CSS Variables, Animations
- **JavaScript ES6+**: Módulos, localStorage, Intersection Observer
- **Font Awesome 6.4**: Iconos de tecnologías y redes sociales

## 📂 Estructura del proyecto

```
portafolio/
├── assets/
│   └── img/              # Imágenes de proyectos y perfil
├── index.html            # Página principal
├── styles.css            # Estilos globales y responsive
├── script.js             # Lógica, datos y render dinámico
└── README.md             # Este archivo
```

## ⚙️ Configuración local

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/tu-repo.git
   cd tu-repo
   ```

2. **Abrir en navegador:**

   ```bash
   # Opción 1: Doble clic en index.html
   # Opción 2: Usar Live Server en VS Code
   # Opción 3: Python server
   python -m http.server 8000
   ```

3. **Personalizar datos:**
   - Edita `script.js` → objetos `profile`, `projects`, `skills`
   - Ajusta colores en `styles.css` → variables CSS `:root`
   - Reemplaza imágenes en `assets/img/`

## 📝 Personalización

### Actualizar información personal

Edita en `script.js`:

```javascript
const profile = {
  name: "Tu Nombre",
  role: "Tu Rol",
  bio: "Tu biografía",
  email: "tu@email.com",
  cv: "url-cv",
  linkedin: "url-linkedin",
};
```

### Agregar proyectos

```javascript
const projects = [
  {
    title: "Proyecto",
    titleEn: "Project",
    description: "Descripción",
    descriptionEn: "Description",
    tags: ["Tech1", "Tech2"],
    demo: "url-demo",
    image: "assets/img/imagen.jpg",
  },
];
```

## 🌍 Despliegue en GitHub Pages

1. Sube tu código a GitHub
2. Ve a **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` → Folder: `/root`
5. Guarda y espera 1-2 minutos

Tu portafolio estará en: `https://tuusuario.github.io/tu-repo`

## 📧 Contacto

- **Email**: rverjanmarroquin@gmail.com
- **LinkedIn**: [Ricardo Verján Marroquín](https://www.linkedin.com/in/ricardo-verján-marroquín-22b839218)

## 📄 Licencia

Este proyecto es de uso personal y educativo.

---

⭐ **¿Te gustó el proyecto?** Dale una estrella en GitHub

- Checklist: `docs/checklist.md`
- Despliegue: `docs/despliegue.md`
- FAQ: `docs/faq.md`

## Ejecutar localmente

- Opción rápida: Doble clic en `index.html`.
- Servidor local:

```bash
# Python
python -m http.server 5500
# Visita: http://localhost:5500

# Node (serve)
npm install -g serve
serve .
# Visita: http://localhost:3000 (o el puerto indicado)
```

## Publicar

- GitHub Pages: Configura Pages desde Settings (branch `main`, carpeta raíz).
- Netlify/Vercel: Importa el repo, selecciona sitio estático y despliega.
- Dominio propio: Configura DNS y asócialo en el panel del proveedor.

## Buenas prácticas incluidas

- Responsive por defecto: grilla ajustable en breakpoints comunes.
- Navegación móvil y scroll suave con offset para header fijo.
- Variables CSS para paleta y fácil tematización.

## Próximos pasos sugeridos

- Añadir sección "Contacto" con formulario y validación básica.
- Incluir capturas optimizadas en `assets/img/`.
- Mejorar SEO (Open Graph, meta tags) y performance.
