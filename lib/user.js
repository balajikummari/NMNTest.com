// import crypto from 'crypto'

import { GetUsers, CreateUser } from "../graphql/api";

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

export async function createUser({ username = "", password = "" }) {
  const response = await GetUsers();
  let json = await response.json();
  if (json?.errors?.length > 0) {
    throw { message: "Database error" };
  } else {
    const matchedUser = json.data.users.data.filter(
      (user) => user.username === username && user.password === password
    );
    if (matchedUser.length > 0) {
      throw { message: "User Alredy Exisit" };
    }
  }

  const CreateResponse = await CreateUser(
    username,
    password,
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );

  return { username, createdAt: Date.now() };
}

export async function findUser({ username, password }) {
  const response = await GetUsers();
  let json = await response.json();
  if (json?.errors?.length > 0) {
    throw { message: "Database error" };
  } else {
    const matchedUser = json.data.users.data.filter(
      (user) => user.username === username && user.password === password
    );
    if (matchedUser.length === 0) {
      throw { message: "User Does Not Exist" };
    }
  }
  return { username, createdAt: Date.now() };
}
