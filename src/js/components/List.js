import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { locations: state.locations };
};
const ConnectedList = ({ locations }) => (
  <ul className="list-group list-group-flush">
    {locations.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;