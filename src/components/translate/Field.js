import React, { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";


const Field = () => {

  const context = useContext(LanguageContext);

  const fieldName = context === 'english' ? 'Name': 'Naaam';

  return (
      <div className="ui field">
          <label>{fieldName} :</label>
          <input />
      </div>
  )
};

export default Field;
