import { IoChevronForward } from 'react-icons/io5';
import styles from './shop.module.scss';
const Shop = () => {
  return (
    <>
      <div className={styles.div}>
        <span className={styles.span1}>spring has sprung</span>
        <span className={styles.span2}>shop seasonal favorites <IoChevronForward /></span>
      </div>
    </>
  );
};

export default Shop;
