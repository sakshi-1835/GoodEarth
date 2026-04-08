import { FaCaretRight } from "react-icons/fa";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      FREE 1-3 Day Delivery Over $55
      <div className={styles.box}>
        | <span className={styles.p}>How fast will I receive my order?</span> <FaCaretRight />
      </div>
    </div>
  );
};

export default Banner;
