import React, {useEffect, useState} from "react";
import "../style/texteffect.css";
import "../style/home.css";

const Home = () => {
    const [text, setText] = useState("");
    const [showAboutMe, setShowAboutMe] = useState(false);

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
                setTimeout(() => setText((newText += c)), 50 * rep);
                rep += 1;
            }

            if (paragraphNumber < 2)
                setTimeout(() => setText((newText += "</br>")), 50 * rep);

            paragraphNumber += 1;
        }

        setTimeout(() => {
            setShowAboutMe(true);
        }, 50 * rep);
    };

    return (
        <div className="row full-height">
            <div className="typewriter column-6 justify-center text-white text-big">
                <div>
                    <span dangerouslySetInnerHTML={{__html: text}}></span>
                    <span className="blink-bar">|</span>
                </div>
            </div>
            <div className={`column-${showAboutMe ? '6' : '0'} about-me`}>
                <p>My journey with computers started when I was a kid. I used to play
                    Moto Racer 2, Carnivores and Deer Hunter 2005 with my brother, on a machine running Windows 95.
                    I miss those days, time goes fast, don't it?
                </p>
                <p>In 2009, I found out about a game called Tibia. I got addicted, everything was
                    new to me. I remember the first day I saw a sorcerer cast a spell, it was magical. It's funny
                    when I think about it now. After some time, I found out about the game bots. That's when I got
                    into coding. I started coding some small bots using Visual Basic .NET and TibiaAPI.</p>
                <p>Going forward a few years, in 2018, I decided to go to college and study computer science.
                    My plan was to never fail any grade and to graduate in 4 years. The only thing that stopped me
                    from reaching this goal was the pandemic. My classes stopped for almost 6 months.</p>
                <p>While I was in there, I learned a lot of things about computers, computer architecture and how
                    things work behind the scenes. To be honest, I believe that we should understand how everything
                    works
                    behind the scenes. This way we can understand and prevent errors from happening.
                </p>
                <p>During the pandemic, I got my first job as a full stack developer. I worked there for 2 years and I
                    used C#, SQL Server and
                    JavaScript. In the start of 2022, I got my first job at an US company. This is where I work at the
                    moment.</p>
                <p>
                    When I started working from that US company, I took the lead of a project using .NET
                    Framework. I learned a lot of Azure and about the management and deployment of projects.
                    I decided to remake the main project, as a REST API, using a newer version of .NET (6.0). That
                    was one of the funniest things I did, mainly because I learned a lot about authentication,
                    authorization and how to
                    setup a project from zero.
                </p>
                <p>This is a small part of my life. If you want to talk with me, you can go to the <a href="#/contact">contact
                    page</a>.
                </p>
            </div>
        </div>
    );
};

export default Home;
