<h2 align='center'>:earth_americas: BarberShop :earth_americas:</h2>

<p align="center">
<img alt="next-logo" src="https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white" />
<img alt="react-logo" src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" />
<img alt="typescript-logo" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" />
<img alt="javascript-logo" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" />
<img alt="tailwindcss-logo" src="https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white" />
<img alt="prisma-logo" src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" />
<img alt="jest-logo" src="https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff" />
</p>

---

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🐳 Docker & 🐘 PostgreSQL

This project uses Docker to run a PostgreSQL database.

### Commands

- **Start the database:**

  ```bash
  npm run docker:start
  ```

- **Stop the database:**

  ```bash
  npm run docker:stop
  ```

---

## ‎‍💻 Prisma ORM

This project uses Prisma as an ORM to interact with the database.

### Commands

- **Run migrations:**

  ```bash
  npm run prisma:migrate
  ```

- **Seed the database:**

  ```bash
  npm run seed
  ```

- **Open Prisma Studio:**

  ```bash
  npm run prisma:studio
  ```

---

## 📜 Available Scripts

- `dev`: Runs the development server.
- `build`: Creates a production build.
- `start`: Starts the production server.
- `seed`: Seeds the database with initial data.
- `lint`: Lints the codebase.
- `docker:start`: Starts the PostgreSQL container.
- `docker:stop`: Stops the PostgreSQL container.
- `prisma:migrate`: Runs database migrations.
- `prisma:generate`: Generates the Prisma client.
- `prisma:studio`: Opens Prisma Studio.
- `test`: Runs tests.
- `test:watch`: Runs tests in watch mode.
- `prepare`: Installs Husky hooks.
- `commit`: Commits changes using commitizen.
- `storybook`: Starts Storybook.
- `build-storybook`: Builds Storybook.
