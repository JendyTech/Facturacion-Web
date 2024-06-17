import DataTable from 'react-data-table-component';

export default function Table() {

  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
    },
    {
      name: 'Código',
      selector: row => row.codigo,
    },
    {
      name: 'Nombre',
      selector: row => row.nombre,
    },
    {
      name: 'Descripcion',
      selector: row => row.descripcion,
    },
    {
      name: 'Precio',
      selector: row => row.precio,
    },
    {
      name: 'Marca',
      selector: row => row.marca,
    },
    {
      name: 'Cantidad',
      selector: row => row.cantidad,
    },
    {
      name: 'Suplidor',
      selector: row => row.suplidor,
    },
    {
      name: 'Categoria',
      selector: row => row.categoria,
    },
  ];

  const data = [
    {
      id: 1,
      codigo: 'A001',
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precio: 10.00,
      marca: 'Marca A',
      cantidad: 100,
      suplidor: 'Suplidor X',
      categoria: 'Categoría 1',
    },
    {
      id: 2,
      codigo: 'A002',
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precio: 20.00,
      marca: 'Marca B',
      cantidad: 200,
      suplidor: 'Suplidor Y',
      categoria: 'Categoría 2',
    },
    {
      id: 3,
      codigo: 'A003',
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precio: 30.00,
      marca: 'Marca C',
      cantidad: 300,
      suplidor: 'Suplidor Z',
      categoria: 'Categoría 3',
    },
    {
      id: 4,
      codigo: 'A004',
      nombre: 'Producto 4',
      descripcion: 'Descripción del producto 4',
      precio: 40.00,
      marca: 'Marca D',
      cantidad: 400,
      suplidor: 'Suplidor X',
      categoria: 'Categoría 4',
    },
    {
      id: 5,
      codigo: 'A005',
      nombre: 'Producto 5',
      descripcion: 'Descripción del producto 5',
      precio: 50.00,
      marca: 'Marca E',
      cantidad: 500,
      suplidor: 'Suplidor Y',
      categoria: 'Categoría 5',
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={7}
        paginationRowsPerPageOptions= {[3, 4, 5, 6, 7]}
        highlightOnHover
      />
    </div>
  )
}
