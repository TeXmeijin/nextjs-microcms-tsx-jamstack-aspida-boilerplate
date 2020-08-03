import { useState } from 'react'

type useMicroCMSApi = {
  <T>($get: () => Promise<T>): Promise<{
    data: T,
  }>
}

export const useMicroCMSApi: useMicroCMSApi = async ($get) => {
  const [data, setData] = useState(null)

  const fetchData = async () => {

    try {
      setData(await $get())
    } catch (error) {
      console.error({error})
    }

  }

  await fetchData()

  return {
    data,
  }
}