import { Bookmark } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Job = () => {
  return (
   
   <div className='p-5 rounded-md  shadow-xl bg-white border border-gray-100'>
    <div className="flex items-center  justify-between">
  <p className='text-sm text-gray-500'>2 Days Ago</p>
    <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
    </div>
  
    <div className='flex items-center gap-2 my-2'>
  <Button className="p-6" variant="outline" size="icon">
      <Avatar>
      <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600w-2174926871.jpg"/>
      </Avatar>
      </Button>
      <div>
        <h1 className="text-lg font-medium">Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div> 
    </div>
    <div>

    </div>
  <h1 className='text-lg font-bold my-2'>Title</h1>
  <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique hic quo sit itaque impedit inventore molestias labore obcaecati consequuntur. Sed.</p>
  <div>

  </div>
  <div className='flex items-center gap-2 mt-4'>
    <Badge className='text-blue-700 font-bold ' variant="ghost">12 Positions</Badge>
    <Badge className=' text-[#F83002]  font-bold ' variant="ghost">Part Time</Badge>
    <Badge className='text-[#7209B7]   font-bold ' variant="ghost">24 Lpa</Badge>
   </div>
   <div className='flex items-center gap-4 mt-4'>
    <Button variant="outline">Details</Button>
    <Button  className='bg-[#7209B7]'>Save for Later</Button>
   </div>
   </div>

  

  )
}

export default Job