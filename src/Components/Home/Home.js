import React, { useEffect, useState } from "react";
import BookReview from "../BookReview/BookReview";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <h2 className="book-review">Book Review</h2>

      <div className="review-container">
        {data.map((data) => (
          <BookReview key={data.id} data={data}></BookReview>
        ))}
      </div>
      <button className="button">See More</button>
    </div>
  );
};

export default Home;
