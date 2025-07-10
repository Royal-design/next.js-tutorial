import { Profile } from "@/components/dashboard/Profile";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashbiard() {
  const authObj = await auth();
  const currentUserObj = await currentUser();
  console.log("auth object", authObj);
  console.log("current user object", currentUserObj);

  return (
    <div>
      <p>welcome</p>
      <Profile />
    </div>
  );
}
