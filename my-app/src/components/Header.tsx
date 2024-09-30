import Link from "next/link"


export default function Head() {
  return (
      <>
      <div className="navbar">
        <div className="logoMain">
          <h1>Shopping Cart.</h1>
        </div>
        <ul className="head">
          <Link href={"/"}>
          <li>Home</li>
          </Link>
          <Link href={"/cards"}>
          <li>Cards</li>
          </Link>
          <Link href={"contact"}>
          <li>Contact</li>
          </Link>
          <Link href={"careers"}>
          <li>Careers</li>
          </Link>
        </ul>
        <div className="search">
          <div><input type="text" placeholder="search" /></div>
    
        </div>
      </div>
      
      </>
  )
  
}