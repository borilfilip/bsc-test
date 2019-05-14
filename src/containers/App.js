import React, {Component} from 'react';
import { Route, HashRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import axios from "axios";
import List from "../components/List/List";
import Detail from "./Detail/Detail";
import New from "./New/New";

class App extends Component {
    state = {
        notes: []
    };

    componentDidMount() {
        axios.get('http://private-9aad-note10.apiary-mock.com/notes')
            .then(response => {
                const notes = response.data.map(item => {
                    return {
                        ...item
                    }
                });
                this.setState({notes: notes});
            });
    }

    render() {
        return (
            <HashRouter>
                <Container>
                    <Route exact path="/" component={() => <List notes={this.state.notes} />} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/new" component={New} />
                </Container>
            </HashRouter>
        );
    }
}

export default App;
