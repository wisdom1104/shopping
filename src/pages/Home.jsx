import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../api/shop";
import Card from "../components/Card";

function Home() {
  const navi = useNavigate();
  const { isLoading, isError, data } = useQuery("product", getProducts);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  console.log(data);
  return (
    <>
      <button
        onClick={() => {
          navi(`/create`);
        }}
      >
        상품등록
      </button>
      <button
        onClick={() => {
          navi(`/cart`);
        }}
      >
        장바구니
      </button>
      <Card card={data} />
    </>
  );
}

export default Home;
