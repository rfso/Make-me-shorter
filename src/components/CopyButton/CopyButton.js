import React, { useState } from 'react'
import styles from './CopyButton.module.scss'

const CopyButton = ({ urlToBeCopied }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(urlToBeCopied)
  }

  return (
    <button className={styles.copyBtn} onClick={handleClick}>
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default CopyButton
