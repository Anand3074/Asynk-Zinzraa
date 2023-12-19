import React from 'react'
import {Button,Input} from "@material-tailwind/react"
const EditUserForm = ({userInfo,name,setName,email,setEmail,setPhone,phone,role,setRole,editUser}) => {
  return (
     <div className='col-span-3 my-16 mx-[350px]' >
        <div>
            <h4 className='text-[2rem] font-[600] text-center ' >Edit User: {userInfo.name} </h4>
             <div className='my-6 ' >
         <div className="flex my-6 flex-col w-full items-end gap-6">   
      <Input value={name} onChange={(e)=>setName(e.target.value)} size="lg" label="Name" />
    </div>
    <div className="flex my-6  flex-col w-full items-end gap-6">
      <Input value={email} onChange={(e)=>setEmail(e.target.value)} size="lg" label="Email" />
    </div>
     <div className="flex my-6 flex-col w-full items-end gap-6">
      <Input value={phone} onChange={(e)=>setPhone(e.target.value)} size="lg" label="Phone" />
    </div>
    <div>
        <Input value={role} onChange={(e)=>setRole(e.target.value)} size="lg" label="Role" />
    </div>
   
    
            
            
            {/* <div>
                 <input
                type="file"
                name="avatar"
                accept="image/*"
              value={image}
               onChange={(e)=>setImage(e.target.value)}
               
              />
            </div> */}
            <div className='my-6 flex items-center justify-center ' >
                <Button onClick={editUser}  size="lg">Submit</Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EditUserForm