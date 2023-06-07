import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Card({ card }) {
  const navi = useNavigate();

  const OnClickCard = (item) => {
    navi(`/detail/${item.id}`);
  };
  console.log("card", card);
  return (
    <>
      <CardBox>
        {Array.isArray(card) && (
          <>
            {card?.map((item) => (
              <StCard
                key={item.id}
                onClick={() => {
                  OnClickCard(item);
                }}
              >
                <CardImg alt="productImg" src={item.image} />
                <TextBox>
                  <Title>{item.title}</Title>
                  <Price>${item.price}</Price>
                </TextBox>
              </StCard>
            ))}
          </>
        )}
      </CardBox>
    </>
  );
}

export default Card;

const Price = styled.div`
  color: gray;
  font-size: 15px;
  margin: 5px 0;
`;

const Title = styled.div`
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  border: none;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  gap: 20px;
  column-gap: 15px;
`;

const StCard = styled.div`
  border: 1px solid lightgray;
  width: 194px;
  height: 320px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  gap: 11px;
  position: relative;
`;

const CardImg = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px lightgray;
`;

const TextBox = styled.div`
  width: 100%;
`;
