import React, { useState } from 'react'
import SubmitButton from 'components/SubmitButton/SubmitButton'
import styles from './InitialUrl.module.scss'

const createNewApiUrl = (url) => `https://api.shrtco.de/v2/shorten?url=${url}`

const InitialUrl = ({ setFinalApiUrl, isLoading, hasError }) => {
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFinalApiUrl(createNewApiUrl(url))
    setUrl('')
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={url}
          placeholder="Type your url"
          required
          onChange={(e) => setUrl(e.target.value)}
        />
        {hasError && (
          <span className={styles.error}>
            An error has occurred, try again.
          </span>
        )}
        <SubmitButton className={styles.submit} isLoading={isLoading} />
      </form>
    </div>
  )
}

export default InitialUrl
