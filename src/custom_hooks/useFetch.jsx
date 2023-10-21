import React from "react";
import axios, { all } from "axios";
import { useState, useEffect } from "react";

function useFetch(url) {
  const [allList, setAllList] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchingData() {
    const res = await axios.get(
      "https://script.google.com/macros/s/AKfycbxIvo2MUBH_d0BOGWNXjM_0fmnTZHhHBHt3avMZD8ZzcKd9PLB1Cw4Sncg2oBPh08yA/exec"
    );
    const data = res.data.data;
    setAllList(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchingData();
  }, []);

  return [allList, setAllList, loading];
}

export default useFetch;
