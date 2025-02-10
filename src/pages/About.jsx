import aboutImage from "../assets/Fjell Kino.jpg";

export const About = () => {
    return (
        <div>
            <div className="omOss"> 
                <img src={aboutImage} alt="Cinema" className="about-image" />
                <h1> Om Oss</h1>
                <p>Fjell Kino er din lokale kino, plassert midt i hjertet av Fjell. Vi tilbyr de nyeste filmene i moderne saler med topp lyd og bilde. Med et fokus på fellesskap og kvalitet, er vi stedet for både store filmopplevelser og hyggelige stunder.</p>
            </div>
            
        </div>
    )
} 