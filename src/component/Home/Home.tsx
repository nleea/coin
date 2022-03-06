import { MainRouter } from "../Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "../Navbar/Routes/Routes";

const Home = () => {
    return (
        <Router>
            <div className="content-navbar">
                <MainRouter />
            </div>
            <div className="body">
                <MainRoutes/>
            </div>
        </Router>
    );
};

export default Home;
