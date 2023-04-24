import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //updated
import { selectAuthUser, setAuthState } from 'store/auth'; // updated
import { addComment } from 'store/comment'; // updated

import { Button } from '@mui/material';
import Input from 'core/components/formFields/input';

export default function NewComment() {
  const [comment, setComment] = useState<string>(''); // updated
  const dispatch = useDispatch(); // updated
  const user = useSelector(selectAuthUser); // updated

  // Updated function
  function handleNewComment() {
    dispatch(
      addComment({
        comment: comment,
        username: user,
      })
    );
    setComment('');
  }

  return (
    <section>
      <div>
        <Input
          name={'comment'}
          type={`text`}
          placeholder={`${user}'s comment`}
          handleChange={(value) => {
            setComment(value);
          }}
        />
      </div>
      <Button variant={'contained'} onClick={handleNewComment}>
        send
      </Button>

      <div className="py-2">
        <Button onClick={() => dispatch(setAuthState(false))}>logout</Button>
      </div>
    </section>
  );
}
