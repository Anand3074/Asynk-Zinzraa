// AddReviewModal.js
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Rating,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Progress } from "@material-tailwind/react"
import { ref, push, set } from "firebase/database";
import { collection, addDoc } from 'firebase/firestore';

import { fireDB } from "../../firebase/firebase";

const AddReviewModal = ({id}) => {
    const { error, loading, isAuthenticated,users, userProfile } = useSelector((state) => state.users);
    const [reviewContent, setReviewContent] = useState('')
    const [stars, setStars] = useState(0)
    // const [open, setOpen] = React.useState(false);
    // console.log(ratings)
    // console.log(reviewContent, stars, id, userProfile.name)


    const handleRating = (rate) => {
    setStars(rate)
  }

  const handleSubmit = async () => {
    try {
      const reviewsCollection = collection(fireDB, 'reviews');
      // console.log(reviewContent, stars, id, userProfile.name)

  
      const newReviewDocRef = await addDoc(reviewsCollection, {
        review: reviewContent,
        rating: stars,
        product: id,
        userName: userProfile.name,
date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )     
      });
  
      console.log("Review added successfully:", newReviewDocRef.id);
  
      setReviewContent('');
      setStars(0);
      setOpen(false);
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };
  

  const navigate = useNavigate();
  const [review , setReview] = useState(false)
  const [open , setOpen] = useState(false)

  const handleOpen = () => {
    console.log(isAuthenticated)

    if (isAuthenticated) {
        console.log(isAuthenticated)
        setOpen(!open)
      setReview(!review);
    } else {
    //   navigate("/login");
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className='w-full border-green-400 border-[1px] mx-2 text-green-400 my-2 rounded-[10px] py-1 lg:py-3 '
      >
        Write a Review
      </Button>
      <Dialog 
    //   open={open} 
    open={open}
      handler={handleOpen}>
        <DialogHeader>Add New Review</DialogHeader>
        <DialogBody divider>
          <form action="">
            <div>
              <Rating
                className='w-[50px] h-[50px] ratingStars '
                value={stars}
                onChange={handleRating}
              />
            </div>
            <div>
              <textarea
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                type="text"
                className='mt-2 text-[1.2rem] outline-none bg-white border-[1px] border-gray-300 rounded-[20px] h-[150px] w-full px-6 py-6 '
                placeholder='Enter Your Review'
              />
            </div>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button onClick={handleSubmit} className="text-green">
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddReviewModal;
