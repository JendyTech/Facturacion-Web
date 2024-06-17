import Table from "@/Pages/Clients/components/Table";
import MainLayout from "@/Pages/MainLayout/MainLayout";
import SearchBar from '@/Pages/MainLayout/components/SearchBar';
import styles from '@/styles/Client/Client.module.css';
import { useNavigate } from 'react-router-dom';

export default function Clients() {

  const navigate = useNavigate();

  const handleAddClientClick = () => {
    navigate('/add-client');
  };

  return (
    <div>
      <MainLayout>
        <div className={styles.ClientHeader}>
          <h2>Client</h2>
          <div className={styles.ClientAddButton}>
            <button className={styles.AddButton} onClick={handleAddClientClick}>Añadir Cliente</button>
            <SearchBar />
          </div>
        </div>
        <Table />
      </MainLayout>
    </div>
  )
}
