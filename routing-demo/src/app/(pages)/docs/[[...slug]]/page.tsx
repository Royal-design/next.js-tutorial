export default async function Docs({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  if (slug?.length === 2)
    return (
      <div>
        Docs for feature {slug[0]} and concept {slug[1]}
      </div>
    );
  return <div className="">Docs page</div>;
}
