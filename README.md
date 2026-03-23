# Personal Projects

A collection of learning exercises and small apps—React, Next.js, React Native, TanStack Query, and micro-frontend experiments. Each folder is a standalone project with its own `package.json`.

## Projects

| Folder | Description |
|--------|-------------|
| [ekart-giftstore](./ekart-giftstore/) | Vite + React UI practice |
| [leave-calendar](./leave-calendar/) | Leave tracker (Vite, React, Tailwind) |
| [my-app](./my-app/) | Create React App starter / charts practice |
| [react-query](./react-query/) | React Query with a local JSON API (`db.json`) |
| [tanstack-query-weather-app](./tanstack-query-weather-app/) | Weather dashboard (Vite, TypeScript, TanStack Query, Tailwind) |
| [travel-blogging-system](./travel-blogging-system/) | Vite + React |
| [Next-Learn/next-project-build](./Next-Learn/next-project-build/) | Next.js App Router playground |
| [Mobile/Learn-react-native](./Mobile/Learn-react-native/) | Expo / React Native (expense tracker component) |
| [POC/Micro-Front-End](./POC/Micro-Front-End/) | Micro-frontend POC: `parent-repo` plus `repo-a`–`repo-d` (Vite + React) |

## Prerequisites

- **Node.js** (LTS recommended) and npm  
- **React Native / Expo**: follow the project’s `README` and use the Expo CLI or `npx expo` as documented there

## Running a web project

From the project directory (example: `ekart-giftstore`):

```bash
npm install
npm run dev
```

Scripts vary (`dev`, `start`, `build`); check each `package.json` for the exact commands.

## Repository layout

This repo is a single Git history for all folders above. Root [`.gitignore`](./.gitignore) excludes `node_modules`, build outputs, env files, and IDE-specific paths—clone and run `npm install` per project as needed.
