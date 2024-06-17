import { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { getAllProducts } from '@/database/GET/getAllProducts'

export default function Table() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      setProducts(data)
    }

    getData()
  }, [])

  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
    },
    {
      name: '',
      selector: row => row.image_product,
    },
    {
      name: 'Nombre',
      selector: row => row.name_product,
    },
    {
      name: 'Descripcion',
      selector: row => row.description_product,
    },
    {
      name: 'Precio',
      selector: row => row.price_product,
    },
    {
      name: 'Marca',
      selector: row => row.brand_product,
    },
    {
      name: 'Cantidad',
      selector: row => row.stock_product,
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={products}
        pagination
        paginationPerPage={7}
        paginationRowsPerPageOptions= {[3, 4, 5, 6, 7]}
        highlightOnHover
        selectableRows
      />
    </div>
  )
}
