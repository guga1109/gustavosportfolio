import React from "react";

const BookBox = ({book, seeBookInfo, isbn, activeBook}) => {
    return (
        <div className={`book-box mb-1 ${activeBook ? "active-book" : ""}`} key={isbn}>
            <div className="book-image">
                <img src={book.image}/>
            </div>
            <div className="content">
                <div className="book-title">
                    <h3>{book.title}</h3>
                </div>
                <div className="book-summary">
                    {book.content}
                </div>
            </div>
            <div className="see-more">
                <button onClick={(e) => seeBookInfo(book.isbn)}>
                    <span className="material-icons">arrow_right</span>
                </button>
            </div>
        </div>
    );
};

export default BookBox;