import React, { useState } from 'react';
import { HiPencilSquare } from 'react-icons/hi2';

const AccDetail = ({name, email, password, address, phoneNumber}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState();   
  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    
    setIsEditing(false);
  };
  return (

    <div className='mx-[4vw] mt-[2vw] '>
      <div>
        <div className='flex flex-row mt-[1vw] '>
          <div className='flex flex-col w-[75vw] h-[10vw] '>
            <div className='text-[2vw] text-slate-500'>Name</div>
            <div className='text-[2.5vw]'>
              {isEditing ? (
                <input
                value={name}
                onChange={(e) => (e.target.value)} placeholder='Name'
                  className='border solid border-2px'
                />
              ) : (
                <div className='text-green-400'>{name}</div>
              )}
            </div>
          </div>
          <div className='flex justify-center items-center gap-[2vw] border border-solid border-1px border-[#875A33] text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
            <div>
              <HiPencilSquare />
            </div>
            <div>
              {isEditing ? (
                <button onClick={handleSaveClick}>Save</button>
              ) : (
                <button onClick={handleEditClick}>Change</button>
              )}
            </div>
          </div>
        </div>
        <div className='flex flex-row mt-[1vw] '>
          <div className='flex flex-col w-[75vw] h-[10vw] '>
            <div className='text-[2vw] text-slate-500'>Email</div>
            <div className='text-[2.5vw]'>
              {isEditing ? (
                <input
                value={email}
                onChange={(e) => (e.target.value)} placeholder='Email'
                  className='border solid border-2px'
                />
              ) : (
                <div className='text-green-400'>{email}</div>
              )}
            </div>
          </div>
          <div className='flex justify-center items-center gap-[2vw] border border-solid border-1px border-[#875A33] text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
            <div>
              <HiPencilSquare />
            </div>
            <div>
              {isEditing ? (
                <button onClick={handleSaveClick}>Save</button>
              ) : (
                <button onClick={handleEditClick}>Change</button>
              )}
            </div>
          </div>
        </div>
        <div className='flex flex-row mt-[1vw] '>
          <div className='flex flex-col w-[75vw] h-[10vw] '>
            <div className='text-[2vw] text-slate-500'>Password</div>
            <div className='text-[2.5vw]'>
              {isEditing ? (
                <input
                value={password}
                onChange={(e) => (e.target.value)} placeholder='Password'
                  className='border solid border-2px'
                />
              ) : (
                <div className='text-green-400'>{password}</div>
              )}
            </div>
          </div>
          <div className='flex justify-center items-center gap-[2vw] border border-solid border-1px border-[#875A33] text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
            <div>
              <HiPencilSquare />
            </div>
            <div>
              {isEditing ? (
                <button onClick={handleSaveClick}>Save</button>
              ) : (
                <button onClick={handleEditClick}>Change</button>
              )}
            </div>
          </div>
        </div>
        <div className='flex flex-row mt-[1vw] '>
          <div className='flex flex-col w-[75vw] h-[10vw] '>
            <div className='text-[2vw] text-slate-500'>Phone-Number</div>
            <div className='text-[2.5vw]'>
              {isEditing ? (
                <input
                value={phoneNumber}
                onChange={(e) => (e.target.value)} placeholder='Phone Number'
                  className='border solid border-2px'
                />
              ) : (
                <div className='text-green-400'>{phoneNumber}</div>
              )}
            </div>
          </div>
          <div className='flex justify-center items-center gap-[2vw] border border-solid border-1px border-[#875A33] text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
            <div>
              <HiPencilSquare />
            </div>  
            <div> 
              {isEditing ? (
                <button onClick={handleSaveClick}>Save</button>
              ) : (
                <button onClick={handleEditClick}>Change</button>
              )}
            </div>
          </div>
        </div>
        <div className='flex flex-row mt-[1vw] '>
          <div className='flex flex-col w-[75vw] h-[10vw] '>
            <div className='text-[2vw] text-slate-500'>Address</div>
            <div className='text-[2.5vw]'>
              {isEditing ? (
                <input
                value={address}
                onChange={(e) => (e.target.value)} placeholder='Address'
                  className='border solid border-2px'
                />
              ) : (
                <div className='text-green-400'>{address}</div>
              )}
            </div>
          </div>
          <div className='flex justify-center items-center gap-[2vw] border border-solid border-1px border-[#875A33] text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
            <div>
              <HiPencilSquare />
            </div>
            <div>
              {isEditing ? (
                <button onClick={handleSaveClick}>Save</button>
              ) : (
                <button onClick={handleEditClick}>Change</button>
              )}
            </div>
          </div>
        </div>
        <div className='flex flex-row mt-[1vw] '>
          <div className='flex flex-col w-[75vw] h-[10vw] '>
            <div className='text-[2vw] text-slate-500'>Date-of-Birth</div>
            <div className='text-[2.5vw]'>
              {isEditing ? (
                <input
                // value={}
                onChange={(e) => (e.target.value)} placeholder='Name'
                  className='border solid border-2px'
                />
              ) : (
                <div className='text-green-400'>{name}</div>
              )}
            </div>
          </div>
          <div className='flex justify-center items-center gap-[2vw] border border-solid border-1px border-[#875A33] text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
            <div>
              <HiPencilSquare />
            </div>
            <div>
              {isEditing ? (
                <button onClick={handleSaveClick}>Save</button>
              ) : (
                <button onClick={handleEditClick}>Change</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccDetail;

// import React, { useState } from 'react';
// import { HiPencilSquare } from 'react-icons/hi2';

// const AccDetail = ({ DataAcc }) => {
//   const [isEditing, setIsEditing] = useState(true);
//   const [editedValue, setEditedValue] = useState('');

//   const handleInputChange = (e) => {
//     setEditedValue(e.target.value);
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Here you can add logic to save the edited value
//     // For now, let's just log the value to the console
//     console.log('Saving edited value:', editedValue);
//     setEditedValue(editedValue);


//     // Reset editing state and clear the edited value
//     setIsEditing(false);
//   };

//   return (
//     <div className='mx-[4vw] mt-[2vw] '>
//       <div>
//         <div className='flex flex-row mt-[1vw] '>
//           <div className='flex flex-col w-[75vw] h-[10vw] '>
//             <div className='text-[2vw] text-slate-500'>{DataAcc.DataName}</div>
//             <div className='text-[2.5vw]'>
//             {isEditing ? (
//                 <input
//                   placeholder={place.place1}
//                   value={editedValue}
//                   onChange={handleInputChange}
//                   className='border solid border-2px'
//                 />
//               ) : (
//                 <div className='text-green-400'>{editedValue}</div>)}
                
              
//             </div>
//           </div>
//           <div className='flex justify-center items-center gap-[2vw] border border-solid border-1px border-[#875A33] text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
//             <div>
//               <HiPencilSquare />
//             </div>
//             <div>
//               {isEditing ? (
//                 <button onClick={handleSaveClick}>Save</button>
//               ) : (
//                 <button onClick={handleEditClick}>Change</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccDetail;



// import React from 'react'
// import {HiPencilSquare} from 'react-icons/hi2'

// const AccDetail = ({DataAcc}) => {
//     const EditDetail = () =>{


//     }
//   return (
//         <div className='mx-[4vw] mt-[2vw] '>
//             <div>
//                 <div className='flex flex-row mt-[1vw] '>
//                     <div className='flex flex-col w-[75vw] h-[10vw] '>
//                         <div className='text-[2vw] text-slate-500'>{DataAcc.DataName}</div>
//                         <div className='text-[2.5vw]'>
//                             <input placeholder={DataAcc.data}
//                         /></div>
//                     </div>
//                     <div className='flex justify-center items-center gap-[2vw]
//                                     border border-solid border-1px border-[#875A33] 
//                                     text-[1.8vw] w-[15vw] h-[5vw] mt-[1vw]'>
//                         <div>
//                             <HiPencilSquare/>
//                         </div>
//                         <div>
//                             <button className=''>Change</button>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>
            
//         </div>
//   )
// }

// export default AccDetail