import { useGetUserQuery } from "../app/services/api";

export const CurrentUserBadge = ({ user }) => {
  const { data: currentUser } = useGetUserQuery();

  console.log({ user, currentUser });
  return user?.username === currentUser?.username ? (
    <p className="bg-moderateBlue px-2 py-0 text-white text-sm">you</p>
  ) : null;
};
