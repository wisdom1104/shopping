import styled from "styled-components";

export const BackBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 50px;
  cursor: pointer;
  &:hover {
    color: steelblue;
  }
`;

export const Price = styled.div`
  color: gray;
  font-size: 15px;
  margin: 5px 0;
  min-width: 50px;
`;

export const Title = styled.div`
  display: block;
  width: 100%;
  white-space: ${(props) => props.white || ""};
  overflow: ${(props) => props.overflow || ""};
  text-overflow: ${(props) => props.text || ""};
  margin-bottom: ${(props) => props.bottom || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  line-height: ${(props) => props.line || ""};
`;

export const Description = styled.div`
  margin-top: 20px;
  font-size: 15px;
  line-height: 30px;
`;
export const Category = styled.div`
  margin: 40px 0 10px 0;
  color: gray;
  font-size: 15px;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 400px;
  margin: auto;
`;

export const CartBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 20px;
  left: 37%;
  &:hover {
    color: steelblue;
  }
`;

export const Contain = styled.div`
  width: 50%;
  position: relative;
`;

export const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
  margin-top: 0px;
`;

export const PageTitle = styled.div`
  display: flex;
  margin-left: 60px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 250px;
  font-size: 20px;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
`;

export const SubmitBtn = styled.button`
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 700;
  margin: 30px 80px;
  cursor: pointer;
  &:hover {
    color: steelblue;
    border: 2px solid steelblue;
  }
`;
