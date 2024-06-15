import React from 'react'
import styles from '@/styles/Home/Cards.module.css'

export default function Cards() {
    return (
        <div>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <h3>Total de Ingresos</h3>
                    <p>$0</p>
                </div>
                <div className={styles.card}>
                    <h3>Clientes</h3>
                    <p>0</p>
                </div>
                <div className={styles.card}>
                    <h3>Factura Promedio</h3>
                    <p>$0</p>
                </div>
            </div>
        </div>
    )
}
