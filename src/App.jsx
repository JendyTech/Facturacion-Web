import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '@/styles/MainDesign/App.css'
import Home from '@/Pages/Home/Home'
import Settings from '@/Pages/Settings/Settings'
import Reports from '@/Pages/Reports/Reports'
import Products from '@/Pages/Products/Products'
import Suppliers from '@/Pages/Suppliers/Suppliers'
import Invoice from '@/Pages/Invoice/Invoice'
import Clients from '@/Pages/Clients/Clients'
import Option1 from '@/Pages/Invoice/components/Option1'
import Option2 from '@/Pages/Invoice/components/Option2'
import ProductForm from '@/Pages/Products/components/ProductForm'
import ClientForm from '@/Pages/Clients/components/ClientForm'
import SupplierForm from '@/Pages/Suppliers/components/SupplierForm'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/add-client" element={<ClientForm />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/add-supplier" element={<SupplierForm />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/invoice/option1" element={<Option1 />} />
          <Route path="/invoice/option2" element={<Option2 />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
