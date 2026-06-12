
import Button from "../common/Button";
import ReviewCard from "./ReviewCard";


function ReviewList({ reviews: productReviews }) {


  return (
    <div>
      <h5 className="text-xl font-semibold mb-8">دیدگاه ها و امتیاز</h5>
      <div className="flex flex-col gap-4">
        {productReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
        <Button tailwindClasses=" text-primary-500 border-primary-500 self-center hover:bg-primary-500 hover:text-white">
          <span className="translate-y-0.75">مشاهده همه دیدگاه ها</span>
        </Button>
      </div>
    </div>
  );
}

export default ReviewList;
