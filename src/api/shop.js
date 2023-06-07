import axios from "axios";

//모든 상품 조회
const getProducts = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/products`
  );
  return response.data;
};

//선택 상품 조회
const getProduct = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/products/${id}`
  );
  return response.data;
};

export { getProducts, getProduct };
