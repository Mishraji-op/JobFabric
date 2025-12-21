import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-2xl mb-5">Create Your Account ✨</h1>

          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Raj Mishra" />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input type="email" placeholder="1234567890" />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Rajxmishra2003@gmail.com"
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="***********" />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
