import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../custom_hooks/useFetch";

const dataContext = createContext();

function DataProvider({ children }) {
  const [allList, setAllList, loading] = useFetch(
    "https://script.google.com/macros/s/AKfycbxIvo2MUBH_d0BOGWNXjM_0fmnTZHhHBHt3avMZD8ZzcKd9PLB1Cw4Sncg2oBPh08yA/exec"
  );

  return (
    <dataContext.Provider
      value={{
        allList,
        setAllList,
        loading,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(dataContext);
}

export default DataProvider;
