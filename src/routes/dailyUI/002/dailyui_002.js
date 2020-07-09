import React from "react";
import cx from "classnames";
import { ThemeProvider } from "styled-components";
import { Defaults } from "../../../utils/globalStyles";
import useLoadFont from "../../../hooks/useLoadFont";
import styles from "./scss/index.module.scss";
import daily002Theme from "./styles/dailyUI002_theme";
import AWingStarfighter from "./assets/lego_model.png";
import StarWarsLogo from "./assets/star-wars-black.png";
import DHLlogo from "./assets/dhl-black-logo.png";

const DailyUI_002 = () => {
  useLoadFont(["Raleway:400,700"]);
  console.log("STYLES", styles);

  return (
    <ThemeProvider theme={daily002Theme}>
      <Defaults />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.card_payment}>
            <section className={styles.card_payment__payment_detail}>
              <h2>Payment Detail</h2>
              <div className={styles.card_payment__card_image}></div>
              <form className={styles.form} action='#' onSubmit={() => false}>
                <label className={styles.label} htmlFor='card-number'>
                  Card Number
                </label>
                <input
                  className={styles.input}
                  id='card-number'
                  name='card-number'
                  type='text'
                  placeholder='**** **** **** ****'
                />

                <div className={styles.form___inline}>
                  <input
                    className={styles.input}
                    id='card-exp-date'
                    placeholder='MM/YY'
                    name='card-exp-date'
                    type='text'
                  />

                  <input
                    className={styles.input}
                    id='card-cvv'
                    placeholder='CVV'
                    type='password'
                  />
                </div>
                <label className={styles.label} htmlFor='cardName'>
                  Cardholder Name
                </label>
                <input className={styles.input} name='cardName' type='text' />
                <div className={styles.form___inline}>
                  <button
                    className={cx(styles.button, styles.primary)}
                    type='submit'
                  >
                    Pay €199.99
                  </button>
                  <button className={cx(styles.button, styles.outline)}>
                    Back
                  </button>
                </div>
              </form>
            </section>
            <section className={styles.card_payment__product}>
              <div className={styles.product__image}>
                <img
                  alt='A-wing Starfighter'
                  width='100%'
                  src={AWingStarfighter}
                />
              </div>
              <div className={styles.product__description}>
                <h2>A-wing Starfighter™</h2>
                <div className={styles.product_description__brand_img}>
                  <img alt='Star Wars Logo' src={StarWarsLogo} />
                </div>
                <h2 className={styles.price}>€199.99</h2>
                <span className={styles.text___muted}>
                  <i className='fas fa-shipping-fast'></i>
                  free shipping
                </span>
              </div>
              <div className={styles.product__receiver}>
                <p className={styles.header}>Receiver name</p>
                Ole Kirk Christiansen
              </div>
              <div className={styles.product__contact}>
                <p className={styles.header}>Contact</p>
                +45 01 22 33 44 ole@kirk.com
              </div>
              <div className={styles.product__shipping}>
                <p className={styles.header}>Delivery Address</p>
                Højmarksvej
                <br />
                8DK-7190 <br />
                Billund Denmark
                <br />
                <a href='#'>4433224477PG</a>
                <div className={styles.product__shipping_logo}>
                  <img alt='dhl' width='100%' src={DHLlogo} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DailyUI_002;
