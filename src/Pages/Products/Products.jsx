import MainLayout from "../MainLayout/MainLayout"
import Table from "./components/Table"
import TableHeader from "./components/TableHeader"

function Products() {
  return (
    <div>
      <MainLayout>
        <h2>Products</h2>
        <TableHeader />
        <Table />
      </MainLayout>
    
    </div>
  )
}

export default Products