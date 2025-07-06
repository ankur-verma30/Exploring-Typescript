import { User } from '../models/user';

let userList: User[] = [];

//To use these functions in other file we have to export them
export function createUser(name: string, age: number, gender: string) {
  const user1 = new User(name, age, gender);
  userList.push(user1);
  return user1;
}

export function getUser() {
  return userList; 
}
