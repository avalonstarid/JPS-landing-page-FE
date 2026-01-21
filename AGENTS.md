# AI Agent Rules

## General
- Prefer `rg` for searching.
- Keep edits ASCII unless the file already uses Unicode.
- Do not revert unrelated changes.

## Data Fetching
- Use `useApiFetch` for API calls.
- Fetch data per page for SSR; avoid cross-page bulk fetching.
- Use `useHomeMapper` to normalize backend payloads before passing to components.

## Localization
- Use `useLocaleText` for mapping localized backend fields.
- Keep section components thin by receiving already-normalized props.

## Images
- Use `NuxtImg` for external images.
- Add external image domains to `nuxt.config.ts` when needed.
