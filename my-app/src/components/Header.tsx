import Link from "next/link"


export default function Head() {
  return (
      <>
      <div className="navbar">
        <div className="logoMain">
          <h1>My Profile</h1>
        </div>
        <ul className="head">
        
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Job</li>
          

        </ul>
        <div className="search">
        <a href="#" className="primary-btn" style={{border:"1px solid white", padding:"5px",
          borderRadius:"20px"
        }}>Get Website</a>
    
        </div>
      </div>
      
      </>
  )
  
}