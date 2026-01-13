# ORGANOGRAFÍA MICROSCÓPICA
Las Flashcards son una herramienta de estudio interactiva diseñada para estudiantes de medicina y biología. Utiliza el sistema de flashcards (tarjetas de memoria) para facilitar el reconocimiento histológico de diferentes sistemas y órganos mediante imágenes reales de microscopía.

## Objetivo 🎯
Ofrecer una plataforma ágil, visual y gratuita para practicar el diagnóstico histológico, permitiendo un aprendizaje autoevaluativo con estadísticas de progreso en tiempo real.

### 📂 Estructura del Repositorio
/
├── index.html          # Interfaz de usuario (HTML5, CSS3, JavaScript)
├── img/                # Carpeta que contiene las 102 imágenes de microscopía
├── README.md           # Documentación del proyecto
└── (opcional) server.js # Proxy de Node.js (ya no es necesario si usas la carpeta img)

## 🛠️ Procedimiento Técnico
Para garantizar la máxima velocidad y evitar bloqueos de servidores externos, el proyecto ha seguido esta evolución:
1. Extracción de Datos: Recopilación de 102 muestras histológicas de la fuente original.
2. Optimización de Carga: Implementación de un sistema de precarga masiva (Preloading). Al abrir la web, las imágenes se guardan en la caché del navegador para que la navegación posterior sea instantánea.
3. Localización de Recursos: Migración de imágenes externas a un almacenamiento local en el repositorio para evitar errores de conexión (404) y bloqueos de seguridad (CORS).
4. Estilo Visual: Diseño basado en Glassmorphism con tipografía Montserrat para una experiencia de usuario moderna y descanso visual durante el estudio.

## 📖 Manual de Usuario
Al abrir la aplicación, verás una barra de progreso. Espera unos segundos a que se complete (esto descarga las imágenes en tu memoria local). Una vez completado, el estudio será fluido y sin esperas.
* Filtros: Selecciona un sistema específico (ej. Aparato Respiratorio) y por técnicas de tintado o estudia todos los sistemas y tintados a la vez.
* Botones Anterior/Siguiente: Úsalos para explorar las imágenes sin que afecte a tus estadísticas.
* Revelar Respuesta: Haz clic o toca sobre la imagen para girar la tarjeta y ver el nombre del órgano y la técnica de tinción utilizada.

En el reverso de la tarjeta encontrarás dos botones:
* ✓ Acerté: Suma un punto a tus aciertos y aumenta tu racha.
* ✕ Fallé: Suma un punto a tus fallos y reinicia la racha.
Al pulsar cualquiera de los dos, la tarjeta se girará de nuevo y mostrará una nueva imagen aleatoria.

### Estadísticas
* Aciertos y Fallos totales.
* Porcentaje de Precisión: Tu efectividad general.
* Racha 🔥: Cuántas has acertado seguidas en la sesión actual.

## Despliegue en Github
1. Sin tener que modificar nada, sería solo acceder a la página publicada o descargando los ficheros y ejecutando index.html
2. Si se quisiese hacer a través del servidor Node.js, se tendría que cambiar la línea de código 167 de script.js para cambiar el origen de imágenes desde la carpeta hasta el servidor
He de avisar que esto se ha probado anteriormente, y aunque puede parecer más útil, no paraba de dar errores de acceso a la página.
He pensado que puede deberse a una detección por parte del firewall de la página (ya que es de una universidad, entidad pública).

## 🔗 Créditos y Fuentes
Las imágenes y la base científica de este proyecto provienen de PathologyLive, una fuente de referencia en la enseñanza de la organografía microscópica.
