import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

/**
 * Composable for making API calls to the Laravel backend.
 * Currently configured to use mock data, but ready for real API integration.
 * 
 * Usage:
 * ```ts
 * const api = useApi()
 * const { data } = await api.get('/products')
 * ```
 */
export const useApi = () => {
  const config = useRuntimeConfig()
  
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: config.public.apiBase as string,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    timeout: 10000,
  })

  // Request interceptor for adding auth tokens or other headers
  axiosInstance.interceptors.request.use(
    (config) => {
      // TODO: Add authentication token when Laravel API is ready
      // const token = useCookie('auth_token').value
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // Response interceptor for handling errors globally
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response
    },
    (error) => {
      // TODO: Handle specific error codes when Laravel API is ready
      // if (error.response?.status === 401) {
      //   // Handle unauthorized
      // }
      // if (error.response?.status === 500) {
      //   // Handle server error
      // }
      return Promise.reject(error)
    }
  )

  return {
    /**
     * GET request
     */
    get: <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
      return axiosInstance.get<T>(url, config)
    },

    /**
     * POST request
     */
    post: <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
      return axiosInstance.post<T>(url, data, config)
    },

    /**
     * PUT request
     */
    put: <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
      return axiosInstance.put<T>(url, data, config)
    },

    /**
     * PATCH request
     */
    patch: <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
      return axiosInstance.patch<T>(url, data, config)
    },

    /**
     * DELETE request
     */
    delete: <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
      return axiosInstance.delete<T>(url, config)
    },

    /**
     * Raw axios instance for advanced usage
     */
    instance: axiosInstance,
  }
}

