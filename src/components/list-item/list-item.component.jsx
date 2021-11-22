import React from "react";
import { useState } from "react";
import "./list-item.styles.scss";

const ListItem = ({ id, title, image, description, phone, email }) => {
  const [isModuleVisible, setIsModaleVisible] = useState(0);
  const openDetail = (id) => {
    //window.location = `lists/${id}`;
    console.log("TODO: detail pageruu oroh");
  };

  //TODO: edit button deer darahad modal neegdej, zariig zasah form garch irne.
  //remove button dr darahad zariig ustgana.
  return (
    <>
      <td>
        {/* title and content column */}
        <div className="content" className="row">
          {/* <a href="/abc"></a> */}
          <h1 className="title">{title}</h1>
          {description}
        </div>
      </td>

      {/* image column */}
      <td>
        <img src={image} width={100} className="row" />
      </td>
      <td>
        <ul>
          <li>{phone}</li>
          <li>{email}</li>
          <li>
            {" "}
            {isModuleVisible}
            <button onClick={() => setIsModaleVisible(isModuleVisible + 1)}>
              Засах
            </button>
            <button onClick={() => setIsModaleVisible(isModuleVisible - 1)}>
              Устгах
            </button>
          </li>
        </ul>
      </td>
    </>
  );
};

export default ListItem;
