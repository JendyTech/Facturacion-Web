import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import styles from '@/styles/MainLayout/mainlayout.module.css'


// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
    return (
        <div className={styles.gridContainer}>
            <Navbar />

                <Sidebar />
                <div className={styles.content}>
                    { children }
                </div> 
        </div>
    )
}
