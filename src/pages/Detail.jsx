import React from "react";
import { useQuery } from "react-query";
import { getProduct } from "../api/shop";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";

function Detail() {
  const navi = useNavigate();
  const { id } = useParams();
  const { data } = useQuery("product", () => getProduct(id));

  const OnClickCartBtn = () => {
    alert("cart");
  };

  const OnClickBackBtn = () => {
    navi("/");
  };

  return (
    <>
      <div>
        <div>
          <div>
            <button onClick={OnClickBackBtn}>
              <IoArrowBack />
            </button>
            <img alt="productImg" src={data?.image} />
          </div>
          <div>
            <div>{data?.category}</div>
            <div>{data?.title}</div>
            <div>$ {data?.price}</div>
            <button onClick={OnClickCartBtn}>
              <AiOutlineShoppingCart
                style={{ fontSize: "70px", cursor: "pointer" }}
              />
            </button>
          </div>
        </div>
        <div>
          <div>Description</div>
          <div>{data?.description}</div>
        </div>
      </div>
    </>
  );
}

export default Detail;
