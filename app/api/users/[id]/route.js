import users from "../../database/users.json";
export const GET = async (req, { params }) => {
  const { id } = params;
  const user = users.find((user) => user.id === parseInt(id));
  return new Response(JSON.stringify(user), { status: 200 });
};
