import styles from '@/styles/MainLayout/Navbar.module.css'
import { FaUserCircle } from 'react-icons/fa'


function Navbar() {
  return (
    <div className={styles.navbar}>
            <div className={styles.searchContainer}>
            </div>
            <div className={styles.userContainer}>
                <FaUserCircle className={styles.userIcon} />
            </div>
        </div>
  )
}

export default Navbar