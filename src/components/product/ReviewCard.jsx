import LikeIcon from "../icons/LikeIcon";
import MoreIcon from "../icons/MoreIcon";
import ReplyIcon from "../icons/ReplyIcon";
import StarIcon from "../icons/StarIcon";

function ReviewCard({ review }) {
  const { user, avatar, rating, date, comment } = review;

  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-end gap-6 sm:border-b border-neutral-200 sm:basis-[85%] basis-[65%] mb-4 pb-5">
          <div className="w-14 h-14">
            <img
              src={avatar}
              alt={user}
              className="rounded-full cursor-pointer"
            />
          </div>
          <h6 className="text-base font-bold text-black">{user}</h6>
        </div>
        <div className="flex items-center gap-4 sm:basis-[15%] basis-[35%]">
          <p className="text-[12px] font-semibold text-[#737993]">{date}</p>
          <LikeIcon />
          <ReplyIcon />
          <MoreIcon />
        </div>
      </div>
      <div className="flex flex-col gap-4 mr-22 pb-4 sm:border-b border-neutral-200 border-t sm:border-t-0 pt-4 sm:pt-0">
        <div className="px-1 bg-neutral-100 rounded-lg w-11 h-7.25 flex items-center gap-1">
          <StarIcon />
          <p className="text-base font-medium text-[#737993]">{rating}</p>
        </div>
        <p className="text-sm font-semibold">{comment}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
