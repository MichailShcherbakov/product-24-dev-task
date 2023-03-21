import { CategoryCard } from "../cards/CategoryCard";
import { Category } from "./categories";

import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import "./CategorySlider.scss";

export interface CategorySliderProps extends SwiperProps {
  categories: Category[];
}

export function CategorySlider({ categories, ...props }: CategorySliderProps) {
  return (
    <Swiper
      {...props}
      pagination
      navigation
      modules={[Pagination, Navigation]}
      className="category-slider"
    >
      {categories.map(category => (
        <SwiperSlide
          key={category.id}
          className="flex items-center justify-center mb-14"
        >
          <CategoryCard icon={category.icon} label={category.label} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
