import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Router>
        <Header />

        <AppRoutes />

        <Footer />
      </Router>
    </>
  );
}

export default App;
