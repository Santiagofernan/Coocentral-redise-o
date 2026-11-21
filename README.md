# CooCentral Redesign

Rediseño institucional de la página principal de Coocentral, basado en el informe institucional y en la identidad visual de la cooperativa.

## Desarrollo

Requisitos: Node.js y npm.

```sh
npm install
npm run dev
```

## Validación

```sh
npm test
npm run lint
npm run build
```

## Despliegue estático

El build genera un único `dist/client/index.html` y sus recursos en `dist/client/assets`. Publica el contenido de `dist/client` como raíz del sitio; no necesitas mantener un servidor Node en producción.

El alojamiento debe reescribir las rutas de la aplicación a `/index.html` cuando no encuentre un archivo estático. Sin esa regla, la página principal carga, pero abrir directamente rutas como `/cooperativa` puede devolver 404.
