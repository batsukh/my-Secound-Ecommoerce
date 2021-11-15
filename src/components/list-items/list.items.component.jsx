import React from "react";

import items from "../../redux/list/list.data";

import ListItem from "../list-item/list-item.component";

import "./list.items.styles.scss";

const ListItems = () => (
  <ul className="list-items">
    {items.map(({ id, title, image }) => (
      <li>
        <ListItem key={id} id={id} title={title} image={image} />
      </li>
    ))}
  </ul>
);

export default ListItems;
