import * as Yup from 'yup';

import { USERNAME_REQUIRED, PASSWORD_REQUIRED } from '../constants/validationMessages';

export const loginValidatior = Yup.object().shape({
  username: Yup.string().required(USERNAME_REQUIRED),
  password: Yup.string().required(PASSWORD_REQUIRED)
});
