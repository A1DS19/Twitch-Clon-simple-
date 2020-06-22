import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export class StreamForm extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched && 'error'}`;
    return (
      <div className={className}>
        <label>{label}</label>
        {this.renderError(meta)}
        <input {...input} autoComplete='off' />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field
          name='title'
          component={this.renderInput}
          label='Titulo de Stream'
        />
        <Field
          name='description'
          component={this.renderInput}
          label='Descripccion de Stream'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const { title, description } = formValues;
  const errors = {};

  if (!title) {
    errors.title = 'Porfavor ingrese un titulo';
  }

  if (!description) {
    errors.description = 'Porfavor ingrese una descripccion';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
