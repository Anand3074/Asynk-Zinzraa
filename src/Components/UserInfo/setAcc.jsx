import React, { useState } from 'react';
import { HiPencilSquare } from 'react-icons/hi2';
import {fireDB} from '../../firebase/firebase.jsx'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AccDetail from './AccDetail.jsx';

const profileDetail = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
//   console.log(email)
//   console.log(email)
//   console.log(email)

  const addDataToFirestore = async (data) => {
      const docRef = await addDoc(collection(fireDB, 'users'),
      data);
      return docRef; 
  }

//   const navigate = useNavigate();

  const handleSubmit = async () => {
    // e.preventDefault();
    // Validate that all fields are provided
    if (!name || !email || !address || !password || !phoneNumber) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
        const docRef = await addDataToFirestore({
          name,
          email,
          address,
          phoneNumber,
          password,
        });
        setShowConfirmation(true)
        console.log(name)
        console.log(email)
        console.log(address)
        console.log(phoneNumber)
        console.log(password)


        console.log('Document written with ID: ', docRef.id);
        // Clear any previous error messages
        setErrorMessage('');
      } catch (error) {
        console.error('Error adding document: ', error);
        // Display an error message if there's an issue with adding the document
        setErrorMessage('Error adding document. Please try again.');
        console.log(showConfirmation)
      }
  }
    return (
        <div>
          {showConfirmation ? (<AccDetail name={name} email={email} password={password} address={address} phoneNumber={phoneNumber}/>) :
          ( 
    <div className='mx-[4vw] mt-[1vw] '>
      <div>
        <div className='flex flex-row mt-[1vw] md:mt-[0.5vw] '>
          <div className='flex flex-col w-[75vw] h-[8vw] '>
            <div className='text-[2vw] text-slate-500'>Name</div>
            <div className='text-[1.5vw]'>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)} placeholder='Name'
                  className='border solid border-2px text-[1.8vw] px-[1vw] h-[3vw] mt-[0.5vw]'
                />
            </div>
          </div>
          
        </div>
        <div className='flex flex-row'>
        <div className='flex flex-row mt-[1vw] md:mt-[0.5vw] '>
          <div className='flex flex-col w-[40vw] h-[8vw] '>
            <div className='text-[2vw] text-slate-500'>Email</div>
            <div className='text-[1.5vw]'>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder='Email'
                  className='border solid border-2px text-[1.8vw] px-[1vw] h-[3vw] mt-[0.5vw]'
                />
            </div>
          </div>
          
        </div>
        <div className='flex flex-row mt-[1vw] md:mt-[0.5vw] '>
          <div className='flex flex-col w-[45vw] h-[8vw] '>
            <div className='text-[2vw] text-slate-500'>Password</div>
            <div className='text-[1.5vw]'>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder='Password'
                  className='border solid border-2px text-[1.8vw] px-[1vw] h-[3vw] mt-[0.5vw]'
                />
            </div>
          </div>
        </div>
        
          
        </div>
        <div className='flex flex-row mt-[1vw] md:mt-[0.5vw] '>
          <div className='flex flex-col w-[75vw] h-[8vw] '>
            <div className='text-[2vw] text-slate-500'>Phone-Number</div>
            <div className='text-[1.5vw]'>
                <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number'
                  className='border solid border-2px text-[1.8vw] px-[1vw] h-[3vw] mt-[0.5vw]'
                />
             
            </div>
          </div>
        </div>
        <div className='flex flex-row mt-[1vw] md:mt-[0.5vw] '>
          <div className='flex flex-col w-[75vw] h-[8vw] '>
            <div className='text-[2vw] text-slate-500'>Address</div>
            <div className='text-[1.5vw]'>
                <input
                value={address}
                onChange={(e) => setAddress(e.target.value)} placeholder='Address Line 1'
                  className='border solid border-2px text-[1.8vw] px-[1vw] h-[3vw] mt-[0.5vw] w-[60vw]'
                />
            </div>
          </div>
          
        </div>
        <div className='flex flex-row mt-[2vw] '>
          <div className='flex flex-col w-[75vw] h-[8vw] '>
            <div className='text-[2vw] text-slate-500'>Date-of-Birth</div>
            <div className='text-[1.5vw]'>
                <input
                onChange={(e) => setName(e.target.value)} placeholder='Name'
                  className='border solid border-2px text-[1.8vw] px-[1vw] h-[3vw] mt-[0.5vw]'
                />
            </div>
          </div>
          
        </div>
      </div>
    <div className='flex justify-center items-center'>
    <div onClick={handleSubmit} className='flex justify-center items-center gap-[2vw]
                border border-solid border-1px border-[#875A33] 
                text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
    <div>
        <HiPencilSquare/>
    </div>
    <div>
        <button className=''>Save</button>
    </div>
</div></div>
{/*  */}
{errorMessage && (
        <div className='text-red-500 mt-2'>{errorMessage}</div>
        )}
        </div>
      )}
    </div>
  );
};

export default profileDetail;
{/* <Link to='/Profile'><div  className='flex justify-center items-center gap-[2vw]
                border border-solid border-1px border-[#875A33] 
                text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
    <div>
        <HiPencilSquare/>
    </div>
    <div>
        <button className=''>Save</button>
    </div>
</div>
</Link> */}

