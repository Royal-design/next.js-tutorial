export default async function ProductDetail({
  params
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <div>Product Detail {productId}</div>;
}
