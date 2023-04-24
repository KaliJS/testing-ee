export default function Comment({ comment, username }: any) {
  return (
    <div className="comment">
      <div className="font-bold">{username}</div>
      <div>{comment}</div>
    </div>
  );
}
