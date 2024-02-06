import users from "../database/users.json";
import fsPromises from "fs/promises";

export const GET = async (req) =>
  new Response(JSON.stringify(users), { status: 200 });
export const POST = async (req) => {
  const data = await req.json();
  console.log(data);
  fsPromises.writeFile(
    "app/api/database/users.json",
    JSON.stringify([...users, data])
  );
  return new Response(`User added ${JSON.stringify(data)}`, { status: 201 });
};
