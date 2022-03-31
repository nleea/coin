import { useReducer } from "react";
import { Navbar } from "../Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "../Navbar/Routes/Routes";
import { AppContext, initialState, reducer } from "../../context/context";
import "./home.scss"

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Router>
                <div className="content" >
                    <div className="content-navbar">
                        <Navbar />
                    </div>
                    <div className="body">
                        <MainRoutes />
                    </div>
                </div>
            </Router>
        </AppContext.Provider>
    );
};

export default Home;
