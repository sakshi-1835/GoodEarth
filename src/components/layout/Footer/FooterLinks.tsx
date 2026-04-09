import styles from "./FooterLinks.module.scss";

const FooterLinks = () => {
  return (
    <div className={styles['footer-links']}>
      <div className={styles['footer-links__col']}>
        <h3>SHOP</h3>
        <ul>
          <li>Green Tea</li>
          <li>Black Tea</li>
          <li>Fruit Tea</li>
          <li>Herbal Tea</li>
          <li>Caffeine Free Tea</li>
          <li>Sweet and Spicy Blends</li>
        </ul>
      </div>

      <div className={styles['footer-links__col']}>
        <h3>ABOUT US</h3>
        <ul>
          <li>Our Story</li>
          <li>Our Values</li>
          <li>Tea 101</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className={styles['footer-links__col']}>
        <h3>HELP</h3>
        <ul>
          <li>Contact Us</li>
          <li>Refund Policy</li>
          <li>Shipping Info</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;