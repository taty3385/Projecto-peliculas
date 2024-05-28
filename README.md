# Proyecto de Aplicación de Películas

## Descripción del Proyecto
Esta aplicación web de películas permite a los usuarios navegar y descubrir películas a través de diferentes vistas: Home, Últimos Lanzamientos, Populares y Buscador. Cada vista proporciona funcionalidades específicas para mejorar la experiencia del usuario, incluyendo descripciones de películas, listas categorizadas, un buscador interactivo y vistas detalladas de cada película.

## Funcionalidades
### Menú de Navegación
- **Home**: Página principal con un slider de películas recomendadas, listas de películas populares y mejor puntuadas.
- **Últimos Lanzamientos**: Listado de las películas más recientes con paginación.
- **Populares**: Listado de las películas más populares con paginación.
- **Buscador**: Funcionalidad de búsqueda con filtrado en tiempo real.

### Home
- **Slider de Películas Recomendadas**: Un carrusel con al menos 5 películas recomendadas, cada una con una breve descripción.
- **Listas de Películas**:
  - **Populares**: Lista de al menos 10 películas populares.
  - **Mejor Puntadas**: Lista de al menos 10 películas con las mejores puntuaciones.
- **Vista de Detalles**: Al hacer clic en cualquier película, se abre una vista detallada con fondo de pantalla, póster y descripción de la película. Incluye un botón para reproducir el tráiler (funcionalidad avanzada).

### Últimos Lanzamientos
- **Listado de Películas**: Al menos 20 películas presentadas en cards, cada una con su título y un botón para ver detalles.
- **Paginación**: Permite navegar por las películas en bloques de 20 (funcionalidad avanzada).

### Populares
- **Listado de Películas**: Similar a la vista de Últimos Lanzamientos, pero con las películas más populares.
- **Paginación**: Navegación en bloques de 20 películas (funcionalidad avanzada).

### Buscador
- **Input de Búsqueda**: Un campo de texto que filtra las películas a medida que se escribe, mostrando al menos 20 resultados si existen.
- **Actualización de URL**: La URL de la aplicación refleja los términos de búsqueda del usuario (funcionalidad avanzada).

### Vista de Detalles de Película
- **Descripción Completa**: Información detallada sobre la película seleccionada.
- **Fondo de Pantalla y Póster**: Visualización de los elementos gráficos de la película.
- **Botón de Tráiler**: Permite reproducir el tráiler de la película (funcionalidad avanzada).

### Footer
- **Footer Común**: Todas las vistas contienen un footer consistente que proporciona navegación adicional y créditos de la aplicación.

## Tecnologías Utilizadas
- **Frontend**:  framework como React , Material-UI,
- **Control de Versiones**: Git
- **Otras Herramientas**: API de películas  The Movie Database API

## Instalación y Configuración
### Prerrequisitos
- Node.js
- Cuenta en The Movie Database API para obtener una clave API

El proyecto está desplegado en Vercel. Puedes acceder a él [aquí](https://vercel.com/tamaras-projects-a807a3db/projecto-peliculas-ep71).

