import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/81aLox0DSKL._SX1500_.jpg"
        alt=""
      />

      {/* Product id, title ,price, rating, image */}
      <div className="home__row">
        <Product
          id="123213341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="123213342"
          title="2020 Apple Macbook Pro with Apple M1 Chip (13-inch, 8GB Ram, 512GB SSD Storage) - Space Gray"
          price={1349.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SX720_SY500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123213343"
          title="2020 Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (8th Generation)"
          price={299.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product
          id="123213344"
          title="Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band (Renewed)"
          price={384.97}
          rating={5}
          image="https://m.media-amazon.com/images/I/71-Zph8eMBL._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product
          id="123213345"
          title="Toshiba 43LF421U21 43-inch Smart HD 1080p TV - Fire TV, Released 2020"
          price={299.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/61piX33QmAL._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123213346"
          title="Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project) Paperback – November 10, 2020"
          price={16.89}
          rating={4}
          image="https://m.media-amazon.com/images/I/61Ci9oVzWrL._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
