import { notFound } from "next/navigation";

export default async function ProductDetailReview({
  params
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    return notFound();
  }
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}
