import { useState, useEffect } from 'react'

type useMicroCMSApi = {
  <T>($get: () => Promise<T>): {
    data: T,
    isLoading: boolean,
    isError: boolean
  }
}

export const useMicroCMSApi: useMicroCMSApi = ($get) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        setData(await $get())
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [data])

  return {
    data,
    isError,
    isLoading,
  }
}