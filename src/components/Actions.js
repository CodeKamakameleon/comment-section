import { useGetUserQuery } from "../app/services/api";
import { Button } from "./Button";
import { IconReply } from "./Icon/IconReply";
import { IconDelete } from "./Icon/IconDelete";
import { IconEdit } from "./Icon/IconEdit";
import { useDispatch } from "react-redux";
import { handleModalOpen } from "../features/modalSlice";

export const Actions = ({ replyClick, user, editClick, commentId }) => {
  const { data: currentUser } = useGetUserQuery();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(handleModalOpen(commentId));
  };
  return (
    <div className="flex md:absolute md:right-5 md:top-8">
      {user?.username === currentUser?.username ? (
        <>
          <Button variant="danger" onClick={handleDelete}>
            <IconDelete /> Delete
          </Button>
          <Button variant="secondary" onClick={editClick}>
            <IconEdit /> Edit
          </Button>
        </>
      ) : (
        <Button variant="secondary" onClick={replyClick}>
          <IconReply /> Reply
        </Button>
      )}
    </div>
  );
};
