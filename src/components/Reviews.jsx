import React from "react";
import Container from "./Container";
import Title from "./Title";
import ReviewGrid from "./ReviewGrid";

const Reviews = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32 bg-brandBlue"
    >
      <Container>
        <Title
          title="What Our Customers say"
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-brandBeige sm:text-center"
        />
        
        <ReviewGrid />
      </Container>
    </section>
  );
};

export default Reviews;
