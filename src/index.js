import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {addLocaleData} from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_cs from 'react-intl/locale-data/cs';
import messages_en from "./translations/en.json";
import messages_cs from "./translations/cs.json";

addLocaleData([...locale_en, ...locale_cs]);

const messages = {
    'cs': messages_cs,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(<App messages={messages} language={language} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
