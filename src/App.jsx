import { Outlet } from "react-router-dom";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
