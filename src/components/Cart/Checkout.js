import React from "react";
import styles from "./Cart.module.css";
import DemoNavbar from "components/Navbars/DemoNavbar";
import Font from "react-font";
import SimpleFooter from "components/Footers/SimpleFooter";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className={styles.navdiv}>
        <DemoNavbar background="#172b4d" />
      </div>
      <div className={styles.parent}>
        <div className={styles.heading}>
          <Font family="sans-serif">
            <h1>You're almost there! Complete your order</h1>
          </Font>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.checkoutcontainer}>
              <h1>Payment information</h1>
              {/* <div className={styles.methodicon}>Icons</div> */}
              <p className={styles.text1}>Name on card</p>
              <input type="text" className={styles.input1} />
              <p className={styles.text1}>Card number</p>
              <div className={styles.cardnumber}>
                <input type="text" className={styles.input2} />
                {/* <p>L</p> */}
              </div>
              <div className={styles.detailscard}>
                <div className={styles.expiration}>
                  <p className={styles.text1}>Expiration</p>
                  <input type="date" className={styles.input3} />
                </div>
                <div className={styles.cvv}>
                  <p className={styles.text1}>CVV</p>
                  <input type="text" className={styles.input3} />
                </div>
              </div>
              <div className={styles.confirmdiv}>
                <Link to="/cart-page" className={styles.back}>
                  Back
                </Link>
                <Link to="/" className={styles.confirmpayment}>
                  Confirm Payment
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <Font family="sans-serif">
              <h1>Order Summary</h1>
            </Font>
            <div className={styles.pricediv}>
              <p className={styles.text}>Single Web Hosting</p>
              <p className={styles.price}>&#8377;2,856</p>
            </div>
            <div className={styles.pricediv}>
              <p className={styles.text}>Premium Web Hosting</p>
              <p className={styles.price}>&#8377;3,576</p>
            </div>
            <div className={styles.pricediv}>
              <p className={styles.text}>Business Web Hosting</p>
              <p className={styles.price}>&#8377;5,656</p>
            </div>
            <div className={styles.coupon}>
              <p>
                Have a coupon Code? <span>Click here</span>
              </p>
            </div>
            <div className={styles.pricediv}>
              <p className={styles.text}>Taxes & Fees</p>
              <p className={styles.price}>&#8377;514</p>
            </div>
            <div className={styles.pricediv}>
              <p className={styles.text}>Total</p>
              <p className={styles.totalprice}>&#8377;12,602</p>
            </div>

            <div className={styles.checkout}>
              <h2>Checkout Now</h2>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </>
  );
};

export default Checkout;
