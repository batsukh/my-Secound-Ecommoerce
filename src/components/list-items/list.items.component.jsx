import React from "react";

import items from "../../redux/list/list.data";

import ListItem from "../list-item/list-item.component";

import "./list.items.styles.scss";

const ListItems = () => (
  <table className="table">
    {items.map(({ id, title, image, description, phone, email }) => (
      <tr>
        <ListItem
          key={id}
          id={id}
          title={title}
          image={image}
          description={description}
          phone={phone}
          email={email}
        />
      </tr>
    ))}
  </table>
);

export default ListItems;
