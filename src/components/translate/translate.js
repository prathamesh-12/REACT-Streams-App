import React, { useState } from 'react';

import LanguageContext from '../../contexts/LanguageContext';
import UserCreate from './UserCreate';


const Translate = () => {

    const [language, setLanguage] = useState('english');


    const onLanguageChangeHandler = (lang) => {
        console.log(lang);
        setLanguage(lang);
    }

    return (
      <div>
        <h3>Select Language</h3>
        <i
          className="flag us"
          onClick={() => onLanguageChangeHandler("english")}
        />
        <i
          className="flag nl"
          onClick={() => onLanguageChangeHandler("dutch")}
        />
        <hr />
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
}

export default Translate;