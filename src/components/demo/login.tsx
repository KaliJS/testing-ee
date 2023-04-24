import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthState, setAuthUser } from 'store/auth';
import { Button } from '@mui/material';
import Input from 'core/components/formFields/input';

export default function Login() {
  const [name, setName] = useState<string>(''); // updated
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(setAuthState(true));
    dispatch(setAuthUser(name));
  }

  return (
    <>
      <div className="input-box">
        <Input
          name={'name'}
          type={`text`}
          placeholder={`Set username`}
          handleChange={(value) => {
            setName(value);
          }}
        />
      </div>
      <Button type={`submit`} onClick={handleLogin}>
        login
      </Button>
    </>
  );
}
