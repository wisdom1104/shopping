import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getCart, getProducts } from "../api/shop";
import { IoArrowBack } from "react-icons/io5";

function Cart() {
  const navi = useNavigate();
  const {
    isLoading: isCartLoading,
    isError: isCartError,
    data: cartData,
  } = useQuery("cart", getCart);
  const { data: productsData } = useQuery("products", getProducts);
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
    <div>
      <div>
        <div>
          <button onClick={OnClickBackBtn}>
            <IoArrowBack />
          </button>
          <h1>장바구니</h1>
        </div>
        {cartData ? (
          <div>
            {cartData?.products.map((product) => (
              <div key={product.productId}>
                {productsData?.map((item) => {
                  if (item.id === product.productId) {
                    return (
                      <div key={item.id}>
                        <div alt="productImg" src={item.image} />
                        <div>
                          <div>{item.title}</div>
                          <div>
                            <div>수량: {product.quantity}</div>
                            <div>$ {item.price}</div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          </div>
        ) : (
          <p>장바구니가 비어 있습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
