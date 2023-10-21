import styles from "../component_css/ProductList.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductsList({ id, title, image, price, liked, UpDateStatus }) {
  function handleClick() {
    UpDateStatus(id);
  }
  return (
    <>
      <div className={styles.card}>
        <span className={styles.heart}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
        <img src={image} alt={title} />
        <div className={styles.metaData}>
          <h4>
            <Link to={`/products/${id}`}>{title}</Link>
          </h4>
          <p>₹ {price}</p>
          {liked ? (
            <button className={styles.removeBtn} onClick={handleClick}>Remove From Favorites </button>
          ) : (
            <button onClick={handleClick}>Add To Favorites </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
