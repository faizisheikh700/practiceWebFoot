import Footer from "@/components/footer"
import Head from "../components/Header"




export default function Home() {
  return (
      <>
      <Head/>
        <div className="main">
      <div className="square1">
        <h6> <em> GIAIC STUDENT</em></h6>
        <h2>I am A NEXT JS Developer</h2>
        <p> <em>
            A specialist of creating a web site and design. 
            </em> 
        </p>
        <a href="#" className="primary-btn">Get Website</a>
        
      </div>
      <div className="square2">
        <img src="https://images.unsplash.com/profile-1724982454700-0be8b2d57442image?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="" />
      </div>
    </div>
      <Footer/>
      </>
  )
  
}