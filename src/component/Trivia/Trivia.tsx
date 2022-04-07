import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { Link } from "../UI/Link/Link";
import { useTriviaHooks } from "../../custom-hooks/useTriviaHooks";
import "./trivia.scss";

export const OutletContext = () => {
    return useOutletContext<any>();
};

export const Trivia = () => {
    const [show, setShow] = useState(false);
    const { fetchtrivia } = useTriviaHooks();
    const [category_, setCategory] = useState("music")

    const handlerClicktrivia = (category = "music") => {
        setShow((p) => !p);
        fetchtrivia(category!);
        setCategory(category!);
    };

    return (
        <div className="card w-50 bg-color mx-auto mt-5">
            <div className="card-header text-light fs-2 text-center">Choose a Topic</div>
            <div className="card-body">
                <Link color="bg-dark" link="/trivia" click={handlerClicktrivia}><i className="bi bi-caret-left"></i></Link>
                {!show ? <div className="w-100 flex-wrap mt-2" hidden={show}>
                    <Link color="b1" link={"/trivia/artliterature"} click={() => handlerClicktrivia("artliterature")}>Artliterature</Link>
                    <Link color="b3" link={"/trivia/sciencenature"} click={() => handlerClicktrivia("sciencenature")}>Sciencenature</Link>
                    <Link color="b2" link={"/trivia/language"} click={() => handlerClicktrivia("language")}>Language</Link>
                    <Link color="b4" link={"/trivia/general"} click={() => handlerClicktrivia("general")}>General</Link>
                    <Link color="b5" link={"/trivia/fooddrink"} click={() => handlerClicktrivia("fooddrink")}>Fooddrink</Link>
                    <Link color="b6" link={"/trivia/peopleplaces"} click={() => handlerClicktrivia("peopleplaces")}>Peopleplaces</Link>
                    <Link color="b7" link={"/trivia/geography"} click={() => handlerClicktrivia("geography")}>Geography</Link>
                    <Link color="b1" link={"/trivia/historyholidays"} click={() => handlerClicktrivia("historyholidays")}>Historyholidays</Link>
                    <Link color="b2" link={"/trivia/entertainment"} click={() => handlerClicktrivia("entertainment")}>Entertainment</Link>
                    <Link color="b3" link={"/trivia/toysgames"} click={() => handlerClicktrivia("toysgames")}>Toysgames</Link>
                    <Link color="b4" link={"/trivia/music"} click={() => handlerClicktrivia("music")}>Music</Link>
                    <Link color="b5" link={"/trivia/mathematics"} click={() => handlerClicktrivia("mathematics")}>Mathematics</Link>
                    <Link color="b6" link={"/trivia/religionmythology"} click={() => handlerClicktrivia("religionmythology")}>Religionmythology</Link>
                    <Link color="b7" link={"/trivia/sportsleisure"} click={() => handlerClicktrivia("sportsleisure")}>Sportsleisure</Link>
                </div> : <Outlet context={{ refresh: () => fetchtrivia(category_) }} />}
            </div>
        </div>
    );
};