import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addProduct } from "../api/shop";
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
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <button onClick={OnClickBackBtn}>
              <IoArrowBack />
            </button>

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
                <button
                  onClick={() => {
                    setSelectedImage(null);
                  }}
                >
                  X
                </button>
              </div>
            ) : (
              <p>이미지를 선택해주세요.</p>
            )}
          </div>
          <div>
            <div>
              <h2>상품 정보</h2>
              <div>
                Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div>
                Price:
                <input
                  type="text"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div>
                Description:
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <button onSubmit={onSubmit}>업로드</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
