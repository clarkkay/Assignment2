import React, { useState, useEffect } from "react";
import { Products } from "./Products";
import shopCart from "./shopping-cart.png";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState("");
  const [showMore, setShowMore] = useState(true);

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  

  const Show_cart = cart.map((el) => (
    // PRODUCT
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" alt="img" src={el.image} />
        </div>
        <div class="col">
          <div class="row text-muted">{el.title}</div>
          <div class="row">{el.category}</div>
        </div>
        <div class="col">
          <button
            type="button"
            variant="light"
            onClick={() => removeFromCart(el)}
          >
            {" "}
            -{" "}
          </button>{" "}
          <button type="button" variant="light" onClick={() => addToCart(el)}>
            {" "}
            +{" "}
          </button>
        </div>
        <div class="col">
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      </div>
      <script type="text/javascript" src="script.js"></script>
    </div>
  ));

  const cart_view = (
    <div>
    {Show_cart}
    <br></br>
    <br></br>
    <div class="container">
        <div class="row">
          <div class="col-2"></div>

          <div class="col-8">
            <h1>Javascript Form Validation</h1>

            <div id="liveAlertPlaceholder"></div>

            <form class="row g-3" id="checkout-form">
              {/* Full Name */}
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Full Name
                </label>
                <input type="text" class="form-control" id="inputName" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Must be like, "John Doe"</div>
              </div>

              {/* Email */}
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="inputEmail4" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Must be like, "abc@xyz.efg"</div>
              </div>

              {/* Credit Card */}
              <div class="col-12">
                <label for="inputCard" class="form-label">
                  Card
                </label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="bi-credit-card-fill"></i>
                  </span>

                  <input
                    type="text"
                    id="inputCard"
                    class="form-control"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />

                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Must be like, "7777-7777-7777-7777"
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  City
                </label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  State
                </label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Zip
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-success">
                  {" "}
                  <i class="bi-bag-check"></i> Order
                </button>
              </div>
            </form>
            {/* ORDER SUMMARY */}
            <div class="card collapse" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Order summary</h5>
                <p class="card-text">Here is a summary of your order.</p>
              </div>
              <ul class="list-group list-group-flush"></ul>
              <button type="button" class="btn btn-secondary">
                <i class="bi-arrow-left-circle"> Return</i>
              </button>
            </div>
          </div>

          <div class="col-2"></div>
        </div>
      </div>
      <br></br>
      <br></br>

    </div>
  );


  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={30} />
      {el.title}${el.price}
    </div>
  ));

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log("Step 6 : in handleChange, Target Value :", e.target.value, " Query Value :", query);
    
    if (e.target.value === "") {
      setProductsCategory(Products);
    } else {
      const results = Products.filter((product) => {
        return product.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      console.log(results);
      setProductsCategory(results);
    }
  };
  

  const render_products = (ProductsCategory) => {
    return (
      <div className="category-section fixed">
        {console.log("Step 3 : in render_products ")}
        <div
          className="m-6 p-3 mt-10 ml-0"
          style={{ maxHeight: "800px", overflowY: "scroll" }}
        >
          {/* Loop Products */}
          {ProductsCategory.map((product, index) => (
            <div key={index} className="border-top border-bottom">
              {/* PRODUCT */}
              <div className="row main align-items-center">
                <div className="col-2">
                  <img className="img-fluid" alt="img" src={product.image} />
                </div>
                <div className="col">
                  <div className="row text-muted">{product.title}</div>
                  <div className="row">{product.category}</div>
                </div>
                <div className="col">
                  <button
                    type="button"
                    variant="light"
                    onClick={() => removeFromCart(product)}
                  >
                    {" "}
                    -{" "}
                  </button>{" "}
                  <button
                    type="button"
                    variant="light"
                    onClick={() => addToCart(product)}
                  >
                    {" "}
                    +{" "}
                  </button>{" "}
                </div>
                <div className="col">
                  ${product.price} <span className="close">&#10005;</span>
                  {howManyofThis(product.id)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  function handleShowCart() {
    setShowMore(!showMore);
  }

  return (
    <div>
      STORE SE/ComS319
      <div class="card">
        <div class="row">
          {/* HERE, IT IS THE SHOPING CART */}
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>319 Shopping Cart</b>
                  </h4>
                  <button type="button" onClick={() => handleShowCart()}><img src={shopCart} alt="Shopping Cart" width={50} height={50} /></button>
                </div>
                <div className="py-10">
                    <input type="search" value={query} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                <div class="col align-self-center text-right text-muted">
                  Products selected {cart.length}
                </div>
              </div>
            </div>
            {showMore && <div>{render_products(ProductsCategory)}</div>}
          </div>
          <div class="float-end">
            <p class="mb-0 me-5 d-flex align-items-center">
              <span class="small text-muted me-2">Order total:</span>
              <span class="lead fw-normal">${cartTotal}</span>
            </p>
          </div>
          {!showMore && <div>{cart_view}</div>}
        </div>
      </div>
    </div>
  );
};

export default Shop;