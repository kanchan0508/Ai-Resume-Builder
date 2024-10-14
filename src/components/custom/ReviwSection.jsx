import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const reviews = [
  {
    rating: 5,
    title: "The platform itself is easy to use...",
    description: "The platform itself is easy to use and offers a wide range of customizable templates. I would highly recommend it.",
    user: "Cleide Oliveira",
    date: "3 days ago"
  },
  {
    rating: 5,
    title: "Creating resumes is an overwhelming...",
    description: "Creating resumes is an overwhelming and complicated process especially for me. This had made it easier.",
    user: "Thanush Sinnathambe",
    date: "3 days ago"
  },
  {
    rating: 5,
    title: "Great tool for writing a resume!",
    description: "Great tool for writing a resume! I paid $2.95 for access for a week. When my week was up, I wasn’t aware that I'd be...",
    user: "Tony",
    date: "4 days ago"
  },
  {
    rating: 5,
    title: "Excellent Support and Tool!",
    description: "The support team was helpful and the tool was incredibly easy to use. Definitely worth the price.",
    user: "Alex D'Souza",
    date: "2 days ago"
  },
];

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleNextReview = () => {
    if (currentReview < reviews.length - 1) {
      setDirection("next");
      setCurrentReview(currentReview + 1);
    }
  };

  const handlePrevReview = () => {
    if (currentReview > 0) {
      setDirection("prev");
      setCurrentReview(currentReview - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 border mt-10">
      <h2 className="text-center text-3xl font-bold mb-8">
        Reviewed by the community. Trusted by professionals.
      </h2>

      {/* Left Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="text-4xl font-bold mb-4">4.5 out of 5</div>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-6 w-6 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 18l-7.75 4.06 1.48-8.65L.5 7.78l8.69-1.26L12 .5l2.81 6.02 8.69 1.26-6.23 5.63 1.48 8.65z"></path>
            </svg>
          ))}
        </div>
        <p className="text-gray-500">Based on 51,839 reviews</p>
      </div>

      {/* Review Section with Animation */}
      <div className="relative flex space-x-6 justify-center">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={currentReview}
            timeout={300}
            classNames={{
              enter: direction === "next" ? "slide-in-right" : "slide-in-left",
              enterActive: "transition-transform transition-opacity duration-300",
              exit: "slide-out-left",
              exitActive: "transition-transform transition-opacity duration-300",
            }}
          >
            <div className="absolute w-1/2 bg-white p-6 shadow-lg rounded-lg">
              <div className="flex mb-2">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 18l-7.75 4.06 1.48-8.65L.5 7.78l8.69-1.26L12 .5l2.81 6.02 8.69 1.26-6.23 5.63 1.48 8.65z"></path>
                  </svg>
                ))}
              </div>
              <h3 className="font-bold text-lg mb-2">{reviews[currentReview].title}</h3>
              <p className="text-gray-600 mb-2">{reviews[currentReview].description}</p>
              <p className="text-sm text-gray-500">{reviews[currentReview].user} • {reviews[currentReview].date}</p>
            </div>
          </CSSTransition>
        </SwitchTransition>

        {/* Second Review */}
        {currentReview + 1 < reviews.length && (
          <div className="w-1/2 bg-white p-6 shadow-lg rounded-lg">
            <div className="flex mb-2">
              {[...Array(reviews[currentReview + 1].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 18l-7.75 4.06 1.48-8.65L.5 7.78l8.69-1.26L12 .5l2.81 6.02 8.69 1.26-6.23 5.63 1.48 8.65z"></path>
                </svg>
              ))}
            </div>
            <h3 className="font-bold text-lg mb-2">{reviews[currentReview + 1].title}</h3>
            <p className="text-gray-600 mb-2">{reviews[currentReview + 1].description}</p>
            <p className="text-sm text-gray-500">{reviews[currentReview + 1].user} • {reviews[currentReview + 1].date}</p>
          </div>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center space-x-4 mt-4">
        <button
          className={`p-2 ${currentReview === 0 ? 'bg-gray-200' : 'bg-gray-300'} rounded-full focus:outline-none`}
          onClick={handlePrevReview}
          disabled={currentReview === 0}
        >
          <svg
            className="h-6 w-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </button>

        <button
          className={`p-2 ${currentReview >= reviews.length - 2 ? 'bg-gray-200' : 'bg-gray-300'} rounded-full focus:outline-none`}
          onClick={handleNextReview}
          disabled={currentReview >= reviews.length - 2}
        >
          <svg
            className="h-6 w-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
