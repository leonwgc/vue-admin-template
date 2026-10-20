# Vue Admin Learning Project

A concise Vue 3 admin dashboard example featuring route guards, global user state with Pinia, an Axios request layer, a user CRUD table, and local mock data.

## Getting Started

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run start
```

The development server runs at `http://localhost:9000/` by default and attempts to open the browser automatically.

Demo credentials: username `admin`, password `admin`. This account is for local learning only and does not provide real authentication.

## Common Commands

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

Run `npm run build` to generate the production site in `docs/`. In the repository's GitHub Pages settings, select **Deploy from a branch**, choose the branch containing the build, and set the publishing folder to `/docs`.

The production build uses the `/vue-admin-template/` project-site base path and hash-based routing so nested pages work when opened or refreshed on GitHub Pages. The development server continues to use history-based routes at the site root.

## Tech Stack

- Vue 3.2.47 + `<script setup>` + JavaScript
- Vite 8.3.1 + `@vitejs/plugin-vue` 6.0.9
- Pinia 2.0.22
- Vue Router 4.2.5
- Element Plus 2.3.14
- Axios 1.6.8

Production builds use the Rolldown bundler built into Vite 8. Code-splitting rules are configured in `build.rolldownOptions.output.codeSplitting` in `vite.config.js`.

## Data and Request Flow

The page reads the user list from the Pinia `users` store and uses it for CRUD operations. The store calls `src/api/users.js`, which uses the Axios instance, interceptors, and mock adapter in `src/api/http.js`. `src/api/mock.js` stores data in the browser's `localStorage`. Sample users are created on first access, and changes persist in the current browser after refresh.

To connect a backend, set the real API base URL in `src/api/http.js`, remove `adapter: mockAdapter`, and adjust the API modules to match the backend response format. Login state is currently stored locally and is only used to demonstrate the Vue Router guard.

## Interactive Vue 3 Examples

After logging in, open the topic pages from the sidebar groups: Quick Start, Vue Essentials, Components, Reusability, Transitions, State Management, Routing, and Development Practices. On desktop, use the topbar button to collapse the sidebar to icons; the choice is saved in browser local storage and restored on later visits. The existing horizontal menu remains unchanged on screens 720px wide or narrower. Each topic page includes key concepts, an interactive demo, complete example code, and links to the official documentation. Topics include SFCs, template syntax, event handling, reactivity and the Composition API, lifecycle hooks, component communication, default/named/scoped slots, `v-model`, dynamic components, provide/inject, Composables, Transition, Pinia, Vue Router, form validation, custom directives, and API requests. The Pinia example uses a separate in-memory store; form submission is local-only; the API page loads mock user data read-only and safely demonstrates a 404 error.

### Extended Learning Path

The sidebar now includes the following Vue 3.2-compatible lessons. Each has an interactive example, source snippets, key concepts, and official documentation links:

| Route under `/examples/` | Topics |
| --- | --- |
| `reactivity-advanced` | `toRef` / `toRefs`, destructuring, `shallowRef`, immutable updates |
| `watchers` | `computed` / `watch` / `watchEffect`, cleanup, debounce, flush timing |
| `dom-identity` | Template refs, `nextTick`, stable keys versus index keys |
| `component-boundaries` | Props / Emits, `$attrs`, explicit forwarding, `defineExpose` |
| `builtins` | KeepAlive drafts, activation hooks, async loading and recovery |
| `slots` | Fallback / conditional / dynamic / scoped slots, methods, table cells |
| `request-advanced` | Loading / error / empty / cancellation, pagination, request races, Composable design |
| `pinia-advanced` | `storeToRefs`, async actions, getters, Options Store reset |
| `router-advanced/:lessonId?` | Instance reuse, unsaved drafts, update / leave guards; nested `notes` and local 404 |
| `safety` | Local error boundaries, text escaping, Teleport, native modal keyboard and focus behavior |
| `engineering` | Scoped styles, CSS `v-bind`, `:slotted`, TypeScript, testing, plugins, SPA / SSR / SSG |
| `performance` | Actual DOM batching, render functions, fixed-height virtual list |

Recommended order: reactivity → watchers → DOM / identity → component boundaries → built-ins → request handling, followed by the advanced state, routing, and engineering lessons.

`src/api/learning.js` uses the configured Axios client with a separate read-only in-memory adapter. Its topic data never touches the user-management mock or local storage. `useTopicSearch` creates independent state for each call, aborts obsolete requests, and ignores outdated results; cancellation does not trigger an error toast. The learning cart is an independent Pinia store that survives page navigation and resets on refresh or explicit reset. Router drafts remain page-local; unsaved changes block route departure or a detail-parameter change until saved or discarded. “Save” in that demo updates only its in-memory baseline.

TypeScript, testing, plugins, SSR / SSG, and slot-forwarding examples are labeled learning snippets, not installed infrastructure. This project remains a JavaScript SPA without additional dependencies or a test runner. Newer APIs such as `defineOptions` (3.3+), `defineModel` (3.4+), and `useTemplateRef` / `onWatcherCleanup` (3.5+) are discussed only as version notes. The virtual list is a fixed-height teaching example, not a full accessibility-ready production list.

## Project Structure

```text
src/
  api/        Axios instance, user API, and local mock data
  components/ Reusable page and example components
  layouts/    Main admin layout
  router/     Routes and login guard
  stores/     Pinia auth and user state
  styles/     Global styles
  views/      Login, dashboard, user management, and Vue 3 example pages
```
