import React, { useState } from "react";
import "./styles.css";

var bookList = {
  JAVASCRIPT: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5"
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5"
    }
  ],

  BUSINESS: [
    {
      name: "The Business of 21st Century",
      rating: "4.3/5"
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "4.2/5"
    },
    {
      name: "Crushing It (Garyvee)",
      rating: "4/5"
    },
    {
      name: "The Compound Effect",
      rating: "3.8/5"
    }
  ],

  FICTION: [
    {
      name: "The Great Gatsby",
      rating: "3.9/5"
    },
    {
      name: "Harry Potter",
      rating: "4.5/5"
    },
    {
      name: "Conjuring",
      rating: "4.1/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setUserGenre] = useState("BUSINESS");
  function genreClickHandler(genre) {
    setUserGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}> 📚 BOOKS TO READ </h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Here's a list of good books to read out!{" "}
      </p>

      <div>
        {Object.keys(bookList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              background: "whitesmoke",
              borderRadius: "0.5rem",
              cursor: "pointer",
              padding: "0.5rem  1rem",
              border: "1px solid blue",
              margin: "0.5rem 0.3rem",
              color: "black"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div
        style={{
          textAlign: "center",
          width: "50%"
        }}
      >
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {bookList[selectedGenre].map((book) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid blue",
                width: "70%",
                marginLeft: "60%",
                marginTop: "1rem",
                borderRadius: "0.5rem"
              }}
              key={book.name}
            >
              {" "}
              <div
                style={{
                  fontSize: "larger",
                  textAlign: "center"
                }}
              >
                {" "}
                {book.name}{" "}
              </div>
              <div
                style={{
                  fontSize: "medium",
                  textAlign: "center"
                }}
              >
                {" "}
                {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
