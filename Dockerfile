FROM oven/bun:1-alpine AS build

ENV NODE_ENV=production

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM node:20-alpine AS run

ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /app/.output ./.output

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["node", ".output/server/index.mjs"]
