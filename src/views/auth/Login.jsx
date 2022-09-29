import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { CustomInput } from '../../components';
import { PASSWORD_INCORRECT, USERNAME_INCORRECT } from '../../constants/errorConstants';
import { loginFail, loginSuccess, resetLoginErrorMsg } from '../../store/sagaActions';
import { RenderIf } from '../../utils';
import { loginValidatior } from '../../validations/login';

import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const { errorMsg } = useSelector((state) => state.auth);
  const initalLoginValues = {
    username: '',
    password: ''
  };

  const handleSubmit = (values) => {
    dispatch(resetLoginErrorMsg());
    // check for correct credentials
    if (values.username !== 'Test') dispatch(loginFail(USERNAME_INCORRECT));
    else if (values.password !== 'test1234') dispatch(loginFail(PASSWORD_INCORRECT));
    else dispatch(loginSuccess());
  };
  return (
    <div>
      <div className="auth-modal-content-container">
        <h2 className="auth-title">Welcome! Let&apos;s get started !</h2>
        <Formik
          initialValues={initalLoginValues}
          validationSchema={loginValidatior}
          onSubmit={(values) => handleSubmit(values)}>
          <Form>
            <Field
              type="text"
              placeholder="Username"
              name="username"
              component={CustomInput}
              withOutLabel
            />

            <Field
              type="password"
              placeholder="Password"
              name="password"
              component={CustomInput}
              showEyeIcon
              withOutLabel
            />

            <RenderIf isTrue={errorMsg}>
              <div className="invalid-feedback text-center mt-3">{errorMsg}</div>
            </RenderIf>
            <button type="submit" className="auth-btn mb-4 mt-4">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
