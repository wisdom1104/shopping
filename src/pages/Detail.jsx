import React from "react";
import { useQuery } from "react-query";
import { getProduct } from "../api/shop";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
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
      <Clounm>
        <Row>
          <div>
            <BackBtn onClick={OnClickBackBtn}>
              <IoArrowBack />
            </BackBtn>
            <Img alt="productImg" src={data?.image} />
          </div>
          <Contain>
            <Category>{data?.category}</Category>
            <Title>{data?.title}</Title>
            <Price>$ {data?.price}</Price>
            <CartBtn onClick={OnClickCartBtn}>
              <AiOutlineShoppingCart
                style={{ fontSize: "70px", cursor: "pointer" }}
              />
            </CartBtn>
          </Contain>
        </Row>
        <Content>
          <Title>Description</Title>
          <Description>{data?.description}</Description>
        </Content>
      </Clounm>
    </>
  );
}

export default Detail;

const Description = styled.div`
  margin-top: 20px;
  font-size: 15px;
  line-height: 30px;
`;
const Category = styled.div`
  margin: 40px 0 10px 0;
  color: gray;
  font-size: 15px;
`;
const Price = styled.div`
  font-size: 20px;
  margin-top: 30px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 400px;
  margin: auto;
  margin-top: 20px;
  padding: 30px 20px;
  border-top: 1px solid lightgray;
`;

const BackBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 50px;
  cursor: pointer;
  &:hover {
    color: steelblue;
  }
`;

const CartBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 20px;
  left: 37%;
  &:hover {
    color: steelblue;
  }
`;

const Contain = styled.div`
  width: 50%;
  position: relative;
  padding: 20px;
`;

const Clounm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 800px;
  height: 97vh;
  margin: auto;
`;
const Row = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
`;
const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
  margin-top: 0px;
`;
