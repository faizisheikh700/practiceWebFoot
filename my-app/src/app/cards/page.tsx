import Footer from "@/components/footer"
import Head from "../../components/Header"


export default function Cards(){
    return (
        <>
            <Head/>
        <div>
      <div className="textBar">
        <h1>Best Sellers </h1>
        <h1> New Arrivals</h1>
        <h1>Hot Sales</h1>
      </div>
      <div className="cardsSect">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://img.freepik.com/premium-photo/black-sports-shoe-black-background_955012-1697.jpg"
            style={{ width: "18rem", height: "15rem" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Black Shoes
            </h5>
            <p className="card-text">
              <del>$25</del> <ins>$18</ins>
            </p>
            <a href="#" className="btn btn-primary">
              ADD TO CART
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WC6r4XUAd17DROOnR3_1vq0K3T7Nx6J6uA&s"
            style={{ width: "18rem", height: "15rem" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Large Size T.Shirt
            </h5>
            <p className="card-text">
              <del>$15</del> <ins>$10</ins>
            </p>
            <a href="#" className="btn btn-primary">
              ADD TO CART
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://eu.npeal.com/cdn/shop/products/Shot_07_NTTD_Trousers__2xBack_0432_R3_664ebf00-42be-4832-9096-8ab652290322.jpg?v=1643572095&width=600"
            style={{ width: "18rem", height: "15rem" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Flexable Trouser
            </h5>
            <p className="card-text">
              <del>$18</del> <ins> $12</ins>
            </p>
            <a href="#" className="btn btn-primary">
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
      <div className="cardsSect">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://media.istockphoto.com/id/1365076494/photo/watches-with-roman-numerals.jpg?s=612x612&w=0&k=20&c=dLCY71EWXXPdfw4mKOdNUbcD00nvy1Sz-soAVEjwNr8="
            style={{ width: "18rem", height: "15rem" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Rolex Wrist Watch
            </h5>
            <p className="card-text">
              <del>$50</del> <ins> $40</ins>
            </p>
            <a href="#" className="btn btn-primary">
              ADD TO CART
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-picture-of-a-pair-of-black-sunglasses-on-black-image_2630422.jpg"
            style={{ width: "18rem", height: "15rem" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Black Goggle
            </h5>
            <p className="card-text">
              <del>$20</del> <ins> $15</ins>
            </p>
            <a href="#" className="btn btn-primary">
              ADD TO CART
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VwcBy8Vpb_R3IA_lbQECj2ikIcc11srZsw&s"
            style={{ width: "18rem", height: "15rem" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Black Cap
            </h5>
            <p className="card-text">
              <del>$10</del> <ins> $7</ins>
            </p>
            <a href="#" className="btn btn-primary">
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
        </div>
            <Footer/>
        </>
    )
} 