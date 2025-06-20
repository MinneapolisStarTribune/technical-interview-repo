# Star Tribune Techncial Interview

This is a full-stack monorepo using:

- **Frontend**: [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/) + TypeScript (App Router)
- **Backend**: [NestJS](https://nestjs.com/) + [GraphQL](https://graphql.org/) + TypeScript

---

## 🛠 Getting Started

### 1. Fork & Clone

Click "Fork" on GitHub, then clone your copy:

```bash
git clone git@github.com:MinneapolisStarTribune/technical-interview-repo.git
cd technical-interview-repo
```

### Install Dependencies
```bash
yarn install
````

## Controls
### Start the Frontend (Next.js)
```bash
yarn dev:web
```
Runs the Next.js app in development mode

Available at http://localhost:3000

### Start the Backend (NestJS + GraphQL)
```bash
yarn dev:api
```
Runs the NestJS server in development mode

GraphQL Playground available at http://localhost:3001/graphql (adjust port if changed)

### Run Tests
```bash
yarn test
```
You can also run tests in individual apps by running `yarn workspace web test` or `yarn workspace api test`