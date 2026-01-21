export const useApiFetch = () => {
  const config = useRuntimeConfig()

  const fetcher = <T>(url: string, options: Omit<Parameters<typeof $fetch<T>>[1], 'baseURL'> = {}) => {
    return $fetch<T>(url, {
      baseURL: config.public.apiBase as string,
      headers: {
        Accept: 'application/json',
        ...(options?.headers || {}),
      },
      ...options,
    })
  }

  return {
    fetcher,
  }
}
