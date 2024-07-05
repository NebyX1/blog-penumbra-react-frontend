import { Outlet } from "react-router-dom";
import NavigationBar from "./components/common/NavigationBar";
import Footer from "./components/common/Footer";
import "./styles/general.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <NavigationBar />
      <div id="Main">
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
