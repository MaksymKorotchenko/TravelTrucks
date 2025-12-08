import { Camper } from "@/types/camper";
import css from "./CamperReviews.module.css";
import { Star } from "lucide-react";

interface CamperReviewsProps {
  camper: Camper | undefined;
}

export default function CamperReviews({ camper }: CamperReviewsProps) {
  return (
    <div>
      <section className={css.reviewWrapper}>
        {camper?.reviews.map((item, i) => {
          const letter = item.reviewer_name[0].toUpperCase();
          return (
            <div key={i}>
              <div className={css.ratingWrapper}>
                <div className={css.avatar}>
                  <span className={css.letter}>{letter}</span>
                </div>
                <div className="stars">
                  <h2 className={css.name}>{item.reviewer_name}</h2>
                  <div className="star-rating">
                    <div className="stars">
                      {Array.from({ length: 5 }, (_, id) => (
                        <Star
                          key={id}
                          fill={
                            item.reviewer_rating > id ? "#ffc531" : "#6c717b"
                          }
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className={css.review}>{item.comment}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
