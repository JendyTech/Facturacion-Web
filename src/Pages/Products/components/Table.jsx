import { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { getAllProducts } from '@/database/GET/getAllProducts';

export default function Table() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    getData();
  }, []);

  const columns = [
    {
      name: 'Id',
      selector: (row) => row.id,
      width: '50px',
    },
    {
      name: '',
      selector: (row) => row.image_product,
      width: '100px',
      cell: (row) => (
        <img
          src={row.image_product}
          alt="Product Image"
          style={{ width: '100%' }}
        />
      ),
    },
    {
      name: 'Nombre del producto',
      selector: (row) => row.name_product,
      width: '225px',
    },
    {
      name: 'Descripcion',
      selector: (row) => row.description_product,
      width: '375px',
      cell: (row) => (
        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {row.description_product}
        </div>
      ),
    },
    {
      name: 'Precio',
      selector: (row) => row.price_product,
      width: '120px', 
    },
    {
      name: 'Marca',
      selector: (row) => row.brand_product,
      width: '150px',
    },
    {
      name: 'Cantidad',
      selector: (row) => row.stock_product,
      width: '100px',
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
    <div>
        <DataTable
            columns={columns}
            data={products}
            customStyles={customStyles}
            pagination
            paginationPerPage={7}
            paginationRowsPerPageOptions={[3, 4, 5, 6, 7]}
            highlightOnHover
            selectableRows
            noHeader
        />
    </div>
);
}


