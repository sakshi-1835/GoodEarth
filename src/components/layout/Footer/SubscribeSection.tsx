import styles from "./SubscribeSection.module.scss";  
import Button from "../../comman/Button";

const SubscribeSection = () => {
  return (

    <div className={styles["subscribe-section"]}>
        <h2>SUBSCRIBE FOR 10% OFF YOUR NEXT ORDER</h2>
    
    <div className={styles["subscribe-form"]}>
      <input type="email" placeholder="Email" />
      <Button text="Subscribe" />
    </div>

    <p className={styles["text"]}>I understand that by clicking "Subscribe" and entering my email, I may receive company communications from Good Earth related to Good Earth products. Furthermore, I certify that I have reviewed and understand the requirements of  Good Earth's privacy notice, World Pantry's privacy notice and the Notice of Financial Incentive. The offer is only eligible for new subscribers.</p>
    </div>
  );
};

export default SubscribeSection;