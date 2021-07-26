import React from 'react'
import Loader from 'components/Loader/Loader'
import styles from './SubmitButton.module.scss'

const SubmitButton = ({ isLoading }) => {
  return (
    <div>
      <button className={styles.submitBtn} type="submit">
        {isLoading ? <Loader /> : 'Shorten it!'}
      </button>
    </div>
  )
}

export default SubmitButton
