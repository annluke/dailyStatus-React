import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
      className="form-input"
      name={props.name}
      value={props.content}
      placeholder={props.placeholder}
      onChange={props.controlFunc} />
  </div>
);

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired
};

export default TextArea;
