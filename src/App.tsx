import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import UserDashboard from "./pages/UserDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes with Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/packages" element={<Layout><Packages /></Layout>} />
          <Route path="/appointment" element={<Layout><Appointment /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          
          {/* Auth Routes without Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          
          {/* Dashboard Routes without Layout */}
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
