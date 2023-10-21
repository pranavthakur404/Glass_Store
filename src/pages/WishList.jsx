import ProductsList from "../component/ProductsList";
import { useDataContext } from "../contexts/DataProvider";
import styles from "../pages_css/WishList.module.css";

function WishList() {
  const { allList, setAllList, loading } = useDataContext();
  let countLikedProduct = 0;
  allList.forEach((li) => {
    li.liked ? countLikedProduct++ : null;
  });

  function UpDateStatus(id) {
    setAllList(() => {
      return allList.map((li) => {
        return li.id == id ? { ...li, liked: !li.liked } : { ...li };
      });
    });
  }

  if (countLikedProduct == 0) {
    return (
      <div className={styles.wishListContainer}>
        <h1>No items are in your Favorites list....</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.wishListContainer}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.wishListContainer}>
      {allList.map((li) => {
        return li.liked ? (
          <ProductsList {...li} UpDateStatus={UpDateStatus} />
        ) : null;
      })}
    </div>
  );
}

export default WishList;
