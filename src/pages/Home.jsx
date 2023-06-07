import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../api/shop";
import Card from "../components/Card";

function Home() {
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
      <Card card={data} />
    </>
  );
}

export default Home;
