import { useState } from 'react';
import { getIn } from 'formik';

import { RenderIf } from '../../utils';

import './formikComponent.css';

export const CustomInput = ({
  field,
  form: { touched, errors },
  mainClassName = 'form-group mt-4',
  inputClassName = 'modal-form-control',
  type = 'text',
  name = '',
  placeholder = 'Enter text',
  label = '',
  style = {},
  withOutLabel = false,
  showError = true,
  showEyeIcon = false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const touch = getIn(touched, field.name);
  const error = getIn(errors, field.name);

  return (
    <>
      <div className={`${mainClassName} ${showEyeIcon ? 'position-relative' : ''}`} style={style}>
        {!withOutLabel && (
          <label className="modal-form-label" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          className={`form-control ${inputClassName} ${
            showError && error && touch ? 'is-invalid' : ''
          }`}
          type={showPassword ? 'text' : type}
          name={name}
          placeholder={placeholder}
          {...field}
        />

        <RenderIf isTrue={showEyeIcon}>
          <i
            className={`cp fa-solid ${
              showPassword ? 'fa-eye' : 'fa-eye-slash'
            } position-absolute password-eye-icon`}
            onClick={() => setShowPassword(!showPassword)}
          />
        </RenderIf>
      </div>
      {showError && error && touch && <div className="invalid-feedback">{error}</div>}
    </>
  );
};
