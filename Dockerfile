FROM oven/bun:1-alpine AS base

ENV NODE_ENV=production

WORKDIR /app

FROM base AS build

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM base AS run

WORKDIR /app

USER bun

COPY --from=build --chown=bun:bun /app/.output ./.output

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["bun", "run", ".output/server/index.mjs"]
