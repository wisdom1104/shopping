import styled from "styled-components";

export const Price = styled.div`
  color: gray;
  font-size: 15px;
  margin: 5px 0;
  min-width: 50px;
`;

export const Title = styled.div`
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${(props) => props.bottom || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  line-height: ${(props) => props.line || ""};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || ""};
  justify-content: ${(props) => props.justify || ""};
  flex-wrap: ${(props) => props.wrap || ""};
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  gap: 20px;
  column-gap: 15px;
  box-sizing: border-box;
`;

export const StCard = styled.div`
  border: 1px solid lightgray;
  width: ${(props) => props.width || "97%"};
  height: ${(props) => props.height || "100px"};
  padding: 10px;
  display: flex;
  flex-direction: ${(props) => props.direction || ""};
  border-radius: ${(props) => props.borderRadius || ""};
  gap: 11px;
  position: relative;
`;

export const CardImg = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "220px"};
  border-radius: 10px;
  box-shadow: 5px 5px 5px lightgray;
`;

export const TextBox = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction || ""};
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    color: steelblue;
  }
`;

export const BackBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 50px;
  cursor: pointer;
  &:hover {
    color: steelblue;
  }
`;

export const PageTitle = styled.div`
  display: flex;
  margin-left: 60px;
`;
