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

//상품 등록
const addProduct = async () => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/products`);
};

//장바구니 조회
const getCart = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/carts/5`
  );
  return response.data;
};

export { getProducts, getProduct, addProduct, getCart };
