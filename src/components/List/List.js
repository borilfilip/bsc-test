import React from 'react';
import Item from "./Item/Item";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

const list = (props) => {
    return (
        <>
            {props.notes.map(item => {
                return <Item key={item.id} id={item.id}>{item.title}</Item>
            })}
            <Link to="/new" className="btn btn-primary"><FormattedMessage id="app.new" defaultMessage="New" /></Link>
        </>
    );
};

export default list;
