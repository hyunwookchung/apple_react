import React, { useState } from "react";
import styled from "styled-components";

export default function App() {
  let [글제목, 글제목쓰기] = useState([
    "정현욱짱",
    "유준상",
    "송우영",
    "김남준",
  ]);
  let [like, setLike] = useState(0);
  let copy = [...글제목];
  copy = copy.sort();
  return (
    <ROOT>
      <BlackNav>
        <h4>블로그임</h4>
      </BlackNav>
      <span
        onClick={() => {
          글제목쓰기(copy);
        }}
      >
        글제목 수정
      </span>
      <List>
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            ❤️
          </span>

          {like}
        </h4>
        <p>11월 26일 발행</p>
      </List>
      <List>
        <h4>{글제목[1]}</h4>
        <p>11월 26일 발행</p>
      </List>
      <List>
        <h4>{글제목[2]}</h4>
        <p>11월 26일 발행</p>
      </List>
      <List>
        <h4>{글제목[3]}</h4>
        <p>11월 26일 발행</p>
      </List>
    </ROOT>
  );
}

const ROOT = styled.div`
  width: 100%;
  text-align: center;
`;

const BlackNav = styled.div`
  display: flex;
  color: white;
  background-color: black;
  padding-left: 20px;
`;

const List = styled.div`
  border-bottom: gray 1px solid;
  padding-left: 20px;
  text-align: left;
`;
