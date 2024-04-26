# Proyecto Pro_Inteligenio Cypress Framework

Este proyecto contiene el framework de pruebas automatizadas para la web de Pro_Inteligenio, utilizando Cypress con la integración de Cucumber para BDD y Mochawesome para reportes de pruebas.

## Estructura del Proyecto

El framework sigue la siguiente estructura de directorios:

- `cypress/`: Contiene los tests, definiciones de pasos de Cucumber, y Page Objects.
  - `e2e/`
    - `web/`
      - `feature/`: Archivos `.feature` que describen los casos de prueba en formato Gherkin.
      - `steps/`: Definiciones de pasos Cucumber para los archivos `.feature`.
      - `pages/`: Page Objects que encapsulan las acciones y elementos de la página.
  - `reports/`: Reportes generados por Mochawesome.
- `.github/workflows/`: Definiciones de workflows para GitHub Actions.
- `cypress.config.js`: Configuración global de Cypress.
- `package.json`: Dependencias y scripts para el proyecto.

## Configuración

Para configurar el entorno de pruebas localmente, sigue estos pasos:

1. Clona el repositorio a tu máquina local.
2. Asegúrate de tener Node.js y npm instalados.
3. Navega al directorio del proyecto y ejecuta `npm install` para instalar las dependencias.

## Uso

Para ejecutar las pruebas, puedes utilizar los siguientes comandos:

- `npm run cy:open`: Abre la interfaz de Cypress en modo interactivo.
- `npm run cy:run`: Ejecuta las pruebas en modo headless.
- `npm run test`: Ejecuta todas las pruebas y genera reportes.

Los reportes se guardarán en la carpeta `cypress/reports/html` después de ejecutar las pruebas.

## CI/CD

El proyecto está configurado para usar GitHub Actions para la integración continua y despliegue continuo. Los tests se ejecutarán automáticamente en cada push o pull request al repositorio.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, lee nuestras [directrices de contribución](LINK_A_TUS_DIRECTRICES) antes de enviar un pull request.

## Licencia

[MIT](LICENSE)

## Contacto

Para más información, contacta con [Nombre] a [Email].
