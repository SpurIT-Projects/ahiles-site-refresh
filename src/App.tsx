import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OKompanii from "./pages/OKompanii";
import Kontaktyi from "./pages/Kontaktyi";
import Tsenyi from "./pages/Tsenyi";
import RemontFotoapparatov from "./pages/RemontFotoapparatov";
import RemontNoutbukov from "./pages/RemontNoutbukov";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-kompanii" element={<OKompanii />} />
          <Route path="/kontaktyi" element={<Kontaktyi />} />
          <Route path="/tsenyi" element={<Tsenyi />} />
          <Route path="/remont-fotoapparatov" element={<RemontFotoapparatov />} />
          <Route path="/remont-noutbukov" element={<RemontNoutbukov />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
