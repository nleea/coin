import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { Link } from "../UI/Link/Link";
import { useTriviaHooks } from "../../custom-hooks/useTriviaHooks";
import { Spinner } from "../UI/Spinner/Spinner";
import "./trivia.scss";

export const OutletContext = () => useOutletContext<{ refresh: () => void, handlerAnswerClick: (a: any) => void, answer: number }>();

export const Trivia = () => {
    const [show, setShow] = useState(false);
    const { fetchtrivia, isLoading } = useTriviaHooks();
    const [category_, setCategory] = useState("music");
    const [dificulty, setDificulty] = useState("easy");
    const [answer, setAnswer] = useState(0);
    let render = <Spinner />;

    const handlerClicktrivia = (category = "music") => {
        setShow((p) => !p);
        fetchtrivia(category, dificulty);
        setCategory(category);
        setAnswer(0);
    };

    if (!isLoading) {
        render = (
            <>
                <div className="card w-25 mx-auto bg-dark">
                    <div className="card-body text-light text-center">
                        {answer}
                    </div>
                </div>
                <Outlet context={{ refresh: () => fetchtrivia(category_, 'easy'), handlerAnswerClick: setAnswer, answer: answer }} />
            </>
        );
    }

    return (
        <div className="card w-50 bg-color mx-auto mt-5">
            <div className="card-header text-light fs-2 text-center">Choose a Topic</div>
            <div className="card-body">
                <Link color="bg-dark" link="/trivia" click={handlerClicktrivia}><i className="bi bi-caret-left"></i></Link>
                {!show ? <div className="w-100 flex-wrap mt-2" hidden={show}>
                    <div className="w-75 card bg-dark mx-auto my-3">
                        <div className="card-header text-light text-center fs-3">Dificulty</div>
                        <div className="card-body mx-auto d-flex justify-content-evenly w-100">
                            <button className="btn btn-success" onClick={() => setDificulty('easy')}>Easy</button>
                            <button className="btn btn-primary" onClick={() => setDificulty('medium')}>Medium</button>
                            <button className="btn btn-danger" onClick={() => setDificulty('hard')}>Hard</button>
                        </div>
                    </div>
                    <Link color="b1" link={"/trivia/artliterature"} click={() => handlerClicktrivia("arts_and_literature")}>Arts & Literature</Link>
                    <Link color="b3" link={"/trivia/filmvideo"} click={() => handlerClicktrivia("film_and_tv")}>Film & TV</Link>
                    <Link color="b4" link={"/trivia/general"} click={() => handlerClicktrivia("general_knowledge")}>General Knowledge</Link>
                    <Link color="b5" link={"/trivia/fooddrink"} click={() => handlerClicktrivia("food_and_drink")}>Fooddrink</Link>
                    <Link color="b7" link={"/trivia/geography"} click={() => handlerClicktrivia("geography")}>Geography</Link>
                    <Link color="b1" link={"/trivia/history"} click={() => handlerClicktrivia("history")}>History</Link>
                    <Link color="b2" link={"/trivia/science"} click={() => handlerClicktrivia("science")}>Science</Link>
                    <Link color="b3" link={"/trivia/societyculture"} click={() => handlerClicktrivia("society_and_culture")}>Society & Culture</Link>
                    <Link color="b4" link={"/trivia/music"} click={() => handlerClicktrivia("music")}>Music</Link>
                    <Link color="b5" link={"/trivia/sportleisure"} click={() => handlerClicktrivia("sport_and_leisure")}>Sport & Leisure</Link>
                </div> : render}
            </div>
        </div>
    );
};