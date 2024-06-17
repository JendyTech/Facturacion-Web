import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaUsers, FaFileInvoice, FaChartBar, FaCog } from 'react-icons/fa';
import styles from '@/styles/MainLayout/Sidebar.module.css';

function Sidebar() {
    const [activeLink, setActiveLink] = useState("");

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                Sidebar
            </div>
            <ul className={styles.sidebarMenu}>
                <li className={activeLink === "/" ? "active pressed" : ""}>
                    <Link to="/" className={styles.sidebarLink} onClick={() => setActiveLink("/")}>
                        <FaHome className={styles.sidebarIcon} /> Home
                    </Link>
                </li>
                <li className={activeLink === "/products" ? "active pressed" : ""}>
                    <Link to="/products" className={styles.sidebarLink} onClick={() => setActiveLink("/products")}>
                        <FaBox className={styles.sidebarIcon} /> Products
                    </Link>
                </li>
                <li className={activeLink === "/clients" ? "active pressed" : ""}>
                    <Link to="/clients" className={styles.sidebarLink} onClick={() => setActiveLink("/clients")}>
                        <FaUsers className={styles.sidebarIcon} /> Clients
                    </Link>
                </li>
                <li className={activeLink === "/invoice" ? "active pressed" : ""}>
                    <Link to="/invoice" className={styles.sidebarLink} onClick={() => setActiveLink("/invoice")}>
                        <FaFileInvoice className={styles.sidebarIcon} /> Invoice
                    </Link>
                </li>
                <li className={activeLink === "/reports" ? "active pressed" : ""}>
                    <Link to="/reports" className={styles.sidebarLink} onClick={() => setActiveLink("/reports")}>
                        <FaChartBar className={styles.sidebarIcon} /> Reports
                    </Link>
                </li>
                <li className={activeLink === "/settings" ? "active pressed" : ""}>
                    <Link to="/settings" className={styles.sidebarLink} onClick={() => setActiveLink("/settings")}>
                        <FaCog className={styles.sidebarIcon} /> Settings
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;