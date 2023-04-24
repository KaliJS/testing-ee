import Head from 'next/head';
import Comment from 'components/demo/comment';
import NewComment from 'components/demo/newComment';
import Login from 'components/demo/login';
import { useSelector } from 'react-redux';
import { selectComments } from 'store/comment';
import { selectAuthState } from 'store/auth';
import { RootState, AppDispatch } from 'store';

export default function Home() {
  // const comments = useSelector(selectComments);
  // const authState = useSelector(selectAuthState);
  const { value: comments } = useSelector((state: RootState) => state.comment);
  const { authState } = useSelector((state: RootState) => state.auth);
  console.log('comments', comments);

  return (
    <div>
      <Head>
        <title>demo</title>
        <meta name="description" content="comment" />
      </Head>

      <section className="py-5">
        {comments.map((obj, idx) => (
          <Comment key={idx} comment={obj.comment} username={obj.username} />
        ))}
      </section>
      {authState ? <NewComment /> : <Login />}
    </div>
  );
}
