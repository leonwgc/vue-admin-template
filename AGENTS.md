# Project Guidelines

## Vue and UI

- Use JavaScript, Vue 3 `<script setup>`, and the Composition API; follow nearby views for component structure and formatting.
- Reuse Element Plus and the globally registered Element Plus icons. Keep route views lazy-loaded and update the router and sidebar together when adding a page.
- Put shared application state in Pinia stores under `src/stores/`; keep page-local state in the view that owns it.

## Data and Boundaries

- Route API requests through the existing modules in `src/api/` and their configured Axios client.
- The user API mock persists data in browser `localStorage`. Keep learning demos isolated from authentication and user-management data unless a change explicitly requires otherwise.
- Reuse existing dependencies and patterns before introducing another library or service.

## Validation

- Run `npm run build` after code changes. `package.json` currently defines no test script.
- Keep project setup and data-flow documentation in [README.md](./README.md) up to date when those behaviors change.
