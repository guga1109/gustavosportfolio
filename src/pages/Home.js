import React, {useEffect, useState} from "react";
import "../style/texteffect.css";

const Home = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        writeMessage();
    }, []);

    const writeMessage = () => {
        let texts = ["Hello,", "I'm Gustavo and", "I'm a computer scientist."];
        var newText = "";
        let rep = 1;
        let paragraphNumber = 0;
        for (const textToBeWritten of texts) {
            for (const c of textToBeWritten) {
                setTimeout(() => setText((newText += c)), 100 * rep);
                rep += 1;
            }

            if (paragraphNumber < 2)
                setTimeout(() => setText((newText += "</br>")), 100 * rep);

            paragraphNumber += 1;
        }
    };

    return (
        <div className="row full-height">
            <div className="typewriter column-6 justify-center text-white text-big">
                <div>
                    <span dangerouslySetInnerHTML={{__html: text}}></span>
                    <span className="blink-bar">|</span>
                </div>
            </div>
            <div className="column-6">
            </div>
        </div>
    );
};

export default Home;
