# Backend de SPA con Node.js, Express

Este repositorio contiene el código fuente del backend de un SPA (Single Page Application) desarrollado con tecnologías como Node.js, Express, Cors, Nodemailer, MongoDB, JWT, Bcrypt y Mailgen. El objetivo de este proyecto es proporcionar un backend robusto y seguro para la aplicación.

## Usuario Admin
- Usuario: admin, contraseña: admin
- Usuario: root, contraseña: root

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript que nos permite ejecutar código JavaScript en el servidor.
- **Express**: Framework de aplicaciones web de Node.js que proporciona un conjunto de características y herramientas para el desarrollo de API RESTful.
- **Cors**: Middleware de Express utilizado para habilitar el acceso a recursos desde diferentes dominios o direcciones URL.
- **Nodemailer**: Librería de Node.js que permite enviar correos electrónicos desde una aplicación.
- **MongoDB**: Base de datos NoSQL orientada a documentos utilizada para almacenar y recuperar datos.
- **JWT (JSON Web Tokens)**: Estándar abierto basado en JSON utilizado para crear tokens de acceso que permiten la autenticación y autorización en aplicaciones web.
- **Bcrypt**: Librería utilizada para el cifrado de contraseñas y almacenamiento seguro de las mismas.
- **Mailgen**: Herramienta para la generación de correos electrónicos HTML atractivos y personalizables.

## Configuración del entorno

1. Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [https://nodejs.org](https://nodejs.org) y seguir las instrucciones de instalación adecuadas para tu sistema operativo.

2. Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

3. Navega al directorio raíz del proyecto:

   ```bash
   cd <DIRECTORIO_DEL_PROYECTO>
   ```

4. Instala las dependencias necesarias utilizando npm (Node Package Manager):

   ```bash
   npm install
   ```

5. Crea un archivo `.env` en el directorio raíz del proyecto y configura las variables de entorno necesarias. Puedes usar el archivo `.env` como referencia. Asegúrate de proporcionar los valores correctos para las variables de conexión a la base de datos MongoDB y las credenciales de acceso a la cuenta de correo electrónico utilizada por Nodemailer.

## Uso

Una vez configurado el entorno, puedes iniciar el servidor ejecutando el siguiente comando en el directorio raíz del proyecto:

```bash
npm start
```

Esto iniciará el servidor backend y estará listo para recibir solicitudes desde el frontend de tu aplicación SPA.

## Estructura del proyecto

El proyecto sigue una estructura de directorios recomendada para una aplicación Node.js con Express. Aquí se presenta una descripción general de los directorios y archivos más relevantes:

- **`app.js`**: Archivo principal de la aplicación Express. Configura y define el servidor.
- **`routes/`**: Directorio que contiene las definiciones de rutas para las diferentes API y controladores.
- **`controllers/`**: Directorio que contiene la lógica de controladores para las rutas definidas.
- **`models/`**: Directorio que contiene las definiciones de modelos de datos utilizados para interactuar con la base de datos MongoDB.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Haz un fork de este repositorio y clónalo en tu máquina local.
2. Crea una nueva rama para realizar tus cambios:
   ```bash
   git checkout -b mi-rama-de-caracteristicas
   ```
3. Realiza tus modificaciones y mejoras en el código.
4. Asegúrate de escribir pruebas unitarias apropiadas.
5. Haz commit de tus cambios:
   ```bash
   git commit -m "Agrega nuevas características"
   ```
6. Sube tus cambios a tu repositorio remoto:
   ```bash
   git push origin mi-rama-de-caracteristicas
   ```
7. Abre una solicitud de extracción en este repositorio original.

¡Gracias por tu contribución!
