export interface User {
  id: string;
  name: string;
  color: string;
}

export interface UserDictionary {
  [id: string]: User;
}
