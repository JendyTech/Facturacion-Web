import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className="content">
                    { children }
                </div>
            </div>
        </div>
    )
}
