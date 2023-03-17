import { AppBar } from "~/components/AppBar";
import { CategoryCarousel } from "~/components/CategoryCarousel";
import { CATEGORIES } from "~/components/CategoryCarousel/categories";
import { Divider } from "~/components/Divider";
import { UiTypography } from "~/ui-kit/Typography";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-auto overflow-x-hidden overflow-y-auto">
      <AppBar />
      <div className="home-page__overview-panel">
        <Divider className="mb-6 mt-20" />
        <UiTypography is="h1" variant="h1">
          Lorem ipsum, dolor sit amet consectetur
        </UiTypography>
        <div
          className="relative"
          style={{
            width: 600 + 184,
            height: 1200,
          }}
        >
          <img
            src="/illustrations/cherry.png"
            alt="cherry"
            className="home-page__main-image"
          />
          <CategoryCarousel categories={CATEGORIES} size={600} />
        </div>
      </div>
    </div>
  );
}
