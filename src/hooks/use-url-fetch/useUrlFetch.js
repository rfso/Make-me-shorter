import { useState, useEffect } from 'react'

const useUrlFetch = (API_URL, options = null) => {
  const [FINAL_API_URL, setFinalApiUrl] = useState(API_URL)
  const [apiData, setApiData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (FINAL_API_URL) {
      const fetchApiData = async () => {
        setIsLoading(true)
        setHasError(false)

        try {
          const response = await fetch(FINAL_API_URL, options)
          const result = await response.json()

          const handleSuccess = () => {
            setApiData(result)
            setHasError(false)
          }

          const handleError = () => {
            setHasError(true)
            setErrorMessage(result.error)
          }

          response.ok ? handleSuccess() : handleError()
        } catch (error) {
          setHasError(true)
          setErrorMessage(error.message)
        } finally {
          setIsLoading(false)
        }
      }
      fetchApiData()
    }
  }, [FINAL_API_URL, options])
  return { apiData, isLoading, hasError, errorMessage, setFinalApiUrl }
}

export default useUrlFetch
