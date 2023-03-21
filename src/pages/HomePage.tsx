import { AppBar } from "~/components/AppBar";
import { CategoryCarousel } from "~/components/CategoryCarousel";
import { CATEGORIES } from "~/components/CategoryCarousel/categories";
import { CategorySlider } from "~/components/CategorySlider";
import { Divider } from "~/components/Divider";
import { BlitzListSection } from "~/components/sections/BlitzList";
import { FeedBackSection } from "~/components/sections/FeedBack";
import { UiTypography } from "~/ui-kit/Typography";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-auto overflow-x-hidden overflow-y-auto ">
      <AppBar />
      <div className="home-page__overview-panel flex flex-col items-center px-4 py-20 ">
        <Divider className="mb-6 hidden lg:block" />
        <img
          src="/illustrations/cherry.png"
          alt="cherry"
          className="w-54.5 h-29 block mb-6 lg:hidden"
        />
        <UiTypography is="h1" variant="h1" className="mb-13">
          Lorem ipsum, dolor sit amet consectetur
        </UiTypography>
        <div className="relative flex flex-shrink-0 w-196 h-196 hidden lg:block">
          <img
            src="/illustrations/cherry.png"
            alt="cherry"
            className="absolute w-109 h-57.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <CategoryCarousel categories={CATEGORIES} size={600} />
        </div>
        <div className="relative w-full h-auto block lg:hidden">
          <CategorySlider categories={CATEGORIES} />
        </div>
      </div>
      <div className="flex flex-col-reverse 2xl:flex-row">
        <FeedBackSection />
        <BlitzListSection />
      </div>
    </div>
  );
}
