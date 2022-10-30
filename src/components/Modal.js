import { Button } from "./Button";
import { Card } from "./Card";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { handleModalClosed } from "../features/modalSlice";

export const Modal = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(handleModalClosed());
  };

  const handleDelete = () => {};
  return (
    <div
      className={clsx(
        `
   
    fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 justify-center items-center`,
        { flex: isOpen, hidden: !isOpen }
      )}
    >
      <Card className="max-w-sm md:p-5">
        <header className="text-darkBlue mb-3 font-medium text-lg md:text-xl">
          Delete Comment
        </header>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex justify-end gap-2">
          <Button onClick={handleCancel} variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="danger-inverse">
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};
