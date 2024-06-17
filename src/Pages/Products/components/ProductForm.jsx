import React from 'react';
import styles from '@/styles/Products/ProductForm.module.css';
import MainLayout from '@/Pages/MainLayout/MainLayout';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {

    const navigate = useNavigate();

    const handleCancelClick = () => {
      navigate('/products');
    };

return (
    <MainLayout>
        <form className={styles.productForm}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Nombre del producto" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" placeholder="Descripcion del producto"></textarea>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="price">Price</label>
                <input type="text" id="price" name="price" placeholder="Precio" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="brand">Brand</label>
                <input type="text" id="brand" name="brand" placeholder="Marca del producto" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="stock">Stock</label>
                <input type="text" id="stock" name="stock" placeholder="Cantidad" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="image">Image</label>
                <input type="file" id="image" name="image" />
            </div>
            <div className={styles.formActions}>
                <button type="submit" className={styles.saveBtn}>Guardar</button>
                <button type="button" className={styles.cancelBtn} onClick={handleCancelClick}>Cancelar</button>
            </div>
        </form>
    </MainLayout>
);
};

export default ProductForm;
