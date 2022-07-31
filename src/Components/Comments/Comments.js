import React, { useState } from "react";
import { useEffect } from "react";
import BookReview from "../BookReview/BookReview";

const Comments = () => {
  const [reviews, setReview] = useState({});
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json)
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      {reviews.map((review) => (
        <BookReview key={review.id} review={review}></BookReview>
      ))}
    </div>
  );
};

export default Comments;
