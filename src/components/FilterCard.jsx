import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai", "Chennai"],
  },
  {
    fitlerType: ["Industry"],
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Data Analyst",
      "Data Scientist",
      "Cloud Engineer",
      "Machine learning Engineer",

      "SDE 1",
      "SDE 2",
      "SDE 3",
      "Full Stack ml Engineer"
    ],
  },
  {
    fitlerType: ["Salary"],
    array: ["0-40k", "42-90k", "90k-2Lakh", "2-5Lakh"],
  },
]

const FilterCard = () => {
  return <div className='w-full rounded-md p-3 bg-white'>
    <h1 className='font-bold text-lg'>Filter Jobs</h1>
    <hr className="mt-3"/>
    <RadioGroup>{
      fitlerData.map((data,index) =>(
      <div>
        <h1 className="font-bold text-lg">{data.fitlerType}</h1>{
          data.array.map((item,index)=>{
            return (
              <div className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item}/>
                <Label>{item}</Label>
                </div>
            )
          })
        }
      </div>
      ))
    }
    </RadioGroup>
  </div>;
};

export default FilterCard;
