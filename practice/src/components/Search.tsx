import Form from "next/form";

import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <Form action="/blog" className="flex items-center gap-4">
      <Input
        name="query"
        type="text"
        placeholder="Search"
        defaultValue={query}
      />
      <Button>Search</Button>
    </Form>
  );
};
