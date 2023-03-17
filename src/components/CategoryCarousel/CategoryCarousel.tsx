import clsx from "clsx";
import { CategoryCard } from "../cards/CategoryCard";
import { Category } from "./categories";

export interface CategoryCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  categories: Category[];
  size: number;
}

function getPosition(index: number, totalCount: number, radius: number) {
  const angle = (2 * index * Math.PI) / totalCount;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
}

export function CategoryCarousel({
  categories,
  size,
  className,
  ...props
}: CategoryCarouselProps) {
  return (
    <div {...props} className={clsx("relative", className)}>
      {categories.map((category, index) => {
        const pos = getPosition(index, categories.length, size / 2);
        return (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            label={category.label}
            className={clsx("absolute")}
            style={{
              left: pos.x + size / 2,
              top: pos.y + size / 2,
            }}
          />
        );
      })}
    </div>
  );
}
