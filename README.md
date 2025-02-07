# Mapa de Capacidades

Autora: Milka Mosquera

![mapa de capacidades](https://github.com/user-attachments/assets/68a5a9e4-479e-4d6a-b5b5-21e355cff8f0)


# Next.js & NextUI Template

This is a template for creating applications using Next.js 14 (pages directory) and NextUI (v2).


>Note: Since Next.js 14, the pages router is recommend migrating to the [new App Router](https://nextjs.org/docs/app) to leverage React's latest features
>
>Read more: [Pages Router](https://nextjs.org/docs/pages)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-pages-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## Estudiante
Milka Mosquera

## Empresa
Radio Viva (Quevedo)

## Descripción del proyecto
Pantalla de Autenticación:

Sistema de login con campos para usuario y contraseña
Botón de "Iniciar Sesión"
Opción de registro para nuevos usuarios
Logo principal de la radio

## Pantalla Principal (Home):

- Reproductor de streaming integrado
Menú de navegación con las siguientes funcionalidades:

- Música: "Los mejores de los tiempos"
- Noticias: "Sistema de información"
- Deporte: "Radio Viva la única"
- Integración con WhatsApp


## Banner de bienvenida
URL del sitio web (radioviva911.com)


Pantalla de Eventos:

- Sección "Eventos de Hoy"
- Visualización de contenido deportivo
- Panel de transmisión en vivo con indicador horario
- Navegación intuitiva con botones de retorno

Pantalla de Redes Sociales:

Integración con múltiples plataformas sociales:

- Instagram
- Facebook
- TikTok


Diseño responsivo y coherente con la identidad visual de la marca
- Acceso directo al sitio web oficial
- El diseño mantiene una coherencia visual utilizando los colores corporativos (naranja, azul y blanco)
# Diseeño
![Imagen de WhatsApp 2025-01-27 a las 23 56 42_618da98a](https://github.com/user-attachments/assets/7e0e3bff-bc48-4178-bc15-6859009a2a04)

# Backend
# 🚀 Microservicios con Spring Boot, Eureka y API Gateway

## 📌 Descripción del Proyecto

Este proyecto implementa una arquitectura basada en microservicios utilizando **Spring Boot**, **Eureka Server** y **API Gateway**. Los microservicios se registran en **Eureka Server** para facilitar la detección y comunicación dinámica entre ellos. Además, un **API Gateway** actúa como un único punto de entrada para manejar las solicitudes de los clientes, permitiendo la comunicación sin preocuparse por cambios en las direcciones IP de los servicios.

## 🏗️ Arquitectura del Sistema

El sistema se compone de los siguientes módulos:

- **Eureka Server**: Servicio de registro y descubrimiento de microservicios.
- **Microservicios**: Aplicaciones Spring Boot encargadas de diferentes funcionalidades y conectadas a la base de datos.
- **API Gateway**: Gestiona el enrutamiento de solicitudes y permite una comunicación dinámica entre clientes y microservicios.
- **Bases de Datos**: Sistemas de almacenamiento utilizados por los microservicios.
- **Infraestructura**: Incluye Metric Store, Message Brokers y herramientas de monitoreo.

## 📌 Referencia Visual de la arquitectura

![Captura de pantalla 2025-02-06 003407](https://github.com/user-attachments/assets/01650cfc-727f-4aa4-9d48-444ef4839fff)


## 🛠️ Tecnologías Utilizadas

- **Spring Boot** - Framework principal para los microservicios.
- **Spring Cloud Eureka** - Servicio de registro y descubrimiento de microservicios.
- **Spring Cloud Gateway** - API Gateway para gestionar la comunicación.
- **Spring Data JPA** - Conexión con bases de datos relacionales.
- **PostgreSQL/MySQL** - Bases de datos para almacenamiento.
- **Docker & Kubernetes** - Orquestación y despliegue de microservicios.
- **Spring Cloud Sleuth & Zipkin** - Trazabilidad y monitoreo de microservicios.
