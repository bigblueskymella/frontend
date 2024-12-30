import React from "react";
import "./List.css";
import Item from "./Item";

const List = ({ todo }) => {
  return (
    <div className="List">
      <h3>😁 List 컴포넌트 🌴 기록한 내용 보기</h3>
      <div>
        {todo.map((item) => (
          <Item key={item.id} {...item}/>
        ))}
      </div>
      <Item />
    </div>
  );
};

export default List;

// 🟡변형메서드 map() 콘솔에 해보기
// let arr = [1,2,3,4]
// let newArr = arr.map((item)=>item*3)
// console.log(newArr)
// 결과 [3, 6, 9, 12]
