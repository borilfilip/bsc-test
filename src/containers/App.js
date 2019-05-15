import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import axios from "axios";
import List from "../components/List/List";
import Detail from "./Detail/Detail";
import New from "./New/New";
import {IntlProvider} from "react-intl";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";

class App extends Component {
    state = {
        lang: this.props.language,
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

    languageChangeHandler = (value, event) => {
        this.setState({lang: value});
    };

    render() {
        const language = this.state.lang;
        const messages = this.props.messages[language];

        return (
            <HashRouter>
                <IntlProvider locale={language} messages={messages}>
                    <Container>
                        <LanguageSwitcher value={language} change={this.languageChangeHandler}/>
                        <Route exact path="/" component={() => <List notes={this.state.notes}/>}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route path="/new" component={New}/>
                    </Container>
                </IntlProvider>
            </HashRouter>
        );
    }
}

export default App;
