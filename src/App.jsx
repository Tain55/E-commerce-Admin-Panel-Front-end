import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import Sidebar from "./Components/Sidebar";
import ProductUploadPage from "./Pages/Product/AddProduct/AddProduct";
import AllProduct from "./Pages/Product/AllProduct/AllProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex" style={{ height: "100vh" }}>
        <div>
          <Sidebar />
        </div>

        <div style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/products" element={<AllProduct />} />
            <Route path="/add-product" element={<ProductUploadPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

// Styles for Main Content
const mainContentStyle = {
  padding: "20px",
  overflowY: "auto",
};

export default App;
