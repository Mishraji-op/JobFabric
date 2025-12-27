import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
const Signup = () => {
  const [input, setinput] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    password: "",
    role: "",
    file: "",
  });

  const{loading} =useSelector(store =>store.auth);
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setinput({ ...input, file: e.target.files?.[0] });
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname",input.fullname);
    formData.append("email",input.email);
    formData.append("phonenumber",input.phonenumber);
    formData.append("password",input.password);
    formData.append("role",input.role);
    if(input.file){
      formData.append("file",input.file);
    }

    try{
    dispatch(setLoading(true))
      const res = await axios.post(
  `${USER_API_END_POINT}/register`,
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  }
);
if(res.data.success){
 navigate("/login");
  toast.success(res.data.message);

}
    }
    catch (error){
      console.log(error);
      toast.error(res.data.message);
      
    }
    finally{
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={SubmitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center">
            Create Your Account 🫣
          </h1>

          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Raj Mishra"
              className="placeholder:text-gray-400"
            />
          </div>

          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={input.phonenumber}
              name="phonenumber"
              onChange={changeEventHandler}
              placeholder="1234567890"
              className="placeholder:text-gray-400"
            />
          </div>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="Rajxmishra2003@gmail.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="***********"
              className="placeholder:text-gray-400"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className=" flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className=" cursor-pointer"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          {
            loading ? <Button className='w-full  my-4 '> <Loader2 className='mr-2 h-4 animate-spin'/> Please Wait </Button> :  <Button
            type="submit"
            className="w-full my-4 bg-[#6A38C2] hover:bg-[#4a04c2]"
          >
            Sign up
          </Button>
          }
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/Login" className=" text-blue-700 hover:underline">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
