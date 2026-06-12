export function getProductReviews(
  productId,
  reviews,
  count = 3
) {
  const startIndex = productId % reviews.length;

  return Array.from(
    { length: count },
    (_, index) =>
      reviews[
        (startIndex + index) %
          reviews.length
      ]
  );
}