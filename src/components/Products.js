import Image from "../asset/dress1.jpg";
import Image2 from "../asset/dress2.jpg";
import Image3 from "../asset/dress3.jpg";
import Image4 from "../asset/dress4.jpg";
import Image5 from "../asset/dress5.jpg";
import Image6 from "../asset/dress6.jpg";
import React from "react";
const items = [
  {
    id: 1,
    photo: Image,
  },
  {
    id: 2,
    photo: Image2,
  },
  {
    id: 3,
    photo: Image3,
  },
  {
    id: 4,
    photo: Image4,
  },
  {
    id: 5,
    photo: Image5,
  },
  {
    id: 6,
    photo: Image6,
  },
];

function Products() {
  return (
    <div className="col-9">
    
      <div className="row w-100">
        <main className="col-12 main">
          <div className="rightSide row col-12">
            <div className="col-4">6 Products</div>
            <div className="col-4">
              <label for="cars" className="p-1">
                Order:
              </label>
              <select id="cars">
                <option value="Latest">Latest</option>
                <option value="Lowest">Lowest</option>
                <option value="Highest">Highest</option>
              </select>
            </div>
            <div className="col-4">
              <label for="cars" className="p-1">
                filter:
              </label>
              <select id="cars">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
          </div>

          <div className="product">
            <ul>
              {items.map((item) => (
                <li className="product-item">
                  <img src={item.photo} />
                  <p>Midi sundress with shirring detail</p>
                  <div className="price row">
                    <span className="col-5 ">$29.9</span>
                    <button className="button primary col-6">
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>

    </div>
  );
}

export default Products;