import { CiSearch } from "react-icons/ci";
import {  IoChevronForward } from "react-icons/io5";
import styles from "./navbar.module.scss";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.div}>
        <p>shop teas <IoChevronForward /></p>
        <p>best sellers</p>
      </div>
      <img
        src="../public/assests/images/logo.svg"
        alt="logo"
        className={styles.img}
      />
      
      <div className={styles.div}>
        <p>sign up</p>
        <CiSearch size={30} className={styles.icon}/>
        <PiShoppingCartLight size={30} className={styles.icon}/>
      </div>
    </div>
  );
};

export default Navbar;
