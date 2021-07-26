import React from 'react'
import CopyButton from 'components/CopyButton/CopyButton'
import styles from './FinalUrl.module.scss'

const FinalUrl = ({ urlToBeRendered }) => {
  return (
    <span className={styles.container}>
      <a
        className={styles.finalUrlLink}
        href={`https://${urlToBeRendered}`}
        target="_blank"
        rel="noreferrer"
      >
        {urlToBeRendered}
      </a>
      <CopyButton urlToBeCopied={urlToBeRendered} />
    </span>
  )
}

export default FinalUrl
