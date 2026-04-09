import styles from "./image.module.scss";

const ImageStack = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="../public/assests/images/leaves.svg" alt="Image 1" className={styles.image} />
        <img src="../public/assests/images/accessibility-logo.png" alt="Image 2" className={styles.image} />
      </div>

      <div className={styles.footerText}>
        <p>© {new Date().getFullYear()} Good Earth Tea Store & WorldPantry.com LLC.</p>
        <p>All Rights Reserved.</p>
      </div>
    </>
  );
};

export default ImageStack;