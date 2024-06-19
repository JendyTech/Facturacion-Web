import React from 'react'
import MainLayout from '@/Pages/MainLayout/MainLayout';
import Table from '@/Pages/Suppliers/components/Table';
import SearchBar from '@/Pages/MainLayout/components/SearchBar';
import styles from '@/styles/Supplier/Supplier.module.css';
import { useNavigate } from 'react-router-dom';

export default function Suppliers() {
  const navigate = useNavigate();

  const handleAddSupplierClick = () => {
    navigate('/add-supplier');
  };

  return (
    <div>
      <MainLayout>
        <div className={styles.SupplierHeader}>
          <h2>Suplidores</h2>
            <div className={styles.SupplierAddButton}>
              <button className={styles.AddButton} onClick={handleAddSupplierClick}>Añadir Suplidores</button>
              <SearchBar />
            </div>
        </div>
        <Table />
      </MainLayout>
    </div>
  )
}
