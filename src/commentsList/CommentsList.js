import Comment from "../comment/Comment.js";

function CommentsList({ comments, videoId }) {
  console.log(comments);
  return (
    <div>
      {comments
        .filter((comment) => comment.videoId === videoId)
        .map((comment, id) => (
          <Comment key={id} {...comment} />
        ))}
    </div>
  );
}

export default CommentsList;
