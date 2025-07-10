import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./action";
import { Button } from "@/components/ui/button";
import { CustomPublicMetadata } from "@/types/type";

export default async function AdminPage() {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;
  console.log(users);

  return (
    <div>
      <div className="mt-4">
        {users.map((user) => (
          <div
            className="flex justify-between items-center gap-4 space-y-4"
            key={user.id}
          >
            <div className="">
              <p>
                {
                  user.emailAddresses.find(
                    (email) => email.id === user.primaryEmailAddressId
                  )?.emailAddress
                }
              </p>
              <p>
                {(user.publicMetadata as CustomPublicMetadata)?.role ??
                  "No role"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="Moderator" />
                <Button size={"sm"} type="submit">
                  Make Moderator
                </Button>
              </form>
              <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <input type="hidden" name="role" value="Admin" />
                <Button size={"sm"} type="submit">
                  Make Admin
                </Button>
              </form>
              <form action={removeRole}>
                <input type="hidden" name="id" value={user.id} />
                <Button size={"sm"} type="submit">
                  Remove Role
                </Button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
