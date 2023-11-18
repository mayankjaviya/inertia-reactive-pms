# inertia-reactive-pms

A robust task management application built on Laravel 10, Inertia.js, and React, featuring a dynamic Kanban board for efficient task organization.

![Project Screenshot](https://raw.githubusercontent.com/Mayank-Javiya/inertia-reactive-pms/main/public/images/Screenshot.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

## Introduction

Elevate your productivity with inertia-reactive-pms, a powerful task manager that seamlessly combines the backend capabilities of Laravel 10 with the interactivity of React and the efficiency of Vite. The inclusion of a dynamic Kanban board makes task organization a breeze, allowing you to manage your workflow with ease.

Whether you're an experienced developer looking to streamline your task management or a newcomer seeking a solid foundation for your project, this application provides a clean, well-structured codebase and an array of features to enhance your task management experience. Get started quickly, customize as needed, and elevate your task management with confidence.

## Features

- **Laravel 10 Integration:** Built on top of Laravel 10.
- **Inertia.js and React:** Harness the power of Inertia.js and React for building a modern, dynamic, and single-page task management application.
- **Vite Asset Compilation:** Utilize Vite, a fast and efficient build tool, to compile your JavaScript and CSS assets. Experience rapid development and hot module replacement for an enhanced development experience.
- **Kanban Board:** Effortlessly manage tasks with a dynamic Kanban board. Drag and drop tasks across customizable sections like Backlog, In Progress, Done, and Completed.
- **Routing and Navigation:** Inertia.js enables smooth client-side navigation without full-page reloads. Easily define routes and handle navigation on the front end.
- **Sample Page and Component:** Quickly get started with sample pages and components to showcase various aspects of your task management application.



## Built with inertia-react-scaffold

This project was created using [inertia-react-scaffold](https://github.com/Mayank-Javiya/inertia-react-scaffold), a boilerplate project that combines Laravel 10 with Inertia.js and React for rapid web application development.

Feel free to check out the scaffold project for more details and explore how it can accelerate your web development process.

## Prerequisites

- PHP (version 8.1 or higher)
- Composer
- Node.js and npm
- Laravel 10

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Mayank-Javiya/inertia-reactive-pms.git

# Change into the project directory
cd inertia-reactive-pms

# Install PHP dependencies
composer install

# Install JavaScript dependencies
npm install

# Run migrations to set up the database
php artisan migrate

# Compile assets
npm run dev

# Start the development server
php artisan serve
