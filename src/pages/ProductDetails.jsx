import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import styles from "../pages_css/ProductDetails.module.css";
import Container from "../component/Container";
import { useDataContext } from "../contexts/DataProvider";

export async function loader(args) {
  const id = args.params.id;
  const res = await axios.get(
    `https://script.google.com/macros/s/AKfycbxM2loI_qBBWn_CF4V8NmSFv_Ha9rBb_KR6VSzT36ZDG-4bsOGITlcoHBAxhW-ZtqVX/exec?id=${id}`
  );
  const ProductData = res.data.data[0];
  return { ProductData: ProductData };
}
function ProductDetails() {
  const { ProductData } = useLoaderData();
  const { id, title, price, image, liked } = ProductData;
  const { allList, setAllList } = useDataContext();
  function handleClick() {
    console.log("working");
    setAllList(() => {
      return allList.map((li) => {
        return id == li.id ? { ...li, liked: !li.liked } : { ...li };
      });
    });
  }

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.thumbnail}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.Details}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.price}>₹ {price}</h3>
          <button onClick={handleClick} className={styles.AddToCartButton}>
            Add To Cart
          </button>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
