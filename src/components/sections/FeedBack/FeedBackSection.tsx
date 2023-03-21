import { FeedBackCard } from "~/components/cards/FeedBackCard";
import { Divider } from "~/components/Divider";
import { UiTypography } from "~/ui-kit/Typography";

export interface FeedBackProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FeedBackSection(props: FeedBackProps) {
  return (
    <div
      {...props}
      className="flex flex-col flex-1 md:bg-gray-100 py-5 px-3.5 md:py-20 md:px-16"
    >
      <div className="flex flex-col items-center mb-12">
        <Divider className="mb-6" />
        <UiTypography is="h2" variant="h2" className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </UiTypography>
      </div>
      <FeedBackCard
        variant="primary"
        authorName="Jane Doe"
        comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi expedita, provident excepturi officia! Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?"
        avatarURL="/illustrations/woman.png"
        className="mb-9 mt-20 md:mt-0"
      />
      <div className="flex flex-col md:flex-row-reverse">
        <FeedBackCard
          authorName="Jane Doe"
          comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi  autem aliquid"
          avatarURL="/illustrations/woman.png"
          className="mr-8 mb-8 last:mr-0"
        />
        <FeedBackCard
          authorName="Jane Doe"
          comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi  autem aliquid"
          avatarURL="/illustrations/woman.png"
          className="mr-8 mb-8 last:mr-0"
          reverse
        />
      </div>
    </div>
  );
}
