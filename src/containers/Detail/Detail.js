import React, {Component} from 'react';
import './Detail.css';
import axios from "axios";
import {Redirect, withRouter} from "react-router";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Jumbotron from "react-bootstrap/Jumbotron";
import EditDetailForm from "../../components/EditNoteForm/EditDetailForm";
import {FormattedMessage} from "react-intl";

class Detail extends Component {
    state = {
        note: null,
        editing: false,
        deleting: false,
        saving: false,
        redirect: false
    };

    componentDidMount = () => {
        const id = this.props.match.params.id;
        axios.get('http://private-9aad-note10.apiary-mock.com/notes/' + id)
            .then(response => {
                this.setState({note: response.data});
            });
    };

    closeHandler = () => {
        this.setState({deleting: false});
    };

    showHandler = () => {
        this.setState({deleting: true});
    };

    deleteHandler = () => {
        if (!this.state.note) return;

        axios.delete('http://private-9aad-note10.apiary-mock.com/notes/' + this.state.note.id)
            .then(() => {
                this.setState({redirect: true});
            });

        this.setState({deleting: false});
    };

    editHandler = () => {
        this.setState({editing: true});
    };

    changeHandler = (event) => {
        const note = {
            ...this.state.note,
            title: event.target.value
        };
        this.setState({note: note});
    };

    saveHandler = (event) => {
        if (!this.state.note) return;

        axios.put('http://private-9aad-note10.apiary-mock.com/notes/' + this.state.note.id, this.state.note)
            .then(() => {
                this.setState({saving: false, editing: false});
            });

        this.setState({saving: true});
        event.preventDefault();
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>;
        }

        let note = <FormattedMessage id="app.loading" defaultMessage="Loading..." />;

        if (this.state.note) {
            note = this.state.note.title;

            if (this.state.editing) {
                note = <EditDetailForm
                    value={this.state.note.title}
                    change={this.changeHandler}
                    submit={this.saveHandler} />
            }

            if (this.state.saving) {
                note = <FormattedMessage id="app.saving" defaultMessage="Saving..." />;
            }
        }

        return (
            <div className="Detail">
                <Jumbotron>
                    {note}
                </Jumbotron>
                <div>
                    <Link to="/" className="btn btn-sm btn-secondary"><FormattedMessage id="app.back" defaultMessage="Back" /></Link>{' '}
                    <Button size="sm" onClick={this.editHandler}><FormattedMessage id="app.edit" defaultMessage="Edit" /></Button>{' '}
                    <Button size="sm" variant="danger" onClick={this.showHandler}><FormattedMessage id="app.delete" defaultMessage="Delete" /></Button>
                </div>

                <Modal show={this.state.deleting} onHide={this.closeHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title><FormattedMessage id="app.really_delete" defaultMessage="Really delete?" /></Modal.Title>
                    </Modal.Header>
                    <Modal.Body><FormattedMessage id="app.really_delete_note" defaultMessage="Do you really want to delete this note?" /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeHandler}>
                            <FormattedMessage id="app.cancel" defaultMessage="Cancel" />
                        </Button>
                        <Button variant="danger" onClick={this.deleteHandler}>
                            <FormattedMessage id="app.delete" defaultMessage="Delete" />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default withRouter(Detail);
