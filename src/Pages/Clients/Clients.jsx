import Table from "@/Pages/Clients/components/Table";
import MainLayout from "@/Pages/MainLayout/MainLayout";
import SearchBar from './../MainLayout/components/SearchBar';

export default function Clients() {
  return (
    <div>
      <MainLayout>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h2>Client</h2>
        <SearchBar />
        </div>
        <Table />
      </MainLayout>
    </div>
  )
}
