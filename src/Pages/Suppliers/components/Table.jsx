/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { getAllSuppliers } from '@/database/GET/getAllSuppliers';

function Table() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getAllSuppliers();
            setSuppliers(data);
        };

        getData();
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: (row) => row.id_suppliers,
            width: '50px',
            wrap: true,  // Allow text to wrap
        },
        {
            name: 'Nombre',
            selector: (row) => row.name_suppliers,
            width: '150px',
            wrap: true,
        },
        {
            name: 'Identificación',
            selector: (row) => row.identification_suppliers,
            width: '120px',
            wrap: true,
        },
        {
            name: 'Teléfono',
            selector: (row) => row.phone_suppliers,
            width: '120px',
            wrap: true,
        },
        {
            name: 'Correo',
            selector: (row) => row.email_suppliers,
            width: '175px',
            cell: (row) => (
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {row.email_suppliers}
                </div>
            ),
            wrap: true,
        },
        {
            name: 'Dirección',
            selector: (row) => row.address_suppliers,
            width: '175px',
            cell: (row) => (
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {row.address_suppliers}
                </div>
            ),
            wrap: true,
        },
        {
            name: 'Descripcion',
            selector: (row) => row.description_suppliers,
            width: '375px',
            cell: (row) => (
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {row.description_suppliers}
              </div>
            ),
            wrap: true,
        },
    ];

    const customStyles = {
        header: {
            style: {
                minHeight: '56px',
            },
        },
        headRow: {
            style: {
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderTopColor: '#e3e3e3',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1px',
                borderLeftColor: '#e3e3e3',
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: '#e3e3e3',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
            },
        },
        headCells: {
            style: {
                '&:not(:last-of-type)': {},
                fontSize: '13px',
                color: '#555555',
            },
        },
        rows: {
            style: {
                minHeight: '48px',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: '#e3e3e3',
                borderLeftStyle: 'solid',
                borderLeftWidth: '1px',
                borderLeftColor: '#e3e3e3',
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: '#e3e3e3',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
            },
        },
        pagination: {
            style: {
                borderTop: 'none',
            },
        },
    };

    return (
        <div style={{ overflowX: 'auto' }}>
            <DataTable
                columns={columns}
                data={suppliers}
                customStyles={customStyles}
                pagination
                paginationPerPage={7}
                paginationRowsPerPageOptions={[3, 4, 5, 6, 7]}
                highlightOnHover
                selectableRows
                noHeader
                responsive
            />
        </div>
    );
}

export default Table;
