import React, { useState, useEffect, ReactDOM } from "react";
import { Products } from "./Products";
import shopCart from "./shopping-cart.png";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState("");
  const [showMore, setShowMore] = useState(true);
  const [confirmationView, setConfirmationView] = useState(false);
  let flag = 1;

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
    <div className="row border-top border-bottom" key={el.id}>
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" alt="img" src={el.image} />
        </div>
        <div className="col">
          <div className="row text-muted">{el.title}</div>
          <div className="row">{el.category}</div>
        </div>
        <div className="col">
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
        <div className="col">
          ${el.price} <span className="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      </div>
      <script type="text/javascript" src="script.js"></script>
    </div>
  ));

  const final_products = cart.map((el) => (
    // PRODUCT
    <div className="row border-top border-bottom" key={el.id}>
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" alt="img" src={el.image} />
        </div>
        <div className="col">
          <div className="row text-muted">{el.title}</div>
          <div className="row">{el.category}</div>
        </div>
        <div className="col">
          ${el.price} <span className="close">&#10005;</span>
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
    <div className="container">
        <div className="row">
          <div className="col-2"></div>

          <div className="col-8">
            <h1>Javascript Form Validation</h1>

            <div id="liveAlertPlaceholder"></div>

            <form className="row g-3" id="checkout-form">
              {/* Full Name */}
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">
                  Full Name
                </label>
                <input type="text" className="form-control" id="inputName" />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Must be like, "John Doe"</div>
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Must be like, "abc@xyz.efg"</div>
              </div>

              {/* Credit Card */}
              <div className="col-12">
                <label htmlFor="inputCard" className="form-label">
                  Card
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi-credit-card-fill"></i>
                  </span>

                  <input
                    type="text"
                    id="inputCard"
                    className="form-control"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    
                  />

                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Must be like, "7777-7777-7777-7777"
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                  
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option  selected>Choose...</option><option>IL</option><option>AL</option><option>OK</option><option>IA</option><option>FL</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="button" className="btn btn-success" onClick={() => {handleShowConfirmation(); handleShowCart()}}>
                  {" "}
                  <i className="bi-bag-check"></i> Order
                </button>
              </div>
            </form>
          </div>

          <div className="col-2"></div>
        </div>
      </div>
      <br></br>
      <br></br>

    </div>
  );


  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img className="img-fluid" src={el.image} width={30} />
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
          <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
      </div>
    );
  };


  function handleShowConfirmation() {
    setConfirmationView(!confirmationView);
  }
  
  function handleShowCart() {
    setShowMore(!showMore);
  }

  function handleBackToPage() {
    setConfirmationView(!confirmationView);
    setShowMore(showMore);
    setCart([]);
  }

  const confirmation_view = (
        <div className="row" width="1vw">
          <div className="col-2"></div>
    <div className="card" style={{ width: "50rem" }}>
      <div className="card-body">
        <h5 className="card-title">Order summary</h5>
        <p className="card-text">Here is a summary of your order.</p>
      </div>
      <ul className="list-group list-group-flush">
        {final_products}
      </ul>
      <br></br>
      <div>
        <h3 className="card-text">User Information</h3>
        <p>Melani Hodge<br></br>me@gmail.com<br></br>1234 Main St<br></br>XXXX-XXXX-XXXX-7777<br></br></p>
      </div>
      <button type="button" className="btn btn-secondary" onClick={()=>handleBackToPage()}>
        <i className="bi-arrow-left-circle"> Return</i>
      </button>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );

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
            {showMore && !confirmationView && <div>{render_products(ProductsCategory)}</div>}
          </div>
          <div class="float-end">
            <p class="mb-0 me-5 d-flex align-items-center">
              <span class="small text-muted me-2">Order total:</span>
              <span class="lead fw-normal">${cartTotal}</span>
            </p>
          </div>
          {!showMore && <div>{cart_view}</div>}
          {confirmationView && <div>{confirmation_view}</div>}
        </div>
      </div>
    </div>
    );
};

export default Shop;