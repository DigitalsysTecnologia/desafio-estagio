import { useEffect, useState } from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import { GetAdventures } from "../data";
import { useNavigate } from "react-router-dom";
import { AdventureType } from "../types";
import Loading from "../components/Loading";
import '../styles/Adventures.css';

function Adventures() {
    const [adventures, setAdventures] = useState<AdventureType[]>();
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch adventures from API with a delay of 0.5s to simulate a real API call
        GetAdventures().then(result => {
            setAdventures(result);
        }).catch(err => {
            console.error(err);
            navigate('/');
        });
    }, [navigate]);

    if (!adventures || adventures.length === 0) return <main className="Adventures">
        <Header />
        <Background />
        <Loading />
    </main>

    return <main className="Adventures">
        <Header />
        <Background />
        <h1>Aventuras</h1>
        {adventures.map((adventure, index) => {
            return <section className="Content" key={index} >
                <img src={`../${adventure.picture}`} alt={adventure.title} />
                <article>
                    <h2>{adventure.title}</h2>
                    <p>{`Local: ${adventure.local}`}</p>
                    <p>{adventure.plot}</p>
                    <h3>Objetivos:</h3>
                    <ul>
                        {adventure.goals.map((goal, goalIndex) => (
                            <li key={goalIndex}>{goal}</li>
                        ))}
                    </ul>
                </article>
            </section>
        })}
    </main>
}

export default Adventures;