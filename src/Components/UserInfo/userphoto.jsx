import React from 'react'
import userbg from '../../assets/userbg.png'
import userpng from '../../assets/userpng.png'
import {Link} from 'react-router-dom'
import { useState , useEffect} from 'react'
import {FaPen} from 'react-icons/fa'
import {BsFillCloudUploadFill} from 'react-icons/bs'
import {fireDB} from '../../firebase/firebase.jsx';
import Accounts from '../../Components/UserInfo/Accounts.jsx'
import History from '../../Components/UserInfo/History.jsx'
import Payments from '../../Components/UserInfo/Payments.jsx'
import ProfileNav  from '../../Components/UserInfo/testprofileNAv.jsx'

const User = () => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleClick = (index) => {
      setActiveTab(index === activeTab ? null : index);
    };
  
    const tabStyles = (index) => {
      return `cursor-pointer ${
        index === activeTab
          ? 'border-b-[0.2vw] border-b-blue-600  text-[#875A33]'
          : 'hover:text-[#875A33]'
      } flex justify-center items-center w-[30vw]  h-[4vw]  text-[1.8vw] font-[poppins]`;
    };
    
    // // Update activeTab when the defaultTab prop changes
    // useEffect(() => {
    //   setActiveTab();
    // });
  
    const tabComponents = {
      0: <Accounts />,
      1: <History />,
      2: <Payments />,
    };
  
  return (
    <div>
    <div className='mt-[1.5vw] mx-[3vw] z-50'>
        <div className='flex flex-col relative'>
            <div className='flex justify-center '>
                <img src={userbg} alt='' className='md:h-[20vw] md:w-[94vw]'/>
            </div>
            <div className='flex justify-center  z-10 absolute right-[38.5vw] top-[20vw] md:top-[15vw] '>
            <img src={userpng} alt='user' className='rounded-full w-[15vw] md:w-[13vw]'/>
            </div>
            <div className='absolute right-[2.85vw] top-[21vw] text-[1.5vw] md:top-[15.5vw] md:right-[1vw]'>
                <button className='flex flex-row items-center rounded-[4px]
                                    py-[0.7vw] px-[0.5vw] bg-[#C99359] text-white '>
                    <div>
                        <BsFillCloudUploadFill 
                        // onClick={handleCoverChange}
                        />                      
                    </div>
                    <div className='font-montserrat '>
                        Upload new cover
                    </div>
                </button>
            </div>
            <div className='absolute right-[41.3vw] top-[29vw] md:right-[41.6vw] md:top-[23vw] z-100'>
                <button className='flex rounded-full items-center justify-center w-[2.5vw] h-[2.5vw] bg-[#C99359]'>
                    <FaPen className='text-white  justify-center w-[1.2w] h-[1.2w]'
                     
                    //  onClick=  {handlePhotoChange}
                     />
                </button>
            </div>
            <div className='flex flex-col md:mt-[7vw] mt-[6vw] text-[1.3vw] sm:text-auto'>
              <div className='flex justify-center font-bold items-center '>
                  {'  ..... ' + 'John Doe' }
              </div>
              <div className='flex justify-center text-slate-400 items-center'>
                .....johndoe@gmail.com
{/*  */}
              </div>
            </div>
        </div>
        {/* <div className='my-[1vw]' id='NavforProducts'> 
         <div id='navbar' className='flex justify-center  mx-[17vw] mt-[1vw] text-[2.2vw]'>
        <nav>
          <ul className='flex flex-row font-poppins text-[#454545]'>
            <li onClick={() => handleClick(0)} className={tabStyles(0)}>
              ACCOUNTS
            </li>
            
            <li onClick={() => handleClick(1)}  className={tabStyles(1)}> 
              <div className='w-[30vw] flex justify-center items-center border-r-[0.2vw] border-l-[0.2vw] px-[3vw]'> HISTORY</div>
            </li>
            <li onClick={() => handleClick(2)} className={tabStyles(2)}>
              PAYMENT METHODS/ ADDRESS
            </li>
          </ul>
        </nav>
      </div>
    </div> */}
    {/*  */}
</div>
{/* <div className='mt-[vw]'>
<div className='flex flex-row justify-start items-start gap-[5vw]  my-[3vw]'>
              {activeTab !== null && tabComponents[activeTab]}
</div>
    </div> */}
</div>
  )
}

export default User


//   const [activeLink, setActiveLink] = useState(null);

  // const handleLinkClick = (link) => {
  //   setActiveLink(link);
  // };
  // const [userPhoto, setUserPhoto] = useState('');
  // const [coverPhoto, setCoverPhoto] = useState('');
  // const [photoFile, setPhotoFile] = useState(null);
  // const [coverFile, setCoverFile] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const userDoc = await fireDB.firestore().collection('users').doc(userId).get();
  //       const userData = userDoc.data();
  //       setName(userData.name);
  //       setEmail(userData.email);
  //       setUserPhoto(userData.photoURL);
  //       setCoverPhoto(userData.coverURL);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, [userId]);

  // const handlePhotoChange = (e) => {
  //   if (e.target.files[0]) {
  //     setPhotoFile(e.target.files[0]);
  //   }
  // };

  // const handleCoverChange = (e) => {
  //   if (e.target.files[0]) {
  //     setCoverFile(e.target.files[0]);
  //   }
  // };

  // const handleSaveClick = async () => {
  //   try {
  //     if (photoFile) {
  //       const photoStorageRef = fireDB.storage().ref(`userPhotos/${User}`);
  //       await photoStorageRef.put(photoFile);
  //       const photoURL = await photoStorageRef.getDownloadURL();
  //       await fireDB.auth().currentUser.updateProfile({
  //         photoURL,
  //       });
  //     }

  //     if (coverFile) {
  //       const coverStorageRef = fireDB.storage().ref(`userCovers/${userId}`);
  //       await coverStorageRef.put(coverFile);
  //       const coverURL = await coverStorageRef.getDownloadURL();
  //       await fireDB.firestore().collection('users').doc(userId).update({
  //         coverURL,
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Error updating user data:', error);
  //   }
  // };

   {/* <div className='flex flex-row justify-center items-center text-[2.2vw]'>
        <div className='grid grid-cols-3 gap-[3vw]  mt-[8vw] justify-center'>
            <div className='w-[30vw] flex justify-center '>
                <button onClick={() => handleLinkClick('/Account')}
                 className=' flex justify-center items-center'>
                    Accounts
                </button>
                
            </div>
            <div  onClick={() => handleLinkClick('/History')}
             className='w-[30vw] flex justify-center items-center  '>
            <button className=''>
                    History
                </button>
                
            </div>
            <div onClick={() => handleLinkClick('/Payments')}
             className='w-[30vw] flex justify-center items-center '>
            <button className=''>
                    Payment Method/Address
                </button>
    
            </div>
        </div>
    </div>             */}