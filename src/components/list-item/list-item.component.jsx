import React from "react";
import "./list-item.styles.scss";

const ListItem = ({ id, title, image }) => {
  const openDetail = (id) => {
    //window.location = `lists/${id}`;
    console.log("TODO: detail pageruu oroh");
  };

  return (
    <div className="" onClick={(id) => openDetail(id)}>
      <img src={image} width={100} className="row" />
      <div className="content" className="row">
        <h1 className="title">{title}</h1>
        <a href="/abc"></a>
      </div>
    </div>
  );
};

export default ListItem;
