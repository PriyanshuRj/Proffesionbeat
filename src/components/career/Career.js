import React from 'react'
import "./career.css";
export default function Career() {
  return (
    <div className="md:mx-10 pt-10">
        <div className="text-center">
<h1 className="text-4xl font-semibold text-center my-8 mb-20">Join Professionbeat</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime alias odio magnam, recusandae ipsum eligendi molestiae cum expedita nobis!</p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero labore incidunt ad est recusandae cum possimus natus fugit blanditiis voluptatem? In, quae eveniet! Quo, nesciunt esse distinctio sed nostrum beatae soluta autem.</p>
        </div>
        <div>
            <h1 className="text-4xl font-semibold text-center my-8 mb-20">Recent Openings</h1>
            <div className="recent-table">
                <table className="tbl">
            <thead>
                    <th>Job Title</th>
                    <th>Department</th>
                    <th>Location</th>
                    <th>Employment Type</th>
                    <th>Job Post On</th>
                    <th>End Date</th>
                    <th>Details</th>
                </thead>
                <tbody>
                    <td>digital</td>
                    <td>digital marketing</td>
                    <td>online</td>
                    <td>full time</td>
                    <td>mar 3,2022</td>
                    <td>mar 14,2022</td>
                    <td><a href="/" style={{color:"#ffb607"}}>Details</a></td>
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}
