import { Fragment } from "react";
import { useGetCommentsQuery } from "../app/services/api";
import { Comments } from "./Comments";
export const CommentList = () => {
  const { data: comments } = useGetCommentsQuery();

  return comments?.length ? (
    comments.map((c) => (
      <Fragment key={c.id}>
        <Comments comment={c} />
        {c.replies.length > 0 && (
          <div
            className={`border-l-2 border-lightGray border-solid pl-5
          md:pl-10 md:ml-10 `}
          >
            {c.replies.map((r) => (
              <Comments key={r.id} comment={r} />
            ))}
          </div>
        )}
      </Fragment>
    ))
  ) : (
    <div>No comments</div>
  );
};
