import aspida from '@aspida/fetch'
import api from '../types/apiClient/$api'

const fetchConfig = { headers: {
  'X-API-KEY': process.env.MICROCMS_GET_API_KEY
}, baseURL: process.env.MICROCMS_BASE_URL }

export const apiClient = api(aspida(fetch, fetchConfig))