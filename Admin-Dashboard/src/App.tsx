import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/DashboardPage"));
const Customers = lazy(() => import("./pages/Customers"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const AdminDrawer = lazy(() => import("./components/AdminDrawer"));

export default function App() {
  return (
    <BrowserRouter>
      <AdminDrawer>
        <Suspense fallback={<Loader open={true} />}>
          <Routes>
            <Route path="admin/dashboard" element={<Dashboard />} />
            <Route path="admin/customers" element={<Customers />} />
            <Route path="admin/transaction" element={<Transaction />} />
            <Route path="admin/products" element={<Products />} />
          </Routes>
        </Suspense>
      </AdminDrawer>
    </BrowserRouter>
  );
}
