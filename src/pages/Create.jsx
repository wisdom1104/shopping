import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addProduct } from "../api/shop";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  BackBtn,
  Btn,
  Contain,
  Content,
  Input,
  PageTitle,
  SubmitBtn,
  Textarea,
} from "../styles/styles";
import { Column, Row } from "../components/Flex";

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
    <Column maxWidth="1200px" minWidth="800px" height="97vh" margin="auto">
      <PageTitle>
        <BackBtn onClick={OnClickBackBtn}>
          <IoArrowBack />
        </BackBtn>
        <h1>상품 등록</h1>
      </PageTitle>
      <form onSubmit={onSubmit}>
        <Row width="90%" margin="auto">
          <Contain>
            <h2>이미지 업로드</h2>

            <input type="file" accept="image/*" onChange={handleImageUpload} />

            <h3>미리보기</h3>
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
              <div>
                Title:
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div>
                Price:
                <Input
                  type="text"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div>
                Description:
                <Textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <SubmitBtn onSubmit={onSubmit}>업로드</SubmitBtn>
            </Content>
          </Contain>
        </Row>
      </form>
    </Column>
  );
}

export default Create;
