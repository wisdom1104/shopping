import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addCart, getProduct } from "../api/shop";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { Column, Row } from "../components/Flex";
import {
  BackBtn,
  CartBtn,
  Category,
  Contain,
  Content,
  Description,
  Img,
  PageTitle,
  Price,
  Title,
} from "../styles/styles";

function Detail() {
  const navi = useNavigate();
  const { id } = useParams();
  const { data } = useQuery("product", () => getProduct(id));
  const queryClient = useQueryClient();

  const mutation = useMutation(addCart, {
    onSuccess: () => {
      queryClient.invalidateQueries("carts");
    },
  });

  const OnClickCartBtn = () => {
    mutation.mutate(id);
    alert("상품이 장바구니에 담겼습니다.");
  };

  const OnClickBackBtn = () => {
    navi("/");
  };

  return (
    <>
      <Column maxWidth="1200px" minWidth="800px" height="97vh" margin="auto">
        <PageTitle>
          <BackBtn onClick={OnClickBackBtn}>
            <IoArrowBack />
          </BackBtn>
          <h1>상품 상세정보</h1>
        </PageTitle>
        <Row width="90%" margin="auto">
          <Img alt="productImg" src={data?.image} />
          <Contain>
            <Category>{data?.category}</Category>
            <Title bottom="30px" fontSize="20px" fontWeight="700" line="30px">
              {data?.title}
            </Title>
            <Price>$ {data?.price}</Price>
            <CartBtn onClick={OnClickCartBtn}>
              <AiOutlineShoppingCart
                style={{ fontSize: "70px", cursor: "pointer" }}
              />
            </CartBtn>
          </Contain>
        </Row>
        <Content>
          <Title bottom="30px" fontSize="20px" fontWeight="700" line="30px">
            Description
          </Title>
          <Description>{data?.description}</Description>
        </Content>
      </Column>
    </>
  );
}

export default Detail;
