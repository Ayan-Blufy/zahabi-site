
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Borrower from "./pages/Borrower";
import Lender from "./pages/Lender";
import Investor from "./pages/Investor";
import NotFound from "./pages/NotFound";
import ReactGa from "react-ga";
const queryClient = new QueryClient();

// Initialize Google Analytics
ReactGa.initialize("G-Q3ERNB6R4G"); // Replace with your Google Analytics tracking ID
ReactGa.pageview(window.location.pathname + window.location.search); // Track the initial page view
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/borrower" element={<Borrower />} />
          <Route path="/lender" element={<Lender />} />
          <Route path="/investor" element={<Investor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
