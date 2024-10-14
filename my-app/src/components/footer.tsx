
export default function Footer() {
    return (
      <>
      
        <footer>
          <div className="mainFooter">
            <div className="footerSect1">
              <div className="webName">My Profile</div>
              <p className="discrip">
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <a href=""><img src="https://img-us.aosomcdn.com/upload/us/images/2022/payment-20221026.png" alt="" /></a>
              <div className="atmCards"></div>
            </div>
            <div className="footerSect2">
              <h6>SALES</h6>
              <ul>
                <li>UI UX</li>
                <li>Development</li>
                <li>Designs</li>
                <li>Database</li>
              </ul>
            </div>
            <div className="footerSect3">
              <h6>SHOPPING</h6>
              <ul>
                <li>Contact Us</li> 
                <li>Payment Methods</li> 
                <li>Delivary</li>
                <li>Changes</li>
              </ul>
            </div>
            <div className="footerSect4">
            <h6>NEWLETTER</h6>
            <div className="newsLetter">
            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
            <form action="#">
              <input type="text" placeholder="Your Email" />
              <button type="submit">SEND</button>
            </form>
            </div>
            </div>
          </div>
          <hr />
          <p className="para">Copyright © 2024 All rights reserved by Faizan Sheikh</p>
        </footer>
      </>
    );
  }
  