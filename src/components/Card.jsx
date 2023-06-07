import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, CardImg, Price, StCard, TextBox, Title } from "../styles/styles";

function Card({ card }) {
  const navi = useNavigate();

  const OnClickCard = (item) => {
    navi(`/detail/${item.id}`);
  };
  console.log("card", card);
  return (
    <>
      <Box wrap="wrap" justify="center">
        {Array.isArray(card) && (
          <>
            {card?.map((item) => (
              <StCard
                width="194px"
                height="320px"
                direction="column"
                borderRadius="10px"
                key={item.id}
                onClick={() => {
                  OnClickCard(item);
                }}
              >
                <CardImg alt="productImg" src={item.image} />
                <TextBox direction="column">
                  <Title white="nowrap" overflow="hidden" text="ellipsis">
                    {item.title}
                  </Title>
                  <Price>${item.price}</Price>
                </TextBox>
              </StCard>
            ))}
          </>
        )}
      </Box>
    </>
  );
}

export default Card;
