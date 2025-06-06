import Link from "next/link";

interface ParamsType {
  params: Promise<{
    articleId: string;
  }>;
  searchParams: Promise<{
    lang?: "en" | "fr" | "es";
  }>;
}

export default async function ArticleDetails({
  params,
  searchParams
}: ParamsType) {
  const articleId = (await params).articleId;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div className="flex space-x-2">
        <Link
          className="rounded-md border border-amber-500 p-2"
          href={`/articles/${articleId}?lang=en`}
        >
          English
        </Link>
        <Link
          className="rounded-md border border-amber-500 p-2"
          href={`/articles/${articleId}?lang=es`}
        >
          Spanish
        </Link>
        <Link
          className="rounded-md border border-amber-500 p-2"
          href={`/articles/${articleId}?lang=fr`}
        >
          French
        </Link>
      </div>
    </div>
  );
}
