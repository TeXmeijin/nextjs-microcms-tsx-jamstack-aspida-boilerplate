import aspida from '@aspida/axios'
import mockClient from '@aspida/axios/dist/mockClient'

import api from '../types/apiClient/$api'
import mock from '../types/apiClient/$mock'
import axios from 'axios'

const fetchConfig = { headers: {
  'X-API-KEY': process.env.MICROCMS_GET_API_KEY
}, baseURL: process.env.MICROCMS_BASE_URL }

// in local development, use aspida-mock.
// @see https://github.com/aspida/aspida/tree/master/packages/aspida-mock
export const apiClient = process.env.NODE_ENV === 'development' ? mock(mockClient()) : api(aspida(axios, fetchConfig))