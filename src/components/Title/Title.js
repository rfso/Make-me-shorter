import React from 'react'
import styles from './Title.module.scss'
const Title = ({ title }) => {
  const mainTitle = [...title]

  return (
    <div className={styles.container}>
      {mainTitle.map((title, index) => {
        if (title === 'make') {
          return (
            <>
              <div key={index} className={styles.title}>
                {title}
              </div>
              <div key={index + 1} className={styles.subtitle}>
                url shortener
              </div>
            </>
          )
        }

        return (
          <div key={index} className={styles.title}>
            {title}
          </div>
        )
      })}
    </div>
  )
}

export default Title
