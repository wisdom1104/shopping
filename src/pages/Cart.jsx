import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getCart, getProducts, removeCart } from "../api/shop";
import { IoArrowBack } from "react-icons/io5";
import {
  BackBtn,
  Box,
  Btn,
  CardImg,
  PageTitle,
  Price,
  StCard,
  TextBox,
  Title,
} from "../styles/styles";
import { Column } from "../components/Flex";

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
      <PageTitle>
        <BackBtn onClick={OnClickBackBtn}>
          <IoArrowBack />
        </BackBtn>
        <h1>장바구니</h1>
      </PageTitle>
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
