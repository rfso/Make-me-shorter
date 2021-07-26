import React, { useState, useEffect } from 'react'
import Title from 'components/Title/Title'
import InitialUrl from 'components/InitialUrl/InitialUrl'
import FinalUrl from 'components/FinalUrl/FinalUrl'
import useUrlFetch from 'hooks/use-url-fetch/useUrlFetch'
import styles from './UrlShortener.module.scss'

const UrlShortener = () => {
  const { apiData, isLoading, hasError, setFinalApiUrl } = useUrlFetch('')
  const [finalUrls, setFinalUrls] = useState([])

  useEffect(() => {
    if (apiData) {
      const { short_link: urlToBeRendered } = apiData.result
      setFinalUrls((finalUrls) => [...finalUrls, urlToBeRendered])
    }
  }, [apiData])

  return (
    <main className={styles.mainContainer}>
      <Title title={['make', 'me', 'shorter']} />
      <InitialUrl
        setFinalApiUrl={setFinalApiUrl}
        isLoading={isLoading}
        hasError={hasError}
      />
      {finalUrls.length > 0 && (
        <div className={styles.finalUrlsContainer}>
          {finalUrls.map((url) => (
            <FinalUrl urlToBeRendered={url} />
          ))}
        </div>
      )}
    </main>
  )
}

export default UrlShortener
