import React, {useEffect, useRef, useState} from "react";
import CleanCode from "../assets/images/cleancode.jpeg";
import Refactoring from "../assets/images/refactoring.jpg";
import DataIntensive from "../assets/images/dataintensive.jpeg";
import Hacking from "../assets/images/hacking.jpeg";
import axios from "axios";
import BookBox from "../components/BookBox";

const Books = () => {
        const [minimized, setMinimized] = useState(false);
        const [terminalContent, setTerminalContent] = useState([]);
        const [activeBook, setActiveBook] = useState("");

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

        const closeTerminal = () => {
            setMinimized(false);
            setActiveBook("");
        }

        const seeBookInfo = async (isbn) => {
            await setActiveBook(isbn);
            await setTerminalContent([]);
            setMinimized(true);

            let url = "https://openlibrary.org/api/books.json?bibkeys=ISBN:" + isbn;
            let terminalText = [];

            let response = await axios.get(url);

            let data = response.data[Object.keys(response.data)[0]];
            let infoUrl = data["info_url"];
            let nextUrl = infoUrl.substring(0, infoUrl.lastIndexOf("/")) + ".json";

            terminalText.push((<p key={Math.random()}>
                gustavo@Gustavos ~ % curl --request GET '{nextUrl}'
            </p>));

            response = await axios.get(nextUrl);
            terminalText.push(<pre key={Math.random()}>
                    {JSON.stringify(response.data, null, 4)}
            </pre>);

            await setTerminalContent(terminalText);
        };

        const renderBooks = () => {
            return books.map((e) => {
                return <BookBox book={e} seeBookInfo={seeBookInfo} key={e.isbn} activeBook={activeBook === e.isbn}/>;
            });
        };

        return (<div className="row full-height">
            <div
                className={"overflow-y-scroll width-transition flex text-white padding-no-left " + (minimized ? "column-6" : "column-12")}
            >
                {renderBooks()}
            </div>
            <div
                className={"window flex width-transition terminal " + (minimized ? "column-6" : "column-0")}
            >
                <div className="top-bar">
                    <button onClick={() => closeTerminal()}>
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <div className="window-body">
                    <p key={-1}>{getLastLogin()}</p>
                    {content()}
                </div>
            </div>
        </div>);
    }
;

export default Books;
