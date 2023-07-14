import { FC } from "react";
import { UserDictionary } from "../types/Users";

interface UserProps {
  users: UserDictionary;
}

// Modify the parameter passed
export const Users: FC<UserProps> = ({ users }) => {
  const usersMap = Object.entries(users).map(([id, user]) => (
    <div key={id}> {user.name} </div>
  ));
  return (
    <div>
      <div>{usersMap}</div>
    </div>
  );
};
