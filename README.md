# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# bun
bun run dev
```

## Production

Build the application for production:

```bash
# bun
bun run build
```

Locally preview production build:

```bash
# bun
bun run preview
```

## Docker

Build and run the container:

```bash
docker compose up -d --build
```

### Runtime notes (beginner-friendly)

These notes explain what the Docker setup expects and why.

#### 1) Build vs Run: Bun vs Node
- **Build phase** uses Bun (fast installs/builds).
- **Runtime phase** uses Node (`node:20-alpine`) because Bun can fail to resolve some Nuxt runtime dependencies.

You don’t need to change anything here — just keep the Dockerfile as-is.

#### 2) Image optimization (`@nuxt/image`)
Nuxt Image uses `ipx`, which depends on `ofetch` **at runtime**.
If `ofetch` is missing, the app crashes. That’s why it is a production dependency in `package.json`.

#### 3) Required environment variables (site config)
Nuxt site config reads these values at runtime. If any are missing, the app can return a 500 error.

Add these to your **server** `.env` (not committed to git):

```env
NUXT_PUBLIC_SITE_URL=https://januputrasejahtera.com
NUXT_PUBLIC_SITE_NAME=PT Janu Putra Sejahtera

NUXT_SITE_URL=https://januputrasejahtera.com
NUXT_SITE_NAME=PT Janu Putra Sejahtera

# Must be valid JSON
NUXT_SITE_CONFIG={"url":"https://januputrasejahtera.com","name":"PT Janu Putra Sejahtera"}
```

#### 4) Rebuild after env changes
When `.env` changes on the server, you must recreate the container:

```bash
docker compose up -d --build --force-recreate
```

#### 5) Checking logs
Use this to see startup errors:

```bash
docker logs jps-landingpage-fe
```

#### 6) Why the site-config wrappers exist
There are small wrapper files under `utils/` for `site-config-stack`.
They guard against null/undefined env parsing during runtime.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
