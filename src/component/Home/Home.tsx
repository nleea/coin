import { MainRouter } from "../Navbar/route";

const Home = () => {
    return (
        <div>
            <div className="content-navbar">
                <MainRouter />
            </div>
            <div className="body"></div>
        </div>
    );
};

export default Home;
