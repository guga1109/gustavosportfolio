import React, { useEffect, useRef, useState } from "react";
import CleanCode from "../assets/images/cleancode.jpeg";
import axios from "axios";

const Books = () => {
  const [minimized, setMinimized] = useState(false);
  const bottomRef = useRef(null);
  const [terminalContent, setTerminalContent] = useState([]);
  const terminalElements = [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [terminalElements]);

  const content = () => {
    return terminalContent.map((e) => {
      return e;
    })
  };

  const getLastLogin = () => {
    const weekday = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    const d = new Date();
    let day = weekday[d.getDay()];

    return `Last login: ${day} ${d.toLocaleString('default', {month: 'short'})} ${d.getDate()} ${d.toLocaleTimeString()} on ttys000`;
  };

  const seeBookInfo = (e) => {
    let ISBN = "0132350882";
    let url = "https://openlibrary.org/api/books.json?bibkeys=ISBN:" + ISBN;

    axios.get(url).then((r) => {
      let data = r.data[Object.keys(r.data)[0]];
      let infoUrl = data["info_url"];
      let nextUrl = infoUrl.substring(0, infoUrl.lastIndexOf("/")) + ".json";

      terminalElements.push(
        <p key={Math.random()}>
          gustavo@Gustavos ~ % curl --request GET '${nextUrl}'
        </p>
      );

      setTerminalContent(terminalContent.concat(terminalElements));

      axios.get(nextUrl).then((r) => {
        setTimeout(() => {
          terminalElements.push(
            <pre key={Math.random()}>
              ${JSON.stringify(r.data, null, 4)}
            </pre>
          );

          setTerminalContent(terminalContent.concat(terminalElements));
        }, 1500);
      });
    });

    setMinimized(true);
  };

  return (
    <div className="row full-height">
      <div
        className={
          "width-transition flex justify-evenly text-white padding-no-left " +
          (minimized ? "column-6" : "column-12")
        }
      >
        <div className="book-box">
          <div className="book-image">
            <img src={CleanCode} />
          </div>
          <div className="content">
            <div className="book-title">
              <h3>Clean Code: A Handbook of Agile Software Craftsmanship</h3>
            </div>
            <div className="book-summary">
              This is a good book for everyone willing to make easy-to-read and easy-to-maintain software. I found a lot of errors in the portuguese version, so I recommend you to read the english version.
            </div>
          </div>
          <div className="see-more">
            <button onClick={(e) => seeBookInfo(e)}>
              <span className="material-icons">arrow_right</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          "window flex width-transition terminal " +
          (minimized ? "column-6" : "column-0")
        }
      >
        <div className="top-bar">
          <button onClick={() => setMinimized(false)}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="window-body">
          <p key={-1}>{getLastLogin()}</p>
          {content()}
          <div key={9999999} ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default Books;
