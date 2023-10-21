import styles from "../pages_css/RootLayout.module.css";
import BannerWithText from "../component/BannerWithText";
import Products from "../component/Products";

function Home() {
  return (
    <div>
      <BannerWithText />
      <span className={styles.BorderLine}></span>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default Home;
