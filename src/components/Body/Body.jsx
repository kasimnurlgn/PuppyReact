import React from "react";
import styles from "./Body.module.css";
import banner from "../../assets/images/banner-puppies.jpg";
import puppy1 from "../../assets/images/puppy-1.jpg";
import puppy2 from "../../assets/images/puppy-2.jpg";
import puppy3 from "../../assets/images/puppy-3.jpg";
import puppy4 from "../../assets/images/puppy-4.jpg";
const Body = () => {
  return (
    <div>
      {/* <!-- hero sections starts  --> */}
      <div className={styles.hero}>
        <img src={banner} alt="" />
      </div>
      {/* <!-- hero section ends here  --> */}
      {/* <!-- the three puppies section starts  --> */}

      <section className={styles.threePuppies}>
        <div className={styles.puppy1}>
          <img src={puppy1} alt="" />
        </div>
        <div className={styles.puppyMissing}>
          <p>Puppy missing here!!</p>
        </div>
        <div className={styles.puppy2}>
          <img src={puppy2} alt="" />
        </div>
      </section>
      {/* <!-- the three puppies section ends here  --> */}
      {/* <!-- the two puppies section starts  --> */}
      <section className={styles.twoPuppies}>
        <h2>More puppies</h2>
        <div className={styles.morePuppies}>
          <div className={styles.puppy3}>
            <img src={puppy3} alt="" />
          </div>
          <div className={styles.puppy4}>
            <img src={puppy4} alt="" />
          </div>
        </div>
      </section>

      {/* <!-- the two puppies section ends here  --> */}
    </div>
  );
};

export default Body;
