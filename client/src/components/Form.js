import React from 'react';

const Form = (props) => {
  const {
    cancel,
    errors,
    submit,
    submitButtonText,
    elements,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit(event);
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel(event);
  }

  return (
    <div>
      <ErrorsDisplay errors={errors} />
      <form onSubmit={handleSubmit}>
        {elements()}
        <div className="pad-bottom">
          <button className="button" type="submit">{submitButtonText}</button>
          <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

const ErrorsDisplay = ({ errors }) => {
  let errorsDisplay = null;

  if (errors) {
    if(errors.length){
      errorsDisplay = (
        <div className='validation--errors'>
          <h3 >Validation errors</h3>
            <ul>
              {errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
        </div>
      );
    }    
  }
    
  return errorsDisplay;
}

export default Form 
