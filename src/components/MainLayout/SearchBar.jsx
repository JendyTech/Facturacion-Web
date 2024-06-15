import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from '@/styles/MainLayout/SearchBar.module.css'

export default function SearchBar() {
    return (
        <div className={styles.searchContainer}>
            <FaSearch className={styles.searchIcon} />
            <input type="text" className={styles.searchInput} placeholder="Search..." />
        </div>
    )
}
