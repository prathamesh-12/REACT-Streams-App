import React, { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';

const Button = () => {

    const context = useContext(LanguageContext);

    const btnText = (context === 'english' ? 'Submit': 'Vorlaggen');
    return (
        <button className="ui button primary">{btnText}</button>
    )
}

export default Button;
