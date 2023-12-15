
import React from 'react'
import CartStatus from '../Cart/CartStatus'
import re3 from '../../assets/re3.png'
import re2 from '../../assets/re2.png'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {fireDB} from '../../firebase/firebase.jsx'
import { addDoc, collection } from 'firebase/firestore'
import { ref, set, push, onValue,remove } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux'
import { saveOrder } from '../../Redux/Orders/orderActions.js'
import { Input, Checkbox } from '@material-tailwind/react'
import { removeCart } from '../../Redux/cartActions.js'




  const AddDetail = () => {

    const Addicon = {
      img1: re3,
      img2: re2,
      clr1: 'teal-dark',
      clr2: 'grey'
    }

      const [email, setEmail] = useState('');
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [address, setAddress] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [CashonDelivery, setCashonDelivery] = useState(false);
      const [errorMessage, seterrorMessage] = useState('');


    const { error, loading, isAuthenticated,user,userProfile } = useSelector(
      (state) => state.users
    );
    // const {cartItems,shippingInfo} = useSelector(
    //       (state) => state.cart
    //   )
    const cartItems = useSelector((state) => state.cart.cartItems);

      // const dispatch =useDispatch()
      //  const {order,orderCompleted} = useSelector(
          // (state) => state.orders
      // )
      const navigate = useNavigate()
     const [totalItemPrice, setTotalItemPrice] = useState(0)
    const dispatch = useDispatch();
    const [orderData, setOrderData] = useState({
        name:userProfile?.name ? userProfile.name : '',
        email:userProfile?.email ? userProfile?.email : '',
        alternameNumber:userProfile?.phone ? userProfile?.phone : '',
        addressLineOne:'',
        city:'',
        state:'',
        date:new Date(),
        pinCode:'',
        paymentStatus:'',
        orderStatus:"Purchased",
        totalPrice: 0 ,
        products:cartItems ? cartItems : [],
        userId:user ? user : '',
    
    })
    const handlePayment = () =>{
    
    
         dispatch(saveOrder(orderData,cartItems))
         if (cartItems.length !== 0) {
          dispatch(removeCart());
        }
        // dispatch(removeCart())
        
       
       navigate("/Order")
    }
    
    
    
      const delivery = () =>{
        setCashonDelivery(!CashonDelivery)
      }

      // const [billingSameAsDelivery, setBillingSameAsDelivery] = useState(false);
      // const [is13YearsOld, setIs13YearsOld] = useState(false);
      // const [receiveProductUpdates, setReceiveProductUpdates] = useState(false);

      const addDataToFirestore = async (data) => {
          const docRef = await addDoc(collection(fireDB, 'users'),
          data);
          return docRef; 
      }
    
    
      const handleSubmit = async () => {
        if (!email || !firstName || !lastName || !address || !phoneNumber) {
          // Display an error message or perform some action indicating that all fields are required
          seterrorMessage('All fields are required');
          return;
        }
        
        try {
          const docRef = await addDataToFirestore({
            email,
            firstName,
            lastName,
            address,
            phoneNumber,
            CashonDelivery
            // billingSameAsDelivery,
            // is13YearsOld,
            // receiveProductUpdates,
          });
          CashonDelivery ? navigate('/Order') : 
          console.log('Document written with ID: ', docRef.id);
        } catch (error) {
          console.error('Error adding document: ', error);
        }

      };
  
  return(
    <div>
      <div className='mx-[2.5vw] my-[1vw]'>
             <div className='mb-[2vw]'>
               <CartStatus icon={Addicon}/>
             </div>
             {/* <div className='text-[5vw] sm:text-[1.8vw] font-bold mt-[4vw] sm:mt-[0.2vw] 
             text-[#875A33] font-lora'>Add Detail</div> */}
             <div className='flex flex-col md:flex-row gap-[1.5vw] m-[0.5vw]'>
               {/* <div className='mt-[1vw] text-[3vw] sm:text-[1.5vw] '>
                 Login and Checkout Faster</div> */}
               <div className='border-r border-[1px] border-slate-700 px-[1.5vw] '>
                 <div className='text-[4vw] text-[#875A33] font-lora
                  font-semibold mt-[1vw] sm:text-[1.5vw]'>
                  Contact Detail</div>
                 <div className='text-[2.3vw] sm:text-[1.4vw]'>We will use these details
                  to keep you inform about your delivery</div>
                  <div className='mt-[1vw] w-[40vw]'>
                  <Input type="text" value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Email'
                    className=''/>
                  </div>

            <div>
              <div className='text-[4vw] font-semibold mt-[1.5vw] text-[#875A33] font-lora sm:text-[1.4vw]'>Shipping Address</div>
              <div className='flex flex-row gap-[2vw] mt-[1vw]'>
                <div className=''>
                  <Input type="text" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'
                  className=''/>
                </div>
                <div className=''>
                  <Input type="text" value={lastName}
                    onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'
                  className=''/>
                </div>
              </div>
              <div className='mt-[1vw] w-[40vw]'>
                  <Input type="text" value={address}
                    onChange={(e) => setAddress(e.target.value)} placeholder='Find Delivery Address'
                  className='' 
                  />

                </div>
                <div className='mt-[1vw] w-[40vw]'>
                  <Input type='number' value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)} maxLength={10} placeholder='Phone Number'
                  className=''/>
                </div>
            </div>
            </div>

            <div className='border-r border-[1px] border-slate-700 px-[1.5vw] p-[1vw]'>
              <div className='text-[4vw] text-[#875A33] font-lora sm:text-[1.5vw] font-semibold'>
                Delivery options
              </div>
              {/* <div className='bg-slate-100 w-[65vw] mt-[4vw] sm:mt-[1.2vw]'>
                <div className='font-semibold text-[4vw] sm:text-[1.2vw]'>Standard Delivery</div>
                <div className='text-[2vw] sm:text-[1.2vw]'>Enter your address to see 
                when you'll get your order</div>
              </div> */}
              <div className={`${CashonDelivery ? 'bg-green-300' : 'bg-red-100'} 
              border border-solid border-1px 
             border-text-black-900 rounded-[1.5vw] p-[1vw]   w-[45vw]`}>
                <div className='flex flex-row  gap-[10vw] md:gap-[25vw]'>
                <div className='font-semibold text-[3vw] sm:text-[1.4vw]'>
                    Cash on Delivery
                </div>
                <div className='flex justify-end items-start'>
                  <Checkbox onClick={() => delivery()}  
                  className='w-[2vw] h-[2vw] mt-[0.3vw] ml-[0.5vw]'/></div>
                </div>
                <div className='text-[2vw] sm:text-[1.2vw]'>
                    Pay now, Collect in store
                </div>
              </div>
              <div className='text-[2.5vw] sm:text-[1.2vw] font-bold sm:semibold '>
              <div className='flex flex-row gap-[2vw]  mt-[1.5vw]'>
                <div>
                  <Checkbox />
                </div>
                <div className='flex items-center justify-center'>
                  My billing and delivery Information are the same
                </div>
              </div>
              <div className='flex flex-row gap-[2vw] '>
                <div>
                  <Checkbox />
                </div>
                <div className='flex items-center justify-center'>
                   I'm 13+ years old.
                </div>
                </div>
                <div className='mt-[2vw] flex items-center justify-start'>
                      Also want product updates with our newsletter?
                </div>
              <div className='flex flex-row gap-[2vw] mt-[1.5vw] '>
                <div>
                  <Checkbox />
                </div>
                <div className='flex items-center justify-center '>
                  Yes, I'd like to receive emails about exclusive sales and more
                </div>
              </div>
              </div>
            </div>
            </div>

     
      <div className='flex justify-center items-center mt-[3vw]'>
        <button onClick={handlePayment} className='flex bg-teal-dark py-[1vw] px-[8vw]
         text-white justify-center items-center text-[3vw] sm:text-[1.2vw] rounded-[1.5vw]'>
          SUBMIT
        </button>
      </div>
      <div>{errorMessage && (
            <div className='text-[1.6vw] md:text-[1.2vw]text-red-500 my-[1vw]'>
              *{errorMessage}</div>
          )}</div>

      {/* <div className='mt-[3vw]'>
        {/* <Link to='/Payment'> */}
                {/* <Link to='/Order'>
          <button onClick={handlePayment} className='bg-teal-dark py-[1vw] px-[8vw] text-white text-[3vw] sm:text-[1.2vw] rounded-[1.5vw]'>
            REVIEW AND PAY
          </button> */} 
        {/* </Link>
      </div> */}
    </div>
    </div>
  );
};
export default AddDetail;