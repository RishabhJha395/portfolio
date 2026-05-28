import { AnimatePresence } from "framer-motion";
import MainPage from "./pages/MainPage.jsx";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <MainPage />
    </AnimatePresence>
  );
}
