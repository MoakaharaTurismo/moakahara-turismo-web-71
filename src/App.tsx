
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComboPage from "./pages/ComboPage";
import IngressosPage from "./pages/IngressosPage";
import HistoriasPage from "./pages/HistoriasPage";
import CuriosidadesPage from "./pages/CuriosidadesPage";
import RoteirosPage from "./pages/RoteirosPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/combo" element={<ComboPage />} />
          <Route path="/ingressos" element={<IngressosPage />} />
          <Route path="/historias" element={<HistoriasPage />} />
          <Route path="/curiosidades" element={<CuriosidadesPage />} />
          <Route path="/roteiros" element={<RoteirosPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
