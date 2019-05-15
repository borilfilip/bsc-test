import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {FormattedMessage} from "react-intl";

const editDetailForm = (props) => {
    return (
        <Form onSubmit={props.submit}>
            <Row>
                <Col>
                    <Form.Control type="text" name="note" value={props.value} onChange={props.change} />
                </Col>
                <Col xs="auto">
                    <Button type="submit" variant="primary"><FormattedMessage id="app.save" defaultMessage="Save" /></Button>
                </Col>
            </Row>
        </Form>
    );
};

export default editDetailForm;
