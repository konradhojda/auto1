import { useState, useEffect } from "react";
import * as api from "../api";

export const useData = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await api.getData();
    setData(response);
  };

  useEffect(() => {
    void getData();
  }, []);

  return { data };
};
