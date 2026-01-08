import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Preloader from "./components/PreLoader";
import ToastProvider from "./components/Providers/ToastProvider";

const queryClient = new QueryClient();

const App = () => (
  <>
    {/* <Preloader /> */}
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider> */}
      <TooltipProvider>
        <ToastProvider />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
