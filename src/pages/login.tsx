import BlankLayout from 'core/layouts/blankLayout';
import { ReactNode } from 'react';

const login = () => {
  return <div>Login</div>;
};

login.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;
export default login;
