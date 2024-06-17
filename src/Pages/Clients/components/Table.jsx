/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { getAllClients } from '@/database/GET/getAllClients';

function Table() {

   
    const [clients, setClients] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getAllClients();
            setClients(data);
        };

        getData();
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: (row) => row.id,
            width: '50px', 
        },
        {
            name: 'Nombre',
            selector: (row) => row.name_client,
            width: '175px',
        },
        {
            name: 'Apellido',
            selector: (row) => row.lastname_client,
            width: '175px',
        },
        {
            name: 'Identificacion',
            selector: (row) => row.identification_client,
            width: '120px',
        },
        {
            name: 'Telefono',
            selector: (row) => row.phonenumber_client,
            width: '120px',
        },
        {
            name: 'Correo',
            selector: (row) => row.email_client,
            width: '200px',
            cell: (row) => (
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {row.email_client}
                </div>
            ),
        },
        {
            name: 'Direccion',
            selector: (row) => row.address_client,
            width: '175px',
            cell: (row) => (
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {row.address_client}
                </div>
            ),
        },
        {
            name: 'Fecha de Creacion',
            selector: (row) => row.created_date_client,
            width: '140px',

        },
    ];

    return (
        <div>
            <DataTable
                columns={columns}
                data={clients}
                pagination
                paginationPerPage={7}
                paginationRowsPerPageOptions={[3, 4, 5, 6, 7]}
                highlightOnHover
                selectableRows  
                style={{ flex: 1 }} // Enable flex for proportional distribution
            />
        </div>
    );
}

export default Table;