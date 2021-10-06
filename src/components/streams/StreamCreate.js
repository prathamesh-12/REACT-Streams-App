import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createStream } from '../../store/actions'

const FIELDS = [
  {
    name: "title",
    label: "Title",
  },
  {
    name: "description",
    label: "Description",
  },
];

const StreamCreate = (props) =>  {

    const dispatch = useDispatch();

    const renderInput = ({ input, label, meta: {touched, error} }) => {
        // const { value, onChange } = formProps.input;
        //return <input value={value} onChange={onChange}/>;
        return (
          <div className="field">
            <label>{label}</label>
            <input {...input} />
            <p style={{color: 'red'}}>{touched && error}</p>
          </div>
        );
    };

    const onSubmit = (formValues) => {
        dispatch(createStream(formValues));
    }

    return (
      <form onSubmit={props.handleSubmit(onSubmit)}  className="ui form">
        <Field name="title" component={renderInput} label="Title" />
        <Field name="description" component={renderInput} label="Description" />
        <button className="ui button primary" type="submit">Submit</button>
      </form>
    );
}

const validate = (values) => {
    const errors = {};
    FIELDS.forEach(({ name }) => {
      if (!values[name]) {
          errors[name] = "Field is Required!";
      }
    });
    return errors;
}

export default reduxForm({
    validate,
    form: 'streamCreate'
})(StreamCreate);