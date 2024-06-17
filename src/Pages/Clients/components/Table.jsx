import { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";
import { getAllClients } from '@/database/GET/getAllClients'


function Table() {

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const [clients, setClients] = useState([])

    useEffect(() => {
      const getData = async () => {
        const data = await getAllClients();
        setClients(data)
      }
  
      getData()
    }, [])

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Nombre',
            selector: row => row.name_client,
        },
        {
            name: 'Apellido',
            selector: row => row.lastname_client,
        },
        {
            name: 'Identificacion',
            selector: row => row.identification_client,
        },
        {
            name: 'Telefono',
            selector: row => row.phonenumber_client,
        },
        {
            name: 'Correo',
            selector: row => row.email_client,
        },
        {
            name: 'Direccion',
            selector: row => row.address_client,
        },
        {
            name: 'Fecha de Creacion',
            selector: row => row.created_date_client,
        },
    ];


    return (
        <div>
            <DataTable
                columns={columns}
                data={clients}
                pagination
                paginationPerPage={7}
                paginationRowsPerPageOptions= {[3, 4, 5, 6, 7]}
                highlightOnHover
                selectableRows  
                expandableRows
			    expandableRowsComponent={ExpandedComponent}
            />
        </div>
    )
}

export default Table