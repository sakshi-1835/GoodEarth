import { CiSearch } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import styles from "./navbar.module.scss";
import { PiShoppingCartLight } from "react-icons/pi";
import { useState } from "react";
import Drawer from "./Drawer";

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.div}>
          <div
            className={styles.menuwrapper}
            onMouseEnter={() => setopen(true)}
            onMouseLeave={() => setopen(false)}
          >
            <p>
              shop teas <IoChevronForward />
            </p>
           
          </div>
          
          <p>best sellers</p>
        </div>
        <img
          src="../public/assests/images/logo.svg"
          alt="logo"
          className={styles.img}
        />

        <div className={styles.div}>
          <p>sign up</p>
          <CiSearch size={30} className={styles.icon} />
          <PiShoppingCartLight size={30} className={styles.icon} />
        </div>

      </div>
       {open && <Drawer />}
    </>
  );
};

export default Navbar;
