import DataTable from "react-data-table-component";


function Table() {

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Nombre',
            selector: row => row.nombre,
        },
        {
            name: 'Apellido',
            selector: row => row.apellido,
        },
        {
            name: 'Identificacion',
            selector: row => row.identificacion,
        },
        {
            name: 'Telefono',
            selector: row => row.telefono,
        },
        {
            name: 'Correo',
            selector: row => row.correo,
        },
        {
            name: 'Direccion',
            selector: row => row.direccion,
        },
        {
            name: 'Fecha de Creacion',
            selector: row => row.fechaCreacion,
        },
    ];
    
    const data = [
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Pérez',
            identificacion: '12345678',
            telefono: '555-1234',
            correo: 'juan.perez@example.com',
            direccion: 'Calle Falsa 123',
            fechaCreacion: '2023-01-01',
        },
        {
            id: 2,
            nombre: 'María',
            apellido: 'González',
            identificacion: '87654321',
            telefono: '555-5678',
            correo: 'maria.gonzalez@example.com',
            direccion: 'Avenida Siempre Viva 456',
            fechaCreacion: '2023-02-15',
        },
        {
            id: 3,
            nombre: 'Carlos',
            apellido: 'Ramírez',
            identificacion: '11223344',
            telefono: '555-1122',
            correo: 'carlos.ramirez@example.com',
            direccion: 'Calle Principal 789',
            fechaCreacion: '2023-03-10',
        },
        {
            id: 4,
            nombre: 'Ana',
            apellido: 'López',
            identificacion: '22334455',
            telefono: '555-3344',
            correo: 'ana.lopez@example.com',
            direccion: 'Boulevard Central 101',
            fechaCreacion: '2023-04-20',
        },
        {
            id: 5,
            nombre: 'Luis',
            apellido: 'Martínez',
            identificacion: '33445566',
            telefono: '555-5566',
            correo: 'luis.martinez@example.com',
            direccion: 'Avenida Los Robles 202',
            fechaCreacion: '2023-05-30',
        },
    ];

    return (
        <div>
            <DataTable
                title="Clientes"
                columns={columns}
                data={data}
                pagination
                paginationPerPage={7}
                paginationRowsPerPageOptions= {[3, 4, 5, 6, 7]}
                highlightOnHover
                expandableRows
			    expandableRowsComponent={ExpandedComponent}

                
            />
        </div>
    )
}

export default Table