export const useLocaleText = () => {
  const { locale } = useI18n()

  const resolveLocaleText = (value?: Record<string, string> | string) => {
    if (!value) return ''
    if (typeof value === 'string') return value
    return value[locale.value] || value.id || value.en || ''
  }

  return {
    resolveLocaleText,
  }
}
