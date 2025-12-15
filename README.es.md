# UI Flow Clone - Proyecto Educativo

> Un proyecto de aprendizaje progresivo enfocado en dominar el desarrollo frontend moderno a través de la implementación práctica

![Estado](https://img.shields.io/badge/estado-en%20progreso-yellow)
![Fase](https://img.shields.io/badge/fase-1%20frontend-blue)
![React](https://img.shields.io/badge/react-18+-61dafb)

---

## 📖 Sobre Este Proyecto

Este es un **proyecto educativo personal** diseñado para fortalecer habilidades de desarrollo frontend a través de la práctica diaria y el aprendizaje incremental. El proyecto sigue un enfoque de dos fases inspirado en la metodología del Bootcamp de Henry.

### Objetivos de Aprendizaje

- Dominar los fundamentos y conceptos avanzados de React
- Desarrollar arquitectura de componentes de calidad profesional
- Implementar diseño responsive y técnicas modernas de CSS
- Practicar manejo de estado y React Hooks
- Construir hacia capacidades de desarrollo full-stack

---

## 🎯 Fases del Proyecto

### Fase 1: Solo Frontend (Actual)
**Objetivo**: Clonar la página home de ui-flow.com enfocándose exclusivamente en tecnologías frontend

**Duración**: ~14 semanas (adaptable)

**Áreas de Enfoque Clave**:
- Desarrollo orientado a componentes
- Dominio de React Hooks
- Diseño responsive
- Técnicas de CSS/Styling
- Implementación de React Router
- Optimización de rendimiento
- Fundamentos de testing

### Fase 2: Aplicación Full-Stack (Futuro)
**Objetivo**: Construir una aplicación completa con backend, base de datos y autenticación

**Tecnologías**: Node.js, Express, PostgreSQL, Sequelize, JWT

---

## 🛠️ Stack Tecnológico (Fase 1)

### Core
- **React 18+** - Librería UI
- **React Router 6+** - Enrutamiento del lado del cliente
- **React Hooks** - Manejo de estado y ciclo de vida

### Estilos
- **CSS Modules** - Estilos con scope
- **Styled Components** - CSS-in-JS (opcional)

### Herramientas de Build
- **Vite / Create React App** - Herramientas de construcción
- **Webpack** - Empaquetador de módulos

### Calidad de Código
- **ESLint** - Linter de código
- **Prettier** - Formato de código

### Testing
- **React Testing Library** - Testing de componentes
- **Jest** - Test runner

---

## 📁 Estructura del Proyecto

```
PROJECT/
├── public/
│   ├── index.html
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/         # Buttons, Inputs, Cards
│   │   ├── layout/         # Header, Footer, Navbar
│   │   └── sections/       # Hero, Features, etc.
│   ├── pages/              # Componentes de página completa
│   │   └── Home/
│   ├── hooks/              # Custom hooks
│   ├── utils/              # Funciones helper
│   ├── styles/             # Estilos globales
│   │   ├── variables.css
│   │   ├── reset.css
│   │   └── global.css
│   ├── App.js
│   └── index.js
├── docs/
│   ├── progress/           # Logs de progreso diario
│   └── learnings/          # Notas de aprendizaje
├── README.md
├── README.es.md
└── package.json
```

---

## 🚀 Comenzando

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn
- Git
- Editor de código (VS Code recomendado)

### Instalación

1. Clonar el repositorio
```bash
git clone <repository-url>
cd PROJECT
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar servidor de desarrollo
```bash
npm start
```

4. Abrir navegador en `http://localhost:3000`

### Scripts Disponibles

- `npm start` - Ejecutar servidor de desarrollo
- `npm build` - Crear build de producción
- `npm test` - Ejecutar tests
- `npm run lint` - Ejecutar ESLint

---

## 📚 Metodología de Aprendizaje

Este proyecto sigue un enfoque de aprendizaje estructurado inspirado en el Bootcamp de Henry:

### Rutina Diaria (Sugerida)

1. **Review** (15 min) - Revisar el trabajo de ayer
2. **Learn** (30 min) - Estudiar nuevos conceptos/documentación
3. **Code** (2-3 horas) - Implementación práctica
4. **Document** (15 min) - Registrar aprendizajes y decisiones
5. **Commit** (10 min) - Git commit con mensaje descriptivo

### Principios Clave

- **Progreso Incremental**: Construir sobre conocimiento previo
- **Práctica Diaria**: Programar todos los días, aunque sea 1 hora
- **Documentación**: Registrar aprendizajes y decisiones arquitectónicas
- **Refactoring**: Revisitar y mejorar código anterior
- **Testing**: Probar lo que construyes
- **Auto-Revisión**: Sesiones semanales de revisión de código

---

## 📈 Seguimiento de Progreso

### Semana 1-2: Setup & Fundamentos
- [ ] Inicialización del proyecto
- [ ] Configuración del entorno de desarrollo
- [ ] Análisis de ui-flow.com y desglose de componentes
- [ ] Componentes reutilizables básicos (Button, Input, Card)

### Semana 3-4: Layout & Estructura
- [ ] Componentes de layout (Header, Footer, Navbar)
- [ ] Implementación de sección Hero
- [ ] Sistema de grid responsive
- [ ] Enfoque mobile-first

### Semana 5-6: Secciones Principales
- [ ] Sección de features
- [ ] Testimonials/Reviews
- [ ] Secciones adicionales de página
- [ ] Elementos interactivos

### Semana 7-8: Interactividad & Hooks
- [ ] Implementación avanzada de Hooks
- [ ] Componentes Modal/Dialog
- [ ] Menús desplegables
- [ ] Carousel/Slider

### Semana 9-10: Routing & Navegación
- [ ] Configuración de React Router
- [ ] Navegación multi-página
- [ ] Páginas adicionales (Sobre, Servicios, Contacto)
- [ ] Página 404

### Semana 11-12: Optimización & Mejores Prácticas
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Optimización de rendimiento
- [ ] Refactoring de código

### Semana 13-14: Polish & Testing
- [ ] Refinamiento responsive
- [ ] Mejoras de accesibilidad
- [ ] Testing de componentes
- [ ] Documentación final

---

## 🎓 Habilidades Desarrolladas

### Fundamentos de React
- ✅ Composición de componentes
- ✅ Manejo de props y state
- ✅ Manejo de eventos
- ✅ Renderizado condicional
- ✅ Listas y keys

### React Avanzado
- ✅ Custom Hooks
- ✅ Context API
- ✅ useReducer para estado complejo
- ✅ Optimización de rendimiento (memo, useMemo, useCallback)
- ✅ Error boundaries

### Estilos
- ✅ CSS-in-JS
- ✅ Diseño responsive
- ✅ CSS Grid y Flexbox
- ✅ Animaciones y transiciones
- ✅ Enfoque mobile-first

### Mejores Prácticas
- ✅ Patrones de diseño de componentes
- ✅ Organización de código
- ✅ Flujo de trabajo con Git
- ✅ Principios de código limpio
- ✅ Documentación

---

## 📝 Documentación

- **[PLAN.md](./PLAN.md)** - Plan completo del proyecto y roadmap
- **[docs/progress/](./docs/progress/)** - Logs de progreso diario
- **[docs/learnings/](./docs/learnings/)** - Notas de aprendizaje e insights

---

## 🤝 Contribuciones

Este es un proyecto de aprendizaje personal, pero el feedback y sugerencias son bienvenidos!

Si tienes ideas o notas problemas:
1. Abre un issue describiendo tu sugerencia
2. Siéntete libre de hacer fork y experimentar
3. Comparte tus aprendizajes!

---

## 📚 Recursos

### Documentación Oficial
- [Documentación de React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Recursos de Aprendizaje
- Repositorios del Bootcamp Henry (referencia)
- [React Patterns](https://reactpatterns.com/)
- [JavaScript.info](https://javascript.info/)

### Herramientas
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Extensiones de React para VS Code](https://marketplace.visualstudio.com/search?term=react&target=VSCode)

---

## 📄 Licencia

Este es un proyecto educativo. Siéntete libre de usarlo como referencia para tu propio aprendizaje.

---

## 👩‍💻 Autora

**Sara Gismondi**
- Viaje de aprendizaje: Frontend → Full-Stack
- Metodología: Inspirada en el Bootcamp de Henry
- Enfoque: Práctica diaria y aprendizaje incremental

---

## 🌟 Agradecimientos

- Bootcamp de Henry por la metodología pedagógica
- ui-flow.com por la inspiración de diseño
- Comunidad de React por la excelente documentación y herramientas

---

**Última Actualización**: Diciembre 2025
**Fase Actual**: 1 - Solo Frontend
**Estado**: En Progreso

---

*For English version, see [README.md](./README.md)*
