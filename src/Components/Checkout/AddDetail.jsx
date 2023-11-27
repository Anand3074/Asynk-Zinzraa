
import React from 'react'
import CartStatus from '../Cart/CartStatus'
import re3 from '../../assets/re3.png'
import re2 from '../../assets/re2.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {fireDB} from '../../firebase/firebase.jsx'
import { addDoc, collection } from 'firebase/firestore'


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
      // const [billingSameAsDelivery, setBillingSameAsDelivery] = useState(false);
      // const [is13YearsOld, setIs13YearsOld] = useState(false);
      // const [receiveProductUpdates, setReceiveProductUpdates] = useState(false);

      const addDataToFirestore = async (data) => {
          const docRef = await addDoc(collection(fireDB, 'users'),
          data);
          return docRef; 
      }
    
    
      const handleSubmit = async () => {
        try {
          const docRef = await addDataToFirestore({
            email,
            firstName,
            lastName,
            address,
            phoneNumber,
            // billingSameAsDelivery,
            // is13YearsOld,
            // receiveProductUpdates,
          });
    
          console.log('Document written with ID: ', docRef.id);
        } catch (error) {
          console.error('Error adding document: ', error);
        }

      };
  
  return(
    <div>
      <div className='mx-[5vw] my-[1vw]'>
             <div>
               <CartStatus icon={Addicon}/>
             </div>
             <div className='text-[5vw] sm:text-[3vw] font-bold mt-[4vw] sm:mt-[0.2vw] 
             text-[#875A33] font-playfair'>Add Detail</div>
             <div>
               <div className='mt-[1vw] text-[3vw] sm:text-[1.5vw] '>
                 Login and Checkout Faster</div>
               <div>
                 <div className='text-[4vw] font-semibold mt-[2vw] sm:text-[2.4vw]'>Contact Detail</div>
                 <div className='text-[2.3vw] sm:text-[1.6vw]'>We will use these details to keep you inform about your delivery</div>
                 <div className='border border-solid border-1px sm:h-[2.5vw] sm:text-[1.2vw] sm:mt-[2vw]
                   border-text-black-900 rounded-[1vw] w-[35vw] h-[4vw] mt-[1.5vw]
                   flex justify-center items-center text-[2.5vw]  '>
                   <input type="text" value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder='Email'
                  className='sm:w-[30vw] border-none bg-transparent w-[35vw] sm:h-[2.4vw] m-[1vw] h-[3vw]'/>
                </div>
              </div>
            </div>
            <div>
              <div className='text-[4vw] font-semibold mt-[2vw] sm:text-[2.4vw]'>Shipping Address</div>
              <div className='flex flex-row gap-[2vw]'>
                <div className='border border-solid border-1px sm:h-[2.5vw] sm:text-[1.2vw] sm:mt-[2vw]
                      border-text-black-900 rounded-[1vw] w-[35vw] h-[4vw] 
                      mt-[1.5vw] flex justify-center items-center text-[2.5vw]  '>
                  <input type="text" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'
                  className='sm:w-[30vw] border-none bg-transparent w-[35vw] sm:h-[2.4vw] m-[1vw] h-[3vw]'/>
                </div>
                <div className='border border-solid border-1px sm:h-[2.5vw] sm:text-[1.2vw] sm:mt-[2vw]
                    border-text-black-900 rounded-[1vw] w-[35vw] h-[4vw]
                    mt-[1.5vw] flex justify-center items-center text-[2.5vw]  '>
                  <input type="text" value={lastName}
                    onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'
                  className='sm:w-[30vw] border-none bg-transparent w-[35vw] sm:h-[2.4vw] m-[1vw] h-[3vw]'/>
                </div>
              </div>
              <div className='border border-solid border-1px sm:h-[2.5vw] sm:text-[1.2vw] sm:mt-[2vw]
             border-text-black-900 rounded-[1.5vw] w-[35vw] h-[2.5w] mt-[1.5vw] flex justify-center items-center text-[2.5vw]  '>
                  <input type="text" value={address}
                    onChange={(e) => setAddress(e.target.value)} placeholder='Find Delivery Address'
                  className='sm:w-[30vw] border-none bg-transparent sm:h-[2.4vw]  w-[70vw] m-[1vw] h-[3vw]'/>
                </div>
                <div className='border border-solid border-1px sm:h-[2.5vw] sm:text-[1.2vw] sm:mt-[2vw]
             border-text-black-900 rounded-[1.5vw] w-[35vw] h-[4vw] mt-[1.5vw] flex justify-center items-center text-[2.5vw]  '>
                  <input type='number' value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} maxLength={10} placeholder='Phone Number'
                  className='sm:w-[30vw] border-none bg-transparent w-[35vw] sm:h-[2.4vw] m-[1vw] h-[3vw]'/>
                </div>
            </div>
            <div>
              <div className='text-[4vw] sm:text-[2.2vw] font-semibold mt-[2vw]'>
                Delivery options
              </div>
              <div className='bg-slate-100 w-[65vw] mt-[4vw] sm:mt-[1.2vw] p-[1vw]'>
                <div className='font-semibold text-[4vw] sm:text-[2.2vw]'>Standard Delivery</div>
                <div className='text-[2vw] sm:text-[1.2vw]'>Enter your address to see when you'll get your order</div>
              </div>
              <div className='border border-solid border-1px
             border-text-black-900 rounded-[1.5vw] p-[1vw] my-[2.5vw]  w-[65vw]'>
                <div className='font-semibold text-[3vw] sm:text-[2.2vw]'>
                    Cash on Delivery
                </div>
                <div className='text-[2vw] sm:text-[1.2vw]'>
                    Pay now, Collect in store
                </div>
              </div>
              <div className='text-[2.5vw] sm:text-[1.2vw] font-bold sm:semibold '>
              <div className='flex flex-row gap-[2vw] mt-[1.5vw]'>
                <div>
                  <input type='checkbox'/>
                </div>
                <div>
                  My billing and delivery Information are the same
                </div>
              </div>
              <div className='flex flex-row gap-[2vw] mt-[1.5vw]'>
                <div>
                  <input type='checkbox'/>
                </div>
                <div>
                   I'm 13+ years old.
                </div>
                </div>
                <div className='mt-[2vw]'>
                      Also want product updates with our newsletter?
                </div>
              <div className='flex flex-row gap-[2vw] mt-[1.5vw]'>
                <div>
                  <input type='checkbox'/>
                </div>
                <div >
                  Yes, I'd like to receive emails about exclusive sales and more
                </div>
              </div>
              </div>
            </div>
     
      <div className='mt-[3vw]'>
        <button onClick={handleSubmit} className='bg-teal-dark py-[1vw] px-[8vw] text-white text-[3vw] sm:text-[1.2vw] rounded-[1.5vw]'>
          SUBMIT
        </button>
      </div>

      <div className='mt-[3vw]'>
        <Link to='/Payment'>
          <button className='bg-teal-dark py-[1vw] px-[8vw] text-white text-[3vw] sm:text-[1.2vw] rounded-[1.5vw]'>
            REVIEW AND PAY
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};
export default AddDetail;