import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaUsers, FaFileInvoice, FaChartBar, FaCog, FaTruck} from 'react-icons/fa';
import styles from '@/styles/MainLayout/Sidebar.module.css'; 

function Sidebar() {
  const [activeLink, setActiveLink] = useState('/');
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);

  const handleInvoiceClick = () => {
    setIsInvoiceOpen(!isInvoiceOpen);
    setActiveLink('/invoice');
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        Inventario
      </div>
      <ul className={styles.sidebarMenu}>
        <li className={activeLink === '/' ? 'active pressed' : ''}>
          <Link to="/" className={styles.sidebarLink} onClick={() => setActiveLink('/')}>
            <FaHome className={styles.sidebarIcon} /> Home
          </Link>
        </li>
        <li className={activeLink === '/products' ? 'active pressed' : ''}>
          <Link to="/products" className={styles.sidebarLink} onClick={() => setActiveLink('/products')}>
            <FaBox className={styles.sidebarIcon} /> Products
          </Link>
        </li>
        <li className={activeLink === '/clients' ? 'active pressed' : ''}>
          <Link to="/clients" className={styles.sidebarLink} onClick={() => setActiveLink('/clients')}>
            <FaUsers className={styles.sidebarIcon} /> Clients
          </Link>
        </li>
        <li className={activeLink === '/suppliers' ? 'active pressed' : ''}>
          <Link to="/suppliers" className={styles.sidebarLink} onClick={() => setActiveLink('/suppliers')}>
            <FaTruck className={styles.sidebarIcon} /> Suppliers
          </Link>
        </li>
        <li className={activeLink === '/invoice' ? 'active pressed' : ''}>
          <div className={styles.sidebarLink} onClick={handleInvoiceClick}>
            <FaFileInvoice className={styles.sidebarIcon} /> Invoice 
            <span className={`${styles.arrow} ${isInvoiceOpen ? styles.arrowOpen : ''}`}>˅</span>
          </div>
          {isInvoiceOpen && (
            <ul className={styles.subMenu}>
              <li>
                <Link to="/invoice/option1" className={styles.sidebarLink} onClick={() => setActiveLink('/invoice/option1')}>
                  Option 1
                </Link>
              </li>
              <li>
                <Link to="/invoice/option2" className={styles.sidebarLink} onClick={() => setActiveLink('/invoice/option2')}>
                  Option 2
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={activeLink === '/reports' ? 'active pressed' : ''}>
          <Link to="/reports" className={styles.sidebarLink} onClick={() => setActiveLink('/reports')}>
            <FaChartBar className={styles.sidebarIcon} /> Reports
          </Link>
        </li>
        <li className={activeLink === '/settings' ? 'active pressed' : ''}>
          <Link to="/settings" className={styles.sidebarLink} onClick={() => setActiveLink('/settings')}>
            <FaCog className={styles.sidebarIcon} /> Settings
          </Link>
        </li>
  

      </ul>
    </div>
  );
}

export default Sidebar;
