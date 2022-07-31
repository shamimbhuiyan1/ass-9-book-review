import React from "react";
import "./BookReview.css";
const BookReview = ({ review }) => {
  const { name, rating, comment } = review;
  return (
    <div>
      <div className="review">
        <h2>Name: {name}</h2>
        <h5>Comment: {comment}.</h5>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default BookReview;
