import { useGetUserQuery } from "../app/services/api";
import { Button } from "./Button";
import { Card } from "./Card";

export const CommentForm = ({ action = "Send" }) => {
  const { data: currentUser } = useGetUserQuery();
  return (
    <Card>
      <div className="flex items-start gap-5">
        <img
          className="max-h-10 max-w-10"
          src={currentUser?.image.png}
          alt={currentUser?.username}
        />
        <textarea
          rows={4}
          className="flex-grow border border-solid border-gray-200 rounded px-4 py-2"
          placeholder="Add a comment..."
        />
        <Button variant="primary">{action}</Button>
      </div>
    </Card>
  );
};
