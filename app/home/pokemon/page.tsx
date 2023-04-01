import { redirect } from "next/navigation";

const page = async () => {
  redirect("/home/pokemon/1");
};

export default page;
