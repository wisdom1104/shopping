import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Card({ card }) {
  const navi = useNavigate();

  const OnClickCartBtn = () => {
    alert("cart");
  };

  const OnClickCard = (item) => {
    navi(`/detail/${item.id}`);
  };
  console.log("card", card);
  return (
    <>
      <div>
        {Array.isArray(card) && (
          <>
            {card?.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  OnClickCard(item);
                }}
              >
                <img alt="productImg" src={item.image} />
                <div>
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                  <button onClick={OnClickCartBtn}>
                    <AiOutlineShoppingCart
                      style={{ fontSize: "25px", cursor: "pointer" }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Card;
