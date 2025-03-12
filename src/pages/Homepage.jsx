import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Homepage.css"; // Create this CSS file for custom styles

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <Header title="Grant Management System" tabs={[]} />
      <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="text-white">Welcome to the Grant Management System</h1>
        <div className="mt-4">
          <button className="btn btn-olive me-2" onClick={() => navigate('/professor')}>Professor Dashboard</button>
          <button className="btn btn-olive" onClick={() => navigate('/review')}>Grant Committee Dashboard</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
