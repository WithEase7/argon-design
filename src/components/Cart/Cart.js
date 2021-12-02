import React from "react";
import styles from "./Cart.module.css";
import DemoNavbar from "components/Navbars/DemoNavbar";
import Font from "react-font";
import SimpleFooter from "components/Footers/SimpleFooter";
import { Link } from 'react-router-dom'

const MiniCard = ({ duration, price }) => {
  return (
    <>
      <div className={styles.minicard}>
        <div className={styles.cardcontainer}>
          <p className={styles.duration}>{duration}</p>
          <p className={styles.pricetext}>&#8377;{price}</p>
          <p className={styles.month}>/month</p>
        </div>
      </div>
    </>
  );
};

const Service = ({service}) => {
  return (
    <>
      <div className={styles.servicecontainer}>
        <div className={styles.servicename}>
          <p>{service}</p>
        </div>

        <div className={styles.pricedetails}>
          <MiniCard duration="1 Month" price={349} />
          <MiniCard duration="12 Month" price={139} />
          <MiniCard duration="24 Month" price={119} />
          <MiniCard duration="48 Month" price={79} />
        </div>
      </div>
    </>
  );
};

const Cart = () => {
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
            <Service service="SINGLE WEB HOSTING"/>
            <Service service="PREMIUM WEB HOSTING"/>
            <Service service="BUSINESS WEB HOSTING"/>
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
              <Link to="/cart-page/checkout"><h2>Checkout Now</h2></Link>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </>
  );
};

export default Cart;
