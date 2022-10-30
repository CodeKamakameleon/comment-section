import { Button } from "./Button";
import { Card } from "./Card";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { Profile } from "./Profile";
import { Timestamp } from "./Timestamp";

import { Reaction } from "./Reaction";
import { CurrentUserBadge } from "./CurrentUserBadge";
import { Actions } from "./Actions";
import { useState } from "react";
import { CommentForm } from "./CommentForm";

export const Comments = ({ comment }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (evt) => {
    evt.preventDefault();
    setIsEditing(false);
  };
  return (
    <>
      <Card className="md:pl-32">
        <CardHeader>
          <Profile img={comment.user.image.png} name={comment.user.username} />
          <CurrentUserBadge user={comment.user} />
          <Timestamp>{comment.createdAt}</Timestamp>
        </CardHeader>
        {comment.replyingTo && !isEditing && (
          <span className="text-moderateBlue font-medium">
            @{comment.replyingTo}{" "}
          </span>
        )}
        {isEditing ? (
          <form className="flex flex-col items-end gap-4" onSubmit={handleEdit}>
            <textarea
              rows={4}
              className="border border-solid border-gray-200 rounded w-full px-4 py-2"
              defaultValue={comment.content}
            />
            <Button variant="primary">Update</Button>
          </form>
        ) : (
          comment.content
        )}

        <CardFooter>
          <Reaction score={comment.score} />
          <Actions
            commentId={comment.id}
            user={comment.user}
            editClick={() => setIsEditing(true)}
            replyClick={() => setIsReplying(true)}
          />
        </CardFooter>
      </Card>

      {isReplying && <CommentForm action="Reply" />}
    </>
  );
};
