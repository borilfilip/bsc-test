import React from 'react';
import Item from "./Item/Item";
import {Link} from "react-router-dom";

const list = (props) => {
    return (
        <>
            {props.notes.map(item => {
                return <Item key={item.id} id={item.id}>{item.title}</Item>
            })}
            <Link to="/new" className="btn btn-primary">Nový</Link>
        </>
    );
};

export default list;
