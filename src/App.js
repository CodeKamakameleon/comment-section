import { CommentList } from "./components/CommentList";
import { useGetUserQuery } from "./app/services/api";
import { CommentForm } from "./components/CommentForm";
import { Modal } from "./components/Modal";

export const App = () => {
  // console.log(data);
  const { data: currentUser } = useGetUserQuery();

  console.log(currentUser);
  return (
    <div className="px-5 py-10 max-w-3xl m-auto">
      <CommentList />
      <CommentForm />
      <Modal />
    </div>
  );
};
