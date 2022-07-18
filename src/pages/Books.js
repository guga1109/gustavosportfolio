import React, {useEffect, useRef, useState} from "react";
import CleanCode from "../assets/images/cleancode.jpeg";
import Refactoring from "../assets/images/refactoring.jpg";
import DataIntensive from "../assets/images/dataintensive.jpeg";
import Hacking from "../assets/images/hacking.jpeg";
import axios from "axios";
import BookBox from "../components/BookBox";

const Books = () => {
    const [minimized, setMinimized] = useState(false);
    const bottomRef = useRef(null);
    const [terminalContent, setTerminalContent] = useState([]);
    const terminalElements = [];
    const books = [{
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        image: CleanCode,
        content: "This is a good book for everyone wishing to make easy-to-read and easy-to-maintain software. I found a lot of errors in the portuguese version, so I recommend you to read the english version.",
        isbn: "0132350882"
    }, {
        title: "Refactoring: Improving the Design of Existing Code",
        image: Refactoring,
        content: "I haven't read the full book, but it's worth the read if you are dealing with bad code that needs to be refactored.",
        isbn: "9780134757599"
    }, {
        title: "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
        image: DataIntensive,
        content: "This book shows how to tackle a lot of problems that can happen in the software world. The book is well written and easy to understand.",
        isbn: "9781449373320"
    }, {
        title: "Hacking: the art of exploitation",
        image: Hacking,
        content: "If you like reverse engineering and assembly, this is a really fun book. Unfortunately it's outdated, but still really fun.",
        isbn: "9781593271442"
    }];

    useEffect(() => {
        bottomRef.current?.scrollIntoView();
    }, [terminalElements]);

    const content = () => {
        return terminalContent.map((e) => {
            return e;
        })
    };

    const getLastLogin = () => {
        const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];

        const d = new Date();
        let day = weekday[d.getDay()];

        return `Last login: ${day} ${d.toLocaleString('default', {month: 'short'})} ${d.getDate()} ${d.toLocaleTimeString()} on ttys000`;
    };

    const seeBookInfo = (isbn) => {
        let url = "https://openlibrary.org/api/books.json?bibkeys=ISBN:" + isbn;

        axios.get(url).then((r) => {
            let data = r.data[Object.keys(r.data)[0]];
            let infoUrl = data["info_url"];
            let nextUrl = infoUrl.substring(0, infoUrl.lastIndexOf("/")) + ".json";

            terminalElements.push(<p key={Math.random()}>
                gustavo@Gustavos ~ % curl --request GET '{nextUrl}'
            </p>);

            setTerminalContent(terminalContent.concat(terminalElements));

            axios.get(nextUrl).then((r) => {
                setTimeout(() => {
                    terminalElements.push(<pre key={Math.random()}>
                    {JSON.stringify(r.data, null, 4)}
            </pre>);

                    setTerminalContent(terminalContent.concat(terminalElements));
                }, 1500);
            });
        });

        setMinimized(true);
    };

    const renderBooks = () => {
        return books.map((e) => {
            return <BookBox book={e} seeBookInfo={seeBookInfo} key={e.isbn}/>;
        });
    };

    return (<div className="row full-height">
        <div
            className={"width-transition flex justify-evenly text-white padding-no-left " + (minimized ? "column-6" : "column-12")}
        >
            {renderBooks()}
        </div>
        <div
            className={"window flex width-transition terminal " + (minimized ? "column-6" : "column-0")}
        >
            <div className="top-bar">
                <button onClick={() => setMinimized(false)}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="window-body">
                <p key={-1}>{getLastLogin()}</p>
                {content()}
                <div key={9999999} ref={bottomRef}/>
            </div>
        </div>
    </div>);
};

export default Books;
