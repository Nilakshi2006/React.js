import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.logo}>
        Nilakshi
      </h1>
      <button>Login</button>
    </div>
  )
}

export default Header
