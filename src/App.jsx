import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

/* ================= DASHBOARD ================= */
import Dashboard from "./pages/Dashboard";
import Marketing from "./pages/Marketing";
import Analytics from "./pages/Analytics";

/* ================= CUSTOMER ================= */
import CustomerList from "./pages/customer/CustomerList";
import CustomerCreate from "./pages/customer/CustomerCreate";
import CustomerEdit from "./pages/customer/CustomerEdit";
import CustomerDetails from "./pages/customer/CustomerDetails";

/* ================= PRODUCT (2.0) ================= */
import ProductList from "./pages/product2.0/ProductList";
import ProductCreate from "./pages/product2.0/ProductCreate";
import ProductEdit from "./pages/product2.0/ProductEdit";

/* ================= ORDERS ================= */
import OrderList from "./pages/orders/OrderList";
import OrderCreate from "./pages/orders/OrderCreate";
import OrderEdit from "./pages/orders/OrderEdit";

/* ================= ACCOUNT / SETTINGS ================= */
import AccountSettings from "./pages/accounts/settings/AccountSettings";

/* ================= AUTH ================= */
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  return (
    <Routes>
      {/* ============ AUTH (NO LAYOUT) ============ */}
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />

      {/* ============ APP (WITH LAYOUT) ============ */}
      <Route element={<Layout />}>
        {/* DASHBOARD */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/analytics" element={<Analytics />} />

        {/* ACCOUNT SETTINGS */}
        <Route path="/account/settings" element={<AccountSettings />} />

        {/* CUSTOMER */}
        <Route path="/customer/list" element={<CustomerList />} />
        <Route path="/customer/create" element={<CustomerCreate />} />
        <Route path="/customer/edit/:id" element={<CustomerEdit />} />
        <Route path="/customer/details/:id" element={<CustomerDetails />} />

        {/* PRODUCT */}
        <Route path="/product/list" element={<ProductList />} />
        <Route path="/product/create" element={<ProductCreate />} />
        <Route path="/product/edit/:id" element={<ProductEdit />} />

        {/* ORDERS */}
        <Route path="/orders/list" element={<OrderList />} />
        <Route path="/orders/create" element={<OrderCreate />} />
        <Route path="/orders/edit/:id" element={<OrderEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
