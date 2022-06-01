import React from 'react'
import "./leader.css";
export default function leader() {
  return (
    <div>
      <div className="great-leader flex justify-center items-center flex-col m-10">
   <div className="section-title">
      <h2 className="font-bold text-4xl mb-4 text-center">“Great leaders communicate and great <br/>communicators lead.”</h2>
      
   </div>
   <span style={{color: "#000"}}>Simon Sinek, International author and motivational speaker</span>
</div>
<section className="education-area flex flex-col md:flex-row justify-center md:justify-between items-center bg-slate-100" >
   

 
            <div className="education-img  md:flex md:w-3/5">
               <img src="education-img.png" alt="edication image" />
            </div>        
            <div className="education-content flex font-bold text-4xl md:w-2/5 text-center mx-10 my-16">
               <h2 >“Learn, Practice and  <span className="text-indigo-600">Grow</span>"</h2>
           
            </div>
        
 

</section>
    </div>
  )
}
