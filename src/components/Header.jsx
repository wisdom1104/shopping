import React from "react";
import { useNavigate } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import styled from "styled-components";

function Header() {
  const navi = useNavigate();

  return (
    <StHeader>
      <StTitle
        onClick={() => {
          navi("/");
        }}
      >
        Create Shopping
      </StTitle>
      <div>
        <Btn
          onClick={() => {
            navi(`/create`);
          }}
        >
          <BiAddToQueue style={{ fontSize: "70px", cursor: "pointer" }} />
        </Btn>
        <Btn
          onClick={() => {
            navi(`/cart`);
          }}
        >
          <BsCart4 style={{ fontSize: "70px", cursor: "pointer" }} />
        </Btn>
      </div>
    </StHeader>
  );
}

export default Header;
const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100px;
  margin: auto;
  margin-bottom: 30px;
  border-bottom: 1px solid lightgray;
`;

const StTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  cursor: pointer;
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    color: steelblue;
  }
`;
