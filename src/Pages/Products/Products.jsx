import MainLayout from "../MainLayout/MainLayout"
import Table from "./components/Table"
import styles from '@/styles/Products/Products.module.css';
import SearchBar from '@/Pages/MainLayout/components/SearchBar';
import {useNavigate}  from 'react-router-dom';


function Products() {

  const navigate = useNavigate();

  const handleAddProductClick = () => {
    navigate('/add-product');
  };


  return (
    <div>
      <MainLayout>
        <div className={styles.ProductsHeader}>
          <h2>Products</h2>
          <div className={styles.ProductsAddButton}>
            <button className={styles.AddButton} onClick={handleAddProductClick}>Añadir Productos</button>
            <SearchBar />
          </div>
        </div>
        <Table />
      </MainLayout>

    </div>
  )
}

export default Products