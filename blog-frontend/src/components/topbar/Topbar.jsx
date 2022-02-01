import React from 'react';
import "./topbar.css"

export default function () {
  return(
      
   <div className='topbar'>
      <div className='topleft'>
               <i className="topIcon fab fa-facebook-square"></i>        {/* icons to the left of the topbar */} 
               <i className="topIcon fab fa-instagram-square"></i>
               <i className="topIcon fab fa-github-square"></i>
               <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className='topcenter'>
        <ul className='toplist'>
             <li className='topListItem'>Home</li>
             <li className='topListItem'>About</li>
             <li className='topListItem'>Contact</li>
             <li className='topListItem'>Create</li>
             <li className='topListItem'>Logout</li>
        </ul>
      </div>
      <div className='topright'>
         <img
              className="topImg"
              src="https://i.pinimg.com/736x/ef/54/63/ef54632436b856d5872c5757f3b74f18.jpg"
              alt=""
            />
          <i className="topSearchIcon fas fa-search"></i>     

      </div>

  </div>)
}
