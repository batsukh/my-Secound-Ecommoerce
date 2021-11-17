import React from "react";
import "./list-item.styles.scss";

const ListItem = ({ id, title, image, description, phone, email }) => {
  const openDetail = (id) => {
    //window.location = `lists/${id}`;
    console.log("TODO: detail pageruu oroh");
  };

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
        </ul>
      </td>
    </>
  );
};

export default ListItem;
