import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getCart, getProducts, removeCart } from "../api/shop";
import { IoArrowBack } from "react-icons/io5";
import styled from "styled-components";

function Cart() {
  const navi = useNavigate();
  const {
    isLoading: isCartLoading,
    isError: isCartError,
    data: cartData,
  } = useQuery("cart", getCart);
  const { data: productsData } = useQuery("products", getProducts);
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(removeCart, {
    onSuccess: () => {
      queryClient.invalidateQueries("carts");
    },
  });
  const onClickremoveBtn = (id) => {
    deleteMutation.mutate(id);
    alert("삭제 완료");
  };
  const OnClickBackBtn = () => {
    navi("/");
  };

  if (isCartLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isCartError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  return (
    <Column>
      <Row>
        <BackBtn onClick={OnClickBackBtn}>
          <IoArrowBack />
        </BackBtn>
        <h1>장바구니</h1>
      </Row>
      {cartData ? (
        <Box direction="column">
          {cartData?.products.map((product) => (
            <div key={product.productId}>
              {productsData?.map((item) => {
                if (item.id === product.productId) {
                  return (
                    <StCard key={item.id}>
                      <CardImg
                        width="100px"
                        height="100px"
                        alt="productImg"
                        src={item.image}
                      />
                      <TextBox>
                        <Title>{item.title}</Title>
                        <div>
                          <Price>수량: {product.quantity}</Price>
                          <Price>$ {item.price}</Price>
                        </div>
                      </TextBox>
                      <Btn
                        onClick={() => {
                          onClickremoveBtn(item.id);
                        }}
                      >
                        X
                      </Btn>
                    </StCard>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </Box>
      ) : (
        <p>장바구니가 비어 있습니다.</p>
      )}
    </Column>
  );
}

export default Cart;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 800px;
  height: 97vh;
  margin: 0 auto;
`;
export const Row = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
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

const Price = styled.div`
  color: gray;
  font-size: 15px;
  margin: 5px 0;
  min-width: 50px;
`;

const Title = styled.div`
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || ""};
  flex-wrap: wrap;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  gap: 20px;
  column-gap: 15px;
`;

const StCard = styled.div`
  border: 1px solid lightgray;
  width: 97%;
  height: 100px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  gap: 11px;
  position: relative;
`;

const CardImg = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "220px"};
  border-radius: 10px;
  box-shadow: 5px 5px 5px lightgray;
`;

const TextBox = styled.div`
  padding: 10px;

  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Btn = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    color: steelblue;
  }
`;
