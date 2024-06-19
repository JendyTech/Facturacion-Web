import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@/styles/Supplier/SupplierForm.module.css';
import MainLayout from '@/Pages/MainLayout/MainLayout';

const SupplierForm = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/suppliers');
  };

  const handleKeyPress = (event) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <MainLayout>
      <form className={styles.supplierForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name_supplier">Nombre</label>
          <input type="text" id="name_supplier" name="name_supplier" placeholder="Ingrese el Nombre" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="identification_supplier">Identificación</label>
          <input 
            type="text" 
            id="identification_supplier" 
            name="identification_supplier" 
            placeholder="Ingrese la Identificación"
            pattern="[0-9]*"
            inputMode="numeric"
            onKeyPress={handleKeyPress} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phonenumber_supplier">Numero de Telefono</label>
          <input 
            type="text" 
            id="phonenumber_supplier" 
            name="phonenumber_supplier" 
            placeholder="Ingrese el Numero de Telefono"
            pattern="[0-9]*"
            inputMode="numeric"
            onKeyPress={handleKeyPress} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email_supplier">Correo</label>
          <input type="email" id="email_supplier" name="email_supplier" placeholder="Ingrese el Correo" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address_supplier">Direccion</label>
          <input type="text" id="address_supplier" name="address_supplier" placeholder="Ingrese la Direccion" />
        </div>
        <div className={styles.formGroup}>
                <label htmlFor="description_supplier">Description</label>
                <textarea id="description_supplier" name="description_supplier" placeholder="Descripcion del producto"></textarea>
            </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.saveBtn}>Guardar</button>
          <button type="button" className={styles.cancelBtn} onClick={handleCancelClick}>Cancelar</button>
        </div>
      </form>
    </MainLayout>
  );
};

export default SupplierForm;
