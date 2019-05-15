import React from 'react';
import './LanguageSwitcher.css'
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const languageSwitcher = (props) => {
    return (
        <div className="languageSwitcher">
            <ToggleButtonGroup
                type="radio"
                size="sm"
                name="language"
                defaultValue={props.value}
                onChange={props.change}
            >
                <ToggleButton value="cs" variant="secondary">CZ</ToggleButton>
                <ToggleButton value="en" variant="secondary">EN</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default languageSwitcher;
