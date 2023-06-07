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

//장바구니 추가
const addCart = async (id) => {
  await axios.put(`${process.env.REACT_APP_SERVER_URL}/carts/7`);
};

//장바구니 삭제
const removeCart = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/carts/6`);
};

export { getProducts, getProduct, addProduct, getCart, removeCart, addCart };
