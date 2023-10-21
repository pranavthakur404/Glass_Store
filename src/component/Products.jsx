import React, { useState } from "react";
import ProductsList from "./ProductsList";
import styles from "../component_css/Products.module.css";
import { useDataContext } from "../contexts/DataProvider";

function Products({ data }) {
  const { allList, setAllList, loading } = useDataContext();

  function UpDateStatus(id) {
    setAllList(() => {
      return allList.map((li) => {
        return id == li.id ? { ...li, liked: !li.liked } : { ...li };
      });
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.products}>
      {allList &&
        allList.map((li) => {
          return (
            <ProductsList {...li} key={li.id} UpDateStatus={UpDateStatus} />
          );
        })}
    </div>
  );
}

export default Products;
