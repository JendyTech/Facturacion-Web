import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@/styles/Client/ClientForm.module.css';
import MainLayout from '@/Pages/MainLayout/MainLayout';

const ClientForm = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/clients');
  };

  const handleKeyPress = (event) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <MainLayout>
      <form className={styles.clientForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name_client">Nombre</label>
          <input type="text" id="name_client" name="name_client" placeholder="Ingrese el Nombre" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastname_client">Apellido</label>
          <input type="text" id="lastname_client" name="lastname_client" placeholder="Ingrese el Apellido" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="identification_client">Identificación</label>
          <input 
            type="text" 
            id="identification_client" 
            name="identification_client" 
            placeholder="Ingrese la Identificación"
            pattern="[0-9]*"
            inputMode="numeric"
            onKeyPress={handleKeyPress} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phonenumber_client">Numero de Telefono</label>
          <input 
            type="text" 
            id="phonenumber_client" 
            name="phonenumber_client" 
            placeholder="Ingrese el Numero de Telefono"
            pattern="[0-9]*"
            inputMode="numeric"
            onKeyPress={handleKeyPress} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email_client">Correo</label>
          <input type="email" id="email_client" name="email_client" placeholder="Ingrese el Correo" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address_client">Direccion</label>
          <input type="text" id="address_client" name="address_client" placeholder="Ingrese la Direccion" />
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.saveBtn}>Guardar</button>
          <button type="button" className={styles.cancelBtn} onClick={handleCancelClick}>Cancelar</button>
        </div>
      </form>
    </MainLayout>
  );
};

export default ClientForm;
