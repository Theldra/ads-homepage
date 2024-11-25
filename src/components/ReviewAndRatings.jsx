import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, onRatingChange }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => onRatingChange(ratingValue)}
                            className="hidden"
                        />
                        <FaStar
                            className="cursor-pointer"
                            color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                            size={24}
                        />
                    </label>
                );
            })}
        </div>
    );
};

const ReviewForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ rating, comment });
        setRating(0);
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Your Rating
                </label>
                <StarRating rating={rating} onRatingChange={setRating} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                    Your Review
                </label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit Review
            </button>
        </form>
    );
};

const ReviewItem = ({ review }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <div className="flex items-center mb-2">
                <StarRating rating={review.rating} />
                <span className="ml-2 text-gray-600">{review.date}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
        </div>
    );
};

const ReviewAndRatings = () => {
    const [reviews, setReviews] = useState([
        { id: 1, rating: 4, comment: "Great product! Fresh and delicious.", date: "2024-03-15" },
        { id: 2, rating: 5, comment: "Excellent quality and fast delivery.", date: "2024-03-10" },
    ]);

    const handleSubmitReview = (newReview) => {
        const reviewWithId = {
            ...newReview,
            id: reviews.length + 1,
            date: new Date().toISOString().split('T')[0]
        };
        setReviews([reviewWithId, ...reviews]);
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-4">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Write a Review</h3>
                <ReviewForm onSubmit={handleSubmitReview} />
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
                {reviews.map(review => (
                    <ReviewItem key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewAndRatings;