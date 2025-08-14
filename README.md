# events-task

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## 📦 Project Setup

### Clone the repository

```sh
git clone https://github.com/GiacomoFranco/Events-Task
cd events-view
```

### Install dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 📝 Overview

This project is a Vue 3 application built using the Composition API and based on the provided [Figma mockup](https://www.figma.com/design/vvCmNva6esLy8No1HxWCAa/Events-Task?node-id=0-1&p=f&t=nazT7IfKV6XR4wM0-0), following its visual guidelines for layout, colors, and component styling.

It was developed under the design and technical guidelines outlined in a dedicated [Notion page](https://currantsocial.notion.site/Take-Home-Assessment-Events-View-2408118ed34680389e59c992f46cbcd1), ensuring consistency in both visual presentation and code standards.

The application is structured into modular components to separate concerns, making the codebase maintainable and scalable. It is fully responsive, adapting seamlessly to different screen sizes, and adheres to WCAG accessibility standards, ensuring an inclusive experience for all users.

Additionally, the project includes an example of a unit test, demonstrating the testing approach and ensuring core functionality is verified.

## Folder Structure

```sh
src/
 ├─ assets/       # Images, icons, and global styles
 ├─ components/   # Reusable UI components (EventCard, Header, etc.)
 ├─ mocks/        # Mock data for development/testing
 ├─ router/       # Application routing configuration
 ├─ services/     # API and data-fetching logic
 ├─ stores/       # State management
 ├─ tests/        # Unit tests
 ├─ utils/        # Helper/utility functions
 ├─ views/        # Page-level components (EventsView, etc.)
```
