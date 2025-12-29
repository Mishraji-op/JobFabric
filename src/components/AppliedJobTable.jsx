import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>A list of recent Applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
               {
                 [1,2,3,4,5,6,7,8.9].map((item,index)=>(
<TableRow key={index}>
                    <TableCell>26-109-2003</TableCell>
                      <TableCell>Data Scientist</TableCell>
                        <TableCell>Microsoft</TableCell>
                          <TableCell className='text-right'><Badge>Selected</Badge></TableCell>
</TableRow>
                 ))
               }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable