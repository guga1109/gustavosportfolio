import React, { useEffect, useState } from "react";
import CleanCode from "../assets/images/cleancode.jpeg";

const Books = () => {
    const [minimized, setMinimized] = useState(false);

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
                <h1>Book one</h1>
              </div>
              <div className="book-summary">
                Okay this is summary for the first book!
              </div>
            </div>
            <div className="see-more">
              <button onClick={() => setMinimized(true)}>
                <span className="material-icons">arrow_right</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            "window flex width-transition text-white " +
            (minimized ? "column-6" : "column-0")
          }
        >
          <div className="top-bar">
            <button onClick={() => setMinimized(false)}>
              <span className="material-icons">close</span>
            </button>
          </div>
          <div className="window-body">
            test
          </div>
        </div>
      </div>
    );
};

export default Books;