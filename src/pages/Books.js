import React from "react";
import CleanCode from "../assets/images/cleancode.jpeg";

const Books = () => {
    return (
      <div className="row full-height">
        <div className="flex justify-evenly column-6 text-white">
          <div className="book-box">
            <div className="book-image">
              <img src={CleanCode} />
            </div>
            <div className="content">
              <div className="book-title">
                <h1>Book one</h1>
              </div>
              <div className="book-summary">
                Even bad code can function. But if code isn't clean, it can
                bring a development organization to its knees. Every year,
                countless hours and significant resources are lost because of
                poorly written code. But it doesn't have to be that way. Noted
                software expert Robert C. Martin presents a revolutionary
                paradigm with Clean Code: A Handbook of Agile Software
                Craftsmanship. Martin has teamed up with his colleagues from
                Object Mentor to distill their best agile practice of cleaning
                code "on the fly" into a book that will instill within you the
                values of a software craftsman and make you a better
                programmer--but only if you work at it.
              </div>
            </div>
            <div className="see-more">
              <button>
                <span className="material-icons">arrow_right</span>
              </button>
            </div>
          </div>
          <div className="book-box">
            <div className="book-image">
              <img src={CleanCode} />
            </div>
            <div className="content">
              <div className="book-title">
                <h1>Book one</h1>
              </div>
              <div className="book-summary">
                Even bad code can function. But if code isn't clean, it can
                bring a development organization to its knees. Every year,
                countless hours and significant resources are lost because of
                poorly written code. But it doesn't have to be that way. Noted
                software expert Robert C. Martin presents a revolutionary
                paradigm with Clean Code: A Handbook of Agile Software
                Craftsmanship. Martin has teamed up with his colleagues from
                Object Mentor to distill their best agile practice of cleaning
                code "on the fly" into a book that will instill within you the
                values of a software craftsman and make you a better
                programmer--but only if you work at it.
              </div>
            </div>
          </div>
          <div className="book-box">
            <div className="book-image">
              <img src={CleanCode} />
            </div>
            <div className="content">
              <div className="book-title">
                <h1>Book one</h1>
              </div>
              <div className="book-summary">
                Even bad code can function. But if code isn't clean, it can
                bring a development organization to its knees. Every year,
                countless hours and significant resources are lost because of
                poorly written code. But it doesn't have to be that way. Noted
                software expert Robert C. Martin presents a revolutionary
                paradigm with Clean Code: A Handbook of Agile Software
                Craftsmanship. Martin has teamed up with his colleagues from
                Object Mentor to distill their best agile practice of cleaning
                code "on the fly" into a book that will instill within you the
                values of a software craftsman and make you a better
                programmer--but only if you work at it.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Books;