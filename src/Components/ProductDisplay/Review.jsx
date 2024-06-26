import React from 'react'
import { useState, useEffect } from 'react';
import { Rating, Progress } from "@material-tailwind/react";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { fireDB } from '../../firebase/firebase';
import AddReviewModal from './AddReviewModal';

const Review = ({ userProfile, productId, ratings, isAuthenticated }) => {
  const [reviewContent, setReviewContent] = useState('');
  const [stars, setStars] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleRating = (rate) => {
    setStars(rate);
  };

  useEffect(() => {
    // Function to fetch reviews based on the product ID
    const fetchReviews = async () => {
      try {
        const reviewsCollection = collection(fireDB, 'reviews');
        const q = query(reviewsCollection, where('product', '==', productId));
        const querySnapshot = await getDocs(q);

        const fetchedReviews = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    // Call the fetchReviews function
    fetchReviews();
  }, [productId]);

  console.log(reviews);

//    const onPointerEnter = () => console.log('Enter')
//   const onPointerLeave = () => console.log('Leave')
//   const onPointerMove = (value ,index) => console.log(value, index)

    // const handleSubmit = ()=>{
    //     //   if(userProfile){
    // const productListRef = ref(fireDB, "reviews/" );
    // const newProductRef = push(productListRef);
    // set(newProductRef, {
    //   review:reviewContent,
    // //   name:userProfile?.name,
    //   rating:stars,
    // //   id:id
    // }).then(()=>{
    // setReviewContent('')
    // setOpen(false)
    // console.log(reviewContent)



    // })
    //   }


    
    
    const handleSubmit = async ({ reviewContent, stars,  }) => {
        // if (!reviewContent || stars === 0) {
        //   return
        // //    toast.error("Please fill in all the required fields for the review.");
        // }
      
        // setLoading(true);
      
        try {
          const reviewsRef = ref(fireDB, `reviews/`);
          const newReviewRef = push(reviewsRef);
      
          // Get the unique key generated by push
          const reviewId = newReviewRef.key;
      
          // Use set to add the review with the generated key
          await set(ref(reviewsRef, reviewId), {
            review: reviewContent,
            rating: stars,
            // other fields...
          });
      
        //   toast.success("Review added successfully");
                 console.log("Review added successfully" + reviewContent);

          setReviewContent(''); // Assuming setReviewContent is a state setter
          setStars(0); // Assuming setStars is a state setter
          // setOpen(false); // Assuming setOpen is used and initialized somewhere
      
          setLoading(false);
        } catch (error) {
          console.error("Error adding review: ", error);
          setLoading(false);
        }
      };
    

    // }

    console.log(stars)
  return (
    <div className='xl:px-8 px-6 py-12' >
        <div>
            <h4 className='font-[600] font-metro text-[1.4rem]' >Customer Reviews:</h4>
            {/* <div className='mt-4' >
                
            </div> */}
            <div className='border-[1px] mt-2 border-gray-200 lg:px-4 px-2 py-3 rounded-[10px]' >
              <div className='lg:grid grid-cols-5 grid-flow-col items-center ' >
              <div className=' lg:border-r-[1px] col-span-1 mx-2 border-gray-400 ' >
              <div className='border-[1px] w-full lg:w-[150px]  xl:w-[200px] rounded-[10px]  border-green-400 ' >
              <div className=' rounded-[10px]   flex flex-row items-center justify-center gap-[0.3vw] px-3 py-2 lg:py-3 ' >
                <div className='text-green-400 lg:text-[1.8rem] font-[600]' >{reviews ? reviews.length : 0}</div>
                 <div className='text-gray-400 font-[400] text-[0.9rem]' >(reviews)</div>
              </div>
              <div>
              </div>
              </div>
              </div>
              
              <div className='  col-span-4 lg:mx-2 my-3 lg:my-0  '>
                <div className='flex items-center flex-col lg:flex-row justify-between' >
                <div>
                  <p className='font-[600] text-[1rem] lg:text-[1.5rem]' >Review this Product</p>
                  <p>Share your thoughts with other customers</p>
                  </div>
                  <div className='w-[15vw]'>
                  <AddReviewModal isAuthenticated={isAuthenticated}
                //   open={open} setOpen={setOpen}
                  handleRating={handleRating} handleSubmit={handleSubmit} stars={stars}
                  setStars={setStars} reviewContent={reviewContent} 
                  setReviewContent={setReviewContent} />
                  </div>
                
                </div>
              </div>
              </div>
              <div>
                  { reviews !==[] ? (reviews.map((review)=>(
                <div className='w-full  my-2 bg-white border-b-[1px] border-gray-200 
                rounded-[20px] px-0 py-3 xl:py-6 flex items-start flex-col justify-start ' >
                  <div className='flex flex-row w-full px-[1.5vw] justify-between '>
                    <div className='flex items-center justify-start ml-2'>
                <div className='' >
                       <h4 className='xl:text-[1.3rem] text-[1rem] font-[600] text-center ' >
                        {review.userName}</h4>
                       </div>
                     <div className='text-center my-1 ml-2' >
                        <Rating value={review.rating} readonly />
                        </div>
    
                        </div>
                        <div className='text-gray-500 text-[1vw] font-[500] flex items-center'>
                          {review.date}       
                        </div>
                        </div>

                        <p className='text-gray-600 my-1 lg:my-2 px-[1.5vw] text-[0.7rem] xl:text-[1rem] ml-2 ' >
                          {review.review}</p>
                        
                </div>
              
                ))):
                 ( 
                    <div className='text-center bg-red-500 text-black' >
                    <h4 className='text-center bg-red text-black' >No Reviews Yet. Be the first one to write</h4>
                    </div>
                 )
            } 
              </div>
            </div>
          
        </div>
    </div>
  )
}

export default Review