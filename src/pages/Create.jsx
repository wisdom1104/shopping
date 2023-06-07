import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addProduct } from "../api/shop";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Create() {
  const navi = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      setSelectedImage(event.target.result);
    };

    reader.readAsDataURL(file);
  }

  const mutation = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      description,
      selectedImage,
    };
    mutation.mutate(newProduct);
    setTitle("");
    setPrice("");
    setDescription("");
    setSelectedImage("");
    alert("상품 등록 완료");
  };
  const OnClickBackBtn = () => {
    navi("/");
  };
  return (
    <Clounm>
      <form onSubmit={onSubmit}>
        <Row>
          <Contain>
            <BackBtn onClick={OnClickBackBtn}>
              <IoArrowBack />
            </BackBtn>

            <h1>이미지 업로드</h1>

            <input type="file" accept="image/*" onChange={handleImageUpload} />

            <h2>미리보기</h2>
            {selectedImage ? (
              <div>
                <img
                  alt="업로드 이미지"
                  src={selectedImage}
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
                <Btn
                  onClick={() => {
                    setSelectedImage(null);
                  }}
                >
                  X
                </Btn>
              </div>
            ) : (
              <p>이미지를 선택해주세요.</p>
            )}
          </Contain>
          <Contain>
            <Content>
              <h2>상품 정보</h2>
              <Title>
                Title:
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Title>
              <Price>
                Price:
                <Input
                  type="text"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </Price>
              <Description>
                Description:
                <Textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Description>
              <SubmitBtn onSubmit={onSubmit}>업로드</SubmitBtn>
            </Content>
          </Contain>
        </Row>
      </form>
    </Clounm>
  );
}

export default Create;
const Textarea = styled.textarea`
  width: 100%;
  height: 250px;
  font-size: 20px;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
`;
const Description = styled.div`
  margin-top: 20px;
  font-size: 15px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
`;
const Price = styled.div`
  font-size: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 400px;
  margin: auto;
  margin-top: 20px;
  padding: 30px 20px;
  border-top: 1px solid lightgray;
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
const SubmitBtn = styled.button`
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 30px;
  margin: 30px 80px;
  cursor: pointer;
  &:hover {
    color: steelblue;
    border: 2px solid steelblue;
  }
`;
const Btn = styled.button`
  background-color: transparent;
  border: none;
  /* position: absolute;
  bottom: 20px;
  left: 37%; */
  &:hover {
    color: steelblue;
  }
`;

const Contain = styled.div`
  width: 50%;
  height: 800px;
  position: relative;
  padding: 20px;
  /* background-color: steelblue; */
`;

const Clounm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 800px;
  height: 97vh;
  margin: auto;
`;
const Row = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
`;
