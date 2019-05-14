import React, {Component} from 'react';
import './New.css';
import axios from "axios";
import {Redirect} from "react-router";
import Jumbotron from "react-bootstrap/Jumbotron";
import EditDetailForm from "../../components/EditNoteForm/EditDetailForm";
import {Link} from "react-router-dom";

class New extends Component {
    state = {
        note: {
            id: null,
            title: ""
        },
        saving: false,
        redirect: false
    };

    changeHandler = (event) => {
        const note = this.state.note;

        this.setState({
            note: {
                ...note,
                title: event.target.value
            }
        });
    };

    saveHandler = (event) => {
        if (!this.state.note) return;

        axios.post('http://private-9aad-note10.apiary-mock.com/notes', this.state.note.title)
            .then(() => {
                this.setState({saving: false, redirect: true});
            });

        this.setState({saving: true});
        event.preventDefault();
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>;
        }

        let note = <EditDetailForm
            value={this.state.note.title}
            change={this.changeHandler}
            submit={this.saveHandler}/>;

        if (this.state.saving) {
            note = "Ukládání...";
        }

        return (
            <div className="Detail">
                <Jumbotron>
                    {note}
                </Jumbotron>
                <div>
                    <Link to="/" className="btn btn-sm btn-secondary">Zpět</Link>
                </div>
            </div>
        );
    }
}

export default New;
