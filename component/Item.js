import React from "react";
import "./Item.css";

const Item = ({id,content,isDone,createdDate}) => {
  return (
    <div className="Item">
      <div>
        <input checked={isDone} type="checkbox" />
      </div>
      <div className="title">{content}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <div className="btn">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Item;
