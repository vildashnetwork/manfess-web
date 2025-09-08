import React from 'react'

function SubmissionTable() {
    return (
        <>
           
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Assignment </th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Laptop</td>
                            <td>150</td>
                            <td>$150,000</td>
                            <td className='status tag-good'>$150,000</td>
                            <td>$150,000</td>
                        </tr>
                        <tr>
                            <td>Smartphone</td>
                            <td>200</td>
                            <td>$120,000</td>
                            <td className='status tag-danger'>$120,000</td>
                            <td>$120,000</td>
                        </tr>
                        <tr>
                            <td>Smartphone</td>
                            <td>200</td>
                            <td>$120,000</td>
                            <td className='status tag-warning'>$120,000</td>
                            <td>$120,000</td>
                        </tr>
                    </tbody>
                </table>
          
        </>
    )
}

export default SubmissionTable
