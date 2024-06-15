import React from 'react'
import styles from '@/styles/MainLayout/Navbar.module.css'
import SearchBar from '@/Pages/MainLayout/SearchBar'
import { FaUserCircle } from 'react-icons/fa'

function Navbar() {
  return (
    <div className={styles.navbar}>
            <div className={styles.searchContainer}>
                <SearchBar />
            </div>
            <div className={styles.userContainer}>
                <FaUserCircle className={styles.userIcon} />
            </div>
        </div>
  )
}

export default Navbar