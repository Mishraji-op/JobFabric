import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Create Your Account 🫣</h1>

          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="Raj Mishra" className="placeholder:text-gray-400" />
          </div>

          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="email" placeholder="1234567890" className="placeholder:text-gray-400" />
          </div>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="Rajxmishra2003@gmail.com"
              className="placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="***********" className="placeholder:text-gray-400"/>
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input type="radio" name="role" value="Student" className="cursor-pointer"
                
/>
                <Label htmlFor="option-one">Student</Label>
              </div>

              <div className="flex items-center space-x-2">
               <Input type="radio" name="role" value="Recruiter" className="cursor-pointer" />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className=" flex items-center gap-2">
            <Label>Profile</Label>
            <Input accept="image/*" type="file" className =" cursor-pointer"/>
            </div>
       
          </div>
          <Button type="submit" className="w-full my-4 bg-[#6A38C2] hover:bg-[#4a04c2]">Sign up</Button>
          <span className="text-sm">Already have an account? <Link to="/Login" className=" text-blue-700 hover:underline">Login</Link></span>
         
        </form>
      </div>
    </div>
  )
}

export default Signup
