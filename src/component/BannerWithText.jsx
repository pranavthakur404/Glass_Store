import React from "react";
import styles from "../component_css/BannerWithText.module.css";
import SampleImg from "../assets/sampleGlassImg.jpeg";

function BannerWithText() {
  return (
    <div className={styles.BannerWithText}>
      <img src={SampleImg} alt="Sample Image" />
      <p>
        "Step into a world of timeless elegance with our exquisite glass jewelry
        collection. Each piece is a testament to craftsmanship and artistry,
        handcrafted with unwavering passion. Our glass jewelry captures the play
        of light, creating shimmering memories and reflecting your unique style.
        Whether it's a statement piece or an everyday adornment, our collection
        is designed to elevate your style and celebrate your individuality.
        Embrace the enchantment of glass, discover the allure of elegance, and
        experience the radiance that resides within you."
      </p>
    </div>
  );
}

export default BannerWithText;
