import Link from "next/link"


export default function Head() {
  return (
      <>
      <div className="navbar">
        <div className="logoMain">
          <h1>My Profile</h1>
        </div>
        <ul className="head">
          <Link href={"/"}>
          <li>Home</li>
          </Link>
        </ul>
        <div className="search">
        <a href="#" className="primary-btn" style={{border:"1px solid white", padding:"5px",
          borderRadius:"20px"
        }}>Get Website</a>
          {/* <div><input type="text" placeholder="search" /></div> */}
    
        </div>
      </div>
      
      </>
  )
  
}