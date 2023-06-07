import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.maxWidth || ""};
  min-width: ${(props) => props.minWidth || ""};
  height: ${(props) => props.height || ""};
  margin: ${(props) => props.margin || ""};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width || ""};
  margin: ${(props) => props.margin || ""};
`;
