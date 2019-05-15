import React from 'react';
import { Link } from "react-router-dom";
import './Item.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FormattedMessage} from "react-intl";

const item = (props) => {
    return (
        <Card className="Item">
            <Card.Body>
                <Row>
                    <Col>
                        {props.children}
                    </Col>
                    <Col xs="auto">
                        <Link to={"/detail/" + props.id}><FormattedMessage id="app.detail" defaultMessage="Detail" /></Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default item;
