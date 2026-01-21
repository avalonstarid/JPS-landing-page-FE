import {
  createSiteConfigStack,
  envSiteConfig as baseEnvSiteConfig,
  normalizeSiteConfig,
  validateSiteConfigStack,
} from 'site-config-stack/dist/index.mjs'

export { createSiteConfigStack, normalizeSiteConfig, validateSiteConfigStack }

export function envSiteConfig(env?: Record<string, string | undefined> | null) {
  return baseEnvSiteConfig(env || {})
}
